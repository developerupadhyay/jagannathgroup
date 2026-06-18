"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const collegesList = [
  { name: "Jagannath College of Pharmacy", slug: "jcp" },
  { name: "Jagannath College of Nursing", slug: "jcn" },
  { name: "Shiva Educational Institute", slug: "sei" },
  { name: "Shiva College of Law", slug: "scl" },
  { name: "Shri Jagannath Ji Education Institute", slug: "sjei" },
];

const coursesCategories = [
  { label: "All Programs", query: "" },
  { label: "Pharmacy Programs", query: "?cat=Pharmacy" },
  { label: "Nursing Programs", query: "?cat=Nursing" },
  { label: "Education Programs", query: "?cat=Education" },
  { label: "Law Programs", query: "?cat=Law" },
  { label: "General & IT Programs", query: "?cat=General" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, display: "flex", flexDirection: "column" }}>
      {/* Top Announcement Bar */}
      <div className="header-top-bar" style={{
        background: "#013a7d",
        color: "#FFFFFF",
        fontSize: "12px",
        fontWeight: "600",
        padding: "8px 24px",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
          <span style={{ color: "#D4AF37" }}>★</span>
          <span style={{ letterSpacing: "0.5px" }}>Admissions Open 2026 - 2027</span>
        </div>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", color: "#FFFFFF", justifyContent: "center" }}>
          <span>📞 Hotline: +91-9639895010</span>
          <span>📍 Sikri Kalan, Modinagar</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={scrolled ? "scrolled" : ""}
        style={{
          transition: "all 0.4s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(1, 58, 125, 0.05)"
        }}
      >
        {/* Logo (Only Image, No Text) */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img 
            src="/website_images/logo.jpeg" 
            alt="Jagannath Group Logo" 
            className="navbar-logo"
            style={{ 
              width: "auto", 
              objectFit: "contain",
              transition: "all 0.3s ease",
            }} 
          />
        </Link>

        {/* Desktop Links (Dark Navy & Blue) */}
        <ul style={{ display: "flex", gap: "24px", listStyle: "none", margin: 0, padding: 0, alignItems: "center" }} className="desktop-nav">
          <li>
            <Link href="/" style={{
              color: pathname === "/" ? "#013a7d" : "#001A3D",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              transition: "color 0.2s"
            }} className="nav-link">Home</Link>
          </li>

          <li>
            <Link href="/about" style={{
              color: pathname === "/about" ? "#013a7d" : "#001A3D",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              transition: "color 0.2s"
            }} className="nav-link">About Us</Link>
          </li>

          {/* Colleges Dropdown */}
          <li style={{ position: "relative" }}
              onMouseEnter={() => setActiveDropdown("colleges")}
              onMouseLeave={() => setActiveDropdown(null)}>
            <button style={{
              background: "none", border: "none", cursor: "pointer",
              color: pathname.startsWith("/colleges") ? "#013a7d" : "#001A3D",
              fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px",
              display: "flex", alignItems: "center", gap: "4px", padding: "8px 0"
            }} className="nav-link-btn">
              Colleges <span style={{ fontSize: "10px" }}>▼</span>
            </button>
            {activeDropdown === "colleges" && (
              <div style={{
                position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", width: "290px", background: "#FFFFFF",
                borderRadius: "12px", boxShadow: "0 20px 50px rgba(1, 58, 125, 0.12)", overflow: "hidden",
                border: "1px solid rgba(1, 58, 125, 0.08)", display: "flex", flexDirection: "column", padding: "6px 0"
              }}>
                {collegesList.map((col) => (
                  <Link key={col.slug} href={`/colleges/${col.slug}`} style={{
                    padding: "12px 16px", color: "#001A3D", textDecoration: "none", fontSize: "13px", fontWeight: "600",
                    display: "flex", flexDirection: "column", gap: "2px", transition: "all 0.2s"
                  }} className="dropdown-item">
                    <span>{col.name}</span>
                    <span style={{ fontSize: "11px", color: "#64748b", textTransform: "uppercase" }}>{col.slug.toUpperCase()} Campus</span>
                  </Link>
                ))}
              </div>
            )}
          </li>

          {/* Courses Dropdown */}
          <li style={{ position: "relative" }}
              onMouseEnter={() => setActiveDropdown("courses")}
              onMouseLeave={() => setActiveDropdown(null)}>
            <button style={{
              background: "none", border: "none", cursor: "pointer",
              color: pathname.startsWith("/courses") ? "#013a7d" : "#001A3D",
              fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px",
              display: "flex", alignItems: "center", gap: "4px", padding: "8px 0"
            }} className="nav-link-btn">
              Academics <span style={{ fontSize: "10px" }}>▼</span>
            </button>
            {activeDropdown === "courses" && (
              <div style={{
                position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", width: "230px", background: "#FFFFFF",
                borderRadius: "12px", boxShadow: "0 20px 50px rgba(1, 58, 125, 0.12)", overflow: "hidden",
                border: "1px solid rgba(1, 58, 125, 0.08)", display: "flex", flexDirection: "column", padding: "6px 0"
              }}>
                {coursesCategories.map((cat, idx) => (
                  <Link key={idx} href={`/courses${cat.query}`} style={{
                    padding: "12px 16px", color: "#001A3D", textDecoration: "none", fontSize: "13px", fontWeight: "600",
                    transition: "all 0.2s"
                  }} className="dropdown-item">
                    {cat.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {/* Admissions */}
          <li>
            <Link href="/admissions" style={{
              color: pathname === "/admissions" ? "#013a7d" : "#001A3D",
              textDecoration: "none",
              fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px",
              transition: "color 0.2s"
            }} className="nav-link">Admissions</Link>
          </li>

          {/* Contact */}
          <li>
            <Link href="/contact" style={{
              color: pathname === "/contact" ? "#013a7d" : "#001A3D",
              textDecoration: "none",
              fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px",
              transition: "color 0.2s"
            }} className="nav-link">Contact</Link>
          </li>
        </ul>

        {/* Right CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link href="/admissions" className="navbar-cta" style={{
            background: "#013a7d",
            color: "#FFFFFF", 
            borderRadius: "8px",
            textDecoration: "none", 
            fontSize: "13px", 
            fontWeight: "700",
            letterSpacing: "0.5px", 
            textTransform: "uppercase",
            border: "none",
            boxShadow: "0 4px 14px rgba(1, 58, 125, 0.2)",
            transition: "all 0.3s ease",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#D4AF37"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#013a7d"; }}
          >Apply Now</Link>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: "none", border: "none", color: "#013a7d", fontSize: "24px", cursor: "pointer", display: "none"
          }} className="mobile-toggle">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="mobile-menu-panel">
          <Link href="/" style={{ color: "#001A3D", textDecoration: "none", fontSize: "18px", fontWeight: "700" }}>Home</Link>

          <Link href="/about" style={{ color: "#001A3D", textDecoration: "none", fontSize: "18px", fontWeight: "700" }}>About Us</Link>

          {/* Colleges (Collapsible) */}
          <div>
            <div onClick={() => toggleDropdown("colleges")} style={{ color: "#001A3D", fontSize: "18px", fontWeight: "700", display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
              <span>Colleges</span>
              <span>{activeDropdown === "colleges" ? "▲" : "▼"}</span>
            </div>
            {activeDropdown === "colleges" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", paddingLeft: "16px", marginTop: "12px", borderLeft: "2px solid #013a7d" }}>
                {collegesList.map((col) => (
                  <Link key={col.slug} href={`/colleges/${col.slug}`} style={{ color: "#013a7d", textDecoration: "none", fontSize: "15px", fontWeight: "600" }}>
                    {col.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Academics (Collapsible) */}
          <div>
            <div onClick={() => toggleDropdown("courses")} style={{ color: "#001A3D", fontSize: "18px", fontWeight: "700", display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
              <span>Academics</span>
              <span>{activeDropdown === "courses" ? "▲" : "▼"}</span>
            </div>
            {activeDropdown === "courses" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", paddingLeft: "16px", marginTop: "12px", borderLeft: "2px solid #013a7d" }}>
                {coursesCategories.map((cat, idx) => (
                  <Link key={idx} href={`/courses${cat.query}`} style={{ color: "#013a7d", textDecoration: "none", fontSize: "15px", fontWeight: "600" }}>
                    {cat.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/admissions" style={{ color: "#001A3D", textDecoration: "none", fontSize: "18px", fontWeight: "700" }}>Admissions</Link>
          <Link href="/contact" style={{ color: "#001A3D", textDecoration: "none", fontSize: "18px", fontWeight: "700" }}>Contact Us</Link>
        </div>
      )}

      {/* Global CSS Inject */}
      <style>{`
        .header-top-bar {
          justify-content: center;
          gap: 8px 32px;
        }
        /* Default mobile header state (permanently scrolled look) */
        nav {
          background: rgba(255, 255, 255, 0.98) !important;
          box-shadow: 0 10px 30px rgba(1, 58, 125, 0.06) !important;
          backdrop-filter: blur(10px) !important;
          padding: 10px 20px !important;
        }
        .navbar-logo {
          height: 48px;
        }
        .navbar-cta {
          padding: 8px 20px;
        }

        /* Desktop specific responsive header states */
        @media (min-width: 993px) {
          .header-top-bar {
            justify-content: space-between;
            gap: 10px;
          }
          nav {
            background: #FFFFFF !important;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02) !important;
            backdrop-filter: none !important;
            padding: 16px 40px !important;
          }
          nav.scrolled {
            background: rgba(255, 255, 255, 0.98) !important;
            box-shadow: 0 10px 30px rgba(1, 58, 125, 0.06) !important;
            backdrop-filter: blur(10px) !important;
            padding: 10px 40px !important;
          }
          .navbar-logo {
            height: 60px;
          }
          nav.scrolled .navbar-logo {
            height: 48px;
          }
          .navbar-cta {
            padding: 10px 24px;
          }
          nav.scrolled .navbar-cta {
            padding: 8px 20px;
          }
        }
        .dropdown-item:hover {
          background-color: #f8fafc !important;
          color: #013a7d !important;
        }
        .dropdown-item:hover span {
          color: #013a7d !important;
        }
        .nav-link:hover {
          color: #013a7d !important;
        }
        .nav-link-btn:hover {
          color: #013a7d !important;
        }
        .mobile-menu-panel {
          position: fixed !important;
          top: 105px !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          background: #FFFFFF !important;
          z-index: 999 !important;
          display: flex !important;
          flex-direction: column !important;
          padding: 24px 32px !important;
          gap: 20px !important;
          overflow-y: auto !important;
          border-top: 1px solid rgba(1, 58, 125, 0.08) !important;
        }
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (max-width: 480px) {
          .mobile-menu-panel {
            top: 122px !important;
          }
        }
      `}</style>
    </div>
  );
}
