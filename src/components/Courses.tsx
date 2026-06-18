"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { courses, colleges } from "@/lib/data";

const categories = ["All", "Pharmacy", "Nursing", "Education", "Law", "General"];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter only first 8 courses to show as highlights on the landing page
  const filtered = activeCategory === "All" 
    ? courses.slice(0, 8) 
    : courses.filter(c => c.category === activeCategory).slice(0, 8);

  return (
    <section id="courses" style={{
      padding: "120px 24px",
      background: "linear-gradient(135deg, #013a7d 0%, #014c9c 100%)"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>Academic Programs</span>
          <h2 style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontSize: "clamp(30px, 4vw, 44px)", color: "#FAF9F6", 
            marginTop: "12px", fontWeight: "800", letterSpacing: "-0.02em" 
          }}>
            Highlighted Courses
          </h2>
          <div style={{ width: "60px", height: "3px", background: "#D4AF37", margin: "20px auto 0", borderRadius: "2px" }} />
        </div>

        {/* Filter Tabs */}
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{
                padding: "10px 24px", borderRadius: "25px", cursor: "pointer",
                background: activeCategory === cat ? "linear-gradient(135deg, #D4AF37, #F2D06B)" : "transparent",
                color: activeCategory === cat ? "#013a7d" : "#FFFFFF",
                fontSize: "13px", fontWeight: "700",
                boxShadow: activeCategory === cat ? "0 4px 15px rgba(212,175,55,0.3)" : "none",
                transition: "all 0.3s ease",
                border: activeCategory === cat ? "none" : "1px solid rgba(255, 255, 255, 0.3)",
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid with AnimatePresence for smooth transitions */}
        <motion.div 
          layout
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((course) => {
              const college = colleges.find(c => c.slug === course.collegeSlug);
              return (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={course.slug} 
                  style={{
                    background: "#FFFFFF", 
                    backdropFilter: "none",
                    borderRadius: "16px", padding: "28px 24px",
                    border: "1px solid rgba(1, 58, 125, 0.06)",
                    borderTop: "3px solid #D4AF37",
                    boxShadow: "0 15px 35px rgba(1, 58, 125, 0.05)",
                    display: "flex", flexDirection: "column", gap: "12px",
                  }}
                  className="hover-lift"
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "32px" }}>{college?.icon || "🎓"}</span>
                    {/* Course Type Badge (Soft Blue Tint) */}
                    <span style={{
                      padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: "750",
                      background: "#FAF9F6",
                      color: "#013a7d",
                      letterSpacing: "0.5px", textTransform: "uppercase",
                      border: "1px solid rgba(1, 58, 125, 0.12)"
                    }}>{course.type}</span>
                  </div>
                  
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "17.5px", color: "#013a7d", fontWeight: "700", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                    {course.name}
                  </h3>
                  
                  <div style={{ marginTop: "8px", marginBottom: "8px" }}>
                    <Link href={`/courses/${course.slug}`} style={{
                      fontSize: "13px", fontWeight: "750", color: "#013a7d", textDecoration: "none"
                    }}
                      onMouseEnter={e => { e.currentTarget.style.textDecoration = "underline"; e.currentTarget.style.color = "#D4AF37"; }}
                      onMouseLeave={e => { e.currentTarget.style.textDecoration = "none"; e.currentTarget.style.color = "#013a7d"; }}
                    >
                      View Curriculum & Details →
                    </Link>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", borderTop: "1px solid rgba(1, 58, 125, 0.08)", paddingTop: "12px" }}>
                    <span style={{ fontSize: "13px", color: "#435870", fontWeight: "600" }}>⏱ {course.duration}</span>
                    {/* College Badge (Soft Blue Tint) */}
                    <span style={{
                      fontSize: "11px", fontWeight: "750", color: "#013a7d",
                      background: "#FAF9F6", padding: "4px 10px", borderRadius: "12px",
                      border: "1px solid rgba(1, 58, 125, 0.12)"
                    }}>{college?.shortName}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Link href="/courses" style={{
            display: "inline-block", background: "linear-gradient(135deg, #D4AF37, #F2D06B)",
            color: "#013a7d", padding: "14px 32px", borderRadius: "50px", textDecoration: "none",
            fontSize: "14px", fontWeight: "700", boxShadow: "0 6px 20px rgba(212, 175, 55, 0.25)",
            transition: "all 0.3s ease", textTransform: "uppercase", letterSpacing: "0.5px"
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 25px rgba(212, 175, 55, 0.35)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(212, 175, 55, 0.25)"; }}
          >
            Explore All 12+ Programs →
          </Link>
        </div>
      </div>
    </section>
  );
}
