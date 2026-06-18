"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "120px 24px", background: "#FAF9F6" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>Get In Touch</span>
          <h2 style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontSize: "clamp(30px, 4vw, 44px)", color: "#0A192F", 
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
              background: "#FFF", borderRadius: "16px", padding: "28px 24px",
              border: "1px solid #F0EDE6",
              boxShadow: "0 4px 20px rgba(10,25,47,0.02)",
              display: "flex", gap: "16px", alignItems: "flex-start",
            }}
              className="hover-lift"
            >
              <div style={{
                width: "48px", height: "48px", borderRadius: "12px", flexShrink: 0,
                background: "linear-gradient(135deg, #0A192F, #1B3D6D)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px",
              }}>{item.icon}</div>
              <div>
                <div style={{ fontWeight: "700", color: "#0A192F", fontSize: "15px", marginBottom: "8px", fontFamily: "'Outfit', sans-serif" }}>{item.title}</div>
                {item.lines.map((line, j) => (
                  <div key={j} style={{ color: "#5A6E85", fontSize: "14px", lineHeight: 1.8 }}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Map Embed */}
        <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 40px rgba(10,25,47,0.08)", border: "1px solid #F0EDE6" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.7123!2d77.6!3d28.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQ5JzQ4LjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%" height="380" style={{ border: 0, display: "block" }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title="Jagannath Group Location"
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
