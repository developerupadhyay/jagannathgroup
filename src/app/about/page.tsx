"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div style={{ background: "#FAF9F6", minHeight: "100vh" }}>
        
        {/* Page Banner */}
        <section style={{
          padding: "160px 24px 80px",
          background: "linear-gradient(135deg, rgba(0, 26, 61, 0.94) 0%, rgba(1, 58, 125, 0.88) 50%, rgba(0, 26, 61, 0.96) 100%), url('/website_images/college_outside_photo3.jpeg') center/cover no-repeat",
          borderBottom: "3px solid #D4AF37",
          textAlign: "center",
          color: "#FFFFFF",
          position: "relative"
        }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>
              Our Legacy & History
            </span>
            <h1 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              color: "#FFFFFF",
              marginTop: "16px",
              fontWeight: "800",
              lineHeight: 1.2,
              letterSpacing: "-0.02em"
            }}>
              Nurturing Minds, Building Futures
            </h1>
            <div style={{ width: "60px", height: "3px", background: "#D4AF37", margin: "24px auto 0", borderRadius: "2px" }} />
            <p style={{ color: "rgba(255, 255, 255, 0.82)", fontSize: "17px", lineHeight: 1.8, maxWidth: "750px", margin: "20px auto 0" }}>
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
            {/* Stats Cards (Dark Cards on Light BG) */}
            {[
              { val: "25+", title: "Years Legacy" },
              { val: "5", title: "Specialized Colleges" },
              { val: "12+", title: "Professional Programs" },
              { val: "5000+", title: "Successful Alumni" }
            ].map((stat, i) => (
              <div key={i} style={{
                background: "#013a7d",
                padding: "32px 24px", borderRadius: "16px",
                border: "1px solid #002452",
                textAlign: "center",
                boxShadow: "0 15px 35px rgba(10, 25, 47, 0.15)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px"
              }}>
                {/* Stat value tag (Soft Glass Tint) */}
                <div style={{
                  fontSize: "30px", fontWeight: "800", color: "#D4AF37", fontFamily: "'Outfit', sans-serif",
                  background: "#002452",
                  padding: "4px 14px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.15)"
                }}>
                  {stat.val}
                </div>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#BAC9DA", textTransform: "uppercase", letterSpacing: "1px" }}>
                  {stat.title}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="values" style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "stretch" }} className="vision-mission-grid">
            {/* Vision (Dark Card) */}
            <div style={{
              background: "#013a7d", padding: "48px 40px", borderRadius: "24px",
              border: "1px solid #002452",
              boxShadow: "0 20px 45px rgba(10, 25, 47, 0.15)",
              display: "flex", flexDirection: "column", gap: "20px"
            }}>
              {/* Icon (Soft Glass Tint) */}
              <div style={{
                width: "60px", height: "60px", borderRadius: "50%",
                background: "#002452", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "32px", border: "1px solid rgba(255,255,255,0.15)",
              }}>👁️‍🗨️</div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "26px", color: "#D4AF37", fontWeight: "700" }}>Our Vision</h3>
              <ul style={{ color: "#BAC9DA", lineHeight: 1.8, fontSize: "14.5px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li>To be a center of excellence in higher education with innovative teaching, learning, and research activities, catering to the academic needs of the students by providing qualitative education making them self-sufficient in life.</li>
                <li>To follow a holistic approach for the growth of interpersonal and intrapersonal skills which are essential to build a creative, enlightened, and productive civil society in this region.</li>
              </ul>
            </div>

            {/* Mission (Dark Card) */}
            <div style={{
              background: "#013a7d", padding: "48px 40px", borderRadius: "24px",
              border: "1px solid #002452",
              boxShadow: "0 20px 45px rgba(10, 25, 47, 0.15)",
              display: "flex", flexDirection: "column", gap: "20px"
            }}>
              {/* Icon (Soft Glass Tint) */}
              <div style={{
                width: "60px", height: "60px", borderRadius: "50%",
                background: "#002452", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "32px", border: "1px solid rgba(255,255,255,0.15)",
              }}>🎯</div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "26px", color: "#D4AF37", fontWeight: "700" }}>Our Mission</h3>
              <ul style={{ color: "#BAC9DA", lineHeight: 1.8, fontSize: "14px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <li>To provide students with knowledge, skills, values, and sensitivity to face challenges in both academic and personal life.</li>
                <li>To develop human potential to achieve diverse opportunities in the future.</li>
                <li>To enhance the new teaching-learning process for students, faculties, and staff.</li>
                <li>To develop critical and independent thinking to face various global challenges.</li>
                <li>To generate and disseminate knowledge through interdisciplinary research and creative inquiry for creating a meaningful society.</li>
                <li>To enable students to explore locally available economic resources for their employment and providing support to the society.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership Messages */}
        <section id="messages" style={{ padding: "80px 24px", background: "#F0EDE6" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>Leadership</span>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(28px, 4vw, 42px)", color: "#013a7d", marginTop: "12px", fontWeight: "800" }}>Messages from Leadership</h2>
              <div style={{ width: "60px", height: "3px", background: "#D4AF37", margin: "16px auto" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              {/* Chairman (Dark Card) */}
              <div style={{
                background: "#013a7d", borderRadius: "24px", padding: "48px",
                boxShadow: "0 20px 45px rgba(10, 25, 47, 0.15)", display: "grid", gridTemplateColumns: "1.2fr 2fr", gap: "40px",
                alignItems: "stretch", border: "1px solid #002452"
              }} className="leader-card">
                <div style={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  {/* Avatar wrapper */}
                  <div style={{
                    width: "140px", height: "140px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #002452 0%, rgba(255,255,255,0.02) 100%)",
                    margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "64px", color: "#FAF9F6", border: "4px solid #D4AF37",
                    boxShadow: "0 8px 20px rgba(10, 25, 47, 0.15)"
                  }} >👨‍🏫</div>
                  <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", color: "#FAF9F6", fontWeight: "700", marginBottom: "4px" }}>
                    Dr. Devraj Sharma
                  </h4>
                  <p style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "600", textTransform: "uppercase" }}>Chairman</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <p style={{ color: "#BAC9DA", fontStyle: "italic", fontSize: "15.5px", lineHeight: 1.8, marginBottom: "20px" }}>
                    "Welcome to the place where ideas and imaginations take flight, a place to pursue your passion and sharpen your mind, a place which will discover your strength and hone your skills to make an impact in the world. Jagannath Group of Institutions has the mission of preparing global leaders who create, manage and affect timely change across diverse organizations. If you are intellectually curious, if you want to learn, if you want to earn a degree that will prepare you to work with people of all cultures and equip people with the skills necessary for future, I look forward to welcome you personally to the world of opportunities and be the part of our world where learning has no limits."
                  </p>
                  <p style={{ color: "#FAF9F6", fontWeight: "700", fontSize: "14.5px", borderLeft: "3px solid #D4AF37", paddingLeft: "12px", margin: "16px 0" }}>
                    "EDUCATION is the power to think clearly, the power to act well in the world's works, and the power to appreciate life."
                  </p>
                  <div style={{ width: "40px", height: "2px", background: "#D4AF37" }} />
                </div>
              </div>

              {/* Managing Director (Dark Card) */}
              <div style={{
                background: "#013a7d", borderRadius: "24px", padding: "48px",
                boxShadow: "0 20px 45px rgba(10, 25, 47, 0.15)", display: "grid", gridTemplateColumns: "2fr 1.2fr", gap: "40px",
                alignItems: "stretch", border: "1px solid #002452"
              }} className="leader-card MD-card">
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <p style={{ color: "#BAC9DA", fontStyle: "italic", fontSize: "16px", lineHeight: 1.9, marginBottom: "20px" }}>
                    "The demand for skilled professionals in healthcare, technology, legal systems, and school education is growing exponentially. At Jagannath Group, we constantly upgrade our libraries, laboratories, and teaching processes. Our focus is on practical skills—whether it is training in corporate hospitals, presenting arguments in moot courts, or practicing coding in computer centers. We welcome you to join our family."
                  </p>
                  <div style={{ width: "40px", height: "2px", background: "#D4AF37", marginLeft: "auto" }} className="divider-right" />
                </div>
                <div style={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  {/* Avatar wrapper */}
                  <div style={{
                    width: "140px", height: "140px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #002452 0%, rgba(255,255,255,0.02) 100%)",
                    margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "64px", color: "#FAF9F6", border: "4px solid #D4AF37",
                    boxShadow: "0 8px 20px rgba(10, 25, 47, 0.15)"
                  }}>👨‍💼</div>
                  <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", color: "#FAF9F6", fontWeight: "700", marginBottom: "4px" }}>
                    Dr. Amit Kumar
                  </h4>
                  <p style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "600", textTransform: "uppercase" }}>Managing Director</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditations & Affiliations */}
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
            <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>Recognitions</span>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "32px", color: "#013a7d", marginTop: "12px", fontWeight: "800", marginBottom: "16px" }}>
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
                  background: "#013a7d", padding: "24px 16px", borderRadius: "16px",
                  border: "1px solid #002452",
                  boxShadow: "0 12px 30px rgba(10, 25, 47, 0.12)",
                  display: "flex", flexDirection: "column", gap: "10px", alignItems: "center"
                }}>
                  {/* Icon wrapper (Soft Glass Tint) */}
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "50%",
                    background: "#002452", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "20px", border: "1px solid rgba(255,255,255,0.15)",
                  }}>{body.icon}</div>
                  <div style={{ fontWeight: "700", color: "#D4AF37", fontSize: "15px", fontFamily: "'Outfit', sans-serif" }}>{body.title}</div>
                  <div style={{ color: "#BAC9DA", fontSize: "12px", lineHeight: 1.4 }}>{body.desc}</div>
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
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
