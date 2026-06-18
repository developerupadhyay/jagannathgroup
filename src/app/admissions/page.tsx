"use client";
import { useState } from "react";
import { colleges, courses } from "@/lib/data";

export default function AdmissionsPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", college: "", course: "", message: "", faxNumber: "" });
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
      setForm({ name: "", phone: "", email: "", college: "", course: "", message: "", faxNumber: "" });
    } catch (err: any) {
      setError(err.message || "Failed to send enquiry. Please try again.");
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
              Academic Session 2026-2027
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
              Join Jagannath Group
            </h1>
            <div style={{ width: "60px", height: "3px", background: "#D4AF37", margin: "20px auto 0", borderRadius: "2px" }} />
            <p style={{ color: "rgba(255, 255, 255, 0.82)", fontSize: "16px", lineHeight: 1.7, maxWidth: "700px", margin: "20px auto 0" }}>
              Start your professional career with recognized courses in Pharmacy, Nursing, Education, Law, and Management/IT. Submit your registration details below to get started.
            </p>
          </div>
        </section>

        <section id="apply-form" style={{ padding: "80px 24px", background: "#FAF9F6" }}>
          <div className="admissions-page-form-container" style={{ 
            maxWidth: "750px", margin: "0 auto", 
            background: "#013a7d", 
            backdropFilter: "none", 
            borderRadius: "24px", 
            border: "1px solid #002452", 
            borderTop: "3px solid #D4AF37",
            boxShadow: "0 20px 50px rgba(1, 58, 125, 0.12)" 
          }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "56px", marginBottom: "20px" }}>🎉</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", color: "#FAF9F6", fontSize: "24px", marginBottom: "8px" }}>Form Submitted Successfully</h3>
                <p style={{ color: "#BAC9DA" }}>Our admissions coordinator will contact you on your phone number within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="admissions-page-form" style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {/* Honeypot field for spam protection */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <input 
                    type="text" 
                    name="faxNumber" 
                    tabIndex={-1} 
                    value={form.faxNumber} 
                    onChange={e => setForm({ ...form, faxNumber: e.target.value })} 
                    autoComplete="off" 
                  />
                </div>

                <div style={{ textAlign: "center", marginBottom: "16px" }}>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", color: "#FAF9F6", fontSize: "26px", fontWeight: "800" }}>Online Enquiry Form</h3>
                  <p style={{ color: "#BAC9DA", fontSize: "14px", marginTop: "8px" }}>Select your preferred college and course to receive eligibility confirmation.</p>
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
                    <label style={{ fontSize: "13px", fontWeight: "600", color: "#FAF9F6", display: "block", marginBottom: "6px" }}>Phone Number *</label>
                    <input type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "10px", fontSize: "14px", outline: "none", background: "#002452", color: "#FAF9F6" }} 
                      onFocus={e => e.target.style.borderColor = "#D4AF37"}
                      onBlur={e => e.target.style.borderColor = "rgba(255, 255, 255, 0.12)"}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "13px", fontWeight: "600", color: "#FAF9F6", display: "block", marginBottom: "6px" }}>Email Address</label>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "10px", fontSize: "14px", outline: "none", background: "#002452", color: "#FAF9F6" }} 
                    onFocus={e => e.target.style.borderColor = "#D4AF37"}
                    onBlur={e => e.target.style.borderColor = "rgba(255, 255, 255, 0.12)"}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: "600", color: "#FAF9F6", display: "block", marginBottom: "6px" }}>Select College *</label>
                    <select required value={form.college} onChange={e => setForm({ ...form, college: e.target.value, course: "" })}
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "10px", fontSize: "14px", outline: "none", background: "#002452", color: form.college ? "#FAF9F6" : "rgba(250, 249, 246, 0.5)" }}
                      onFocus={e => e.target.style.borderColor = "#D4AF37"}
                      onBlur={e => e.target.style.borderColor = "rgba(255, 255, 255, 0.12)"}
                    >
                      <option value="" style={{ background: "#FFFFFF", color: "#7E93A8" }}>Choose Campus</option>
                      {colleges.map(c => <option key={c.slug} value={c.name} style={{ background: "#FFFFFF", color: "#1C2D42" }}>{c.name}</option>)}
                    </select>
                  </div>
                  
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: "600", color: "#FAF9F6", display: "block", marginBottom: "6px" }}>Select Course *</label>
                    <select required value={form.course} onChange={e => setForm({ ...form, course: e.target.value })} disabled={!form.college}
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "10px", fontSize: "14px", outline: "none", background: "#002452", color: form.course ? "#FAF9F6" : "rgba(250, 249, 246, 0.5)", opacity: form.college ? 1 : 0.6 }}
                      onFocus={e => e.target.style.borderColor = "#D4AF37"}
                      onBlur={e => e.target.style.borderColor = "rgba(255, 255, 255, 0.12)"}
                    >
                      <option value="" style={{ background: "#FFFFFF", color: "#7E93A8" }}>{form.college ? "Choose Program" : "Select college first"}</option>
                      {filteredCourses.map(c => <option key={c.slug} value={c.name} style={{ background: "#FFFFFF", color: "#1C2D42" }}>{c.name}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "13px", fontWeight: "600", color: "#FAF9F6", display: "block", marginBottom: "6px" }}>Additional Message</label>
                  <textarea rows={3} placeholder="Ask about syllabus, fees, transport facility, etc..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "10px", fontSize: "14px", outline: "none", background: "#002452", color: "#FAF9F6", resize: "vertical" }} 
                    onFocus={e => e.target.style.borderColor = "#D4AF37"}
                    onBlur={e => e.target.style.borderColor = "rgba(255, 255, 255, 0.12)"}
                  />
                </div>

                <button type="submit" disabled={loading} style={{
                  background: loading ? "#7E93A8" : "linear-gradient(135deg, #D4AF37, #F2D06B)", color: "#013a7d",
                  padding: "14px", borderRadius: "10px", border: "none", cursor: loading ? "not-allowed" : "pointer",
                  fontSize: "15px", fontWeight: "700", letterSpacing: "0.5px", textTransform: "uppercase",
                  boxShadow: "0 6px 20px rgba(212, 175, 55, 0.15)", transition: "all 0.3s ease",
                  marginTop: "8px"
                }}
                  onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 10px 25px rgba(212, 175, 55, 0.25)"; } }}
                  onMouseLeave={e => { if (!loading) { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(212, 175, 55, 0.15)"; } }}
                >
                  {loading ? "Sending..." : "Submit Registration"}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Roadmap Steps */}
        <section style={{ padding: "60px 24px", background: "linear-gradient(180deg, #FAF9F6 0%, #F0EDE6 100%)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", color: "#013a7d", fontWeight: "800", textAlign: "center", marginBottom: "48px" }}>
              Admission Process Flow
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }} className="admission-steps">
              {[
                { step: "01", title: "Enquiry Form", desc: "Submit the online query form above or visit our Modinagar campus counter." },
                { step: "02", title: "Document Review", desc: "Our academic advisors verify your eligibility marks (10+2 or graduation certificates)." },
                { step: "03", title: "Counseling Meet", desc: "Visit the respective college to interact with faculty and inspect labs and resources." },
                { step: "04", title: "Enrollment & Fee", desc: "Deposit academic fee to secure your seat, verify documents, and get registration numbers." }
              ].map((step, i) => (
                <div key={i} style={{
                  background: "#013a7d",
                  borderRadius: "16px", padding: "28px",
                  border: "1px solid #002452", 
                  borderTop: "3px solid #D4AF37",
                  boxShadow: "0 15px 35px rgba(10, 25, 47, 0.15)",
                  position: "relative", display: "flex", flexDirection: "column", gap: "12px"
                }}
                  className="hover-lift"
                >
                  <div style={{
                    fontSize: "36px", fontWeight: "800", color: "#002452",
                    fontFamily: "'Outfit', sans-serif", position: "absolute", top: "12px", right: "20px"
                  }}>{step.step}</div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", color: "#D4AF37", fontWeight: "700", marginTop: "12px" }}>
                    {step.title}
                  </h3>
                  <p style={{ color: "#BAC9DA", fontSize: "13.5px", lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Required Documents Checklist */}
        <section id="checklist" style={{ padding: "80px 24px" }}>
          <div style={{
            maxWidth: "1100px", margin: "0 auto",
            display: "grid", gridTemplateColumns: "1.2fr 1.8fr", gap: "60px",
            alignItems: "stretch"
          }} className="docs-grid">
            
            {/* Left Box */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase" }}>Registration Desk</span>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "32px", color: "#013a7d", fontWeight: "800", marginTop: "12px", marginBottom: "20px" }}>
                Required Documents
              </h2>
              <p style={{ color: "#5A6E85", fontSize: "15px", lineHeight: 1.7, marginBottom: "24px" }}>
                Candidates must carry original certificates along with three sets of photocopies during admission verification:
              </p>
              <div style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "12px", padding: "20px", color: "#013a7d", fontSize: "14px" }}>
                📢 <strong>Important Note:</strong> For Pharmacy (B.Pharma/D.Pharma) and Nursing (B.Sc Nursing), registration certificates or medical certificates are required post seat allotment.
              </div>
            </div>

            {/* Right Checklist (Dark Card on Light BG) */}
            <div style={{ 
              background: "#013a7d", 
              borderRadius: "24px", padding: "40px", 
              border: "1px solid #002452", 
              borderTop: "3px solid #D4AF37",
              boxShadow: "0 20px 45px rgba(10, 25, 47, 0.15)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>
              {[
                "Class 10th Marksheet & Passing Certificate",
                "Class 12th Marksheet & Passing Certificate",
                "Graduation Marksheets (for B.Ed, D.El.Ed, LLB, B.Com)",
                "Transfer Certificate (TC) & Character Certificate",
                "Migration Certificate (for boards other than UP board)",
                "Aadhaar Card copy of candidate and parents",
                "6 Passport size recent color photographs",
                "Category Certificate (if claiming SC/ST/OBC scholarship)"
              ].map((doc, idx) => (
                <div key={idx} style={{ display: "flex", gap: "12px", alignItems: "center", padding: "10px 0", borderBottom: idx < 7 ? "1px solid #002452" : "none" }}>
                  <span style={{ color: "#D4AF37", fontWeight: "800" }}>✓</span>
                  <span style={{ color: "#BAC9DA", fontSize: "14.5px" }}>{doc}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Scholarships Policy */}
        <section id="scholarships" style={{ padding: "60px 24px", background: "linear-gradient(135deg, #013a7d 0%, #014c9c 100%)", color: "#FAF9F6" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "32px", color: "#D4AF37", fontWeight: "800", marginBottom: "16px" }}>
              Scholarships & Fee Concessions
            </h2>
            <p style={{ color: "rgba(250,249,246,0.85)", fontSize: "15px", maxWidth: "600px", margin: "0 auto 40px" }}>
              We believe in rewarding merit and helping under-represented student communities build stable careers.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="scholarships-grid">
              {[
                { title: "Meritorious Scholarship", desc: "Up to 25% waiver on academic tuition fee for students securing above 90% in intermediate exams." },
                { title: "Social Welfare Scheme", desc: "Direct UP State scholarship benefits and fee reimbursement for SC/ST and OBC students." },
                { title: "Beti Bachao Concession", desc: "Special 10% fee concession for female students applying for professional programs." }
              ].map((s, idx) => (
                <div key={idx} style={{
                  background: "#002452",
                  backdropFilter: "none",
                  border: "1px solid #002452",
                  borderTop: "3px solid #D4AF37",
                  borderRadius: "16px", padding: "32px 24px", textAlign: "left",
                  display: "flex", flexDirection: "column", gap: "12px"
                }}>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "19px", color: "#D4AF37", fontWeight: "700" }}>
                    {s.title}
                  </h3>
                  <p style={{ color: "#BAC9DA", fontSize: "13.5px", lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      <style>{`
        .admissions-page-form-container {
          padding: 40px;
        }
        .admissions-page-form input::placeholder,
        .admissions-page-form textarea::placeholder {
          color: rgba(250, 249, 246, 0.4) !important;
        }
        @media (max-width: 992px) {
          .admission-steps { grid-template-columns: repeat(2, 1fr) !important; }
          .scholarships-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .admission-steps { grid-template-columns: 1fr !important; }
          .docs-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .admissions-page-form-container {
            padding: 24px 20px !important;
          }
        }
        @media (max-width: 480px) {
          .admissions-page-form-container {
            padding: 16px 12px !important;
          }
        }
      `}</style>
    </>
  );
}
