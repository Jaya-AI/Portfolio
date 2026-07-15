import { useState, useEffect } from "react";
import { collection, query, orderBy, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase.js";

const ADMIN_PASSWORD = "your_admin_password_here"; // Change this!

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all"); // all, unread, read

  // Fetch messages from Firestore
  const fetchMessages = async () => {
    setLoading(true);
    try {
      const messagesRef = collection(db, "contact_messages");
      const q = query(messagesRef, orderBy("timestamp", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  // Login handler
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword("");
      fetchMessages();
    } else {
      alert("❌ Incorrect password");
      setPassword("");
    }
  };

  // Mark message as read/unread
  const toggleStatus = async (messageId, currentStatus) => {
    try {
      const msgRef = doc(db, "contact_messages", messageId);
      await updateDoc(msgRef, {
        status: currentStatus === "read" ? "unread" : "read",
      });
      setMessages(messages.map(msg =>
        msg.id === messageId
          ? { ...msg, status: currentStatus === "read" ? "unread" : "read" }
          : msg
      ));
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Delete message
  const deleteMessage = async (messageId) => {
    if (!window.confirm("Are you sure? This cannot be undone.")) return;
    try {
      await deleteDoc(doc(db, "contact_messages", messageId));
      setMessages(messages.filter(msg => msg.id !== messageId));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  // Filter messages
  const filteredMessages = messages.filter(msg => {
    if (filter === "unread") return msg.status === "unread";
    if (filter === "read") return msg.status === "read";
    return true;
  });

  // ============ LOGIN VIEW ============
  if (!isAuthenticated) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg,#020617,#1a1f35)",
        padding: "20px",
      }}>
        <div style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(6,182,212,0.3)",
          borderRadius: "20px",
          padding: "40px",
          width: "100%",
          maxWidth: "400px",
          backdropFilter: "blur(20px)",
        }}>
          <h1 style={{
            color: "#fff",
            fontSize: "24px",
            marginBottom: "10px",
            textAlign: "center",
          }}>Admin Dashboard</h1>
          <p style={{
            color: "#94a3b8",
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "14px",
          }}>View and manage contact messages</p>

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "12px 16px",
                borderRadius: "10px",
                border: "1px solid rgba(6,182,212,0.3)",
                background: "rgba(255,255,255,0.05)",
                color: "#fff",
                fontSize: "14px",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "12px",
                borderRadius: "10px",
                background: "linear-gradient(135deg,#06b6d4,#818cf8)",
                border: "none",
                color: "#fff",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ============ DASHBOARD VIEW ============
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#020617,#1a1f35)",
      color: "#fff",
      padding: "40px 20px",
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          flexWrap: "wrap",
          gap: "20px",
        }}>
          <div>
            <h1 style={{ margin: "0 0 8px 0", fontSize: "28px" }}>📬 Messages</h1>
            <p style={{ margin: 0, color: "#94a3b8", fontSize: "14px" }}>
              Total: {messages.length} | Unread: {messages.filter(m => m.status === "unread").length}
            </p>
          </div>
          <button
            onClick={() => { setIsAuthenticated(false); setMessages([]); }}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              background: "rgba(239,68,68,0.2)",
              border: "1px solid rgba(239,68,68,0.5)",
              color: "#fca5a5",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Logout
          </button>
        </div>

        {/* Filters */}
        <div style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}>
          {["all", "unread", "read"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid " + (filter === f ? "#06b6d4" : "#475569"),
                background: filter === f ? "rgba(6,182,212,0.2)" : "transparent",
                color: filter === f ? "#06b6d4" : "#cbd5e1",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "13px",
                textTransform: "capitalize",
              }}
            >
              {f === "all" ? "All Messages" : f === "unread" ? "Unread" : "Read"}
            </button>
          ))}
        </div>

        {/* Messages List */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "40px", color: "#94a3b8" }}>Loading messages...</div>
        ) : filteredMessages.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px", color: "#94a3b8" }}>
            {messages.length === 0 ? "No messages yet 📭" : "No messages in this filter"}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {filteredMessages.map(msg => (
              <div
                key={msg.id}
                style={{
                  background: msg.status === "unread" ? "rgba(6,182,212,0.1)" : "rgba(255,255,255,0.05)",
                  border: "1px solid " + (msg.status === "unread" ? "rgba(6,182,212,0.5)" : "#475569"),
                  borderRadius: "12px",
                  padding: "20px",
                  transition: "all 0.3s",
                  cursor: "pointer",
                }}
              >
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "12px",
                  flexWrap: "wrap",
                  gap: "10px",
                }}>
                  <div style={{ flex: 1, minWidth: "200px" }}>
                    <h3 style={{ margin: "0 0 4px 0", fontSize: "16px", fontWeight: "700" }}>
                      {msg.name}
                    </h3>
                    <p style={{ margin: 0, color: "#94a3b8", fontSize: "13px" }}>
                      {msg.email}
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{
                      padding: "4px 12px",
                      borderRadius: "6px",
                      background: msg.status === "unread" ? "rgba(6,182,212,0.3)" : "rgba(107,114,128,0.3)",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: msg.status === "unread" ? "#06b6d4" : "#9ca3af",
                      textTransform: "uppercase",
                    }}>
                      {msg.status}
                    </span>
                  </div>
                </div>

                <div style={{ marginBottom: "12px" }}>
                  <p style={{
                    margin: "0 0 8px 0",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#e2e8f0",
                  }}>
                    {msg.subject}
                  </p>
                  <p style={{
                    margin: 0,
                    color: "#cbd5e1",
                    lineHeight: "1.6",
                    fontSize: "14px",
                    whiteSpace: "pre-wrap",
                  }}>
                    {msg.message}
                  </p>
                </div>

                <div style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  paddingTop: "12px",
                  flexWrap: "wrap",
                }}>
                  <p style={{
                    margin: 0,
                    fontSize: "12px",
                    color: "#64748b",
                  }}>
                    {msg.timestamp ? new Date(msg.timestamp.toDate()).toLocaleString() : "Just now"}
                  </p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <button
                      onClick={() => toggleStatus(msg.id, msg.status)}
                      style={{
                        padding: "6px 12px",
                        borderRadius: "6px",
                        border: "1px solid #475569",
                        background: "transparent",
                        color: "#94a3b8",
                        cursor: "pointer",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      {msg.status === "unread" ? "✓ Mark Read" : "○ Mark Unread"}
                    </button>
                    <button
                      onClick={() => deleteMessage(msg.id)}
                      style={{
                        padding: "6px 12px",
                        borderRadius: "6px",
                        border: "1px solid rgba(239,68,68,0.5)",
                        background: "transparent",
                        color: "#fca5a5",
                        cursor: "pointer",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
