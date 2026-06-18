"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { colleges, courses } from "@/lib/data";

export default function Admissions() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", college: "", course: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // Available courses based on selected college
  const selectedCollegeObj = colleges.find(c => c.name === form.college);
  const filteredCourses = selectedCollegeObj 
    ? courses.filter(c => c.collegeSlug === selectedCollegeObj.slug)
    : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", email: "", college: "", course: "", message: "" });
  };

  return (
    <section id="admissions" style={{ padding: "120px 24px", background: "linear-gradient(135deg, #0A192F 0%, #0F2A4A 50%, #0A192F 100%)", position: "relative", overflow: "hidden" }}>
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
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "60px", alignItems: "start" }} className="admissions-grid">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "24px", color: "#D4AF37", marginBottom: "24px", fontWeight: "700" }}>
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
                <span style={{ color: "rgba(250,249,246,0.8)", fontSize: "15px", lineHeight: 1.6 }}>{item.text}</span>
              </div>
            ))}

            <div style={{ marginTop: "36px", background: "rgba(212,175,55,0.06)", borderRadius: "16px", padding: "24px", border: "1px solid rgba(212,175,55,0.15)" }}>
              <div style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px" }}>Contact Admissions</div>
              <div style={{ color: "rgba(250,249,246,0.85)", fontSize: "15px", marginBottom: "8px" }}>📞 +91-9639895010</div>
              <div style={{ color: "rgba(250,249,246,0.85)", fontSize: "15px", marginBottom: "8px" }}>📞 +91-9917682980</div>
              <div style={{ color: "rgba(250,249,246,0.8)", fontSize: "14px" }}>📍 Mohammadpur Road, Sikri Kalan, Modinagar, Ghaziabad, UP</div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ background: "#FFF", borderRadius: "20px", padding: "40px", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", color: "#0A192F", fontSize: "22px", marginBottom: "8px" }}>Thank You!</h3>
                <p style={{ color: "#5A6E85" }}>We'll contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", color: "#0A192F", fontSize: "20px", fontWeight: "700" }}>Enquiry Form</h3>
                  <Link href="/admissions" style={{ fontSize: "12px", color: "#1B3D6D", fontWeight: "700", textDecoration: "none" }}>
                    Admission Guidelines →
                  </Link>
                </div>
                {[
                  { field: "name", label: "Full Name *", type: "text", placeholder: "Enter your full name" },
                  { field: "phone", label: "Phone Number *", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                  { field: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                ].map(({ field, label, type, placeholder }) => (
                  <div key={field}>
                    <label style={{ fontSize: "13px", fontWeight: "600", color: "#0A192F", display: "block", marginBottom: "6px" }}>{label}</label>
                    <input type={type} placeholder={placeholder} required={label.includes("*")}
                      value={form[field as keyof typeof form]}
                      onChange={e => setForm({ ...form, [field]: e.target.value })}
                      style={{
                        width: "100%", padding: "12px 16px", border: "1px solid #F0EDE6",
                        borderRadius: "10px", fontSize: "14px", outline: "none", color: "#1C2D42",
                        background: "#FAF9F6", transition: "border-color 0.3s",
                      }}
                      onFocus={e => { e.target.style.borderColor = "#1B3D6D"; }}
                      onBlur={e => { e.target.style.borderColor = "#F0EDE6"; }}
                    />
                  </div>
                ))}
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="form-dropdowns">
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: "600", color: "#0A192F", display: "block", marginBottom: "6px" }}>Preferred College *</label>
                    <select required value={form.college} onChange={e => setForm({ ...form, college: e.target.value, course: "" })}
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid #F0EDE6", borderRadius: "10px", fontSize: "14px", outline: "none", color: "#1C2D42", background: "#FAF9F6" }}>
                      <option value="">Select College</option>
                      {colleges.map(c => <option key={c.slug} value={c.name}>{c.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: "600", color: "#0A192F", display: "block", marginBottom: "6px" }}>Preferred Course *</label>
                    <select required value={form.course} onChange={e => setForm({ ...form, course: e.target.value })} disabled={!form.college}
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid #F0EDE6", borderRadius: "10px", fontSize: "14px", outline: "none", color: "#1C2D42", background: "#FAF9F6" }}>
                      <option value="">{form.college ? "Select Course" : "Choose college first"}</option>
                      {filteredCourses.map(c => <option key={c.slug} value={c.name}>{c.name}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "13px", fontWeight: "600", color: "#0A192F", display: "block", marginBottom: "6px" }}>Message</label>
                  <textarea rows={3} placeholder="Any queries or additional information..."
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: "100%", padding: "12px 16px", border: "1px solid #F0EDE6", borderRadius: "10px", fontSize: "14px", outline: "none", color: "#1C2D42", background: "#FAF9F6", resize: "vertical" }}
                    onFocus={e => { e.target.style.borderColor = "#1B3D6D"; }}
                    onBlur={e => { e.target.style.borderColor = "#F0EDE6"; }}
                  />
                </div>
                <button type="submit" style={{
                  background: "linear-gradient(135deg, #0A192F, #1B3D6D)", color: "#FAF9F6",
                  padding: "14px", borderRadius: "12px", border: "none", cursor: "pointer",
                  fontSize: "14.5px", fontWeight: "700", letterSpacing: "0.5px", textTransform: "uppercase",
                  boxShadow: "0 6px 20px rgba(10,25,47,0.2)", transition: "all 0.3s ease",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(10,25,47,0.3)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(10,25,47,0.2)"; }}
                >Submit Enquiry</button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .admissions-grid { grid-template-columns: 1fr !important; }
          .form-dropdowns { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
