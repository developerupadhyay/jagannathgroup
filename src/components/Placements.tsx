"use client";
import { motion } from "framer-motion";
import { placementStats, placementRecruiters } from "@/lib/data";

export default function Placements() {
  return (
    <section id="placements" style={{
      padding: "120px 24px",
      background: "linear-gradient(135deg, #013a7d 0%, #014c9c 100%)"
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>Industry Alignments</span>
          <h2 style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontSize: "clamp(30px, 4vw, 44px)", color: "#FAF9F6", 
            marginTop: "12px", fontWeight: "800", letterSpacing: "-0.02em" 
          }}>Placements & Recruiter Highlights</h2>
          <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #D4AF37, #F2D06B)", margin: "20px auto 0", borderRadius: "2px" }} />
          <p style={{ color: "#BAC9DA", fontSize: "16px", marginTop: "20px", maxWidth: "600px", margin: "20px auto 0" }}>
            Our Corporate Resource Centre (CRC) bridges the academic-industry gap, ensuring top recruitment opportunities.
          </p>
        </div>

        {/* Info Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.8fr", gap: "60px", alignItems: "stretch" }} className="placements-layout">
          
          {/* Left: Stats (Dark Glassmorphic Cards) */}
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
                background: "#FFFFFF", 
                backdropFilter: "none",
                padding: "28px 20px", borderRadius: "16px",
                border: "1px solid rgba(1, 58, 125, 0.06)",
                borderLeft: "4px solid #D4AF37",
                boxShadow: "0 15px 35px rgba(1, 58, 125, 0.05)",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px"
              }}
                className="hover-lift"
              >
                {/* Stat Value Badge (Soft Gold Tint) */}
                <div style={{ 
                  fontSize: "24px", 
                  fontWeight: "800", 
                  color: "#D4AF37", 
                  fontFamily: "'Outfit', sans-serif",
                  background: "rgba(212, 175, 55, 0.12)",
                  padding: "6px 16px",
                  borderRadius: "10px",
                  display: "inline-block",
                  border: "1px solid rgba(212, 175, 55, 0.25)"
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "12px", color: "#435870", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Recruiters Grid (Dark Glass Card Wrapper) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ height: "100%" }}
          >
            <div style={{
              background: "#FFFFFF", 
              backdropFilter: "none",
              borderRadius: "24px", padding: "40px",
              border: "1px solid rgba(1, 58, 125, 0.06)", 
              borderTop: "3px solid #D4AF37",
              boxShadow: "0 20px 45px rgba(1, 58, 125, 0.06)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", color: "#013a7d", fontWeight: "700", marginBottom: "24px", textAlign: "center" }}>
                Top Recruiting Partners
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }} className="recruiters-grid">
                {placementRecruiters.map((rec, i) => (
                  <div key={i} style={{
                    background: "#FAF9F6", 
                    backdropFilter: "none",
                    padding: "16px 12px", borderRadius: "12px",
                    display: "flex", flexDirection: "column", gap: "8px", alignItems: "center",
                    textAlign: "center", border: "1px solid rgba(1, 58, 125, 0.08)",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.03)"
                  }}
                    className="hover-lift"
                  >
                    <span style={{ fontSize: "24px" }}>{rec.logo}</span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#013a7d" }}>{rec.name}</span>
                    <span style={{ fontSize: "9px", color: "#D4AF37", textTransform: "uppercase", fontWeight: "600", letterSpacing: "0.5px" }}>
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
        @media (max-width: 480px) {
          .stats-container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
