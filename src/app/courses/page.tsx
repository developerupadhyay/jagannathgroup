"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
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

      {/* Search and Filters panel (Light Card on Light BG) */}
      <div className="courses-search-panel" style={{
        background: "#013a7d", borderRadius: "20px", padding: "28px 24px",
        border: "1px solid #002452",
        borderTop: "3px solid #D4AF37",
        boxShadow: "0 20px 45px rgba(10, 25, 47, 0.15)",
        display: "flex", flexDirection: "column", gap: "24px", marginBottom: "48px"
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "16px" }} className="search-row">
          {/* Search Field */}
          <div>
            <label style={{ fontSize: "12px", fontWeight: "700", color: "#D4AF37", display: "block", marginBottom: "6px", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif" }}>Search Course</label>
            <input type="text" placeholder="Type course name (e.g. Pharmacy, LLB, BBA)..." value={search} onChange={e => setSearch(e.target.value)}
              style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "10px", fontSize: "14px", outline: "none", background: "#002452", color: "#FAF9F6" }} 
              onFocus={e => e.target.style.borderColor = "#D4AF37"}
              onBlur={e => e.target.style.borderColor = "rgba(255, 255, 255, 0.12)"}
            />
          </div>
          
          {/* College Filter */}
          <div>
            <label style={{ fontSize: "12px", fontWeight: "700", color: "#D4AF37", display: "block", marginBottom: "6px", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif" }}>Filter by College</label>
            <select value={activeCollege} onChange={e => setActiveCollege(e.target.value)}
              style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "10px", fontSize: "14px", outline: "none", background: "#002452", color: "#FAF9F6" }}
              onFocus={e => e.target.style.borderColor = "#D4AF37"}
              onBlur={e => e.target.style.borderColor = "rgba(255, 255, 255, 0.12)"}
            >
              <option value="All" style={{ background: "#013a7d", color: "#BAC9DA" }}>All Campuses</option>
              {colleges.map(c => <option key={c.slug} value={c.name} style={{ background: "#013a7d", color: "#FAF9F6" }}>{c.shortName} - {c.name}</option>)}
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div>
          <label style={{ fontSize: "12px", fontWeight: "700", color: "#D4AF37", display: "block", marginBottom: "12px", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif" }}>Categories</label>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "10px 20px", borderRadius: "25px", cursor: "pointer",
                  background: activeCategory === cat ? "linear-gradient(135deg, #D4AF37, #F2D06B)" : "#002452",
                  color: activeCategory === cat ? "#013a7d" : "#BAC9DA",
                  fontSize: "13px", fontWeight: "600",
                  boxShadow: activeCategory === cat ? "0 4px 15px rgba(212,175,55,0.2)" : "none",
                  transition: "all 0.3s ease",
                  border: activeCategory === cat ? "none" : "1px solid rgba(255, 255, 255, 0.12)",
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
                background: "#013a7d", borderRadius: "18px", padding: "32px 28px",
                border: "1px solid #002452",
                borderTop: "3px solid #D4AF37",
                boxShadow: "0 15px 35px rgba(10, 25, 47, 0.15)",
                transition: "all 0.3s ease",
                display: "flex", flexDirection: "column", gap: "16px",
                position: "relative", overflow: "hidden"
              }}
                className="course-card hover-lift"
              >
                {/* Visual badge top right */}
                <div style={{
                  position: "absolute", top: "0", right: "0", width: "80px", height: "80px",
                  background: `radial-gradient(circle at top right, rgba(212,175,55,0.04), transparent)`,
                  borderRadius: "0 0 0 100%"
                }} />

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "50%",
                    background: "#002452", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "24px", border: "1px solid rgba(255, 255, 255, 0.12)"
                  }}>{college?.icon || "🎓"}</div>
                  <span style={{
                    padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: "700",
                    background: "#002452",
                    color: "#D4AF37",
                    letterSpacing: "0.5px", textTransform: "uppercase",
                    border: "1px solid rgba(255, 255, 255, 0.12)"
                  }}>{course.type}</span>
                </div>

                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "19px", color: "#FAF9F6", fontWeight: "800", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                  {course.name}
                </h3>

                <p style={{ color: "#BAC9DA", fontSize: "14px", lineHeight: 1.7, flexGrow: 1 }}>
                  {course.overview.substring(0, 110)}...
                </p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #002452", paddingTop: "16px", marginTop: "auto" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "10px", color: "#BAC9DA", fontWeight: "600" }}>DURATION</span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#D4AF37" }}>⏱ {course.duration}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "2px" }}>
                    <span style={{ fontSize: "10px", color: "#BAC9DA", fontWeight: "600" }}>CAMPUS</span>
                    <span style={{
                      fontSize: "11.5px", fontWeight: "700", color: "#FAF9F6",
                      background: "#002452", padding: "4px 12px", borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.12)"
                    }}>{college?.shortName}</span>
                  </div>
                </div>

                <Link href={`/courses/${course.slug}`} style={{
                  background: "linear-gradient(135deg, #D4AF37, #F2D06B)", color: "#013a7d",
                  padding: "12px", borderRadius: "10px", textDecoration: "none",
                  fontSize: "13.5px", fontWeight: "700", textAlign: "center",
                  border: "none", transition: "all 0.3s ease",
                  marginTop: "8px",
                  boxShadow: "0 4px 12px rgba(212, 175, 55, 0.2)"
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(212, 175, 55, 0.35)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(212, 175, 55, 0.2)"; }}
                >
                  Course Guidelines & Syllabus
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "60px 24px", background: "#FFFFFF", borderRadius: "20px", border: "1px solid #F0EDE6", marginBottom: "80px" }}>
          <div style={{ fontSize: "48px" }}>🔍</div>
          <h3 style={{ fontFamily: "'Outfit', sans-serif", color: "#013a7d", fontSize: "20px", marginTop: "12px" }}>No Courses Found</h3>
          <p style={{ color: "#7E93A8", fontSize: "14px", marginTop: "8px" }}>Try adjusting your filters or search keywords.</p>
        </div>
      )}
    </div>
  );
}

export default function CoursesPage() {
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
          position: "relative",
          marginBottom: "60px"
        }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>
              Academic Programs
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
              Courses Directory
            </h1>
            <div style={{ width: "60px", height: "3px", background: "#D4AF37", margin: "20px auto 0", borderRadius: "2px" }} />
          </div>
        </section>

        <div style={{ paddingLeft: "24px", paddingRight: "24px" }}>
          <Suspense fallback={
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh", fontSize: "18px", color: "#013a7d" }}>
              Loading courses directory...
            </div>
          }>
            <CoursesContent />
          </Suspense>
        </div>
      </div>

      <style>{`
        .courses-search-panel input::placeholder {
          color: rgba(250, 249, 246, 0.4) !important;
        }
        @media (max-width: 768px) {
          .search-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
