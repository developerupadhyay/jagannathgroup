"use client";
import { useState } from "react";

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80", alt: "Campus Building", label: "Main Campus" },
  { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80", alt: "Graduation", label: "Convocation Ceremony" },
  { url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80", alt: "Nursing Lab", label: "Nursing Laboratory" },
  { url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80", alt: "Pharmacy Lab", label: "Pharmacy Lab" },
  { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80", alt: "Classroom", label: "Modern Classrooms" },
  { url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80", alt: "Library", label: "Library & Resources" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" style={{ padding: "100px 24px", background: "linear-gradient(180deg, #FAF6EF 0%, #F0E8D8 100%)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{ color: "#8B1A1A", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>Campus Life</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 48px)", color: "#5C0A14", marginTop: "12px", fontWeight: "700" }}>
            Gallery
          </h2>
          <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #D4AF37, #F0D060)", margin: "20px auto 0", borderRadius: "2px" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {galleryImages.map((img, i) => (
            <div key={i}
              onClick={() => setSelected(selected === i ? null : i)}
              style={{
                borderRadius: "16px", overflow: "hidden", cursor: "pointer",
                aspectRatio: "4/3", position: "relative",
                boxShadow: selected === i ? "0 12px 40px rgba(92,10,20,0.3)" : "0 4px 16px rgba(92,10,20,0.1)",
                transform: selected === i ? "scale(1.03)" : "scale(1)",
                transition: "all 0.3s ease",
                gridColumn: i === 0 ? "1 / 3" : "auto",
              }}>
              <img src={img.url} alt={img.alt} style={{
                width: "100%", height: "100%", objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.08)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(to top, rgba(92,10,20,0.85), transparent)",
                padding: "30px 20px 16px",
              }}>
                <span style={{ color: "#FAF6EF", fontSize: "14px", fontWeight: "600" }}>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #gallery > div > div:last-child {
            grid-template-columns: 1fr 1fr !important;
          }
          #gallery > div > div:last-child > div:first-child {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>
    </section>
  );
}
