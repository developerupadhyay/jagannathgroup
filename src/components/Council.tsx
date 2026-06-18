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
    <section id="council" style={{ padding: "120px 24px", background: "#FAF9F6" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>Governing Board</span>
          <h2 style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontSize: "clamp(30px, 4vw, 44px)", color: "#0A192F", 
            marginTop: "12px", fontWeight: "800", letterSpacing: "-0.02em" 
          }}>Academic Advisory Council</h2>
          <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #D4AF37, #F2D06B)", margin: "20px auto 0", borderRadius: "2px" }} />
          <p style={{ color: "#5A6E85", fontSize: "16px", marginTop: "20px", maxWidth: "600px", margin: "20px auto 0" }}>
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
                background: "#FFFFFF", borderRadius: "20px", padding: "32px 24px",
                border: "1px solid #F0EDE6", textAlign: "center",
                boxShadow: "0 4px 20px rgba(10,25,47,0.02)"
              }}
              className="hover-lift"
            >
              {/* Member Avatar */}
              <div style={{
                width: "90px", height: "90px", borderRadius: "50%",
                background: "linear-gradient(135deg, #0A192F 0%, #1B3D6D 100%)",
                margin: "0 auto 20px", display: "flex", alignItems: "center", justifyItems: "center",
                justifyContent: "center", fontSize: "40px", color: "#FAF9F6",
                boxShadow: "0 6px 15px rgba(10,25,47,0.15)", border: "3px solid #D4AF37"
              }}>
                {member.image}
              </div>

              {/* Details */}
              <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "17.5px", color: "#0A192F", fontWeight: "700", marginBottom: "4px" }}>
                {member.name}
              </h4>
              <p style={{ fontSize: "13px", fontWeight: "700", color: "#D4AF37", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
                {member.role}
              </p>
              <div style={{ width: "30px", height: "1px", background: "#F0EDE6", margin: "12px auto" }} />
              <p style={{ color: "#5A6E85", fontSize: "13px", lineHeight: 1.5 }}>
                {member.designation}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
