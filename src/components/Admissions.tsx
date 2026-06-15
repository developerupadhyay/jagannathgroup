"use client";
import { useState } from "react";

const colleges = [
  "Jagannath College of Pharmacy",
  "Jagannath College of Nursing",
  "Shiva Educational Institute",
  "Shiva College of Law",
  "Shri Jagannath Ji Education Institute",
];

export default function Admissions() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", college: "", course: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", email: "", college: "", course: "", message: "" });
  };

  return (
    <section id="admissions" style={{ padding: "100px 24px", background: "linear-gradient(135deg, #5C0A14 0%, #8B1A1A 50%, #5C0A14 100%)", position: "relative", overflow: "hidden" }}>
      {/* Decorative */}
      <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(212,175,55,0.05)" }} />
      <div style={{ position: "absolute", bottom: "-100px", left: "-100px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(212,175,55,0.05)" }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>Join Us</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 48px)", color: "#FAF6EF", marginTop: "12px", fontWeight: "700" }}>
            Admissions Open
          </h2>
          <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #D4AF37, #F0D060)", margin: "20px auto 0", borderRadius: "2px" }} />
          <p style={{ color: "rgba(250,246,239,0.7)", fontSize: "16px", marginTop: "20px" }}>
            Start your journey — fill in your details and our team will contact you.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "60px", alignItems: "start" }}>
          {/* Left info */}
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", color: "#D4AF37", marginBottom: "24px" }}>
              Why Choose Us?
            </h3>
            {[
              { icon: "✅", text: "Govt. recognized & affiliated programs" },
              { icon: "✅", text: "Experienced & dedicated faculty" },
              { icon: "✅", text: "State-of-the-art labs & infrastructure" },
              { icon: "✅", text: "Placement assistance & career guidance" },
              { icon: "✅", text: "Affordable fee structure" },
              { icon: "✅", text: "Safe & supportive campus environment" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "16px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "16px", marginTop: "2px" }}>{item.icon}</span>
                <span style={{ color: "rgba(250,246,239,0.8)", fontSize: "15px", lineHeight: 1.6 }}>{item.text}</span>
              </div>
            ))}

            <div style={{ marginTop: "36px", background: "rgba(212,175,55,0.1)", borderRadius: "16px", padding: "24px", border: "1px solid rgba(212,175,55,0.2)" }}>
              <div style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px" }}>Contact Admissions</div>
              <div style={{ color: "rgba(250,246,239,0.8)", fontSize: "15px", marginBottom: "8px" }}>📞 +91-9639895010</div>
              <div style={{ color: "rgba(250,246,239,0.8)", fontSize: "15px", marginBottom: "8px" }}>📞 +91-9917682980</div>
              <div style={{ color: "rgba(250,246,239,0.8)", fontSize: "15px" }}>📍 Mohammadpur Road, Sikri Kalan, Modinagar, Ghaziabad, UP</div>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "#FFF", borderRadius: "20px", padding: "40px", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#5C0A14", fontSize: "22px", marginBottom: "8px" }}>Thank You!</h3>
                <p style={{ color: "#8B6060" }}>We'll contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#5C0A14", fontSize: "20px", marginBottom: "8px" }}>Enquiry Form</h3>
                {[
                  { field: "name", label: "Full Name *", type: "text", placeholder: "Enter your full name" },
                  { field: "phone", label: "Phone Number *", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                  { field: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                ].map(({ field, label, type, placeholder }) => (
                  <div key={field}>
                    <label style={{ fontSize: "13px", fontWeight: "600", color: "#5C0A14", display: "block", marginBottom: "6px" }}>{label}</label>
                    <input type={type} placeholder={placeholder} required={label.includes("*")}
                      value={form[field as keyof typeof form]}
                      onChange={e => setForm({ ...form, [field]: e.target.value })}
                      style={{
                        width: "100%", padding: "12px 16px", border: "1px solid rgba(139,26,26,0.2)",
                        borderRadius: "10px", fontSize: "14px", outline: "none", color: "#1A0A0A",
                        background: "#FAF6EF", transition: "border-color 0.3s",
                      }}
                      onFocus={e => { e.target.style.borderColor = "#8B1A1A"; }}
                      onBlur={e => { e.target.style.borderColor = "rgba(139,26,26,0.2)"; }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: "13px", fontWeight: "600", color: "#5C0A14", display: "block", marginBottom: "6px" }}>Preferred College *</label>
                  <select required value={form.college} onChange={e => setForm({ ...form, college: e.target.value })}
                    style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(139,26,26,0.2)", borderRadius: "10px", fontSize: "14px", outline: "none", color: "#1A0A0A", background: "#FAF6EF" }}>
                    <option value="">Select College</option>
                    {colleges.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: "13px", fontWeight: "600", color: "#5C0A14", display: "block", marginBottom: "6px" }}>Message</label>
                  <textarea rows={3} placeholder="Any queries or additional information..."
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(139,26,26,0.2)", borderRadius: "10px", fontSize: "14px", outline: "none", color: "#1A0A0A", background: "#FAF6EF", resize: "vertical" }}
                    onFocus={e => { e.target.style.borderColor = "#8B1A1A"; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(139,26,26,0.2)"; }}
                  />
                </div>
                <button type="submit" style={{
                  background: "linear-gradient(135deg, #8B1A1A, #C41E3A)", color: "#FAF6EF",
                  padding: "14px", borderRadius: "12px", border: "none", cursor: "pointer",
                  fontSize: "15px", fontWeight: "700", letterSpacing: "0.5px",
                  boxShadow: "0 6px 20px rgba(139,26,26,0.3)", transition: "all 0.3s ease",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(139,26,26,0.4)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(139,26,26,0.3)"; }}
                >Submit Enquiry</button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #admissions > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
