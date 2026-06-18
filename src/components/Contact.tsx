"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" style={{ background: "#FAF9F6" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>Get In Touch</span>
          <h2 style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontSize: "clamp(30px, 4vw, 44px)", color: "#013a7d", 
            marginTop: "12px", fontWeight: "800", letterSpacing: "-0.02em" 
          }}>Contact Us</h2>
          <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #D4AF37, #F2D06B)", margin: "20px auto 0", borderRadius: "2px" }} />
        </div>

        {/* Contact Info Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "48px" }} 
          className="contact-grid"
        >
          {[
            { icon: "📍", title: "Central Campus Address", lines: ["Mohammadpur Road, Sikri Kalan,", "Modinagar, Ghaziabad,", "Uttar Pradesh - 201204"] },
            { icon: "📞", title: "Direct Helpline Numbers", lines: ["+91-9639895010", "+91-9917682980", "+91-8171875188"] },
            { icon: "✉️", title: "Administrative Emails", lines: ["jagannathcollegeofpharmacy@gmail.com", "jagannathcollegeofnursing26@gmail.com"] },
            { icon: "🕐", title: "Office Working Hours", lines: ["Monday – Saturday", "9:00 AM – 5:00 PM", "Sundays: Closed"] },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#013a7d",
              borderRadius: "16px", padding: "28px 24px",
              border: "1px solid rgba(212, 175, 55, 0.15)",
              borderTop: "3px solid #D4AF37",
              boxShadow: "0 15px 35px rgba(1, 58, 125, 0.08)",
            }}
              className="hover-lift contact-card"
            >
              {/* Icon wrapper (Soft Glass Wrapper with Gold Icon) */}
              <div style={{
                width: "48px", height: "48px", borderRadius: "12px", flexShrink: 0,
                background: "#002452",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px",
                border: "1px solid rgba(255, 255, 255, 0.15)"
              }}>{item.icon}</div>
              <div>
                <div style={{ fontWeight: "700", color: "#D4AF37", fontSize: "15px", marginBottom: "8px", fontFamily: "'Outfit', sans-serif" }}>{item.title}</div>
                {item.lines.map((line, j) => {
                  if (line.includes("@")) {
                    return (
                      <div key={j} style={{ fontSize: "14px", lineHeight: 1.8 }}>
                        <a href={`mailto:${line}`} style={{ color: "#FFFFFF", textDecoration: "none", transition: "color 0.2s" }}
                           onMouseEnter={e => e.currentTarget.style.color = "#D4AF37"}
                           onMouseLeave={e => e.currentTarget.style.color = "#FFFFFF"}>{line}</a>
                      </div>
                    );
                  }
                  if (line.startsWith("+91-")) {
                    return (
                      <div key={j} style={{ fontSize: "14px", lineHeight: 1.8 }}>
                        <a href={`tel:${line.replace(/-/g, "")}`} style={{ color: "#FFFFFF", textDecoration: "none", transition: "color 0.2s" }}
                           onMouseEnter={e => e.currentTarget.style.color = "#D4AF37"}
                           onMouseLeave={e => e.currentTarget.style.color = "#FFFFFF"}>{line}</a>
                      </div>
                    );
                  }
                  return (
                    <div key={j} style={{ color: "#FFFFFF", fontSize: "14px", lineHeight: 1.8 }}>{line}</div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Map Embed */}
        <div style={{ 
          borderRadius: "20px", 
          overflow: "hidden", 
          boxShadow: "0 15px 40px rgba(1, 58, 125, 0.08)", 
          border: "1px solid rgba(212, 175, 55, 0.18)" 
        }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.7123!2d77.6!3d28.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQ5JzQ4LjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%" height="380" style={{ border: 0, display: "block" }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title="Jagannath Group Location"
          />
        </div>
      </div>

      <style>{`
        #contact {
          padding: 120px 24px;
        }
        .contact-card {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        @media (max-width: 768px) {
          #contact {
            padding: 80px 16px;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-card {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
