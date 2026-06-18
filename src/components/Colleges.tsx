"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { colleges } from "@/lib/data";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
};

export default function Colleges() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="colleges" style={{ padding: "120px 24px", background: "linear-gradient(180deg, #F0EDE6 0%, #FAF9F6 100%)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>
            Our Institutions
          </span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(30px, 4vw, 44px)", color: "#0A192F",
            marginTop: "12px", fontWeight: "800", letterSpacing: "-0.02em"
          }}>Our Colleges</h2>
          <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #D4AF37, #F2D06B)", margin: "20px auto 0", borderRadius: "2px" }} />
          <p style={{ color: "#5A6E85", fontSize: "16px", marginTop: "20px", maxWidth: "500px", margin: "20px auto 0" }}>
            Five specialized institutions, one unified vision — excellence in education.
          </p>
        </div>

        {/* College Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}
        >
          {colleges.map((college) => (
            <motion.div 
              key={college.id}
              variants={cardVariants}
              onMouseEnter={() => setHovered(college.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === college.id
                  ? `linear-gradient(135deg, ${college.color}, #0A192F)`
                  : "#FFFFFF",
                borderRadius: "20px",
                padding: "36px 32px",
                boxShadow: hovered === college.id
                  ? `0 20px 40px rgba(10,25,47,0.25)`
                  : "0 4px 24px rgba(10,25,47,0.04)",
                transform: hovered === college.id ? "translateY(-8px)" : "translateY(0)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                border: "1px solid #F0EDE6",
                position: "relative", overflow: "hidden",
                cursor: "pointer"
              }}>

              {/* Background decoration */}
              {hovered === college.id && (
                <div style={{
                  position: "absolute", top: "-30px", right: "-30px",
                  width: "120px", height: "120px", borderRadius: "50%",
                  background: "rgba(212,175,55,0.08)",
                }} />
              )}

              {/* Badge */}
              <div style={{
                display: "inline-block", padding: "4px 14px", borderRadius: "20px",
                background: hovered === college.id ? "rgba(212,175,55,0.2)" : "rgba(10,25,47,0.05)",
                color: hovered === college.id ? "#F2D06B" : "#0A192F",
                fontSize: "11px", fontWeight: "700", letterSpacing: "1px",
                textTransform: "uppercase", marginBottom: "20px",
                transition: "all 0.4s ease",
              }}>{college.badge}</div>

              {/* Icon & Short Name */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <div style={{
                  width: "56px", height: "56px", borderRadius: "14px",
                  background: hovered === college.id ? "rgba(212,175,55,0.15)" : `${college.color}10`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "26px", flexShrink: 0,
                  border: hovered === college.id ? "1px solid rgba(212,175,55,0.3)" : `1px solid ${college.color}15`,
                }}>{college.icon}</div>
                <div style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "11px", fontWeight: "700", letterSpacing: "3px",
                  color: hovered === college.id ? "rgba(212,175,55,0.7)" : "#7E93A8",
                  textTransform: "uppercase",
                }}>{college.shortName}</div>
              </div>

              {/* Name */}
              <h3 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "20px", fontWeight: "800",
                color: hovered === college.id ? "#FAF9F6" : "#0A192F",
                marginBottom: "12px", lineHeight: 1.3,
                transition: "color 0.4s ease",
                letterSpacing: "-0.01em"
              }}>{college.name}</h3>

              {/* Desc */}
              <p style={{
                fontSize: "14px", lineHeight: 1.7,
                color: hovered === college.id ? "rgba(250,249,246,0.75)" : "#5A6E85",
                marginBottom: "24px", transition: "color 0.4s ease",
              }}>{college.desc}</p>

              {/* Link to detail page */}
              <div style={{ marginBottom: "24px" }}>
                <Link href={`/colleges/${college.slug}`} style={{
                  display: "inline-block", fontSize: "13.5px", fontWeight: "700",
                  textDecoration: "none", transition: "all 0.3s ease",
                  color: hovered === college.id ? "#F2D06B" : "#1B3D6D",
                }}
                  onMouseEnter={e => { e.currentTarget.style.textDecoration = "underline"; }}
                  onMouseLeave={e => { e.currentTarget.style.textDecoration = "none"; }}
                >
                  Explore Campus & Programs →
                </Link>
              </div>

              {/* Facilities */}
              <div style={{ borderTop: `1px solid ${hovered === college.id ? "rgba(212,175,55,0.2)" : "rgba(10,25,47,0.06)"}`, paddingTop: "20px" }}>
                <div style={{
                  fontSize: "11px", fontWeight: "700", letterSpacing: "1px",
                  textTransform: "uppercase", marginBottom: "12px",
                  color: hovered === college.id ? "#D4AF37" : "#0A192F",
                }}>Facilities</div>
                {college.facilities.slice(0, 2).map((fac, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    marginBottom: "8px", fontSize: "13px",
                    color: hovered === college.id ? "rgba(250,249,246,0.85)" : "#1C2D42",
                    transition: "color 0.4s ease",
                  }}>
                    <div style={{
                      width: "6px", height: "6px", borderRadius: "50%", flexShrink: 0,
                      background: hovered === college.id ? "#D4AF37" : college.color,
                    }} />
                    {fac.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
