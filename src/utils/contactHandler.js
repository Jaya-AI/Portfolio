import emailjs from "@emailjs/browser";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase.js";

// Initialize EmailJS (get your keys from https://dashboard.emailjs.com/)
// PUBLIC_KEY from EmailJS dashboard (set VITE_EMAILJS_PUBLIC_KEY in your .env)
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY";
emailjs.init(EMAILJS_PUBLIC_KEY);

// Email configuration (set these via Vite env: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID)
const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAIL_SERVICE_ID";
const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAIL_TEMPLATE_ID";

const missingEnv = [];
if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY.includes("YOUR_")) missingEnv.push("VITE_EMAILJS_PUBLIC_KEY");
if (!EMAIL_SERVICE_ID || EMAIL_SERVICE_ID.includes("YOUR_")) missingEnv.push("VITE_EMAILJS_SERVICE_ID");
if (!EMAIL_TEMPLATE_ID || EMAIL_TEMPLATE_ID.includes("YOUR_")) missingEnv.push("VITE_EMAILJS_TEMPLATE_ID");
if (missingEnv.length) {
  console.warn("Missing EmailJS env vars:", missingEnv.join(", "), "— email notifications will be skipped until configured.");
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateContactForm = (formData) => {
  const normalized = {
    name: (formData?.name || "").trim(),
    email: (formData?.email || "").trim(),
    subject: (formData?.subject || "").trim(),
    message: (formData?.message || "").trim(),
  };

  const errors = [];

  if (!normalized.name) errors.push("Please enter your name.");
  if (!normalized.email) errors.push("Please enter your email address.");
  else if (!EMAIL_REGEX.test(normalized.email)) errors.push("Please enter a valid email address.");
  if (!normalized.subject) errors.push("Please enter a subject.");
  if (!normalized.message) errors.push("Please enter a message.");

  return { isValid: errors.length === 0, errors, normalized };
};

/**
 * Save the message in Firestore first, then attempt to send an email.
 * If the email fails after Firestore succeeds, the form still counts as successful.
 */
export const handleContactSubmit = async (formData, recipientEmail) => {
  const { isValid, errors, normalized } = validateContactForm(formData);

  if (!isValid) {
    throw new Error(errors[0]);
  }

  try {
    const messagesRef = collection(db, "contact_messages");
    const docRef = await addDoc(messagesRef, {
      name: normalized.name,
      email: normalized.email,
      subject: normalized.subject,
      message: normalized.message,
      timestamp: serverTimestamp(),
      status: "unread",
      recipientEmail: recipientEmail || null,
      source: "portfolio_contact_form",
    });

    const emailData = {
      to_email: recipientEmail,
      from_name: normalized.name,
      from_email: normalized.email,
      subject: normalized.subject,
      message: normalized.message,
    };

    if (EMAIL_SERVICE_ID.includes("YOUR_") || EMAIL_TEMPLATE_ID.includes("YOUR_")) {
      return {
        success: true,
        warning: true,
        message: "Your message was saved successfully, but the email notification could not be sent because EmailJS is not configured yet.",
        docId: docRef.id,
      };
    }

    try {
      await emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, emailData);
      return {
        success: true,
        message: "Your message was sent successfully.",
        docId: docRef.id,
      };
    } catch (emailError) {
      console.error("EmailJS failed after Firestore save:", emailError);
      return {
        success: true,
        warning: true,
        message: "Your message has been saved successfully, but the email notification could not be sent.",
        docId: docRef.id,
      };
    }
  } catch (error) {
    console.error("Contact form error:", error);
    throw new Error(error?.message || "We could not save your message right now. Please try again.");
  }
};
