"use client";
import { useState } from "react";

const allCourses = [
  { college: "JCP", icon: "💊", name: "Diploma in Pharmacy", duration: "2 Years", type: "Diploma", category: "Pharmacy" },
  { college: "JCP", icon: "💊", name: "Bachelor of Pharmacy", duration: "4 Years", type: "Degree", category: "Pharmacy" },
  { college: "JCN", icon: "🏥", name: "B.Sc Nursing", duration: "4 Years", type: "Degree", category: "Nursing" },
  { college: "JCN", icon: "🏥", name: "General Nursing & Midwifery (GNM)", duration: "3 Years", type: "Diploma", category: "Nursing" },
  { college: "SEI", icon: "📚", name: "Bachelor of Education (B.Ed)", duration: "2 Years", type: "Degree", category: "Education" },
  { college: "SCL", icon: "⚖️", name: "B.A + L.L.B (Integrated)", duration: "5 Years", type: "Integrated", category: "Law" },
  { college: "SCL", icon: "⚖️", name: "L.L.B", duration: "3 Years", type: "Degree", category: "Law" },
  { college: "SJEI", icon: "🎓", name: "D.El.Ed", duration: "2 Years", type: "Diploma", category: "General" },
  { college: "SJEI", icon: "📊", name: "Bachelor of Commerce (B.Com)", duration: "3 Years", type: "Degree", category: "General" },
  { college: "SJEI", icon: "🎨", name: "Bachelor of Arts (B.A)", duration: "3 Years", type: "Degree", category: "General" },
  { college: "SJEI", icon: "💼", name: "Bachelor of Business Administration (B.B.A)", duration: "3 Years", type: "Degree", category: "General" },
  { college: "SJEI", icon: "💻", name: "Bachelor of Computer Applications (B.C.A)", duration: "3 Years", type: "Degree", category: "General" },
];

const categories = ["All", "Pharmacy", "Nursing", "Education", "Law", "General"];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? allCourses : allCourses.filter(c => c.category === activeCategory);

  return (
    <section id="courses" style={{ padding: "100px 24px", background: "#FAF6EF" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ color: "#8B1A1A", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>Academic Programs</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 48px)", color: "#5C0A14", marginTop: "12px", fontWeight: "700" }}>
            All Courses
          </h2>
          <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #D4AF37, #F0D060)", margin: "20px auto 0", borderRadius: "2px" }} />
        </div>

        {/* Filter Tabs */}
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{
                padding: "10px 24px", borderRadius: "25px", border: "none", cursor: "pointer",
                background: activeCategory === cat ? "linear-gradient(135deg, #8B1A1A, #C41E3A)" : "#FFF",
                color: activeCategory === cat ? "#FAF6EF" : "#8B1A1A",
                fontSize: "13px", fontWeight: "600",
                boxShadow: activeCategory === cat ? "0 4px 20px rgba(139,26,26,0.3)" : "0 2px 8px rgba(92,10,20,0.08)",
                transition: "all 0.3s ease",
                border: activeCategory === cat ? "none" : "1px solid rgba(139,26,26,0.15)",
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
          {filtered.map((course, i) => (
            <div key={i} style={{
              background: "#FFF", borderRadius: "16px", padding: "28px 24px",
              border: "1px solid rgba(139,26,26,0.08)",
              boxShadow: "0 2px 16px rgba(92,10,20,0.06)",
              transition: "all 0.3s ease",
              display: "flex", flexDirection: "column", gap: "12px",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(92,10,20,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 16px rgba(92,10,20,0.06)"; }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "32px" }}>{course.icon}</span>
                <span style={{
                  padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: "700",
                  background: course.type === "Diploma" ? "rgba(212,175,55,0.15)" : course.type === "Integrated" ? "rgba(196,30,58,0.1)" : "rgba(139,26,26,0.08)",
                  color: course.type === "Diploma" ? "#8B7020" : course.type === "Integrated" ? "#C41E3A" : "#8B1A1A",
                  letterSpacing: "0.5px",
                }}>{course.type}</span>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", color: "#5C0A14", fontWeight: "700", lineHeight: 1.3 }}>
                {course.name}
              </h3>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                <span style={{ fontSize: "13px", color: "#8B6060" }}>⏱ {course.duration}</span>
                <span style={{
                  fontSize: "11px", fontWeight: "700", color: "#8B1A1A",
                  background: "rgba(139,26,26,0.06)", padding: "4px 10px", borderRadius: "12px",
                }}>{course.college}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
