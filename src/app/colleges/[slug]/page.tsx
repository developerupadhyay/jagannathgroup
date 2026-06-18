import { colleges, courses } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CollegeProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const college = colleges.find((c) => c.slug === slug);

  if (!college) {
    notFound();
  }

  // Filter courses offered by this college
  const collegeCourses = courses.filter((c) => c.collegeSlug === college.slug);

  return (
    <>
      <div style={{ background: "#FAF9F6", minHeight: "100vh" }}>
        
        {/* College Hero Banner with local background image */}
        <section style={{
          padding: "160px 24px 80px",
          background: `
            linear-gradient(135deg, ${college.color}f2 0%, ${college.secondaryColor}ee 100%),
            url('${college.image}') center/cover no-repeat
          `,
          color: "#FAF9F6",
          position: "relative",
          borderBottom: "3px solid #D4AF37"
        }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <span style={{
                background: "rgba(250,249,246,0.2)", padding: "4px 14px", borderRadius: "20px", fontSize: "11px",
                fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase"
              }}>Established {college.established}</span>
              <span style={{
                background: "rgba(212,175,55,0.25)", padding: "4px 14px", borderRadius: "20px", fontSize: "11px",
                fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", color: "#F2D06B"
              }}>{college.badge}</span>
            </div>
            
            <h1 style={{
              fontFamily: "'Outfit', sans-serif", fontSize: "clamp(30px, 5vw, 52px)",
              color: "#FAF9F6", fontWeight: "800", lineHeight: 1.2, letterSpacing: "-0.02em"
            }}>
              {college.name}
            </h1>
            
            <p style={{ color: "#D4AF37", fontSize: "13.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>
              📜 {college.affiliation}
            </p>
          </div>
        </section>

        {/* Content Layout */}
        <section style={{ padding: "60px 24px" }}>
          <div style={{
            maxWidth: "1100px", margin: "0 auto",
            display: "grid", gridTemplateColumns: "1.8fr 1.2fr", gap: "48px"
          }} className="profile-grid">
            
            {/* Left Column: Campus Profiles */}
            <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
              
              {/* Detailed Description */}
              <div>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "26px", color: "#013a7d", fontWeight: "800", marginBottom: "16px", letterSpacing: "-0.01em" }}>
                  About the Campus
                </h2>
                <p style={{ color: "#1C2D42", lineHeight: 1.8, fontSize: "15.5px" }}>
                  {college.longDesc}
                </p>
              </div>

              {/* Photo Gallery (Dynamic Campuses) */}
              <div>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "26px", color: "#013a7d", fontWeight: "800", marginBottom: "20px", letterSpacing: "-0.01em" }}>
                  Campus Gallery
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }} className="college-gallery">
                  {college.gallery.map((img, i) => (
                    <div key={i} style={{
                      borderRadius: "12px", overflow: "hidden", aspectRatio: "4/3",
                      border: "1px solid #F0EDE6", boxShadow: "0 2px 10px rgba(0,0,0,0.02)"
                    }}>
                      <img src={img} alt={`${college.shortName} Gallery ${i}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Programs Offered */}
              <div>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "26px", color: "#013a7d", fontWeight: "800", marginBottom: "20px", letterSpacing: "-0.01em" }}>
                  Academic Programs Offered
                </h2>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {collegeCourses.map((course) => (
                    <div key={course.slug} style={{
                      background: "#013a7d", borderRadius: "16px", padding: "24px",
                      border: "1px solid #002452",
                      borderTop: "3px solid #D4AF37",
                      boxShadow: "0 10px 25px rgba(10, 25, 47, 0.12)",
                      display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px"
                    }} className="course-row">
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                          <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "17.5px", color: "#FAF9F6", fontWeight: "700" }}>
                            {course.name}
                          </h3>
                          <span style={{
                            padding: "2px 8px", borderRadius: "12px", fontSize: "10px", fontWeight: "700",
                            background: "#002452", color: "#D4AF37", textTransform: "uppercase",
                            border: "1px solid rgba(255, 255, 255, 0.12)"
                          }}>{course.type}</span>
                        </div>
                        <span style={{ fontSize: "13px", color: "#BAC9DA" }}>⏱ Duration: {course.duration} | Seats: {course.seatIntake}</span>
                      </div>
                      
                      <Link href={`/courses/${course.slug}`} style={{
                        background: "linear-gradient(135deg, #D4AF37, #F2D06B)",
                        color: "#013a7d", padding: "10px 20px", borderRadius: "10px",
                        fontSize: "13px", fontWeight: "700", textDecoration: "none",
                        border: "none", transition: "all 0.3s ease",
                        boxShadow: "0 4px 10px rgba(212, 175, 55, 0.15)"
                      }}
                        className="btn-details"
                      >
                        View Details
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Facilities */}
              <div>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "26px", color: "#013a7d", fontWeight: "800", marginBottom: "20px", letterSpacing: "-0.01em" }}>
                  Campus Facilities & Infrastructure
                </h2>
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="facilities-grid">
                  {college.facilities.map((fac, i) => (
                    <div key={i} style={{
                      background: "#013a7d", borderRadius: "16px", padding: "24px",
                      border: "1px solid #002452",
                      borderTop: "3px solid #D4AF37",
                      boxShadow: "0 10px 25px rgba(10, 25, 47, 0.12)",
                      display: "flex", gap: "16px", alignItems: "flex-start"
                    }}>
                      <div style={{
                        width: "48px", height: "48px", borderRadius: "12px",
                        background: "#002452", display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "24px", flexShrink: 0,
                        border: "1px solid rgba(255, 255, 255, 0.12)"
                      }}>{fac.icon}</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <h4 style={{ fontSize: "15px", color: "#FAF9F6", fontWeight: "700", fontFamily: "'Outfit', sans-serif" }}>{fac.name}</h4>
                        <p style={{ fontSize: "13px", color: "#BAC9DA", lineHeight: 1.5 }}>{fac.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Faculty Directory */}
              <div>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "26px", color: "#013a7d", fontWeight: "800", marginBottom: "20px", letterSpacing: "-0.01em" }}>
                  Key Faculty Members
                </h2>
                
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
                  {college.faculty.map((member, i) => (
                    <div key={i} style={{
                      background: "#013a7d", borderRadius: "16px", padding: "24px",
                      border: "1px solid #002452",
                      borderTop: "3px solid #D4AF37",
                      boxShadow: "0 10px 25px rgba(10, 25, 47, 0.12)",
                      textAlign: "center"
                    }}
                      className="hover-lift"
                    >
                      <div style={{
                        width: "72px", height: "72px", borderRadius: "50%",
                        background: "#002452",
                        border: "3px solid #D4AF37",
                        margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "32px", color: "#FAF9F6", boxShadow: "0 4px 12px rgba(10, 25, 47, 0.15)"
                      }}>👤</div>
                      <h4 style={{ fontSize: "16px", color: "#FAF9F6", fontWeight: "700", marginBottom: "4px", fontFamily: "'Outfit', sans-serif" }}>{member.name}</h4>
                      <p style={{ fontSize: "13px", color: "#D4AF37", fontWeight: "700", textTransform: "uppercase", marginBottom: "4px", letterSpacing: "0.5px" }}>{member.designation}</p>
                      <span style={{ fontSize: "12.5px", color: "#BAC9DA", fontStyle: "italic" }}>{member.qualification}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: College Contact Details */}
            <div>
              <div style={{
                background: "#013a7d", borderRadius: "24px", padding: "36px",
                border: "1px solid #002452",
                borderTop: "3px solid #D4AF37",
                boxShadow: "0 20px 45px rgba(10, 25, 47, 0.15)",
                display: "flex", flexDirection: "column", gap: "24px", position: "sticky", top: "140px"
              }}>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", color: "#D4AF37", fontWeight: "800", borderBottom: "1px solid #002452", paddingBottom: "12px" }}>
                  Campus Contact
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div>
                    <span style={{ fontSize: "10px", color: "#BAC9DA", fontWeight: "700", textTransform: "uppercase" }}>Phone Helpdesk</span>
                    <div style={{ fontSize: "14.5px", fontWeight: "700", color: "#FAF9F6", marginTop: "4px" }}>
                      📞 {college.phone.join(", ")}
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: "10px", color: "#BAC9DA", fontWeight: "700", textTransform: "uppercase" }}>Email Desk</span>
                    <div style={{ fontSize: "14px", fontWeight: "600", color: "#FAF9F6", marginTop: "4px", wordBreak: "break-all" }}>
                      ✉️ {college.email}
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: "10px", color: "#BAC9DA", fontWeight: "700", textTransform: "uppercase" }}>Location Address</span>
                    <div style={{ fontSize: "13.5px", color: "#BAC9DA", lineHeight: 1.5, marginTop: "4px" }}>
                      📍 {college.address}
                    </div>
                  </div>
                </div>

                <Link href={`/admissions?college=${encodeURIComponent(college.name)}`} style={{
                  background: "linear-gradient(135deg, #D4AF37, #F2D06B)",
                  color: "#013a7d", padding: "14px", borderRadius: "10px", textDecoration: "none",
                  fontSize: "15px", fontWeight: "700", textAlign: "center",
                  boxShadow: "0 6px 20px rgba(212, 175, 55, 0.2)", transition: "all 0.3s ease",
                  marginTop: "12px", textTransform: "uppercase", letterSpacing: "0.5px"
                }}
                  className="apply-college-btn"
                >
                  Apply to this College
                </Link>
              </div>
            </div>

          </div>
        </section>

      </div>

      <style>{`
        .btn-details:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 15px rgba(212, 175, 55, 0.35) !important;
        }
        .apply-college-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 10px 25px rgba(212, 175, 55, 0.35) !important;
        }
        @media (max-width: 992px) {
          .profile-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .profile-grid > div:last-child { position: static !important; }
        }
        @media (max-width: 768px) {
          .course-row { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
          .btn-details { width: 100% !important; text-align: center !important; }
          .facilities-grid { grid-template-columns: 1fr !important; }
          .college-gallery { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .college-gallery { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

export async function generateStaticParams() {
  return colleges.map((col) => ({
    slug: col.slug,
  }));
}
