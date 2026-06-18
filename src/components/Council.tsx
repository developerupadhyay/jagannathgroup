"use client";
import { motion } from "framer-motion";
import { councilMembers } from "@/lib/data";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
};

export default function Council() {
  return (
    <section id="council" style={{ background: "#FFFFFF", borderBottom: "1px solid rgba(1, 58, 125, 0.05)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>Governing Board</span>
          <h2 style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontSize: "clamp(30px, 4vw, 44px)", color: "#013a7d", 
            marginTop: "12px", fontWeight: "800", letterSpacing: "-0.02em" 
          }}>Academic Advisory Council</h2>
          <div style={{ width: "60px", height: "3px", background: "#D4AF37", margin: "20px auto 0", borderRadius: "2px" }} />
          <p style={{ color: "#475569", fontSize: "16px", marginTop: "20px", maxWidth: "600px", margin: "20px auto 0" }}>
            Our institutions are governed and guided by eminent academicians, administrators, and industry experts.
          </p>
        </div>

        {/* Council Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}
        >
          {councilMembers.map((member, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              style={{
                background: "#013a7d", 
                backdropFilter: "none",
                borderRadius: "16px", padding: "32px 24px",
                border: "1px solid rgba(212, 175, 55, 0.15)",
                borderTop: "3px solid #D4AF37",
                textAlign: "center",
                boxShadow: "0 15px 35px rgba(1, 58, 125, 0.1)"
              }}
              className="hover-lift"
            >
              {/* Member Avatar (Soft Gold Tint Badge inside Light Card) */}
              <div style={{
                width: "90px", height: "90px", borderRadius: "50%",
                background: "#002452",
                margin: "0 auto 20px", display: "flex", alignItems: "center", justifyItems: "center",
                justifyContent: "center", fontSize: "40px",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)", border: "2px solid #D4AF37"
              }}>
                {member.image}
              </div>

              {/* Details */}
              <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", color: "#FFFFFF", fontWeight: "800", marginBottom: "4px" }}>
                {member.name}
              </h4>
              <p style={{ fontSize: "11px", fontWeight: "750", color: "#D4AF37", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
                {member.role}
              </p>
              <div style={{ width: "40px", height: "1.5px", background: "rgba(255, 255, 255, 0.15)", margin: "12px auto", borderRadius: "1px" }} />
              <p style={{ color: "#E2E8F0", fontSize: "13.5px", lineHeight: 1.5 }}>
                {member.designation}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>

      <style>{`
        #council {
          padding: 120px 24px;
        }
        @media (max-width: 768px) {
          #council {
            padding: 80px 16px;
          }
        }
      `}</style>
    </section>
  );
}
