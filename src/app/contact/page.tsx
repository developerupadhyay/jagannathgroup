"use client";
import { useState } from "react";
import { colleges } from "@/lib/data";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "contact", data: form }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to send message.");
      }
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err: any) {
      setError(err.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
              Get In Touch
            </span>
            <h1 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              color: "#FFFFFF",
              marginTop: "16px",
              fontWeight: "800",
              lineHeight: 1.2,
              letterSpacing: "-0.02em"
            }}>
              Contact Our Campuses
            </h1>
            <div style={{ width: "60px", height: "3px", background: "#D4AF37", margin: "24px auto 0", borderRadius: "2px" }} />
            <p style={{ color: "rgba(255, 255, 255, 0.82)", fontSize: "16px", lineHeight: 1.7, maxWidth: "600px", margin: "20px auto 0" }}>
              Have questions about courses, admissions, eligibility, or facilities? Contact our centralized helpdesk or reach out to the specific college administration directly.
            </p>
          </div>
        </section>

        {/* Central Map & General Info */}
        <section style={{ padding: "40px 24px" }}>
          <div style={{
            maxWidth: "1100px", margin: "0 auto",
            display: "grid", gridTemplateColumns: "1.2fr 1.8fr", gap: "40px",
            alignItems: "stretch"
          }} className="contact-top-grid">
            
            {/* Left Info Card */}
            <div style={{
              background: "#013a7d",
              borderRadius: "24px", padding: "40px", color: "#BAC9DA",
              boxShadow: "0 20px 45px rgba(10, 25, 47, 0.15)",
              border: "1px solid #002452",
              borderTop: "3px solid #D4AF37",
              display: "flex", flexDirection: "column", gap: "32px",
              justifyContent: "center"
            }}>
              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "24px", color: "#FAF9F6", marginBottom: "16px" }}>
                  Central Office
                </h3>
                <p style={{ color: "#BAC9DA", fontSize: "15px", lineHeight: 1.8 }}>
                  📍 Mohammadpur Road, Sikri Kalan, Modinagar, Ghaziabad, Uttar Pradesh - 201204
                </p>
              </div>

              <div>
                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", color: "#D4AF37", marginBottom: "12px" }}>
                  General Admission Helpdesk
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "15px" }}>
                  <a href="tel:+919639895010" style={{ color: "#FAF9F6", textDecoration: "none" }}>📞 +91-9639895010</a>
                  <a href="tel:+919917682980" style={{ color: "#FAF9F6", textDecoration: "none" }}>📞 +91-9917682980</a>
                  <a href="tel:+918171875188" style={{ color: "#FAF9F6", textDecoration: "none" }}>📞 +91-8171875188</a>
                </div>
              </div>

              <div>
                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", color: "#D4AF37", marginBottom: "12px" }}>
                  Email Address
                </h4>
                <a href="mailto:jagannathcollegeofpharmacy@gmail.com" style={{ fontSize: "14px", color: "#FAF9F6", textDecoration: "none" }}>
                  ✉️ jagannathcollegeofpharmacy@gmail.com
                </a>
              </div>
            </div>

            {/* Right Map */}
            <div style={{
              borderRadius: "24px", overflow: "hidden",
              border: "2px solid #D4AF37",
              boxShadow: "0 20px 45px rgba(10, 25, 47, 0.15)",
              height: "100%"
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.7123!2d77.6!3d28.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQ5JzQ4LjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="100%" style={{ border: 0, minHeight: "380px", display: "block", height: "100%" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Jagannath Group Location"
              />
            </div>

          </div>
        </section>

        {/* Campuses Contacts Directory */}
        <section style={{ padding: "60px 24px", background: "linear-gradient(180deg, #FAF9F6 0%, #F0EDE6 100%)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", color: "#013a7d", fontWeight: "855", textAlign: "center", marginBottom: "40px" }}>
              College Directory
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              {colleges.map((col) => (
                <div key={col.id} style={{
                  background: "#013a7d",
                  borderRadius: "20px", padding: "28px",
                  border: "1px solid #002452", 
                  borderTop: "3px solid #D4AF37",
                  boxShadow: "0 15px 35px rgba(10, 25, 47, 0.15)",
                  display: "flex", flexDirection: "column", gap: "16px"
                }}
                  className="hover-lift"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{
                      width: "40px", height: "40px", borderRadius: "50%",
                      background: "#002452", display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "20px", border: "1px solid rgba(255, 255, 255, 0.12)"
                    }}>{col.icon}</div>
                    <span style={{ fontWeight: "700", fontSize: "12px", color: "#D4AF37", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                      {col.shortName}
                    </span>
                  </div>
                  
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18.5px", color: "#FAF9F6", fontWeight: "750", lineHeight: 1.3 }}>
                    {col.name}
                  </h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13.5px", color: "#BAC9DA", marginTop: "4px" }}>
                    <span>📞 {col.phone.map((p, idx) => (
                      <a key={idx} href={`tel:${p.replace(/[- ]/g, "")}`} style={{ color: "#FAF9F6", textDecoration: "none" }}>{p}{idx < col.phone.length - 1 ? ", " : ""}</a>
                    ))}</span>
                    <span style={{ wordBreak: "break-all" }}>✉️ <a href={`mailto:${col.email}`} style={{ color: "#FAF9F6", textDecoration: "none" }}>{col.email}</a></span>
                    <span style={{ lineHeight: 1.5 }}>📍 {col.address}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Contact Form */}
        <section style={{ padding: "80px 24px", background: "#FAF9F6" }}>
          <div style={{ 
            maxWidth: "700px", margin: "0 auto", 
            background: "#013a7d", 
            backdropFilter: "none", 
            borderRadius: "24px", padding: "40px", 
            border: "1px solid #002452", 
            borderTop: "3px solid #D4AF37",
            boxShadow: "0 20px 50px rgba(1, 58, 125, 0.12)" 
          }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "56px", marginBottom: "20px" }}>📨</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", color: "#FAF9F6", fontSize: "24px", marginBottom: "8px" }}>Message Sent!</h3>
                <p style={{ color: "#BAC9DA" }}>Thank you for writing to us. Our desk will reply to your email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-page-form" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ textAlign: "center", marginBottom: "16px" }}>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", color: "#FAF9F6", fontSize: "26px", fontWeight: "800" }}>Send Us a Message</h3>
                  <p style={{ color: "#BAC9DA", fontSize: "14px", marginTop: "8px" }}>Drop a line and we will routing your query to the correct department.</p>
                </div>

                {error && (
                  <div style={{ background: "rgba(255, 59, 48, 0.1)", border: "1px solid rgba(255, 59, 48, 0.3)", borderRadius: "10px", padding: "12px 16px", color: "#FF8E8A", fontSize: "14px", fontWeight: "600" }}>
                    ❌ {error}
                  </div>
                )}

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: "600", color: "#FAF9F6", display: "block", marginBottom: "6px" }}>Name *</label>
                    <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "10px", fontSize: "14px", outline: "none", background: "#002452", color: "#FAF9F6" }} 
                      onFocus={e => e.target.style.borderColor = "#D4AF37"}
                      onBlur={e => e.target.style.borderColor = "rgba(255, 255, 255, 0.12)"}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: "600", color: "#FAF9F6", display: "block", marginBottom: "6px" }}>Email *</label>
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "10px", fontSize: "14px", outline: "none", background: "#002452", color: "#FAF9F6" }} 
                      onFocus={e => e.target.style.borderColor = "#D4AF37"}
                      onBlur={e => e.target.style.borderColor = "rgba(255, 255, 255, 0.12)"}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: "600", color: "#FAF9F6", display: "block", marginBottom: "6px" }}>Phone *</label>
                    <input type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "10px", fontSize: "14px", outline: "none", background: "#002452", color: "#FAF9F6" }} 
                      onFocus={e => e.target.style.borderColor = "#D4AF37"}
                      onBlur={e => e.target.style.borderColor = "rgba(255, 255, 255, 0.12)"}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: "600", color: "#FAF9F6", display: "block", marginBottom: "6px" }}>Subject</label>
                    <input type="text" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "10px", fontSize: "14px", outline: "none", background: "#002452", color: "#FAF9F6" }} 
                      onFocus={e => e.target.style.borderColor = "#D4AF37"}
                      onBlur={e => e.target.style.borderColor = "rgba(255, 255, 255, 0.12)"}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "13px", fontWeight: "600", color: "#FAF9F6", display: "block", marginBottom: "6px" }}>Message *</label>
                  <textarea rows={4} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "10px", fontSize: "14px", outline: "none", background: "#002452", color: "#FAF9F6", resize: "vertical" }} 
                    onFocus={e => e.target.style.borderColor = "#D4AF37"}
                    onBlur={e => e.target.style.borderColor = "rgba(255, 255, 255, 0.12)"}
                  />
                </div>

                <button type="submit" disabled={loading} style={{
                  background: loading ? "#7E93A8" : "linear-gradient(135deg, #D4AF37, #F2D06B)", color: "#013a7d",
                  padding: "14px", borderRadius: "10px", border: "none", cursor: loading ? "not-allowed" : "pointer",
                  fontSize: "15px", fontWeight: "700", letterSpacing: "0.5px", textTransform: "uppercase",
                  boxShadow: "0 6px 20px rgba(10,25,47,0.15)", transition: "all 0.3s ease",
                  marginTop: "8px"
                }}
                  onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 10px 25px rgba(10,25,47,0.25)"; } }}
                  onMouseLeave={e => { if (!loading) { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(10,25,47,0.15)"; } }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </section>

      </div>

      <style>{`
        .contact-page-form input::placeholder,
        .contact-page-form textarea::placeholder {
          color: rgba(250, 249, 246, 0.4) !important;
        }
        @media (max-width: 768px) {
          .contact-top-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
