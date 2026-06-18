"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { courses, colleges } from "@/lib/data";

function CoursesContent() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get("cat");

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCollege, setActiveCollege] = useState("All");

  // Sync category state with query parameter
  useEffect(() => {
    if (catParam) {
      // Decode parameter
      const decoded = decodeURIComponent(catParam);
      const validCategories = ["Pharmacy", "Nursing", "Education", "Law", "General"];
      if (validCategories.includes(decoded)) {
        setActiveCategory(decoded);
      } else {
        setActiveCategory("All");
      }
    } else {
      setActiveCategory("All");
    }
  }, [catParam]);

  // Categories list
  const categories = ["All", "Pharmacy", "Nursing", "Education", "Law", "General"];

  // Filter logic
  const filtered = courses.filter((course) => {
    const matchesSearch = course.name.toLowerCase().includes(search.toLowerCase()) || 
                          course.slug.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    
    // Find college slug or name
    const collegeObj = colleges.find(c => c.name === activeCollege || c.slug === activeCollege);
    const matchesCollege = activeCollege === "All" || course.collegeSlug === collegeObj?.slug;

    return matchesSearch && matchesCategory && matchesCollege;
  });

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header text */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>
          Academic Programs
        </span>
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(30px, 4vw, 48px)", color: "#0A192F", marginTop: "12px", fontWeight: "800", letterSpacing: "-0.02em" }}>
          Courses Directory
        </h1>
        <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #D4AF37, #F2D06B)", margin: "20px auto 0", borderRadius: "2px" }} />
      </div>

      {/* Search and Filters panel */}
      <div style={{
        background: "#FFFFFF", borderRadius: "20px", padding: "28px 24px",
        border: "1px solid #F0EDE6", boxShadow: "0 4px 20px rgba(10,25,47,0.02)",
        display: "flex", flexDirection: "column", gap: "24px", marginBottom: "48px"
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "16px" }} className="search-row">
          {/* Search Field */}
          <div>
            <label style={{ fontSize: "12px", fontWeight: "700", color: "#0A192F", display: "block", marginBottom: "6px", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif" }}>Search Course</label>
            <input type="text" placeholder="Type course name (e.g. Pharmacy, LLB, BBA)..." value={search} onChange={e => setSearch(e.target.value)}
              style={{ width: "100%", padding: "12px 16px", border: "1px solid #F0EDE6", borderRadius: "10px", fontSize: "14px", outline: "none", background: "#FAF9F6" }} />
          </div>
          
          {/* College Filter */}
          <div>
            <label style={{ fontSize: "12px", fontWeight: "700", color: "#0A192F", display: "block", marginBottom: "6px", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif" }}>Filter by College</label>
            <select value={activeCollege} onChange={e => setActiveCollege(e.target.value)}
              style={{ width: "100%", padding: "12px 16px", border: "1px solid #F0EDE6", borderRadius: "10px", fontSize: "14px", outline: "none", background: "#FAF9F6", color: "#1C2D42" }}>
              <option value="All">All Campuses</option>
              {colleges.map(c => <option key={c.slug} value={c.name}>{c.shortName} - {c.name}</option>)}
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div>
          <label style={{ fontSize: "12px", fontWeight: "700", color: "#0A192F", display: "block", marginBottom: "12px", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif" }}>Categories</label>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "10px 20px", borderRadius: "25px", cursor: "pointer",
                  background: activeCategory === cat ? "linear-gradient(135deg, #0A192F, #1B3D6D)" : "#FFF",
                  color: activeCategory === cat ? "#FAF9F6" : "#0A192F",
                  fontSize: "13px", fontWeight: "600",
                  boxShadow: activeCategory === cat ? "0 4px 15px rgba(10,25,47,0.2)" : "none",
                  transition: "all 0.3s ease",
                  border: activeCategory === cat ? "none" : "1px solid #F0EDE6",
                }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      {filtered.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px", marginBottom: "60px" }}>
          {filtered.map((course, i) => {
            const college = colleges.find(c => c.slug === course.collegeSlug);
            return (
              <div key={i} style={{
                background: "#FFF", borderRadius: "18px", padding: "32px 28px",
                border: "1px solid #F0EDE6",
                boxShadow: "0 4px 20px rgba(10,25,47,0.02)",
                transition: "all 0.3s ease",
                display: "flex", flexDirection: "column", gap: "16px",
                position: "relative", overflow: "hidden"
              }}
                className="course-card hover-lift"
              >
                {/* Visual badge top right */}
                <div style={{
                  position: "absolute", top: "0", right: "0", width: "80px", height: "80px",
                  background: `radial-gradient(circle at top right, ${college?.color}10, transparent)`,
                  borderRadius: "0 0 0 100%"
                }} />

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "36px" }}>{college?.icon || "🎓"}</span>
                  <span style={{
                    padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: "700",
                    background: course.type === "Diploma" ? "rgba(212,175,55,0.15)" : course.type === "Integrated" ? "rgba(27,61,109,0.1)" : "rgba(10,25,47,0.06)",
                    color: course.type === "Diploma" ? "#8B7020" : course.type === "Integrated" ? "#1B3D6D" : "#0A192F",
                    letterSpacing: "0.5px", textTransform: "uppercase"
                  }}>{course.type}</span>
                </div>

                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "19px", color: "#0A192F", fontWeight: "800", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                  {course.name}
                </h3>

                <p style={{ fontSize: "13.5px", color: "#5A6E85", lineHeight: 1.5, flexGrow: 1 }}>
                  {course.overview.substring(0, 110)}...
                </p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #FAF9F6", paddingTop: "16px", marginTop: "auto" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "10px", color: "#7E93A8", fontWeight: "600" }}>DURATION</span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#1C2D42" }}>⏱ {course.duration}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "2px" }}>
                    <span style={{ fontSize: "10px", color: "#7E93A8", fontWeight: "600" }}>CAMPUS</span>
                    <span style={{
                      fontSize: "11px", fontWeight: "700", color: college?.color || "#0A192F",
                      background: `${college?.color}08`, padding: "3px 8px", borderRadius: "10px",
                      border: `1px solid ${college?.color}15`
                    }}>{college?.shortName}</span>
                  </div>
                </div>

                <Link href={`/courses/${course.slug}`} style={{
                  background: "linear-gradient(135deg, #FAF9F6, #F0EDE6)", color: "#0A192F",
                  padding: "12px", borderRadius: "10px", textDecoration: "none",
                  fontSize: "13.5px", fontWeight: "700", textAlign: "center",
                  border: "1px solid #F0EDE6", transition: "all 0.3s ease",
                  marginTop: "8px"
                }} className="course-btn">
                  Course Guidelines & Syllabus
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "60px 24px", background: "#FFFFFF", borderRadius: "20px", border: "1px solid #F0EDE6", marginBottom: "80px" }}>
          <div style={{ fontSize: "48px" }}>🔍</div>
          <h3 style={{ fontFamily: "'Outfit', sans-serif", color: "#0A192F", fontSize: "20px", marginTop: "12px" }}>No Courses Found</h3>
          <p style={{ color: "#7E93A8", fontSize: "14px", marginTop: "8px" }}>Try adjusting your filters or search keywords.</p>
        </div>
      )}
    </div>
  );
}

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "140px", background: "#FAF9F6", minHeight: "100vh", paddingLeft: "24px", paddingRight: "24px" }}>
        <Suspense fallback={
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh", fontSize: "18px", color: "#0A192F" }}>
            Loading courses directory...
          </div>
        }>
          <CoursesContent />
        </Suspense>
      </div>
      <Footer />

      <style>{`
        .course-btn:hover {
          background: linear-gradient(135deg, #0A192F, #1B3D6D) !important;
          color: #FAF9F6 !important;
          border-color: transparent !important;
        }
        @media (max-width: 768px) {
          .search-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
