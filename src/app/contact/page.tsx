"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { colleges } from "@/lib/data";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "140px", background: "#FAF9F6", minHeight: "100vh" }}>
        
        {/* Contact Header */}
        <section style={{ padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>
              Get In Touch
            </span>
            <h1 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              color: "#0A192F",
              marginTop: "16px",
              fontWeight: "800",
              lineHeight: 1.2,
              letterSpacing: "-0.02em"
            }}>
              Contact Our Campuses
            </h1>
            <div style={{ width: "80px", height: "3px", background: "linear-gradient(90deg, #D4AF37, #F2D06B)", margin: "24px auto" }} />
            <p style={{ color: "#5A6E85", fontSize: "16px", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto" }}>
              Have questions about courses, admissions, eligibility, or facilities? Contact our centralized helpdesk or reach out to the specific college administration directly.
            </p>
          </div>
        </section>

        {/* Central Map & General Info */}
        <section style={{ padding: "40px 24px" }}>
          <div style={{
            maxWidth: "1100px", margin: "0 auto",
            display: "grid", gridTemplateColumns: "1.2fr 1.8fr", gap: "40px"
          }} className="contact-top-grid">
            
            {/* Left Info Card */}
            <div style={{
              background: "linear-gradient(135deg, #0A192F 0%, #1B3D6D 100%)",
              borderRadius: "24px", padding: "40px", color: "#FAF9F6",
              boxShadow: "0 10px 30px rgba(10,25,47,0.15)",
              display: "flex", flexDirection: "column", gap: "32px"
            }}>
              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "24px", color: "#D4AF37", marginBottom: "16px" }}>
                  Central Office
                </h3>
                <p style={{ color: "rgba(250,249,246,0.85)", fontSize: "15px", lineHeight: 1.8 }}>
                  📍 Mohammadpur Road, Sikri Kalan, Modinagar, Ghaziabad, Uttar Pradesh - 201204
                </p>
              </div>

              <div>
                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", color: "#D4AF37", marginBottom: "12px" }}>
                  General Admission Helpdesk
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "15px" }}>
                  <span>📞 +91-9639895010</span>
                  <span>📞 +91-9917682980</span>
                  <span>📞 +91-8171875188</span>
                </div>
              </div>

              <div>
                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", color: "#D4AF37", marginBottom: "12px" }}>
                  Email Address
                </h4>
                <span style={{ fontSize: "14px", color: "rgba(250,249,246,0.85)" }}>
                  ✉️ jagannathcollegeofpharmacy@gmail.com
                </span>
              </div>
            </div>

            {/* Right Map */}
            <div style={{
              borderRadius: "24px", overflow: "hidden",
              border: "1px solid #F0EDE6",
              boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.7123!2d77.6!3d28.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQ5JzQ4LjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="100%" style={{ border: 0, minHeight: "350px", display: "block" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Jagannath Group Location"
              />
            </div>

          </div>
        </section>

        {/* Campuses Contacts Directory */}
        <section style={{ padding: "60px 24px", background: "linear-gradient(180deg, #FAF9F6 0%, #F0EDE6 100%)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", color: "#0A192F", fontWeight: "855", textAlign: "center", marginBottom: "40px" }}>
              College Directory
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              {colleges.map((col) => (
                <div key={col.id} style={{
                  background: "#FFFFFF", borderRadius: "20px", padding: "28px",
                  border: "1px solid #F0EDE6", boxShadow: "0 4px 16px rgba(0,0,0,0.02)",
                  display: "flex", flexDirection: "column", gap: "16px"
                }}
                  className="hover-lift"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "24px" }}>{col.icon}</span>
                    <span style={{ fontWeight: "700", fontSize: "12px", color: col.color, textTransform: "uppercase", letterSpacing: "1.5px" }}>
                      {col.shortName} Campus
                    </span>
                  </div>
                  
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18.5px", color: "#0A192F", fontWeight: "750", lineHeight: 1.3 }}>
                    {col.name}
                  </h3>

                  <div style={{ borderTop: "1px solid #FAF9F6", paddingTop: "16px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "13.5px", color: "#1C2D42" }}>
                    <div>📞 {col.phone.join(", ")}</div>
                    <div style={{ wordBreak: "break-all" }}>✉️ {col.email}</div>
                    <div style={{ color: "#7E93A8", fontSize: "12.5px", lineHeight: 1.4 }}>📍 {col.address}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Contact Form */}
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto", background: "#FFFFFF", borderRadius: "24px", padding: "40px", border: "1px solid #F0EDE6", boxShadow: "0 10px 40px rgba(10,25,47,0.03)" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "56px", marginBottom: "20px" }}>📨</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", color: "#0A192F", fontSize: "24px", marginBottom: "8px" }}>Message Sent!</h3>
                <p style={{ color: "#5A6E85" }}>Thank you for writing to us. Our desk will reply to your email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ textAlign: "center", marginBottom: "16px" }}>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", color: "#0A192F", fontSize: "26px", fontWeight: "800" }}>Send Us a Message</h3>
                  <p style={{ color: "#5A6E85", fontSize: "14px", marginTop: "8px" }}>Drop a line and we will routing your query to the correct department.</p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: "600", color: "#0A192F", display: "block", marginBottom: "6px" }}>Name *</label>
                    <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid #F0EDE6", borderRadius: "10px", fontSize: "14px", outline: "none", background: "#FAF9F6" }} />
                  </div>
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: "600", color: "#0A192F", display: "block", marginBottom: "6px" }}>Email *</label>
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid #F0EDE6", borderRadius: "10px", fontSize: "14px", outline: "none", background: "#FAF9F6" }} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: "600", color: "#0A192F", display: "block", marginBottom: "6px" }}>Phone *</label>
                    <input type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid #F0EDE6", borderRadius: "10px", fontSize: "14px", outline: "none", background: "#FAF9F6" }} />
                  </div>
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: "600", color: "#0A192F", display: "block", marginBottom: "6px" }}>Subject</label>
                    <input type="text" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid #F0EDE6", borderRadius: "10px", fontSize: "14px", outline: "none", background: "#FAF9F6" }} />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "13px", fontWeight: "600", color: "#0A192F", display: "block", marginBottom: "6px" }}>Message *</label>
                  <textarea rows={4} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: "100%", padding: "12px 16px", border: "1px solid #F0EDE6", borderRadius: "10px", fontSize: "14px", outline: "none", background: "#FAF9F6", resize: "vertical" }} />
                </div>

                <button type="submit" style={{
                  background: "linear-gradient(135deg, #0A192F, #1B3D6D)", color: "#FAF9F6",
                  padding: "14px", borderRadius: "10px", border: "none", cursor: "pointer",
                  fontSize: "15px", fontWeight: "700", letterSpacing: "0.5px", textTransform: "uppercase",
                  boxShadow: "0 6px 20px rgba(10,25,47,0.15)", transition: "all 0.3s ease",
                  marginTop: "8px"
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 10px 25px rgba(10,25,47,0.25)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(10,25,47,0.15)"; }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </section>

      </div>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .contact-top-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
