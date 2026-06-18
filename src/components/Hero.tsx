"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { number: "5", label: "Colleges" },
  { number: "12+", label: "Courses" },
  { number: "5000+", label: "Students" },
  { number: "25+", label: "Years Legacy" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return (
      <section style={{
        minHeight: "100vh",
        background: "#0A192F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#FAF9F6"
      }}>
        Loading hero section...
      </section>
    );
  }

  return (
    <section id="home" style={{
      minHeight: "100vh",
      background: `
        linear-gradient(135deg, rgba(10, 25, 47, 0.96) 0%, rgba(15, 42, 74, 0.9) 50%, rgba(10, 25, 47, 0.97) 100%),
        url('/website_images/college_outside_photo3.jpeg') center/cover no-repeat
      `,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "160px 24px 80px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative circles */}
      <div style={{
        position: "absolute", top: "10%", left: "5%",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "rgba(212,175,55,0.03)", border: "1px solid rgba(212,175,55,0.06)",
        pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "5%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "rgba(212,175,55,0.02)", border: "1px solid rgba(212,175,55,0.04)",
        pointerEvents: "none"
      }} />

      {/* Badge container with Motion */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.25)",
          borderRadius: "25px", padding: "8px 20px", marginBottom: "32px",
        }}
      >
        <span style={{ color: "#D4AF37", fontSize: "12px" }}>★</span>
        <span style={{ color: "#F2D06B", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: "700" }}>
          Est. in Modinagar, Ghaziabad
        </span>
      </motion.div>

      {/* Main Heading with Motion */}
      <motion.h1 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "clamp(36px, 6.5vw, 76px)",
          color: "#FAF9F6", fontWeight: "800",
          lineHeight: 1.1, marginBottom: "18px",
          maxWidth: "900px", letterSpacing: "-0.03em"
        }}
      >
        Jagannath Group
        <span style={{ display: "block", color: "#D4AF37" }}>of Institutions</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(15px, 2.2vw, 20px)", color: "#7E93A8",
          maxWidth: "650px", lineHeight: 1.8, marginBottom: "48px",
        }}
      >
        Nurturing Excellence, Shaping Futures — A premier educational group offering 
        world-class professional education across 5 institutions in Modinagar, UP.
      </motion.p>

      {/* CTA Buttons with Motion */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center",
          marginBottom: "80px",
        }}
      >
        <a href="#colleges" style={{
          background: "linear-gradient(135deg, #D4AF37, #F2D06B)",
          color: "#0A192F", padding: "16px 36px", borderRadius: "50px",
          textDecoration: "none", fontSize: "14px", fontWeight: "700",
          boxShadow: "0 8px 30px rgba(212,175,55,0.3)",
          transition: "all 0.3s ease", letterSpacing: "0.5px", textTransform: "uppercase"
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 15px 40px rgba(212,175,55,0.45)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(212,175,55,0.3)"; }}
        >Explore Colleges</a>
        
        <Link href="/admissions" style={{
          background: "transparent", border: "2px solid rgba(250,249,246,0.3)",
          color: "#FAF9F6", padding: "16px 36px", borderRadius: "50px",
          textDecoration: "none", fontSize: "14px", fontWeight: "700",
          transition: "all 0.3s ease", letterSpacing: "0.5px", textTransform: "uppercase"
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#D4AF37"; e.currentTarget.style.color = "#D4AF37"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(250,249,246,0.3)"; e.currentTarget.style.color = "#FAF9F6"; }}
        >Apply Online</Link>
      </motion.div>

      {/* Stats with Motion */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px",
          background: "rgba(212,175,55,0.15)", borderRadius: "16px",
          border: "1px solid rgba(212,175,55,0.2)", overflow: "hidden",
          maxWidth: "800px", width: "100%",
        }}
      >
        {stats.map((s, i) => (
          <div key={i} style={{
            padding: "24px 16px", textAlign: "center",
            borderRight: i < 3 ? "1px solid rgba(212,175,55,0.15)" : "none",
            background: "rgba(10,25,47,0.45)",
          }}>
            <div style={{ fontSize: "28px", fontWeight: "800", color: "#D4AF37", fontFamily: "'Outfit', sans-serif" }}>{s.number}</div>
            <div style={{ fontSize: "11px", color: "#7E93A8", textTransform: "uppercase", letterSpacing: "1px", marginTop: "4px", fontWeight: "600" }}>{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
        animation: "bounce 2s infinite",
      }}>
        <span style={{ color: "rgba(212,175,55,0.6)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700" }}>Scroll</span>
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(212,175,55,0.6), transparent)" }} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
