"use client";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#001A3D", color: "#FAF9F6", padding: "60px 24px 24px", borderTop: "3px solid #D4AF37" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "48px" }} className="footer-grid">
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: "24px", textDecoration: "none" }}>
              <img 
                src="/website_images/logo.jpeg" 
                alt="Jagannath Group Logo" 
                style={{ 
                  height: "50px", 
                  width: "auto", 
                  display: "block",
                  border: "none",
                  borderRadius: "0"
                }} 
              />
            </Link>
            <p style={{ color: "#94A3B8", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px" }}>
              Nurturing Excellence, Shaping Futures. A premier educational group 
              located in Modinagar, Ghaziabad, UP offering diverse professional programs.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { 
                  name: "Facebook", 
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="#FFFFFF">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  ), 
                  url: "#" 
                },
                { 
                  name: "Instagram", 
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="#FFFFFF">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                  ), 
                  url: "#" 
                },
                { 
                  name: "YouTube", 
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="#FFFFFF">
                      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  ), 
                  url: "#" 
                },
                { 
                  name: "LinkedIn", 
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="#FFFFFF">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  ), 
                  url: "#" 
                }
              ].map((s, i) => (
                <a key={i} href={s.url} style={{
                  width: "36px", height: "36px", borderRadius: "8px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  textDecoration: "none",
                }}
                  className="footer-social-link"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Colleges */}
          <div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", color: "#FFFFFF", fontSize: "16px", marginBottom: "20px", fontWeight: "700" }}>Our Colleges</h4>
            {[
              { name: "Jagannath College of Pharmacy", slug: "jcp" },
              { name: "Jagannath College of Nursing", slug: "jcn" },
              { name: "Shiva Educational Institute", slug: "sei" },
              { name: "Shiva College of Law", slug: "scl" },
              { name: "Shri Jagannath Ji Education Institute", slug: "sjei" }
            ].map((c, i) => (
              <div key={i} style={{ marginBottom: "10px" }}>
                <Link href={`/colleges/${c.slug}`} style={{ fontSize: "13px", textDecoration: "none" }}
                  className="footer-link"
                >{c.name}</Link>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", color: "#FFFFFF", fontSize: "16px", marginBottom: "20px", fontWeight: "700" }}>Quick Links</h4>
            {[
              { label: "Home Portal", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "All Courses", href: "/courses" },
              { label: "Admissions Info", href: "/admissions" },
              { label: "Contact Us", href: "/contact" }
            ].map((link, i) => (
              <div key={i} style={{ marginBottom: "10px" }}>
                <Link href={link.href} style={{ fontSize: "13px", textDecoration: "none" }}
                  className="footer-link"
                >{link.label}</Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", color: "#FFFFFF", fontSize: "16px", marginBottom: "20px", fontWeight: "700" }}>Contact Us</h4>
            <div style={{ marginBottom: "16px" }}>
              <a href="https://maps.google.com/?q=Jagannath+College+of+Pharmacy+Modinagar" target="_blank" rel="noopener noreferrer" 
                style={{ fontSize: "13px", lineHeight: 1.8, textDecoration: "none", display: "block" }}
                className="footer-contact-link"
              >
                📍 Mohammadpur Road, Sikri Kalan, Modinagar, Ghaziabad, UP - 201204
              </a>
            </div>
            <div style={{ marginBottom: "8px" }}>
              <a href="tel:+919639895010" 
                style={{ fontSize: "13px", textDecoration: "none", display: "block" }}
                className="footer-contact-link"
              >
                📞 +91-9639895010
              </a>
            </div>
            <div style={{ marginBottom: "8px" }}>
              <a href="tel:+919917682980" 
                style={{ fontSize: "13px", textDecoration: "none", display: "block" }}
                className="footer-contact-link"
              >
                📞 +91-9917682980
              </a>
            </div>
            <div style={{ marginBottom: "8px" }}>
              <a href="mailto:jagannathcollegeofpharmacy@gmail.com" 
                style={{ fontSize: "13px", textDecoration: "none", display: "block", wordBreak: "break-all" }}
                className="footer-contact-link"
              >
                ✉️ jagannathcollegeofpharmacy@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ color: "#94A3B8", fontSize: "13px" }}>
            © {year} Jagannath Group of Institutions. All rights reserved.
          </div>
          <div style={{ color: "#94A3B8", fontSize: "13px" }}>
            Modinagar, Ghaziabad, Uttar Pradesh, India
          </div>
        </div>
      </div>

      <style>{`
        .footer-social-link {
          background: rgba(255, 255, 255, 0.05) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          transition: all 0.3s ease !important;
        }
        .footer-social-link:hover {
          background: #D4AF37 !important;
          border-color: #D4AF37 !important;
          transform: translateY(-2px) scale(1.05) !important;
        }
        .footer-social-link:hover svg {
          fill: #001A3D !important;
        }
        .footer-link {
          color: #94A3B8 !important;
          transition: color 0.3s ease !important;
        }
        .footer-link:hover {
          color: #D4AF37 !important;
        }
        .footer-contact-link {
          color: #94A3B8 !important;
          transition: color 0.3s ease !important;
        }
        .footer-contact-link:hover {
          color: #D4AF37 !important;
        }
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
