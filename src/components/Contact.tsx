export default function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 24px", background: "#FAF6EF" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{ color: "#8B1A1A", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>Get In Touch</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 48px)", color: "#5C0A14", marginTop: "12px", fontWeight: "700" }}>Contact Us</h2>
          <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #D4AF37, #F0D060)", margin: "20px auto 0", borderRadius: "2px" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "48px" }}>
          {[
            { icon: "📍", title: "Address", lines: ["Mohammadpur Road, Sikri Kalan,", "Modinagar, Ghaziabad,", "Uttar Pradesh - 201204"] },
            { icon: "📞", title: "Phone Numbers", lines: ["+91-9639895010", "+91-9917682980", "+91-8171875188"] },
            { icon: "✉️", title: "Email Addresses", lines: ["jagannathcollegeofpharmacy@gmail.com", "jagannathcollegeofnursing26@gmail.com"] },
            { icon: "🕐", title: "Office Hours", lines: ["Monday – Saturday", "9:00 AM – 5:00 PM", "Sundays: Closed"] },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#FFF", borderRadius: "16px", padding: "28px 24px",
              border: "1px solid rgba(139,26,26,0.08)",
              boxShadow: "0 2px 16px rgba(92,10,20,0.06)",
              display: "flex", gap: "16px", alignItems: "flex-start",
            }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "12px", flexShrink: 0,
                background: "linear-gradient(135deg, #5C0A14, #8B1A1A)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px",
              }}>{item.icon}</div>
              <div>
                <div style={{ fontWeight: "700", color: "#5C0A14", fontSize: "15px", marginBottom: "8px" }}>{item.title}</div>
                {item.lines.map((line, j) => (
                  <div key={j} style={{ color: "#8B6060", fontSize: "14px", lineHeight: 1.8 }}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Map Embed */}
        <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 40px rgba(92,10,20,0.12)", border: "1px solid rgba(139,26,26,0.1)" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.7123!2d77.6!3d28.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQ5JzQ4LjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%" height="350" style={{ border: 0, display: "block" }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title="Jagannath Group Location"
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
