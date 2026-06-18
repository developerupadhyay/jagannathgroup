import { courses, colleges } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const college = colleges.find((c) => c.slug === course.collegeSlug);

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "140px", background: "#FAF9F6", minHeight: "100vh" }}>
        
        {/* Course Banner */}
        <section style={{ padding: "60px 24px", background: `linear-gradient(135deg, ${college?.color || "#0A192F"} 0%, #020B18 100%)`, color: "#FAF9F6" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <span style={{
                background: "rgba(250,249,246,0.15)", padding: "4px 14px", borderRadius: "20px", fontSize: "11px",
                fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase"
              }}>{course.type}</span>
              <span style={{
                background: "rgba(212,175,55,0.2)", padding: "4px 14px", borderRadius: "20px", fontSize: "11px",
                fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", color: "#F2D06B"
              }}>{course.category}</span>
            </div>
            
            <h1 style={{
              fontFamily: "'Outfit', sans-serif", fontSize: "clamp(28px, 4.5vw, 48px)",
              color: "#FAF9F6", fontWeight: "800", lineHeight: 1.2, letterSpacing: "-0.02em"
            }}>
              {course.name}
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(250,249,246,0.85)", fontSize: "14px" }}>
              <span>🏫 Offered by:</span>
              <Link href={`/colleges/${college?.slug}`} style={{ color: "#D4AF37", fontWeight: "700", textDecoration: "none" }}>
                {college?.name} ({college?.shortName})
              </Link>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <section style={{ padding: "60px 24px" }}>
          <div style={{
            maxWidth: "1100px", margin: "0 auto",
            display: "grid", gridTemplateColumns: "1.8fr 1.2fr", gap: "48px"
          }} className="course-detail-grid">
            
            {/* Left Column: Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              
              {/* Overview */}
              <div>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "24px", color: "#0A192F", fontWeight: "800", marginBottom: "16px", letterSpacing: "-0.01em" }}>
                  Course Overview
                </h2>
                <p style={{ color: "#1C2D42", lineHeight: 1.8, fontSize: "15.5px" }}>
                  {course.overview}
                </p>
              </div>

              {/* Syllabus / Key Subjects */}
              <div>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "24px", color: "#0A192F", fontWeight: "800", marginBottom: "16px", letterSpacing: "-0.01em" }}>
                  Key Subjects & Curriculum
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="subjects-grid">
                  {course.keySubjects.map((sub, i) => (
                    <div key={i} style={{
                      background: "#FFFFFF", padding: "14px 18px", borderRadius: "10px",
                      border: "1px solid #F0EDE6", display: "flex", gap: "10px", alignItems: "center"
                    }}>
                      <span style={{ color: college?.color || "#1B3D6D", fontWeight: "800" }}>•</span>
                      <span style={{ fontSize: "14px", color: "#1C2D42", fontWeight: "500" }}>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Opportunities */}
              <div>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "24px", color: "#0A192F", fontWeight: "800", marginBottom: "16px", letterSpacing: "-0.01em" }}>
                  Career Opportunities & Scope
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {course.careerProspects.map((scope, i) => (
                    <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{ fontSize: "16px", marginTop: "1px" }}>💼</span>
                      <span style={{ color: "#435870", fontSize: "15px", lineHeight: 1.6 }}>{scope}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Fact Sheet Card */}
            <div>
              <div style={{
                background: "#FFFFFF", borderRadius: "24px", padding: "36px",
                border: "1px solid #F0EDE6", boxShadow: "0 10px 35px rgba(10,25,47,0.03)",
                display: "flex", flexDirection: "column", gap: "24px", position: "sticky", top: "140px"
              }}>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", color: "#0A192F", fontWeight: "800", borderBottom: "2px solid #FAF9F6", paddingBottom: "12px" }}>
                  Quick Facts
                </h3>

                {/* Facts list */}
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div>
                    <span style={{ fontSize: "10px", color: "#7E93A8", fontWeight: "700", textTransform: "uppercase" }}>Duration</span>
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#1C2D42", marginTop: "4px" }}>
                      ⏱ {course.duration}
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: "10px", color: "#7E93A8", fontWeight: "700", textTransform: "uppercase" }}>Seat Intake</span>
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#1C2D42", marginTop: "4px" }}>
                      👥 {course.seatIntake}
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: "10px", color: "#7E93A8", fontWeight: "700", textTransform: "uppercase" }}>Eligibility Criteria</span>
                    <div style={{ fontSize: "13.5px", fontWeight: "500", color: "#1C2D42", lineHeight: 1.5, marginTop: "4px" }}>
                      {course.eligibility}
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: "10px", color: "#7E93A8", fontWeight: "700", textTransform: "uppercase" }}>Affiliation Board</span>
                    <div style={{ fontSize: "13.5px", fontWeight: "500", color: "#1C2D42", lineHeight: 1.5, marginTop: "4px" }}>
                      📜 {course.affiliationText}
                    </div>
                  </div>
                </div>

                {/* CTA Action */}
                <Link href={`/admissions?college=${encodeURIComponent(college?.name || "")}&course=${encodeURIComponent(course.name)}`} style={{
                  background: `linear-gradient(135deg, ${college?.color || "#0A192F"}, ${college?.secondaryColor || "#1B3D6D"})`,
                  color: "#FAF9F6", padding: "14px", borderRadius: "10px", textDecoration: "none",
                  fontSize: "15px", fontWeight: "700", textAlign: "center",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)", transition: "all 0.3s ease",
                  marginTop: "12px", textTransform: "uppercase", letterSpacing: "0.5px"
                }}
                  className="apply-btn"
                >
                  Apply Online Now
                </Link>
              </div>
            </div>

          </div>
        </section>

      </div>
      <Footer />

      <style>{`
        .apply-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 25px rgba(10,25,47,0.25) !important;
        }
        @media (max-width: 992px) {
          .course-detail-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .course-detail-grid > div:last-child { position: static !important; }
        }
        @media (max-width: 768px) {
          .subjects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}
