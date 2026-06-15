"use client";
import { useState } from "react";

const colleges = [
  {
    id: 1,
    icon: "💊",
    name: "Jagannath College of Pharmacy",
    shortName: "JCP",
    color: "#C41E3A",
    courses: ["Diploma in Pharmacy (D.Pharma)", "Bachelor of Pharmacy (B.Pharma)"],
    desc: "Offering quality pharmaceutical education with state-of-the-art laboratories and experienced faculty, affiliated with UP Board of Technical Education.",
    badge: "Pharmacy",
  },
  {
    id: 2,
    icon: "🏥",
    name: "Jagannath College of Nursing",
    shortName: "JCN",
    color: "#8B1A1A",
    courses: ["B.Sc Nursing", "General Nursing & Midwifery (G.N.M)"],
    desc: "Training compassionate nursing professionals with clinical expertise and patient care skills to meet global healthcare demands.",
    badge: "Nursing",
  },
  {
    id: 3,
    icon: "📚",
    name: "Shiva Educational Institute",
    shortName: "SEI",
    color: "#6B1515",
    courses: ["Bachelor of Education (B.Ed)"],
    desc: "Shaping tomorrow's educators with innovative pedagogy, modern teaching methods and a holistic approach to education.",
    badge: "Education",
  },
  {
    id: 4,
    icon: "⚖️",
    name: "Shiva College of Law",
    shortName: "SCL",
    color: "#5C0A14",
    courses: ["B.A + L.L.B (Integrated)", "L.L.B (3 Year)"],
    desc: "Providing comprehensive legal education with moot courts, legal aid clinics and experienced practitioners as faculty members.",
    badge: "Law",
  },
  {
    id: 5,
    icon: "🎓",
    name: "Shri Jagannath Ji Education Institute",
    shortName: "SJEI",
    color: "#A01F1F",
    courses: ["D.El.Ed", "Bachelor of Commerce (B.Com)", "Bachelor of Arts (B.A)", "Bachelor of Business Administration (B.B.A)", "Bachelor of Computer Applications (B.C.A)"],
    desc: "A multidisciplinary institution offering diverse academic programs in education, commerce, arts, business and computer applications.",
    badge: "Multi-Discipline",
  },
];

export default function Colleges() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="colleges" style={{ padding: "100px 24px", background: "linear-gradient(180deg, #F0E8D8 0%, #FAF6EF 100%)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{ color: "#8B1A1A", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>
            Our Institutions
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(30px, 4vw, 48px)", color: "#5C0A14",
            marginTop: "12px", fontWeight: "700",
          }}>Our Colleges</h2>
          <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #D4AF37, #F0D060)", margin: "20px auto 0", borderRadius: "2px" }} />
          <p style={{ color: "#8B6060", fontSize: "16px", marginTop: "20px", maxWidth: "500px", margin: "20px auto 0" }}>
            Five specialized institutions, one unified vision — excellence in education.
          </p>
        </div>

        {/* College Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
          {colleges.map((college) => (
            <div key={college.id}
              onMouseEnter={() => setHovered(college.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === college.id
                  ? `linear-gradient(135deg, ${college.color}, #8B1A1A)`
                  : "#FFFFFF",
                borderRadius: "20px",
                padding: "36px 32px",
                boxShadow: hovered === college.id
                  ? `0 20px 60px rgba(92,10,20,0.3)`
                  : "0 4px 24px rgba(92,10,20,0.08)",
                transform: hovered === college.id ? "translateY(-8px)" : "translateY(0)",
                transition: "all 0.4s ease",
                cursor: "pointer",
                border: "1px solid rgba(139,26,26,0.1)",
                position: "relative", overflow: "hidden",
              }}>

              {/* Background decoration */}
              {hovered === college.id && (
                <div style={{
                  position: "absolute", top: "-30px", right: "-30px",
                  width: "120px", height: "120px", borderRadius: "50%",
                  background: "rgba(212,175,55,0.1)",
                }} />
              )}

              {/* Badge */}
              <div style={{
                display: "inline-block", padding: "4px 14px", borderRadius: "20px",
                background: hovered === college.id ? "rgba(212,175,55,0.2)" : "rgba(139,26,26,0.08)",
                color: hovered === college.id ? "#F0D060" : "#8B1A1A",
                fontSize: "11px", fontWeight: "700", letterSpacing: "1px",
                textTransform: "uppercase", marginBottom: "20px",
                transition: "all 0.4s ease",
              }}>{college.badge}</div>

              {/* Icon & Short Name */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <div style={{
                  width: "56px", height: "56px", borderRadius: "14px",
                  background: hovered === college.id ? "rgba(212,175,55,0.15)" : `${college.color}15`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "26px", flexShrink: 0,
                  border: hovered === college.id ? "1px solid rgba(212,175,55,0.3)" : "1px solid rgba(139,26,26,0.1)",
                }}>{college.icon}</div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "11px", fontWeight: "700", letterSpacing: "3px",
                  color: hovered === college.id ? "rgba(212,175,55,0.7)" : "#8B6060",
                  textTransform: "uppercase",
                }}>{college.shortName}</div>
              </div>

              {/* Name */}
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "20px", fontWeight: "700",
                color: hovered === college.id ? "#FAF6EF" : "#5C0A14",
                marginBottom: "12px", lineHeight: 1.3,
                transition: "color 0.4s ease",
              }}>{college.name}</h3>

              {/* Desc */}
              <p style={{
                fontSize: "14px", lineHeight: 1.7,
                color: hovered === college.id ? "rgba(250,246,239,0.75)" : "#8B6060",
                marginBottom: "24px", transition: "color 0.4s ease",
              }}>{college.desc}</p>

              {/* Courses */}
              <div style={{ borderTop: `1px solid ${hovered === college.id ? "rgba(212,175,55,0.2)" : "rgba(139,26,26,0.1)"}`, paddingTop: "20px" }}>
                <div style={{
                  fontSize: "11px", fontWeight: "700", letterSpacing: "1px",
                  textTransform: "uppercase", marginBottom: "12px",
                  color: hovered === college.id ? "#D4AF37" : "#8B1A1A",
                }}>Courses Offered</div>
                {college.courses.map((course, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    marginBottom: "8px", fontSize: "13px",
                    color: hovered === college.id ? "rgba(250,246,239,0.85)" : "#4A2020",
                    transition: "color 0.4s ease",
                  }}>
                    <div style={{
                      width: "6px", height: "6px", borderRadius: "50%", flexShrink: 0,
                      background: hovered === college.id ? "#D4AF37" : "#C41E3A",
                    }} />
                    {course}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
