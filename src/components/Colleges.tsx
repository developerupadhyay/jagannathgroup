"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { colleges, courses } from "@/lib/data";

export default function Colleges() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section id="colleges" ref={sectionRef} style={{
      padding: "120px 24px",
      position: "relative",
      overflow: "hidden",
      borderBottom: "1px solid rgba(1, 58, 125, 0.05)"
    }}>
      {/* Parallax Background Image */}
      <motion.div
        style={{
          position: "absolute",
          top: "-20%",
          left: 0,
          width: "100%",
          height: "140%",
          backgroundImage: "url('/website_images/college_outside_photo3.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: y,
          zIndex: 0
        }}
      />

      {/* Dark Brand Overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, rgba(0, 26, 61, 0.94) 0%, rgba(1, 58, 125, 0.88) 50%, rgba(0, 26, 61, 0.96) 100%)",
        zIndex: 1
      }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>
            Our Institutions
          </span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(30px, 4vw, 44px)", color: "#FFFFFF",
            marginTop: "12px", fontWeight: "800", letterSpacing: "-0.02em"
          }}>Our Colleges</h2>
          <div style={{ width: "60px", height: "3px", background: "#D4AF37", margin: "20px auto 0", borderRadius: "2px" }} />
          <p style={{ color: "rgba(255, 255, 255, 0.82)", fontSize: "16px", marginTop: "20px", maxWidth: "600px", margin: "20px auto 0" }}>
            Explore our five specialized institutions delivering world-class professional training.
          </p>
        </div>

        {/* Bento Grid (Clean collage style, no outer wrapper background) */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(3, 1fr)", 
          gap: "20px"
        }} className="colleges-bento-collage">
          
          {colleges.map((college, index) => {
            const isWide = index === 0; // Only the first card is wide to perfectly fill the 3-column grid
            const isHovered = hoveredCard === college.slug;
            const collegeCourses = courses.filter(c => c.collegeSlug === college.slug);

            return (
              <motion.div
                key={college.slug}
                onMouseEnter={() => setHoveredCard(college.slug)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  position: "relative",
                  height: "420px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(212, 175, 55, 0.15)",
                  zIndex: isHovered ? 10 : 1,
                  scale: isHovered ? 1.02 : 1,
                  boxShadow: isHovered
                    ? "0 20px 45px rgba(0, 0, 0, 0.4)"
                    : "0 8px 24px rgba(0, 0, 0, 0.25)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                  gridColumn: isWide ? "span 2" : "auto"
                }}
                className={isWide ? "bento-card-wide" : ""}
              >
                {/* Background Image */}
                <img
                  src={college.image}
                  alt={college.name}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                    transform: isHovered ? "scale(1.08)" : "scale(1)"
                  }}
                />

                {/* Translucent Brand Gradient Overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  transition: "all 0.4s ease",
                  background: isHovered
                    ? "linear-gradient(135deg, rgba(1, 58, 125, 0.94) 0%, rgba(0, 26, 61, 0.96) 100%)"
                    : "linear-gradient(to top, rgba(0, 26, 61, 0.9) 0%, rgba(0, 26, 61, 0.45) 60%, transparent 100%)",
                  zIndex: 1
                }} />

                {/* Card Content Wrapper */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  padding: "30px",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  height: "100%"
                }}>
                  {/* Floating Top Header Badges */}
                  <div style={{ 
                    position: "absolute", top: "30px", left: "30px", right: "30px",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    opacity: isHovered ? 0.3 : 1, transition: "opacity 0.3s ease"
                  }}>
                    <span style={{
                      fontSize: "9px", fontWeight: "750", color: "#D4AF37",
                      background: "rgba(0, 26, 61, 0.6)", backdropFilter: "blur(4px)",
                      padding: "6px 12px", borderRadius: "20px", textTransform: "uppercase",
                      border: "1px solid rgba(212, 175, 55, 0.25)"
                    }}>{college.badge}</span>
                    <span style={{
                      fontSize: "11px", fontWeight: "750", color: "#FFFFFF",
                      textShadow: "0 2px 4px rgba(0,0,0,0.4)"
                    }}>Est. {college.established}</span>
                  </div>

                  {/* Icon & Title Info */}
                  <div style={{
                    transform: isHovered ? "translateY(-10px)" : "translateY(0)",
                    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                      <span style={{
                        width: "38px", height: "38px", borderRadius: "8px",
                        background: "rgba(255, 255, 255, 0.15)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "18px", border: "1px solid rgba(255, 255, 255, 0.2)"
                      }}>{college.icon}</span>
                      <span style={{
                        fontSize: "11px", fontWeight: "800", letterSpacing: "3px",
                        color: "#D4AF37", textTransform: "uppercase"
                      }}>{college.shortName}</span>
                    </div>

                    <h3 style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: isWide ? "clamp(20px, 3vw, 24px)" : "19px",
                      color: "#FFFFFF", fontWeight: "800",
                      lineHeight: 1.25, letterSpacing: "-0.01em"
                    }}>
                      {college.name}
                    </h3>
                  </div>

                  {/* Revealable Details Block */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <p style={{
                          color: "#E2E8F0", fontSize: "13.5px", lineHeight: 1.55,
                          marginBottom: "16px", display: "-webkit-box",
                          WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden"
                        }}>
                          {college.desc}
                        </p>

                        {/* List of Courses Highlights */}
                        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "20px" }}>
                          {collegeCourses.slice(0, 3).map(course => (
                            <span key={course.slug} style={{
                              fontSize: "11px", background: "rgba(255, 255, 255, 0.08)",
                              color: "#FAF9F6", padding: "4px 8px", borderRadius: "6px",
                              fontWeight: "600", border: "1px solid rgba(255, 255, 255, 0.06)"
                            }}>
                              {course.name.split(" (")[0]}
                            </span>
                          ))}
                        </div>

                        {/* CTA button */}
                        <Link href={`/colleges/${college.slug}`} style={{
                          display: "inline-block", background: "#D4AF37", color: "#001A3D",
                          padding: "10px 24px", borderRadius: "8px", textDecoration: "none",
                          fontSize: "12.5px", fontWeight: "750", textTransform: "uppercase",
                          letterSpacing: "0.5px", boxShadow: "0 4px 14px rgba(212, 175, 55, 0.2)",
                          transition: "all 0.3s"
                        }}
                          onMouseEnter={e => { e.currentTarget.style.background = "#FFFFFF"; }}
                          onMouseLeave={e => { e.currentTarget.style.background = "#D4AF37"; }}
                        >
                          Explore College →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hint indicator when not hovered */}
                  {!isHovered && (
                    <div style={{ 
                      fontSize: "11px", color: "rgba(255, 255, 255, 0.5)", 
                      marginTop: "12px", display: "flex", alignItems: "center", gap: "6px" 
                    }}>
                      <span>✦</span> Hover to explore details
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .colleges-bento-collage {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          .bento-card-wide {
            grid-column: span 2 !important;
          }
        }
        @media (max-width: 768px) {
          .colleges-bento-collage {
            grid-template-columns: 1fr !important;
          }
          .bento-card-wide {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
