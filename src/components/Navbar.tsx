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
      <div style={{
        background: "#0A192F",
        color: "#FAF9F6",
        fontSize: "12px",
        fontWeight: "600",
        padding: "8px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px",
        borderBottom: "1px solid rgba(212,175,55,0.15)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ animation: "pulse 2s infinite", color: "#D4AF37" }}>⚡</span>
          <span style={{ letterSpacing: "0.5px" }}>Admissions Open 2026 - 2027</span>
        </div>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", color: "rgba(250,249,246,0.85)" }}>
          <span>📞 Hotline: +91-9639895010</span>
          <span>📍 Sikri Kalan, Modinagar</span>
        </div>
      </div>

      {/* Main Navbar (White Background) */}
      <nav style={{
        background: "#FFFFFF",
        boxShadow: scrolled ? "0 4px 25px rgba(10,25,47,0.08)" : "0 2px 10px rgba(10,25,47,0.02)",
        transition: "all 0.4s ease",
        padding: scrolled ? "8px 40px" : "12px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #F0EDE6"
      }}>
        {/* Logo (Only Image, No Text) */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img 
            src="/website_images/logo.jpeg" 
            alt="Jagannath Group Logo" 
            style={{ 
              height: scrolled ? "48px" : "60px", 
              width: "auto", 
              objectFit: "contain",
              transition: "all 0.3s ease",
            }} 
          />
        </Link>

        {/* Desktop Links (Dark Navy/Slate text on White background) */}
        <ul style={{ display: "flex", gap: "24px", listStyle: "none", margin: 0, padding: 0, alignItems: "center" }} className="desktop-nav">
          <li>
            <Link href="/" style={{
              color: pathname === "/" ? "#D4AF37" : "#0A192F",
              textDecoration: "none", fontSize: "13px", fontWeight: "750", textTransform: "uppercase", letterSpacing: "0.5px",
              transition: "color 0.2s"
            }} className="nav-link">Home</Link>
          </li>

          {/* About Dropdown */}
          <li style={{ position: "relative" }}
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}>
            <button style={{
              background: "none", border: "none", cursor: "pointer",
              color: pathname.startsWith("/about") ? "#D4AF37" : "#0A192F",
              fontSize: "13px", fontWeight: "750", textTransform: "uppercase", letterSpacing: "0.5px",
              display: "flex", alignItems: "center", gap: "4px", padding: "8px 0"
            }}>
              About Us <span style={{ fontSize: "10px" }}>▼</span>
            </button>
            {activeDropdown === "about" && (
              <div style={{
                position: "absolute", top: "100%", left: 0, width: "220px", background: "#FFFFFF",
                borderRadius: "12px", boxShadow: "0 10px 30px rgba(10,25,47,0.12)", overflow: "hidden",
                border: "1px solid #F0EDE6", display: "flex", flexDirection: "column"
              }}>
                <Link href="/about" style={{ padding: "12px 16px", color: "#0A192F", textDecoration: "none", fontSize: "13px", fontWeight: "600", borderBottom: "1px solid #F0EDE6" }} className="dropdown-item">
                  Group Profile & Legacy
                </Link>
                <Link href="/about#messages" style={{ padding: "12px 16px", color: "#0A192F", textDecoration: "none", fontSize: "13px", fontWeight: "500", borderBottom: "1px solid #F0EDE6" }} className="dropdown-item">
                  Leadership Messages
                </Link>
                <Link href="/about#values" style={{ padding: "12px 16px", color: "#0A192F", textDecoration: "none", fontSize: "13px", fontWeight: "500" }} className="dropdown-item">
                  Our Core Values
                </Link>
              </div>
            )}
          </li>

          {/* Colleges Dropdown */}
          <li style={{ position: "relative" }}
              onMouseEnter={() => setActiveDropdown("colleges")}
              onMouseLeave={() => setActiveDropdown(null)}>
            <button style={{
              background: "none", border: "none", cursor: "pointer",
              color: pathname.startsWith("/colleges") ? "#D4AF37" : "#0A192F",
              fontSize: "13px", fontWeight: "750", textTransform: "uppercase", letterSpacing: "0.5px",
              display: "flex", alignItems: "center", gap: "4px", padding: "8px 0"
            }}>
              Colleges <span style={{ fontSize: "10px" }}>▼</span>
            </button>
            {activeDropdown === "colleges" && (
              <div style={{
                position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", width: "290px", background: "#FFFFFF",
                borderRadius: "12px", boxShadow: "0 10px 30px rgba(10,25,47,0.12)", overflow: "hidden",
                border: "1px solid #F0EDE6", display: "flex", flexDirection: "column"
              }}>
                {collegesList.map((col) => (
                  <Link key={col.slug} href={`/colleges/${col.slug}`} style={{
                    padding: "12px 16px", color: "#0A192F", textDecoration: "none", fontSize: "13px", fontWeight: "600",
                    borderBottom: "1px solid #F0EDE6", display: "flex", flexDirection: "column", gap: "2px"
                  }} className="dropdown-item">
                    <span>{col.name}</span>
                    <span style={{ fontSize: "11px", color: "#7E93A8", textTransform: "uppercase" }}>{col.slug.toUpperCase()} Campus</span>
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
              color: pathname.startsWith("/courses") ? "#D4AF37" : "#0A192F",
              fontSize: "13px", fontWeight: "750", textTransform: "uppercase", letterSpacing: "0.5px",
              display: "flex", alignItems: "center", gap: "4px", padding: "8px 0"
            }}>
              Academics <span style={{ fontSize: "10px" }}>▼</span>
            </button>
            {activeDropdown === "courses" && (
              <div style={{
                position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", width: "230px", background: "#FFFFFF",
                borderRadius: "12px", boxShadow: "0 10px 30px rgba(10,25,47,0.12)", overflow: "hidden",
                border: "1px solid #F0EDE6", display: "flex", flexDirection: "column"
              }}>
                {coursesCategories.map((cat, idx) => (
                  <Link key={idx} href={`/courses${cat.query}`} style={{
                    padding: "12px 16px", color: "#0A192F", textDecoration: "none", fontSize: "13px", fontWeight: "600",
                    borderBottom: idx < coursesCategories.length - 1 ? "1px solid #F0EDE6" : "none"
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
              color: pathname === "/admissions" ? "#D4AF37" : "#0A192F",
              textDecoration: "none", fontSize: "13px", fontWeight: "750", textTransform: "uppercase", letterSpacing: "0.5px"
            }}>Admissions</Link>
          </li>

          {/* Contact */}
          <li>
            <Link href="/contact" style={{
              color: pathname === "/contact" ? "#D4AF37" : "#0A192F",
              textDecoration: "none", fontSize: "13px", fontWeight: "750", textTransform: "uppercase", letterSpacing: "0.5px"
            }}>Contact</Link>
          </li>
        </ul>

        {/* Right CTA (Navy Blue background with White text on White header) */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link href="/admissions" style={{
            background: "linear-gradient(135deg, #0A192F, #1B3D6D)",
            color: "#FAF9F6", padding: scrolled ? "8px 20px" : "10px 24px", borderRadius: "25px",
            textDecoration: "none", fontSize: "13px", fontWeight: "700",
            letterSpacing: "0.5px", textTransform: "uppercase",
            boxShadow: "0 4px 15px rgba(10,25,47,0.15)",
            transition: "all 0.3s ease",
          }}
            className="navbar-cta"
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(10,25,47,0.25)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 15px rgba(10,25,47,0.15)"; }}
          >Apply Now</Link>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: "none", border: "none", color: "#0A192F", fontSize: "24px", cursor: "pointer", display: "none"
          }} className="mobile-toggle">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel (White Background) */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: "90px", left: 0, right: 0, bottom: 0, background: "#FFFFFF",
          zIndex: 999, display: "flex", flexDirection: "column", padding: "24px 32px", gap: "20px",
          overflowY: "auto", borderTop: "1px solid #F0EDE6"
        }}>
          <Link href="/" style={{ color: "#0A192F", textDecoration: "none", fontSize: "18px", fontWeight: "750" }}>Home</Link>

          {/* About (Collapsible) */}
          <div>
            <div onClick={() => toggleDropdown("about")} style={{ color: "#0A192F", fontSize: "18px", fontWeight: "750", display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
              <span>About Us</span>
              <span>{activeDropdown === "about" ? "▲" : "▼"}</span>
            </div>
            {activeDropdown === "about" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", paddingLeft: "16px", marginTop: "12px", borderLeft: "2px solid #0A192F" }}>
                <Link href="/about" style={{ color: "#435870", textDecoration: "none", fontSize: "15px" }}>Group Profile</Link>
                <Link href="/about#messages" style={{ color: "#435870", textDecoration: "none", fontSize: "15px" }}>Leadership Messages</Link>
                <Link href="/about#values" style={{ color: "#435870", textDecoration: "none", fontSize: "15px" }}>Core Values</Link>
              </div>
            )}
          </div>

          {/* Colleges (Collapsible) */}
          <div>
            <div onClick={() => toggleDropdown("colleges")} style={{ color: "#0A192F", fontSize: "18px", fontWeight: "750", display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
              <span>Colleges</span>
              <span>{activeDropdown === "colleges" ? "▲" : "▼"}</span>
            </div>
            {activeDropdown === "colleges" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", paddingLeft: "16px", marginTop: "12px", borderLeft: "2px solid #0A192F" }}>
                {collegesList.map((col) => (
                  <Link key={col.slug} href={`/colleges/${col.slug}`} style={{ color: "#435870", textDecoration: "none", fontSize: "15px" }}>
                    {col.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Academics (Collapsible) */}
          <div>
            <div onClick={() => toggleDropdown("courses")} style={{ color: "#0A192F", fontSize: "18px", fontWeight: "750", display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
              <span>Academics</span>
              <span>{activeDropdown === "courses" ? "▲" : "▼"}</span>
            </div>
            {activeDropdown === "courses" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", paddingLeft: "16px", marginTop: "12px", borderLeft: "2px solid #0A192F" }}>
                {coursesCategories.map((cat, idx) => (
                  <Link key={idx} href={`/courses${cat.query}`} style={{ color: "#435870", textDecoration: "none", fontSize: "15px" }}>
                    {cat.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/admissions" style={{ color: "#0A192F", textDecoration: "none", fontSize: "18px", fontWeight: "750" }}>Admissions</Link>
          <Link href="/contact" style={{ color: "#0A192F", textDecoration: "none", fontSize: "18px", fontWeight: "750" }}>Contact Us</Link>
        </div>
      )}

      {/* Global CSS Inject */}
      <style>{`
        .dropdown-item:hover {
          background-color: #FAF9F6 !important;
          color: #D4AF37 !important;
        }
        .nav-link:hover {
          color: #D4AF37 !important;
        }
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .navbar-cta { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </div>
  );
}
