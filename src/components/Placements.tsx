"use client";
import { motion } from "framer-motion";
import { placementStats, placementRecruiters } from "@/lib/data";

export default function Placements() {
  return (
    <section id="placements" style={{ padding: "120px 24px", background: "linear-gradient(180deg, #FAF9F6 0%, #F0F4F8 100%)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>Industry Alignments</span>
          <h2 style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontSize: "clamp(30px, 4vw, 44px)", color: "#0A192F", 
            marginTop: "12px", fontWeight: "800", letterSpacing: "-0.02em" 
          }}>Placements & Recruiter Highlights</h2>
          <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #D4AF37, #F2D06B)", margin: "20px auto 0", borderRadius: "2px" }} />
          <p style={{ color: "#5A6E85", fontSize: "16px", marginTop: "20px", maxWidth: "600px", margin: "20px auto 0" }}>
            Our Corporate Resource Centre (CRC) bridges the academic-industry gap, ensuring top recruitment opportunities.
          </p>
        </div>

        {/* Info Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.8fr", gap: "60px", alignItems: "center" }} className="placements-layout">
          
          {/* Left: Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
            className="stats-container"
          >
            {placementStats.map((stat, i) => (
              <div key={i} style={{
                background: "#FFFFFF", padding: "28px 20px", borderRadius: "16px",
                border: "1px solid #FAF9F6", boxShadow: "0 4px 20px rgba(10,25,47,0.02)",
                textAlign: "center"
              }}
                className="hover-lift"
              >
                <div style={{ fontSize: "28px", fontWeight: "800", color: "#D4AF37", fontFamily: "'Outfit', sans-serif" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "12px", color: "#5A6E85", fontWeight: "600", marginTop: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Recruiters Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{
              background: "#FFFFFF", borderRadius: "24px", padding: "40px",
              border: "1px solid #F0EDE6", boxShadow: "0 10px 30px rgba(10,25,47,0.03)"
            }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", color: "#0A192F", fontWeight: "700", marginBottom: "24px", textAlign: "center" }}>
                Top Recruiting Partners
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }} className="recruiters-grid">
                {placementRecruiters.map((rec, i) => (
                  <div key={i} style={{
                    background: "#F8F9FA", padding: "16px 12px", borderRadius: "12px",
                    display: "flex", flexDirection: "column", gap: "8px", alignItems: "center",
                    textAlign: "center", border: "1px solid #F0EDE6"
                  }}
                    className="hover-lift"
                  >
                    <span style={{ fontSize: "24px" }}>{rec.logo}</span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#0A192F" }}>{rec.name}</span>
                    <span style={{ fontSize: "9px", color: "#7E93A8", textTransform: "uppercase", fontWeight: "600", letterSpacing: "0.5px" }}>
                      {rec.sector.split(" ")[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .placements-layout { grid-template-columns: 1fr !important; gap: 40px !important; }
          .recruiters-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
