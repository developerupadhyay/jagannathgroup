"use client";
export default function About() {
  return (
    <section id="about" style={{ padding: "100px 24px", background: "#FAF6EF" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section Label */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{
            color: "#8B1A1A", fontSize: "13px", fontWeight: "700",
            letterSpacing: "3px", textTransform: "uppercase",
          }}>Who We Are</span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(30px, 4vw, 48px)", color: "#5C0A14",
            marginTop: "12px", fontWeight: "700",
          }}>About Jagannath Group</h2>
          <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #D4AF37, #F0D060)", margin: "20px auto 0", borderRadius: "2px" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          {/* Left: Text */}
          <div>
            <p style={{ color: "#4A2020", lineHeight: 1.9, fontSize: "16px", marginBottom: "24px" }}>
              The <strong>Jagannath Group of Institutions</strong> is a premier educational organization 
              located at Mohammadpur Road, Sikri Kalan, Modinagar, Ghaziabad, Uttar Pradesh. 
              Committed to providing quality professional education, the group has established 
              itself as a trusted name in the region.
            </p>
            <p style={{ color: "#4A2020", lineHeight: 1.9, fontSize: "16px", marginBottom: "36px" }}>
              With 5 specialized institutions spanning Pharmacy, Nursing, Education, Law, and 
              General Studies, the group offers diverse academic pathways to thousands of 
              students each year, preparing them for successful careers.
            </p>

            {/* Values */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {[
                { icon: "🎓", title: "Quality Education", desc: "AICTE & BTE affiliated programs" },
                { icon: "🏆", title: "Excellence", desc: "Committed to academic excellence" },
                { icon: "🤝", title: "Integrity", desc: "Transparent & ethical practices" },
                { icon: "🌟", title: "Innovation", desc: "Modern teaching methodologies" },
              ].map((v, i) => (
                <div key={i} style={{
                  background: "#FFF", borderRadius: "12px", padding: "20px",
                  border: "1px solid rgba(139,26,26,0.1)",
                  boxShadow: "0 2px 12px rgba(92,10,20,0.06)",
                }}>
                  <div style={{ fontSize: "24px", marginBottom: "8px" }}>{v.icon}</div>
                  <div style={{ fontWeight: "700", color: "#5C0A14", fontSize: "14px", marginBottom: "4px" }}>{v.title}</div>
                  <div style={{ color: "#8B6060", fontSize: "13px" }}>{v.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Card */}
          <div style={{ position: "relative" }}>
            <div style={{
              background: "linear-gradient(135deg, #5C0A14, #8B1A1A)",
              borderRadius: "20px", padding: "48px 40px",
              color: "#FAF6EF", textAlign: "center",
              boxShadow: "0 20px 60px rgba(92,10,20,0.3)",
            }}>
              <div style={{
                width: "80px", height: "80px", borderRadius: "50%",
                background: "linear-gradient(135deg, #D4AF37, #F0D060)",
                margin: "0 auto 24px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "36px", fontWeight: "800", color: "#5C0A14",
                fontFamily: "'Playfair Display', serif",
                boxShadow: "0 8px 30px rgba(212,175,55,0.4)",
              }}>J</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", marginBottom: "8px", color: "#FAF6EF" }}>
                Jagannath Group
              </h3>
              <p style={{ color: "#D4AF37", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "32px" }}>
                of Institutions
              </p>
              <div style={{ borderTop: "1px solid rgba(212,175,55,0.2)", paddingTop: "24px" }}>
                <p style={{ color: "rgba(250,246,239,0.75)", fontSize: "15px", fontStyle: "italic", lineHeight: 1.7 }}>
                  "Nurturing Excellence, Shaping Futures — empowering every student with 
                  knowledge, skills, and values for a brighter tomorrow."
                </p>
              </div>
              <div style={{ marginTop: "28px", display: "flex", justifyContent: "center", gap: "8px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#D4AF37" }} />
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(212,175,55,0.4)" }} />
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(212,175,55,0.2)" }} />
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position: "absolute", top: "-20px", right: "-20px",
              background: "#D4AF37", borderRadius: "12px", padding: "12px 20px",
              boxShadow: "0 8px 24px rgba(212,175,55,0.4)",
            }}>
              <div style={{ fontSize: "20px", fontWeight: "800", color: "#5C0A14", fontFamily: "'Playfair Display', serif" }}>5+</div>
              <div style={{ fontSize: "11px", color: "#5C0A14", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>Colleges</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
