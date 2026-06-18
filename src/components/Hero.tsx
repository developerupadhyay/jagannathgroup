"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { colleges, courses } from "@/lib/data";

const stats = [
  { number: "5", label: "Colleges" },
  { number: "12+", label: "Courses" },
  { number: "5000+", label: "Students" },
  { number: "25+", label: "Years Legacy" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", college: "", course: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    setMounted(true);
    fetch("/api/hero-video")
      .then(res => res.json())
      .then(data => {
        if (data.videoUrl) setVideoUrl(data.videoUrl);
      })
      .catch(err => {
        console.error("Error loading background video:", err);
      });
  }, []);

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
      setTimeout(() => setSubmitted(false), 8000);
    } catch (err: any) {
      setError(err.message || "Failed to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return (
      <section style={{
        minHeight: "100vh",
        background: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#000000"
      }}>
        Loading hero section...
      </section>
    );
  }

  return (
    <section id="home" style={{
      minHeight: "100vh",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      padding: "140px 24px 80px",
      background: "linear-gradient(135deg, #f0f5fa 0%, #ffffff 100%)",
      borderBottom: "1px solid rgba(1, 58, 125, 0.05)"
    }}>

      {videoUrl && (
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, rgba(0, 26, 61, 0.94) 0%, rgba(1, 58, 125, 0.88) 50%, rgba(0, 26, 61, 0.96) 100%)",
        zIndex: 1,
      }} />

      <div style={{
        position: "relative",
        zIndex: 2,
        maxWidth: "1200px",
        width: "100%",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        gap: "60px",
        alignItems: "center",
      }} className="hero-grid">
        
        <motion.div 
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}
          className="hero-left"
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(212, 175, 55, 0.12)", border: "1px solid rgba(212, 175, 55, 0.28)",
            borderRadius: "30px", padding: "8px 20px", marginBottom: "24px",
          }}>
            <span style={{ color: "#D4AF37", fontSize: "12px" }}>★</span>
            <span style={{ color: "#F2D06B", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: "750" }}>
              Est. in Modinagar, Ghaziabad
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(34px, 4.5vw, 60px)",
            color: "#FFFFFF", fontWeight: "800",
            lineHeight: 1.15, marginBottom: "20px",
            letterSpacing: "-0.02em"
          }}>
            Jagannath Group
            <span style={{ display: "block", color: "#D4AF37" }}>of Institutions</span>
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(15px, 1.8vw, 17px)", color: "rgba(255, 255, 255, 0.82)",
            lineHeight: 1.7, marginBottom: "36px", maxWidth: "600px"
          }}>
            Nurturing Excellence, Shaping Futures — A premier educational group offering 
            world-class professional education across 5 institutions in Modinagar, UP.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}>
            <a href="#colleges" style={{
              background: "#D4AF37",
              color: "#001A3D", padding: "14px 32px", borderRadius: "8px",
              textDecoration: "none", fontSize: "13.5px", fontWeight: "700",
              boxShadow: "0 4px 14px rgba(212, 175, 55, 0.3)",
              border: "none",
              transition: "all 0.3s ease", letterSpacing: "0.5px", textTransform: "uppercase"
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#FFFFFF"; e.currentTarget.style.color = "#013a7d"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#D4AF37"; e.currentTarget.style.color = "#001A3D"; }}
            >Explore Colleges</a>
            
            <Link href="/admissions" style={{
              background: "transparent", border: "1.5px solid rgba(255, 255, 255, 0.4)",
              color: "#FFFFFF", padding: "14px 32px", borderRadius: "8px",
              textDecoration: "none", fontSize: "13.5px", fontWeight: "700",
              transition: "all 0.3s ease", letterSpacing: "0.5px", textTransform: "uppercase"
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)"; e.currentTarget.style.borderColor = "#D4AF37"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)"; }}
            >Admission Flow</Link>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px",
            width: "100%", maxWidth: "600px",
          }} className="hero-stats">
            {stats.map((s, i) => (
              <div key={i} style={{
                padding: "16px", textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                backdropFilter: "blur(4px)"
              }}>
                <div style={{ fontSize: "22px", fontWeight: "800", color: "#FFFFFF", fontFamily: "'Outfit', sans-serif" }}>{s.number}</div>
                <div style={{ fontSize: "10px", color: "#D4AF37", textTransform: "uppercase", letterSpacing: "1px", marginTop: "4px", fontWeight: "750" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(255, 255, 255, 0.9)",
            borderRadius: "16px",
            padding: "36px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.22)",
            width: "100%",
          }}
          className="hero-form-container"
        >
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: "56px", marginBottom: "20px" }}>🎉</div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", color: "#013a7d", fontSize: "22px", marginBottom: "8px" }}>Enquiry Submitted</h3>
              <p style={{ color: "#475569", fontSize: "14px" }}>Thank you! Our admission desk will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ textAlign: "center", marginBottom: "8px" }}>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", color: "#013a7d", fontSize: "22px", fontWeight: "700" }}>Quick Enquiry</h3>
                <p style={{ color: "#475569", fontSize: "12.5px", marginTop: "4px" }}>Fill out your details to receive admission guidance.</p>
              </div>

              {error && (
                <div style={{ background: "rgba(220, 38, 38, 0.05)", border: "1px solid rgba(220, 38, 38, 0.2)", borderRadius: "8px", padding: "10px 14px", color: "#DC2626", fontSize: "13px", fontWeight: "600" }}>
                  ❌ {error}
                </div>
              )}

              <div>
                <input 
                  type="text" 
                  placeholder="Full Name *" 
                  required 
                  value={form.name} 
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  style={{
                    width: "100%", padding: "11px 14px", border: "1px solid #E2E8F0",
                    borderRadius: "8px", fontSize: "13.5px", outline: "none", color: "#001A3D",
                    background: "#F8FAFC", transition: "all 0.3s"
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }} className="hero-form-row">
                <input 
                  type="tel" 
                  placeholder="Phone Number *" 
                  required 
                  value={form.phone} 
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  style={{
                    width: "100%", padding: "11px 14px", border: "1px solid #E2E8F0",
                    borderRadius: "8px", fontSize: "13.5px", outline: "none", color: "#001A3D",
                    background: "#F8FAFC", transition: "all 0.3s"
                  }}
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={form.email} 
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  style={{
                    width: "100%", padding: "11px 14px", border: "1px solid #E2E8F0",
                    borderRadius: "8px", fontSize: "13.5px", outline: "none", color: "#001A3D",
                    background: "#F8FAFC", transition: "all 0.3s"
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }} className="hero-form-row">
                <select 
                  required 
                  value={form.college} 
                  onChange={e => setForm({ ...form, college: e.target.value, course: "" })}
                  style={{
                    width: "100%", padding: "11px 14px", border: "1px solid #E2E8F0",
                    borderRadius: "8px", fontSize: "13.5px", outline: "none", color: "#001A3D",
                    background: "#F8FAFC", transition: "all 0.3s"
                  }}
                >
                  <option value="" style={{ background: "#FFFFFF", color: "#64748b" }}>Select College</option>
                  {colleges.map(c => <option key={c.slug} value={c.name} style={{ background: "#FFFFFF", color: "#001A3D" }}>{c.name}</option>)}
                </select>

                <select 
                  required 
                  value={form.course} 
                  onChange={e => setForm({ ...form, course: e.target.value })}
                  disabled={!form.college}
                  style={{
                    width: "100%", padding: "11px 14px", border: "1px solid #E2E8F0",
                    borderRadius: "8px", fontSize: "13.5px", outline: "none", color: "#001A3D",
                    background: "#F8FAFC", transition: "all 0.3s",
                    opacity: form.college ? 1 : 0.6
                  }}
                >
                  <option value="" style={{ background: "#FFFFFF", color: "#64748b" }}>{form.college ? "Select Course" : "Choose college first"}</option>
                  {filteredCourses.map(c => <option key={c.slug} value={c.name} style={{ background: "#FFFFFF", color: "#001A3D" }}>{c.name}</option>)}
                </select>
              </div>

              <div>
                <textarea 
                  rows={2} 
                  placeholder="Your Message..." 
                  value={form.message} 
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: "100%", padding: "11px 14px", border: "1px solid #E2E8F0",
                    borderRadius: "8px", fontSize: "13.5px", outline: "none", color: "#001A3D",
                    background: "#F8FAFC", transition: "all 0.3s", resize: "none"
                  }}
                />
              </div>

              <button 
                type="submit" 
                disabled={loading} 
                style={{
                  background: "#013a7d", 
                  color: "#FFFFFF",
                  padding: "12px", borderRadius: "8px", border: "none", cursor: loading ? "not-allowed" : "pointer",
                  fontSize: "13.5px", fontWeight: "700", letterSpacing: "0.5px", textTransform: "uppercase",
                  boxShadow: "0 4px 12px rgba(1, 58, 125, 0.15)", transition: "all 0.3s ease",
                  marginTop: "6px"
                }}
                onMouseEnter={e => { if (!loading) { e.currentTarget.style.background = "#D4AF37"; } }}
                onMouseLeave={e => { if (!loading) { e.currentTarget.style.background = "#013a7d"; } }}
              >
                {loading ? "Sending..." : "Submit Enquiry"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .hero-form-container input::placeholder,
        .hero-form-container textarea::placeholder {
          color: #94a3b8 !important;
        }
        .hero-form-container input:focus,
        .hero-form-container select:focus,
        .hero-form-container textarea:focus {
          border-color: #013a7d !important;
          background: #FFFFFF !important;
        }
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            padding-top: 130px !important;
            gap: 48px !important;
          }
          .hero-left {
            align-items: center !important;
            text-align: center !important;
          }
          .hero-form-container {
            max-width: 550px !important;
            margin: 0 auto !important;
          }
        }
        @media (max-width: 768px) {
          .hero-stats {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .hero-form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
