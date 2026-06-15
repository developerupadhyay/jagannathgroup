"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Colleges", href: "#colleges" },
  { label: "Courses", href: "#courses" },
  { label: "Gallery", href: "#gallery" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(92, 10, 20, 0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      boxShadow: scrolled ? "0 2px 30px rgba(92,10,20,0.3)" : "none",
      transition: "all 0.4s ease",
      padding: scrolled ? "12px 40px" : "20px 40px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{
          width: "48px", height: "48px", borderRadius: "50%",
          background: "linear-gradient(135deg, #D4AF37, #F0D060)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "22px", fontWeight: "800", color: "#5C0A14",
          fontFamily: "'Playfair Display', serif",
          boxShadow: "0 2px 12px rgba(212,175,55,0.4)",
        }}>J</div>
        <div>
          <div style={{ color: "#F0D060", fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: "700", lineHeight: 1.1 }}>
            Jagannath Group
          </div>
          <div style={{ color: "rgba(240,208,96,0.7)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>
            of Institutions
          </div>
        </div>
      </div>

      {/* Desktop Links */}
      <ul style={{ display: "flex", gap: "28px", listStyle: "none", margin: 0, padding: 0 }}
        className="desktop-nav">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} style={{
              color: "rgba(250,246,239,0.9)", textDecoration: "none",
              fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px",
              transition: "color 0.3s",
              textTransform: "uppercase",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F0D060")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,246,239,0.9)")}
            >{link.label}</a>
          </li>
        ))}
      </ul>

      {/* Apply Button */}
      <a href="#admissions" style={{
        background: "linear-gradient(135deg, #D4AF37, #F0D060)",
        color: "#5C0A14", padding: "10px 24px", borderRadius: "25px",
        textDecoration: "none", fontSize: "13px", fontWeight: "700",
        letterSpacing: "0.5px", textTransform: "uppercase",
        boxShadow: "0 4px 15px rgba(212,175,55,0.4)",
        transition: "all 0.3s ease",
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(212,175,55,0.5)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 15px rgba(212,175,55,0.4)"; }}
      >Apply Now</a>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
