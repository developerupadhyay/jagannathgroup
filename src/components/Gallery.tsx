"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const galleryImages = [
  { url: "/website_images/college_front_photo.jpeg", alt: "Main Campus Entrance", label: "Administrative Block & Main Entrance" },
  { url: "/website_images/college_computer_lab.jpeg", alt: "Computer Laboratory", label: "Advanced IT & Computer Centre" },
  { url: "/website_images/college_outside_garden.jpeg", alt: "Green Landscape Garden", label: "Lush Green Eco Campus" },
  { url: "/website_images/college_outside_photo.jpeg", alt: "Campus Block", label: "Academic Block Facade" },
  { url: "/website_images/college_outside_photo2.jpeg", alt: "Campus Entrance Pathway", label: "Main Pathway & Entrance" },
  { url: "/website_images/college_outside_photo4.jpeg", alt: "Classroom Building Block", label: "Lecture Halls & Seminar Block" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" style={{ padding: "120px 24px", background: "linear-gradient(180deg, #FAF9F6 0%, #F0EDE6 100%)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>Campus Life</span>
          <h2 style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontSize: "clamp(30px, 4vw, 44px)", color: "#0A192F", 
            marginTop: "12px", fontWeight: "800", letterSpacing: "-0.02em" 
          }}>
            Explore Our Campus
          </h2>
          <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #D4AF37, #F2D06B)", margin: "20px auto 0", borderRadius: "2px" }} />
        </div>

        {/* Gallery Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }} className="gallery-layout">
          {galleryImages.map((img, i) => (
            <motion.div key={i}
              layout
              onClick={() => setSelected(selected === i ? null : i)}
              style={{
                borderRadius: "16px", overflow: "hidden", cursor: "pointer",
                aspectRatio: "1/1", position: "relative",
                boxShadow: selected === i ? "0 12px 40px rgba(10,25,47,0.25)" : "0 4px 16px rgba(10,25,47,0.03)",
                transform: selected === i ? "scale(1.02)" : "scale(1)",
                transition: "all 0.3s ease",
                gridColumn: i === 0 ? "span 2" : "auto",
                gridRow: i === 0 ? "span 2" : "auto",
                border: "1px solid #F0EDE6"
              }}
              className="gallery-item"
            >
              <img src={img.url} alt={img.alt} style={{
                width: "100%", height: "100%", objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(to top, rgba(10,25,47,0.85) 0%, transparent 100%)",
                padding: "30px 20px 16px",
              }}>
                <span style={{ color: "#FAF9F6", fontSize: "14px", fontWeight: "600", fontFamily: "'Outfit', sans-serif" }}>{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-layout {
            grid-template-columns: 1fr 1fr !important;
          }
          .gallery-item {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-layout {
            grid-template-columns: 1fr !important;
          }
          .gallery-item {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
