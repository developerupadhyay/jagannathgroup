"use client";
import { useEffect, useState } from "react";

const stats = [
  { number: "5", label: "Colleges" },
  { number: "12+", label: "Courses" },
  { number: "5000+", label: "Students" },
  { number: "25+", label: "Years Legacy" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="home" style={{
      minHeight: "100vh",
      background: `
        linear-gradient(135deg, rgba(92,10,20,0.92) 0%, rgba(139,26,26,0.88) 50%, rgba(92,10,20,0.95) 100%),
        url('https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80') center/cover no-repeat
      `,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "120px 24px 80px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative circles */}
      <div style={{
        position: "absolute", top: "10%", left: "5%",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.1)",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "5%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.08)",
      }} />

      {/* Badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "8px",
        background: "rgba(212,175,55,0.15)", border: "1px solid rgba(212,175,55,0.3)",
        borderRadius: "25px", padding: "8px 20px", marginBottom: "32px",
        opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s ease",
      }}>
        <span style={{ color: "#D4AF37", fontSize: "12px" }}>★</span>
        <span style={{ color: "#F0D060", fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: "600" }}>
          Est. in Modinagar, Ghaziabad
        </span>
      </div>

      {/* Main Heading */}
      <h1 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(36px, 6vw, 72px)",
        color: "#FAF6EF", fontWeight: "800",
        lineHeight: 1.1, marginBottom: "16px",
        maxWidth: "800px",
        opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.9s ease 0.1s",
      }}>
        Jagannath Group
        <span style={{ display: "block", color: "#D4AF37" }}>of Institutions</span>
      </h1>

      <p style={{
        fontSize: "clamp(15px, 2vw, 20px)", color: "rgba(250,246,239,0.75)",
        maxWidth: "600px", lineHeight: 1.8, marginBottom: "48px",
        opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(30px)",
        transition: "all 1s ease 0.2s",
      }}>
        Nurturing Excellence, Shaping Futures — A premier educational group offering 
        world-class professional education across 5 institutions in Modinagar, UP.
      </p>

      {/* CTA Buttons */}
      <div style={{
        display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center",
        marginBottom: "80px",
        opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(30px)",
        transition: "all 1.1s ease 0.3s",
      }}>
        <a href="#colleges" style={{
          background: "linear-gradient(135deg, #D4AF37, #F0D060)",
          color: "#5C0A14", padding: "16px 36px", borderRadius: "50px",
          textDecoration: "none", fontSize: "15px", fontWeight: "700",
          boxShadow: "0 8px 30px rgba(212,175,55,0.4)",
          transition: "all 0.3s ease", letterSpacing: "0.5px",
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 15px 40px rgba(212,175,55,0.5)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(212,175,55,0.4)"; }}
        >Explore Colleges</a>
        <a href="#admissions" style={{
          background: "transparent", border: "2px solid rgba(250,246,239,0.4)",
          color: "#FAF6EF", padding: "16px 36px", borderRadius: "50px",
          textDecoration: "none", fontSize: "15px", fontWeight: "600",
          transition: "all 0.3s ease",
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#D4AF37"; e.currentTarget.style.color = "#D4AF37"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(250,246,239,0.4)"; e.currentTarget.style.color = "#FAF6EF"; }}
        >Apply for Admission</a>
      </div>

      {/* Stats */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px",
        background: "rgba(212,175,55,0.15)", borderRadius: "16px",
        border: "1px solid rgba(212,175,55,0.2)", overflow: "hidden",
        maxWidth: "700px", width: "100%",
        opacity: mounted ? 1 : 0, transition: "all 1.2s ease 0.4s",
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            padding: "24px 16px", textAlign: "center",
            borderRight: i < 3 ? "1px solid rgba(212,175,55,0.15)" : "none",
            background: "rgba(92,10,20,0.3)",
          }}>
            <div style={{ fontSize: "28px", fontWeight: "800", color: "#D4AF37", fontFamily: "'Playfair Display', serif" }}>{s.number}</div>
            <div style={{ fontSize: "12px", color: "rgba(250,246,239,0.65)", textTransform: "uppercase", letterSpacing: "1px", marginTop: "4px" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
        animation: "bounce 2s infinite",
      }}>
        <span style={{ color: "rgba(212,175,55,0.6)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(212,175,55,0.6), transparent)" }} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @media (max-width: 600px) {
          div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
