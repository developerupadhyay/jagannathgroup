"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "120px 24px", background: "#FAF9F6", borderBottom: "1px solid rgba(1, 58, 125, 0.05)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* Section Label */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{
            color: "#D4AF37", fontSize: "13px", fontWeight: "700",
            letterSpacing: "3px", textTransform: "uppercase",
          }}>Who We Are</span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(30px, 4vw, 44px)", color: "#013a7d",
            marginTop: "12px", fontWeight: "800", letterSpacing: "-0.02em"
          }}>About Jagannath Group</h2>
          <div style={{ width: "60px", height: "3px", background: "#D4AF37", margin: "20px auto 0", borderRadius: "2px" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "stretch" }} className="about-grid">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
          >
            <div>
              <p style={{ color: "#334155", lineHeight: 1.8, fontSize: "16px", marginBottom: "24px" }}>
                The <strong>Jagannath Group of Institutions</strong> is a premier educational organization 
                located at Mohammadpur Road, Sikri Kalan, Modinagar, Ghaziabad, Uttar Pradesh. 
                Committed to providing quality professional education, the group has established 
                itself as a trusted name in the region.
              </p>
              <p style={{ color: "#334155", lineHeight: 1.8, fontSize: "16px", marginBottom: "28px" }}>
                With 5 specialized institutions spanning Pharmacy, Nursing, Education, Law, and 
                General Studies, the group offers diverse academic pathways to thousands of 
                students each year, preparing them for successful careers.
              </p>
              
              <div style={{ marginBottom: "40px" }}>
                <Link href="/about" style={{
                  display: "inline-block", background: "transparent",
                  color: "#013a7d", padding: "14px 32px", borderRadius: "8px", textDecoration: "none",
                  fontSize: "13.5px", fontWeight: "700", border: "1.5px solid #013a7d",
                  boxShadow: "none",
                  transition: "all 0.3s ease", textTransform: "uppercase", letterSpacing: "0.5px"
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(1, 58, 125, 0.05)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                >
                  Explore Legacy & Leadership →
                </Link>
              </div>
            </div>

            {/* Values (Transparent Cards on White BG) */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="values-grid">
              {[
                { icon: "🎓", title: "Quality Education", desc: "AICTE, PCI, BTE & NCTE affiliated" },
                { icon: "🏆", title: "Academic Excellence", desc: "Committed to placement-driven goals" },
                { icon: "🤝", title: "Transparent Integrity", desc: "Honest and ethical guidelines" },
                { icon: "🌟", title: "Modern Pedagogy", desc: "Hands-on lab and clinic routines" },
              ].map((v, i) => (
                <div key={i} style={{
                  background: "#FFFFFF",
                  borderRadius: "12px", padding: "20px",
                  border: "1px solid rgba(1, 58, 125, 0.06)",
                  boxShadow: "0 10px 25px rgba(1, 58, 125, 0.03)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "10px",
                  transition: "all 0.3s"
                }}
                  className="hover-lift"
                >
                  {/* Icon wrapper */}
                  <div style={{
                    width: "42px", height: "42px", borderRadius: "8px",
                    background: "rgba(1, 58, 125, 0.05)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "20px",
                    border: "1px solid rgba(1, 58, 125, 0.1)"
                  }}>{v.icon}</div>
                  <div>
                    <div style={{ fontWeight: "700", color: "#013a7d", fontSize: "14.5px", marginBottom: "4px", fontFamily: "'Outfit', sans-serif" }}>{v.title}</div>
                    <div style={{ color: "#475569", fontSize: "13px", lineHeight: 1.4 }}>{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative", height: "100%", minHeight: "450px" }}
            className="about-right"
          >
            {/* Campus Photo */}
            <div style={{
              borderRadius: "12px", overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.06)",
              border: "1px solid rgba(1, 58, 125, 0.05)",
              position: "relative",
              background: "#FFFFFF",
              height: "100%"
            }}>
              <img 
                src="/website_images/college_front_photo.jpeg" 
                alt="Jagannath Group Campus Front View" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
              
              {/* Bottom text inside image */}
              <div style={{ 
                position: "absolute", bottom: "32px", left: "32px", right: "32px", 
                background: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(8px)",
                border: "1px solid rgba(1, 58, 125, 0.08)", padding: "16px", borderRadius: "12px", 
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)" 
              }}>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", color: "#013a7d", fontWeight: "700", marginBottom: "4px" }}>
                  Modinagar Main Campus
                </h3>
                <p style={{ color: "#D4AF37", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: "750" }}>
                  Ghaziabad, Uttar Pradesh
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position: "absolute", top: "-20px", right: "-20px",
              background: "#013a7d", border: "2px solid #D4AF37", borderRadius: "12px", padding: "14px 22px",
              boxShadow: "0 10px 25px rgba(1, 58, 125, 0.25)", textAlign: "center",
              zIndex: 3
            }}>
              <div style={{ fontSize: "22px", fontWeight: "800", color: "#FFFFFF", fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>5+</div>
              <div style={{ fontSize: "10px", color: "#D4AF37", fontWeight: "750", textTransform: "uppercase", letterSpacing: "1px", marginTop: "4px" }}>Campuses</div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
