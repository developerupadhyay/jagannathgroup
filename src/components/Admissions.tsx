"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { colleges, courses } from "@/lib/data";

export default function Admissions() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", college: "", course: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Available courses based on selected college
  const selectedCollegeObj = colleges.find(c => c.name === form.college);
  const filteredCourses = selectedCollegeObj 
    ? courses.filter(c => c.collegeSlug === selectedCollegeObj.slug)
    : [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "admissions", data: form }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }
      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", college: "", course: "", message: "" });
    } catch (err: any) {
      setError(err.message || "Failed to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="admissions" style={{ padding: "120px 24px", background: "linear-gradient(135deg, #013a7d 0%, #014c9c 50%, #013a7d 100%)", position: "relative", overflow: "hidden" }}>
      {/* Decorative */}
      <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(212,175,55,0.03)" }} />
      <div style={{ position: "absolute", bottom: "-100px", left: "-100px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(212,175,55,0.02)" }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>Join Us</span>
          <h2 style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontSize: "clamp(30px, 4vw, 44px)", color: "#FAF9F6", 
            marginTop: "12px", fontWeight: "800", letterSpacing: "-0.02em" 
          }}>
            Admissions Open
          </h2>
          <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #D4AF37, #F2D06B)", margin: "20px auto 0", borderRadius: "2px" }} />
          <p style={{ color: "#7E93A8", fontSize: "16px", marginTop: "20px" }}>
            Start your journey — fill in your details and our team will contact you.
          </p>
        </div>        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "50px", alignItems: "center" }} className="admissions-grid">
          {/* Left info - Premium Cards Grid & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            className="admissions-left"
          >
            <div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "24px", color: "#FAF9F6", marginBottom: "20px", fontWeight: "750" }}>
                Why Study at Jagannath Group?
              </h3>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="admissions-features-grid">
                {[
                  { icon: "📜", title: "Govt. Approved", desc: "Fully recognized by AICTE, PCI, BTE & NCTE." },
                  { icon: "👨‍🏫", title: "Expert Faculty", desc: "Learn from highly experienced professionals." },
                  { icon: "🔬", title: "Modern Labs", desc: "State-of-the-art infrastructure & research labs." },
                  { icon: "💼", title: "100% Placement", desc: "Active CRC cell linking students to top recruiters." },
                ].map((item, i) => (
                  <div key={i} style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(1, 58, 125, 0.05)",
                    borderTop: "3px solid #D4AF37",
                    borderRadius: "16px",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    boxShadow: "0 6px 15px rgba(1, 58, 125, 0.03)"
                  }}>
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "50%",
                      background: "#FAF9F6",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "18px",
                      border: "1px solid rgba(1, 58, 125, 0.12)"
                    }}>{item.icon}</div>
                    <div>
                      <h4 style={{ color: "#013a7d", fontSize: "14px", fontWeight: "750", marginBottom: "4px", fontFamily: "'Outfit', sans-serif" }}>{item.title}</h4>
                      <p style={{ color: "#435870", fontSize: "12px", lineHeight: 1.4, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ 
              background: "#FFFFFF", 
              borderRadius: "16px", 
              padding: "20px 24px", 
              border: "1px solid rgba(1, 58, 125, 0.12)",
              borderTop: "3px solid #D4AF37",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              boxShadow: "0 6px 15px rgba(1, 58, 125, 0.03)"
            }}>
              <div style={{ color: "#013a7d", fontSize: "12px", fontWeight: "750", letterSpacing: "1.5px", textTransform: "uppercase" }}>Admissions Helpline</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", color: "#D4AF37", fontSize: "15px", fontWeight: "700" }}>
                <span>📞 +91-9639895010</span>
                <span>📞 +91-9917682980</span>
              </div>
              <div style={{ color: "#435870", fontSize: "13px", lineHeight: 1.4 }}>
                📍 Mohammadpur Road, Sikri Kalan, Modinagar, Ghaziabad, UP - 201204
              </div>
            </div>
          </motion.div>

          {/* Form (Dark Glassmorphic Card like Hero Form) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              background: "#FFFFFF", 
              backdropFilter: "none", 
              border: "1px solid rgba(1, 58, 125, 0.05)", 
              borderTop: "4px solid #D4AF37",
              borderRadius: "24px", 
              padding: "36px", 
              boxShadow: "0 20px 50px rgba(0, 26, 61, 0.12)" 
            }}
            className="admissions-form-container"
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", color: "#013a7d", fontSize: "22px", marginBottom: "8px" }}>Thank You!</h3>
                <p style={{ color: "#435870" }}>We'll contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", color: "#013a7d", fontSize: "20px", fontWeight: "700" }}>Enquiry Form</h3>
                  <Link href="/admissions" style={{ fontSize: "12px", color: "#013a7d", fontWeight: "750", textDecoration: "none" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#D4AF37"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "#013a7d"; }}
                  >
                    Admission Guidelines →
                  </Link>
                </div>

                {error && (
                  <div style={{ background: "rgba(255, 59, 48, 0.05)", border: "1px solid rgba(255, 59, 48, 0.2)", borderRadius: "10px", padding: "12px 16px", color: "#D32F2F", fontSize: "14px", fontWeight: "600" }}>
                    ❌ {error}
                  </div>
                )}

                {[
                  { field: "name", label: "Full Name *", type: "text", placeholder: "Enter your full name" },
                  { field: "phone", label: "Phone Number *", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                  { field: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                ].map(({ field, label, type, placeholder }) => (
                  <div key={field}>
                    <label style={{ fontSize: "13px", fontWeight: "600", color: "#013a7d", display: "block", marginBottom: "6px" }}>{label}</label>
                    <input type={type} placeholder={placeholder} required={label.includes("*")}
                       value={form[field as keyof typeof form]}
                       onChange={e => setForm({ ...form, [field]: e.target.value })}
                       style={{
                         width: "100%", padding: "12px 16px", border: "1px solid rgba(1, 58, 125, 0.15)",
                         borderRadius: "10px", fontSize: "14px", outline: "none", color: "#013a7d",
                         background: "#FAF9F6", transition: "all 0.3s",
                       }}
                       onFocus={e => { e.target.style.borderColor = "#D4AF37"; }}
                       onBlur={e => { e.target.style.borderColor = "rgba(1, 58, 125, 0.15)"; }}
                    />
                  </div>
                ))}
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="form-dropdowns">
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: "600", color: "#013a7d", display: "block", marginBottom: "6px" }}>Preferred College *</label>
                    <select required value={form.college} onChange={e => setForm({ ...form, college: e.target.value, course: "" })}
                      style={{
                        width: "100%", padding: "12px 16px", border: "1px solid rgba(1, 58, 125, 0.15)",
                        borderRadius: "10px", fontSize: "14px", outline: "none", color: form.college ? "#013a7d" : "#7E93A8",
                        background: "#FAF9F6", transition: "all 0.3s"
                      }}
                      onFocus={e => { e.target.style.borderColor = "#D4AF37"; }}
                      onBlur={e => { e.target.style.borderColor = "rgba(1, 58, 125, 0.15)"; }}
                    >
                      <option value="" style={{ background: "#FFFFFF", color: "#7E93A8" }}>Select College</option>
                      {colleges.map(c => <option key={c.slug} value={c.name} style={{ background: "#FFFFFF", color: "#1C2D42" }}>{c.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: "600", color: "#013a7d", display: "block", marginBottom: "6px" }}>Preferred Course *</label>
                    <select required value={form.course} onChange={e => setForm({ ...form, course: e.target.value })} disabled={!form.college}
                      style={{
                        width: "100%", padding: "12px 16px", border: "1px solid rgba(1, 58, 125, 0.15)",
                        borderRadius: "10px", fontSize: "14px", outline: "none", color: form.course ? "#013a7d" : "#7E93A8",
                        background: "#FAF9F6", transition: "all 0.3s",
                        opacity: form.college ? 1 : 0.6
                      }}
                      onFocus={e => { e.target.style.borderColor = "#D4AF37"; }}
                      onBlur={e => { e.target.style.borderColor = "rgba(1, 58, 125, 0.15)"; }}
                    >
                      <option value="" style={{ background: "#FFFFFF", color: "#7E93A8" }}>{form.college ? "Select Course" : "Choose college first"}</option>
                      {filteredCourses.map(c => <option key={c.slug} value={c.name} style={{ background: "#FFFFFF", color: "#1C2D42" }}>{c.name}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "13px", fontWeight: "600", color: "#013a7d", display: "block", marginBottom: "6px" }}>Message</label>
                  <textarea rows={3} placeholder="Any queries or additional information..."
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: "100%", padding: "12px 16px", border: "1px solid rgba(1, 58, 125, 0.15)",
                      borderRadius: "10px", fontSize: "14px", outline: "none", color: "#013a7d",
                      background: "#FAF9F6", resize: "vertical", transition: "all 0.3s"
                    }}
                    onFocus={e => { e.target.style.borderColor = "#D4AF37"; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(1, 58, 125, 0.15)"; }}
                  />
                </div>
                <button type="submit" disabled={loading} style={{
                  background: loading ? "#7E93A8" : "#013a7d", color: "#FFFFFF",
                  padding: "14px", borderRadius: "12px", border: "none", cursor: loading ? "not-allowed" : "pointer",
                  fontSize: "14.5px", fontWeight: "700", letterSpacing: "0.5px", textTransform: "uppercase",
                  boxShadow: "0 6px 20px rgba(1, 58, 125, 0.15)", transition: "all 0.3s ease",
                }}
                  onMouseEnter={e => { if (!loading) { e.currentTarget.style.background = "#014c9c"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(1, 58, 125, 0.25)"; } }}
                  onMouseLeave={e => { if (!loading) { e.currentTarget.style.background = "#013a7d"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(1, 58, 125, 0.15)"; } }}
                >{loading ? "Sending..." : "Submit Enquiry"}</button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        .admissions-form-container input::placeholder,
        .admissions-form-container textarea::placeholder {
          color: rgba(250, 249, 246, 0.5) !important;
        }
        @media (max-width: 992px) {
          .admissions-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 768px) {
          .admissions-features-grid { grid-template-columns: 1fr !important; }
          .form-dropdowns { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
