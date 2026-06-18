"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "120px 24px", background: "#FAF9F6" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* Section Label */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{
            color: "#D4AF37", fontSize: "13px", fontWeight: "700",
            letterSpacing: "3px", textTransform: "uppercase",
          }}>Who We Are</span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(30px, 4vw, 44px)", color: "#0A192F",
            marginTop: "12px", fontWeight: "800", letterSpacing: "-0.02em"
          }}>About Jagannath Group</h2>
          <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #D4AF37, #F2D06B)", margin: "20px auto 0", borderRadius: "2px" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="about-grid">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p style={{ color: "#1C2D42", lineHeight: 1.8, fontSize: "16px", marginBottom: "24px" }}>
              The <strong>Jagannath Group of Institutions</strong> is a premier educational organization 
              located at Mohammadpur Road, Sikri Kalan, Modinagar, Ghaziabad, Uttar Pradesh. 
              Committed to providing quality professional education, the group has established 
              itself as a trusted name in the region.
            </p>
            <p style={{ color: "#435870", lineHeight: 1.8, fontSize: "16px", marginBottom: "28px" }}>
              With 5 specialized institutions spanning Pharmacy, Nursing, Education, Law, and 
              General Studies, the group offers diverse academic pathways to thousands of 
              students each year, preparing them for successful careers.
            </p>
            
            <div style={{ marginBottom: "40px" }}>
              <Link href="/about" style={{
                display: "inline-block", background: "linear-gradient(135deg, #0A192F, #1B3D6D)",
                color: "#FAF9F6", padding: "12px 28px", borderRadius: "25px", textDecoration: "none",
                fontSize: "13.5px", fontWeight: "700", boxShadow: "0 4px 15px rgba(10,25,47,0.15)",
                transition: "all 0.3s ease", textTransform: "uppercase", letterSpacing: "0.5px"
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(10,25,47,0.25)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 15px rgba(10,25,47,0.15)"; }}
              >
                Explore Legacy & Leadership →
              </Link>
            </div>

            {/* Values */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="values-grid">
              {[
                { icon: "🎓", title: "Quality Education", desc: "AICTE, PCI, BTE & NCTE affiliated" },
                { icon: "🏆", title: "Academic Excellence", desc: "Committed to placement-driven goals" },
                { icon: "🤝", title: "Transparent Integrity", desc: "Honest and ethical guidelines" },
                { icon: "🌟", title: "Modern Pedagogy", desc: "Hands-on lab and clinic routines" },
              ].map((v, i) => (
                <div key={i} style={{
                  background: "#FFF", borderRadius: "12px", padding: "20px",
                  border: "1px solid #F0EDE6",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.02)",
                }}>
                  <div style={{ fontSize: "24px", marginBottom: "8px" }}>{v.icon}</div>
                  <div style={{ fontWeight: "700", color: "#0A192F", fontSize: "14.5px", marginBottom: "4px", fontFamily: "'Outfit', sans-serif" }}>{v.title}</div>
                  <div style={{ color: "#7E93A8", fontSize: "13px", lineHeight: 1.4 }}>{v.desc}</div>
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
            style={{ position: "relative" }}
          >
            {/* Campus Photo with Overlay */}
            <div style={{
              borderRadius: "24px", overflow: "hidden",
              boxShadow: "0 20px 45px rgba(10,25,47,0.15)",
              border: "1px solid rgba(212,175,55,0.2)",
              aspectRatio: "4/3", position: "relative",
              background: "#0A192F"
            }}>
              <img 
                src="/website_images/college_front_photo.jpeg" 
                alt="Jagannath Group Campus Front View" 
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }} 
              />
              {/* Gold gradient overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(10,25,47,0.85) 0%, rgba(10,25,47,0.1) 60%)",
                pointerEvents: "none"
              }} />
              
              {/* Bottom text inside image */}
              <div style={{ position: "absolute", bottom: "32px", left: "32px", right: "32px" }}>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "22px", color: "#FAF9F6", fontWeight: "700", marginBottom: "6px" }}>
                  Modinagar Main Campus
                </h3>
                <p style={{ color: "#D4AF37", fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: "600" }}>
                  Ghaziabad, Uttar Pradesh
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position: "absolute", top: "-20px", right: "-20px",
              background: "linear-gradient(135deg, #D4AF37, #F2D06B)", borderRadius: "14px", padding: "14px 22px",
              boxShadow: "0 10px 25px rgba(212,175,55,0.4)", textAlign: "center"
            }}>
              <div style={{ fontSize: "22px", fontWeight: "800", color: "#0A192F", fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>5+</div>
              <div style={{ fontSize: "10px", color: "#0A192F", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginTop: "4px" }}>Campuses</div>
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
