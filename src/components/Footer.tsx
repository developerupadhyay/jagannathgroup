"use client";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#1A0A0A", color: "#FAF6EF", padding: "60px 24px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "48px" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "50%",
                background: "linear-gradient(135deg, #D4AF37, #F0D060)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px", fontWeight: "800", color: "#5C0A14",
                fontFamily: "'Playfair Display', serif",
              }}>J</div>
              <div>
                <div style={{ color: "#FAF6EF", fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: "700" }}>Jagannath Group</div>
                <div style={{ color: "rgba(250,246,239,0.5)", fontSize: "11px", letterSpacing: "2px" }}>OF INSTITUTIONS</div>
              </div>
            </div>
            <p style={{ color: "rgba(250,246,239,0.55)", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px" }}>
              Nurturing Excellence, Shaping Futures. A premier educational group 
              located in Modinagar, Ghaziabad, UP offering diverse professional programs.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {["f", "in", "tw", "yt"].map((s, i) => (
                <div key={i} style={{
                  width: "36px", height: "36px", borderRadius: "8px",
                  background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#D4AF37", fontSize: "12px", fontWeight: "700", cursor: "pointer",
                }}>{s}</div>
              ))}
            </div>
          </div>

          {/* Colleges */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", color: "#D4AF37", fontSize: "16px", marginBottom: "20px" }}>Our Colleges</h4>
            {["Jagannath College of Pharmacy", "Jagannath College of Nursing", "Shiva Educational Institute", "Shiva College of Law", "Shri Jagannath Ji Education Institute"].map((c, i) => (
              <div key={i} style={{ color: "rgba(250,246,239,0.55)", fontSize: "13px", marginBottom: "10px", lineHeight: 1.5, cursor: "pointer", transition: "color 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#D4AF37"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(250,246,239,0.55)"; }}
              >{c}</div>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", color: "#D4AF37", fontSize: "16px", marginBottom: "20px" }}>Quick Links</h4>
            {[["Home", "#home"], ["About Us", "#about"], ["Courses", "#courses"], ["Gallery", "#gallery"], ["Admissions", "#admissions"], ["Contact", "#contact"]].map(([label, href], i) => (
              <div key={i} style={{ marginBottom: "10px" }}>
                <a href={href} style={{ color: "rgba(250,246,239,0.55)", fontSize: "13px", textDecoration: "none", transition: "color 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#D4AF37"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(250,246,239,0.55)"; }}
                >{label}</a>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", color: "#D4AF37", fontSize: "16px", marginBottom: "20px" }}>Contact</h4>
            <div style={{ color: "rgba(250,246,239,0.55)", fontSize: "13px", lineHeight: 1.8, marginBottom: "16px" }}>
              📍 Mohammadpur Road, Sikri Kalan, Modinagar, Ghaziabad, UP - 201204
            </div>
            <div style={{ color: "rgba(250,246,239,0.55)", fontSize: "13px", marginBottom: "8px" }}>📞 +91-9639895010</div>
            <div style={{ color: "rgba(250,246,239,0.55)", fontSize: "13px", marginBottom: "8px" }}>📞 +91-9917682980</div>
            <div style={{ color: "rgba(250,246,239,0.55)", fontSize: "13px" }}>✉️ jagannathcollegeofpharmacy@gmail.com</div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(212,175,55,0.15)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ color: "rgba(250,246,239,0.4)", fontSize: "13px" }}>
            © {year} Jagannath Group of Institutions. All rights reserved.
          </div>
          <div style={{ color: "rgba(250,246,239,0.4)", fontSize: "13px" }}>
            Modinagar, Ghaziabad, Uttar Pradesh, India
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
          footer > div > div:first-child > div:first-child {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>
    </footer>
  );
}
