"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "140px", background: "#FAF9F6", minHeight: "100vh" }}>
        
        {/* About Hero Section */}
        <section style={{ padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>
              Our Legacy & History
            </span>
            <h1 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              color: "#0A192F",
              marginTop: "16px",
              fontWeight: "800",
              lineHeight: 1.2,
              letterSpacing: "-0.02em"
            }}>
              Nurturing Minds, Building Futures
            </h1>
            <div style={{ width: "80px", height: "3px", background: "linear-gradient(90deg, #D4AF37, #F2D06B)", margin: "24px auto" }} />
            <p style={{ color: "#1C2D42", fontSize: "17px", lineHeight: 1.8, maxWidth: "750px", margin: "0 auto" }}>
              Since our inception, the <strong>Jagannath Group of Institutions</strong> has been at the forefront of higher education in Western Uttar Pradesh. Located at Modinagar, Ghaziabad, we have spent over two decades fostering academic excellence, practical skill acquisition, and strong moral character across five dedicated campuses.
            </p>
          </div>
        </section>

        {/* Stats Grid */}
        <section style={{ padding: "40px 24px", background: "linear-gradient(180deg, #FAF9F6 0%, #F0EDE6 100%)" }}>
          <div style={{
            maxWidth: "1100px", margin: "0 auto",
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px",
          }} className="stats-grid">
            {[
              { val: "25+", title: "Years Legacy" },
              { val: "5", title: "Specialized Colleges" },
              { val: "12+", title: "Professional Programs" },
              { val: "5000+", title: "Successful Alumni" }
            ].map((stat, i) => (
              <div key={i} style={{
                background: "#FFFFFF", padding: "32px 24px", borderRadius: "16px",
                border: "1px solid #FAF9F6", textAlign: "center",
                boxShadow: "0 4px 20px rgba(10,25,47,0.03)"
              }}>
                <div style={{ fontSize: "36px", fontWeight: "800", color: "#0A192F", fontFamily: "'Outfit', sans-serif", marginBottom: "8px" }}>
                  {stat.val}
                </div>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#7E93A8", textTransform: "uppercase", letterSpacing: "1px" }}>
                  {stat.title}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="values" style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }} className="vision-mission-grid">
            {/* Vision */}
            <div style={{
              background: "#FFFFFF", padding: "48px 40px", borderRadius: "24px",
              border: "1px solid #F0EDE6", boxShadow: "0 10px 30px rgba(10,25,47,0.03)",
              display: "flex", flexDirection: "column", gap: "20px"
            }}>
              <div style={{ fontSize: "40px" }}>👁️‍🗨️</div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "26px", color: "#0A192F", fontWeight: "700" }}>Our Vision</h3>
              <p style={{ color: "#435870", lineHeight: 1.8, fontSize: "15px" }}>
                To emerge as a premier educational group known for fostering innovation, analytical thinking, and ethical values. We strive to create an inclusive environment where students from diverse backgrounds are empowered to become global leaders, compassionate caregivers, and pioneering researchers.
              </p>
            </div>

            {/* Mission */}
            <div style={{
              background: "#FFFFFF", padding: "48px 40px", borderRadius: "24px",
              border: "1px solid #F0EDE6", boxShadow: "0 10px 30px rgba(10,25,47,0.03)",
              display: "flex", flexDirection: "column", gap: "20px"
            }}>
              <div style={{ fontSize: "40px" }}>🎯</div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "26px", color: "#0A192F", fontWeight: "700" }}>Our Mission</h3>
              <p style={{ color: "#435870", lineHeight: 1.8, fontSize: "15px" }}>
                To deliver state-of-the-art infrastructure, advanced laboratory training, and clinical exposure to bridge the gap between academic education and industry standards. We are dedicated to providing affordable, high-quality professional training in Pharmacy, Nursing, Law, and Education while inculcating social responsibility in every student.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Messages */}
        <section id="messages" style={{ padding: "80px 24px", background: "#F0EDE6" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>Leadership</span>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(28px, 4vw, 42px)", color: "#0A192F", marginTop: "12px", fontWeight: "800" }}>Messages from Leadership</h2>
              <div style={{ width: "60px", height: "3px", background: "#D4AF37", margin: "16px auto" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              {/* Chairman */}
              <div style={{
                background: "#FFFFFF", borderRadius: "24px", padding: "48px",
                boxShadow: "0 10px 30px rgba(10,25,47,0.03)", display: "grid", gridTemplateColumns: "1.2fr 2fr", gap: "40px",
                alignItems: "center", border: "1px solid #FAF9F6"
              }} className="leader-card">
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    width: "140px", height: "140px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #0A192F 0%, #1B3D6D 100%)",
                    margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "64px", color: "#FAF9F6", border: "4px solid #D4AF37",
                    boxShadow: "0 8px 20px rgba(10,25,47,0.2)"
                  }}>👨‍🏫</div>
                  <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", color: "#0A192F", fontWeight: "700", marginBottom: "4px" }}>
                    Shri Jagannath Ji
                  </h4>
                  <p style={{ color: "#7E93A8", fontSize: "13px", fontWeight: "600", textTransform: "uppercase" }}>Founder & Chairman</p>
                </div>
                <div>
                  <p style={{ color: "#1C2D42", fontStyle: "italic", fontSize: "16px", lineHeight: 1.9, marginBottom: "20px" }}>
                    "Our vision has always been to build institutions that do not just award degrees, but transform personalities. Education is the greatest tool for societal change. By providing high-quality professional courses in Pharmacy, Nursing, Law, and Education to the youth of Ghaziabad and surrounding regions, we hope to contribute to our nation's progress and ensure every student builds a meaningful, successful life."
                  </p>
                  <div style={{ width: "40px", height: "2px", background: "#D4AF37" }} />
                </div>
              </div>

              {/* Managing Director */}
              <div style={{
                background: "#FFFFFF", borderRadius: "24px", padding: "48px",
                boxShadow: "0 10px 30px rgba(10,25,47,0.03)", display: "grid", gridTemplateColumns: "2fr 1.2fr", gap: "40px",
                alignItems: "center", border: "1px solid #FAF9F6"
              }} className="leader-card MD-card">
                <div>
                  <p style={{ color: "#1C2D42", fontStyle: "italic", fontSize: "16px", lineHeight: 1.9, marginBottom: "20px" }}>
                    "The demand for skilled professionals in healthcare, technology, legal systems, and school education is growing exponentially. At Jagannath Group, we constantly upgrade our libraries, laboratories, and teaching processes. Our focus is on practical skills—whether it is training in corporate hospitals, presenting arguments in moot courts, or practicing coding in computer centers. We welcome you to join our family."
                  </p>
                  <div style={{ width: "40px", height: "2px", background: "#D4AF37", marginLeft: "auto" }} className="divider-right" />
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    width: "140px", height: "140px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #D4AF37, #F2D06B)",
                    margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "64px", color: "#0A192F", border: "4px solid #1B3D6D",
                    boxShadow: "0 8px 20px rgba(212,175,55,0.2)"
                  }}>👨‍💼</div>
                  <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", color: "#0A192F", fontWeight: "700", marginBottom: "4px" }}>
                    Dr. Amit Kumar
                  </h4>
                  <p style={{ color: "#7E93A8", fontSize: "13px", fontWeight: "600", textTransform: "uppercase" }}>Managing Director</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditations & Affiliations */}
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
            <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>Recognitions</span>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "32px", color: "#0A192F", marginTop: "12px", fontWeight: "800", marginBottom: "16px" }}>
              Approvals & Affiliations
            </h2>
            <p style={{ color: "#5A6E85", fontSize: "15px", maxWidth: "600px", margin: "0 auto 40px" }}>
              Our courses are recognized and approved by the top regulatory and governing councils of India.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
              {[
                { title: "PCI Approved", desc: "Pharmacy Council of India, New Delhi", icon: "⚖️" },
                { title: "INC Recognized", desc: "Indian Nursing Council, New Delhi", icon: "🩺" },
                { title: "BCI Approved", desc: "Bar Council of India, New Delhi", icon: "🏛️" },
                { title: "NCTE Approved", desc: "National Council for Teacher Education", icon: "🏫" },
                { title: "ABVMU Affiliated", desc: "Atal Bihari Vajpayee Medical University", icon: "🎓" },
                { title: "CCS University", desc: "Chaudhary Charan Singh University, Meerut", icon: "📚" }
              ].map((body, i) => (
                <div key={i} style={{
                  background: "#FFFFFF", padding: "24px 16px", borderRadius: "16px",
                  border: "1px solid #F0EDE6", boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                  display: "flex", flexDirection: "column", gap: "8px", alignItems: "center"
                }}>
                  <div style={{ fontSize: "24px" }}>{body.icon}</div>
                  <div style={{ fontWeight: "700", color: "#0A192F", fontSize: "15px", fontFamily: "'Outfit', sans-serif" }}>{body.title}</div>
                  <div style={{ color: "#7E93A8", fontSize: "12px", lineHeight: 1.4 }}>{body.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .vision-mission-grid { grid-template-columns: 1fr !important; }
          .leader-card { grid-template-columns: 1fr !important; padding: 32px 20px !important; text-align: center !important; }
          .MD-card { display: flex !important; flex-direction: column-reverse !important; }
          .divider-right { margin: 16px auto !important; }
        }
      `}</style>
    </>
  );
}
