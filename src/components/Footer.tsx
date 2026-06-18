"use client";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0A192F", color: "#FAF9F6", padding: "60px 24px 24px", borderTop: "1px solid rgba(212,175,55,0.15)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "48px" }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "50%",
                background: "#FFFFFF", overflow: "hidden",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 10px rgba(212,175,55,0.25)"
              }}>
                <img src="/website_images/logo.jpeg" alt="Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div>
                <div style={{ color: "#FAF9F6", fontFamily: "'Outfit', sans-serif", fontSize: "17px", fontWeight: "700" }}>Jagannath Group</div>
                <div style={{ color: "#D4AF37", fontSize: "10px", letterSpacing: "2px", fontWeight: "600" }}>OF INSTITUTIONS</div>
              </div>
            </div>
            <p style={{ color: "#7E93A8", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px" }}>
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
            <h4 style={{ fontFamily: "'Outfit', sans-serif", color: "#D4AF37", fontSize: "16px", marginBottom: "20px", fontWeight: "700" }}>Our Colleges</h4>
            {[
              { name: "Jagannath College of Pharmacy", slug: "jcp" },
              { name: "Jagannath College of Nursing", slug: "jcn" },
              { name: "Shiva Educational Institute", slug: "sei" },
              { name: "Shiva College of Law", slug: "scl" },
              { name: "Shri Jagannath Ji Education Institute", slug: "sjei" }
            ].map((c, i) => (
              <div key={i} style={{ marginBottom: "10px" }}>
                <Link href={`/colleges/${c.slug}`} style={{ color: "#7E93A8", fontSize: "13px", textDecoration: "none", transition: "color 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#D4AF37"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "#7E93A8"; }}
                >{c.name}</Link>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", color: "#D4AF37", fontSize: "16px", marginBottom: "20px", fontWeight: "700" }}>Quick Links</h4>
            {[
              { label: "Home Portal", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "All Courses", href: "/courses" },
              { label: "Admissions Info", href: "/admissions" },
              { label: "Contact Us", href: "/contact" }
            ].map((link, i) => (
              <div key={i} style={{ marginBottom: "10px" }}>
                <Link href={link.href} style={{ color: "#7E93A8", fontSize: "13px", textDecoration: "none", transition: "color 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#D4AF37"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "#7E93A8"; }}
                >{link.label}</Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", color: "#D4AF37", fontSize: "16px", marginBottom: "20px", fontWeight: "700" }}>Contact</h4>
            <div style={{ color: "#7E93A8", fontSize: "13px", lineHeight: 1.8, marginBottom: "16px" }}>
              📍 Mohammadpur Road, Sikri Kalan, Modinagar, Ghaziabad, UP - 201204
            </div>
            <div style={{ color: "#7E93A8", fontSize: "13px", marginBottom: "8px" }}>📞 +91-9639895010</div>
            <div style={{ color: "#7E93A8", fontSize: "13px", marginBottom: "8px" }}>📞 +91-9917682980</div>
            <div style={{ color: "#7E93A8", fontSize: "13px" }}>✉️ jagannathcollegeofpharmacy@gmail.com</div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(212,175,55,0.1)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ color: "rgba(250,249,246,0.4)", fontSize: "13px" }}>
            © {year} Jagannath Group of Institutions. All rights reserved.
          </div>
          <div style={{ color: "rgba(250,249,246,0.4)", fontSize: "13px" }}>
            Modinagar, Ghaziabad, Uttar Pradesh, India
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
