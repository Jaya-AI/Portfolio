import useInView from "../hooks/useInView.js";

export default function FadeIn({ children, delay = 0 }) {
  const [ref, inView] = useInView(0.05);

  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(28px)", transition: `all 0.65s ease ${delay}ms` }}>
      {children}
    </div>
  );
}
