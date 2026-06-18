export interface College {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  color: string;
  secondaryColor: string;
  badge: string;
  established: string;
  affiliation: string;
  desc: string;
  longDesc: string;
  image: string;
  gallery: string[];
  facilities: { name: string; desc: string; icon: string }[];
  faculty: { name: string; designation: string; qualification: string }[];
  phone: string[];
  email: string;
  address: string;
}

export interface Course {
  slug: string;
  name: string;
  collegeSlug: string;
  duration: string;
  type: "Diploma" | "Degree" | "Integrated";
  category: "Pharmacy" | "Nursing" | "Education" | "Law" | "General";
  eligibility: string;
  seatIntake: string;
  affiliationText: string;
  overview: string;
  keySubjects: string[];
  careerProspects: string[];
}

export const colleges: College[] = [
  {
    id: 1,
    slug: "jcp",
    icon: "💊",
    name: "Jagannath College of Pharmacy",
    shortName: "JCP",
    color: "#0F2A4A",
    secondaryColor: "#1B3D6D",
    badge: "Pharmacy",
    established: "2018",
    affiliation: "Approved by Pharmacy Council of India (PCI), New Delhi & Affiliated to Board of Technical Education (BTE), Lucknow & AKTU, Lucknow",
    desc: "Offering quality pharmaceutical education with state-of-the-art laboratories and experienced faculty.",
    longDesc: "Jagannath College of Pharmacy (JCP) was established with the vision of providing world-class pharmaceutical education and research opportunities. The college is approved by the Pharmacy Council of India (PCI) and affiliated with AKTU and BTE, Lucknow. Our program blends theoretical knowledge with intensive practical training, preparing students to excel in clinical pharmacy, research and development, quality control, and retail pharmacy sectors.",
    image: "/website_images/college_outside_photo2.jpeg",
    gallery: [
      "/website_images/college_outside_photo2.jpeg",
      "/website_images/college_outside_garden.jpeg",
      "/website_images/college_front_photo.jpeg"
    ],
    facilities: [
      { name: "Pharmaceutics Lab", desc: "Equipped with tablet punching machines, dissolution test apparatus, and formulation gear.", icon: "🧪" },
      { name: "Pharmaceutical Chemistry Lab", desc: "For chemical analysis, synthesis of compounds, and testing of drug purity.", icon: "⚗️" },
      { name: "Pharmacognosy Lab", desc: "Dedicated to the study of crude drugs, extraction procedures, and plant anatomy.", icon: "🌿" },
      { name: "Medicinal Garden", desc: "Houses over 100 species of medicinal plants for research and botanical study.", icon: "🏡" },
      { name: "Machine Room", desc: "Houses industrial scale machinery for hands-on experience in manufacturing.", icon: "⚙️" }
    ],
    faculty: [
      { name: "Dr. Sandeep Kumar", designation: "Principal", qualification: "M.Pharm, Ph.D in Pharmaceutics" },
      { name: "Mrs. Anjali Sharma", designation: "Assistant Professor", qualification: "M.Pharm in Pharmaceutical Chemistry" },
      { name: "Mr. Rajat Verma", designation: "Assistant Professor", qualification: "M.Pharm in Pharmacology" },
      { name: "Ms. Priyanka Negi", designation: "Lecturer", qualification: "B.Pharm, Registered Pharmacist" }
    ],
    phone: ["+91-8532943626", "+91-8394059677"],
    email: "jagannathcollegeofpharmacy@gmail.com",
    address: "Rapid Pillar No 1060, Mohammadpur Kadim Road, Sikri Kalan, Modinagar, Ghaziabad, (U.P) - 201204"
  },
  {
    id: 2,
    slug: "jcn",
    icon: "🏥",
    name: "Jagannath College of Nursing",
    shortName: "JCN",
    color: "#1B3D6D",
    secondaryColor: "#0A192F",
    badge: "Nursing",
    established: "2020",
    affiliation: "Approved by Indian Nursing Council (INC) & Recognized by UP State Medical Faculty & Affiliated to Atal Bihari Vajpayee Medical University (ABVMU)",
    desc: "Training compassionate nursing professionals with clinical expertise and patient care skills.",
    longDesc: "Jagannath College of Nursing is committed to developing competent, caring, and professional nurses who can meet the dynamic healthcare demands of society. Our institution offers comprehensive clinical training in top-tier hospitals, state-of-the-art simulation labs, and expert mentorship. We focus on evidence-based practices, nursing ethics, and hands-on clinical competencies.",
    image: "/website_images/college_outside_photo.jpeg",
    gallery: [
      "/website_images/college_outside_photo.jpeg",
      "/website_images/college_front_photo.jpeg",
      "/website_images/college_outside_garden.jpeg"
    ],
    facilities: [
      { name: "Nursing Foundations Lab", desc: "Equipped with advanced patient simulators, mannequins, and medical beds.", icon: "🛏️" },
      { name: "Anatomy & Physiology Lab", desc: "Features high-fidelity models, skeletons, and charts for anatomical studies.", icon: "🧬" },
      { name: "Nutrition Lab", desc: "Designed for practicing diet preparation and understanding patient nutrition needs.", icon: "🍎" },
      { name: "Clinical Training", desc: "Tie-ups with leading multi-specialty hospitals for real-world clinical experience.", icon: "🩺" }
    ],
    faculty: [
      { name: "Prof. Mary Joseph", designation: "Principal", qualification: "M.Sc Nursing (Medical Surgical), 18 Yrs Exp" },
      { name: "Mrs. Shalini Saxena", designation: "Associate Professor", qualification: "M.Sc Nursing (OBG)" },
      { name: "Mr. Amit Chaudhary", designation: "Assistant Professor", qualification: "M.Sc Nursing (Community Health)" },
      { name: "Ms. Neha Singh", designation: "Clinical Instructor", qualification: "B.Sc Nursing" }
    ],
    phone: ["+91-8532943626", "+91-8394059677"],
    email: "jagannathcollegeofnursing26@gmail.com",
    address: "Rapid Pillar No 1060, Mohammadpur Kadim Road, Sikri Kalan, Modinagar, Ghaziabad, (U.P) - 201204"
  },
  {
    id: 3,
    slug: "sei",
    icon: "📚",
    name: "Shiva Educational Institute",
    shortName: "SEI",
    color: "#2E5B9A",
    secondaryColor: "#1B3D6D",
    badge: "Education",
    established: "2008",
    affiliation: "Recognized by National Council for Teacher Education (NCTE) & Affiliated to Chaudhary Charan Singh (CCS) University, Meerut",
    desc: "Shaping tomorrow's educators with innovative pedagogy, teaching methods and a holistic approach.",
    longDesc: "Shiva Educational Institute is a premier teacher training institution dedicated to nurturing highly skilled, progressive, and ethical educators. Through a blend of micro-teaching sessions, school internship programs, and educational workshops, we prepare future teachers to lead classrooms with confidence, creativity, and empathy.",
    image: "/website_images/college_outside_garden.jpeg",
    gallery: [
      "/website_images/college_outside_garden.jpeg",
      "/website_images/college_front_photo.jpeg",
      "/website_images/college_outside_photo4.jpeg"
    ],
    facilities: [
      { name: "Educational Technology Lab", desc: "Equipped with smart boards, projectors, and audio-visual aids for modern learning.", icon: "💻" },
      { name: "Psychology Lab", desc: "Houses testing materials and apparatus for conducting psychological and behavioral tests.", icon: "🧠" },
      { name: "Science & Math Lab", desc: "Practical lab for teaching science and math concepts creatively.", icon: "📐" },
      { name: "Art & Craft Studio", desc: "Dedicated workspace for developing creative learning materials and props.", icon: "🎨" }
    ],
    faculty: [
      { name: "Dr. R.P. Bansal", designation: "Principal", qualification: "M.A, M.Ed, Ph.D in Education" },
      { name: "Mrs. Poonam Malik", designation: "Assistant Professor", qualification: "M.Ed, NET Qualified" },
      { name: "Dr. Vikas Tomar", designation: "Assistant Professor", qualification: "M.A (History), M.Ed, Ph.D" },
      { name: "Mr. Deepak Dhiman", designation: "Lecturer", qualification: "M.P.Ed (Physical Education)" }
    ],
    phone: ["+91-8532943626", "+91-8394059677"],
    email: "shivaeducationalinstitute@gmail.com",
    address: "Rapid Pillar No 1060, Mohammadpur Kadim Road, Sikri Kalan, Modinagar, Ghaziabad, (U.P) - 201204"
  },
  {
    id: 4,
    slug: "scl",
    icon: "⚖️",
    name: "Shiva College of Law",
    shortName: "SCL",
    color: "#0A192F",
    secondaryColor: "#172A45",
    badge: "Law",
    established: "2015",
    affiliation: "Approved by Bar Council of India (BCI), New Delhi & Affiliated to Chaudhary Charan Singh (CCS) University, Meerut",
    desc: "Providing comprehensive legal education with moot courts, clinics and experienced faculty.",
    longDesc: "Shiva College of Law offers a transformative legal education that empowers students to advocate for justice and lead in the legal profession. With a fully functional Moot Court room, regular legal aid camps, and internship placements under top advocates, we bridge the gap between academic theory and real-world legal practice.",
    image: "/website_images/college_outside_photo4.jpeg",
    gallery: [
      "/website_images/college_outside_photo4.jpeg",
      "/website_images/college_front_photo.jpeg",
      "/website_images/college_outside_garden.jpeg"
    ],
    facilities: [
      { name: "Moot Court Room", desc: "A realistic courtroom setting for students to practice oral advocacy and mock trials.", icon: "🏛️" },
      { name: "Legal Aid Clinic", desc: "Provides free legal counseling to locals, giving students real-client exposure.", icon: "🤝" },
      { name: "Law Library", desc: "Extensive repository of law reports (AIR, SCC), journals, and digital legal databases.", icon: "📖" },
      { name: "Seminar Hall", desc: "For hosting guest lectures, national seminars, and debates by eminent jurists.", icon: "📢" }
    ],
    faculty: [
      { name: "Prof. S.K. Tyagi", designation: "Director/Principal", qualification: "LL.M, Ph.D in Law, Ex-Dean" },
      { name: "Mr. Tarun Sharma", designation: "Assistant Professor", qualification: "LL.M, UGC-NET in Law" },
      { name: "Mrs. Meenakshi Singh", designation: "Assistant Professor", qualification: "LL.M, 8 Yrs Legal Practice" },
      { name: "Mr. Gaurav Pathak", designation: "Lecturer", qualification: "LL.M, Specialization in Constitutional Law" }
    ],
    phone: ["+91-8532943626", "+91-8394059677"],
    email: "shivacollegeoflaw@gmail.com",
    address: "Rapid Pillar No 1060, Mohammadpur Kadim Road, Sikri Kalan, Modinagar, Ghaziabad, (U.P) - 201204"
  },
  {
    id: 5,
    slug: "sjei",
    icon: "🎓",
    name: "Shri Jagannath Ji Education Institute",
    shortName: "SJEI",
    color: "#2C3E50",
    secondaryColor: "#1A252F",
    badge: "Multi-Discipline",
    established: "2011",
    affiliation: "Approved by NCTE & State Govt. & Affiliated to CCS University, Meerut & UP Board",
    desc: "A multidisciplinary institution offering diverse programs in education, commerce, arts, business and computer applications.",
    longDesc: "Shri Jagannath Ji Education Institute (SJEI) is a premier multi-faculty center of learning. Offering a wide range of undergraduate courses in computer applications, business administration, commerce, arts, and teacher training (D.El.Ed), SJEI equips students with modern digital skills, leadership qualities, and sound academic foundations necessary to succeed in a globalized economy.",
    image: "/website_images/college_computer_lab.jpeg",
    gallery: [
      "/website_images/college_computer_lab.jpeg",
      "/website_images/college_front_photo.jpeg",
      "/website_images/college_outside_garden.jpeg"
    ],
    facilities: [
      { name: "Computer Centre", desc: "Modern labs with high-speed internet, coding IDEs, and business software.", icon: "💻" },
      { name: "Management Seminar Hall", desc: "Dedicated space for case-studies, workshops, and business presentations.", icon: "📊" },
      { name: "Central Library", desc: "Spanning thousands of reference books, textbooks, magazines, and newspapers.", icon: "📚" },
      { name: "Sports Complex", desc: "Facilities for indoor and outdoor sports like cricket, badminton, and chess.", icon: "🏏" }
    ],
    faculty: [
      { name: "Dr. Manoj Kumar Gupta", designation: "Principal", qualification: "Ph.D in Commerce, MBA, 15+ Yrs Exp" },
      { name: "Mr. Sunil Dev", designation: "HOD Computer Applications", qualification: "MCA, M.Tech in CS" },
      { name: "Mrs. Ritu Singhal", designation: "Assistant Professor (Management)", qualification: "MBA, UGC-NET" },
      { name: "Mr. P.K. Mishra", designation: "Lecturer (Arts)", qualification: "M.A in English Literature, B.Ed" }
    ],
    phone: ["+91-8532943626", "+91-8394059677"],
    email: "sjei2014@gmail.com",
    address: "Rapid Pillar No 1060, Mohammadpur Kadim Road, Sikri Kalan, Modinagar, Ghaziabad, (U.P) - 201204"
  }
];

export const courses: Course[] = [
  {
    slug: "d-pharma",
    name: "Diploma in Pharmacy (D.Pharma)",
    collegeSlug: "jcp",
    duration: "2 Years",
    type: "Diploma",
    category: "Pharmacy",
    eligibility: "50% Marks (Gen. & OBC) 45% Marks (SC/ST) in PCB/PCM in 12th",
    seatIntake: "60 Seats",
    affiliationText: "Approved by Pharmacy Council of India (PCI), New Delhi & Affiliated to Board of Technical Education (BTE), Lucknow.",
    overview: "D.Pharma is a foundation course in pharmacy. It introduces students to pharmaceutical chemistry, pharmacology, biochemistry, and hospital pharmacy. Graduates are licensed to work as pharmacists in hospitals, retail dispensaries, or start their own pharmacy retail business.",
    keySubjects: [
      "Pharmaceutics-I & II",
      "Pharmaceutical Chemistry-I & II",
      "Pharmacognosy",
      "Biochemistry & Clinical Pathology",
      "Human Anatomy & Physiology",
      "Health Education & Community Pharmacy",
      "Pharmacology & Toxicology",
      "Drug Store & Business Management",
      "Hospital & Clinical Pharmacy"
    ],
    careerProspects: [
      "Hospital Pharmacist in Public/Private Hospitals",
      "Community Pharmacist / Owner of Chemist Shop",
      "Medical Representative in Pharma companies",
      "Production assistant in Pharmaceutical manufacturing units",
      "Quality control technician"
    ]
  },
  {
    slug: "b-pharma",
    name: "Bachelor of Pharmacy (B.Pharma)",
    collegeSlug: "jcp",
    duration: "4 Years",
    type: "Degree",
    category: "Pharmacy",
    eligibility: "50% Marks (Gen. & OBC) 45% Marks (SC/ST) in PCB/PCM in 12th",
    seatIntake: "60 Seats",
    affiliationText: "Approved by Pharmacy Council of India (PCI), New Delhi & Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow.",
    overview: "B.Pharma is a comprehensive undergraduate course that deals with the preparation, compounding, and dispensing of drugs. Students study drug action, synthesis, dosage design, analysis, and clinical trials. The course prepares students for high-growth sectors like drug development, pharmaceutical marketing, quality assurance, and pharmacovigilance.",
    keySubjects: [
      "Human Anatomy & Physiology",
      "Pharmaceutical Analysis",
      "Pharmaceutics",
      "Inorganic & Organic Chemistry",
      "Biochemistry",
      "Pathophysiology",
      "Physical Pharmaceutics",
      "Pharmaceutical Microbiology & Biotechnology",
      "Pharmacology",
      "Medicinal Chemistry",
      "Industrial Pharmacy",
      "Pharmacognosy & Phytochemistry",
      "Pharmacy Practice"
    ],
    careerProspects: [
      "Drug Inspector (Govt. Sector)",
      "Quality Assurance / Quality Control Executive",
      "Formulation Scientist in R&D",
      "Clinical Research Coordinator",
      "Pharmacovigilance Associate",
      "Production Executive in Pharma Industry",
      "Higher education (M.Pharm, MBA, Ph.D)"
    ]
  },
  {
    slug: "bsc-nursing",
    name: "B.Sc Nursing",
    collegeSlug: "jcn",
    duration: "4 Years",
    type: "Degree",
    category: "Nursing",
    eligibility: "10+2 passed with Physics, Chemistry, Biology & English (PCBE) with minimum 45% marks from recognized board, and minimum age of 17 years.",
    seatIntake: "40 Seats",
    affiliationText: "Approved by Indian Nursing Council (INC) & UP State Medical Faculty & Affiliated to Atal Bihari Vajpayee Medical University (ABVMU), Lucknow.",
    overview: "B.Sc Nursing is a premium undergraduate program that equips students with clinical clinical skills, leadership capabilities, and patient care expertise. The course comprises rigorous academic sessions along with rotations in multi-specialty hospitals, rural healthcare centers, and psychiatric units.",
    keySubjects: [
      "Anatomy & Physiology",
      "Nutrition & Biochemistry",
      "Nursing Foundations",
      "Psychology & Sociology",
      "Microbiology",
      "Pharmacology & Pathology",
      "Medical Surgical Nursing",
      "Community Health Nursing",
      "Child Health (Pediatric) Nursing",
      "Mental Health (Psychiatric) Nursing",
      "Obstetrical & Gynecological Nursing",
      "Nursing Research & Statistics"
    ],
    careerProspects: [
      "Staff Nurse in Corporate Multi-specialty Hospitals",
      "Community Health Officer (CHO) under National Health Mission",
      "Nursing Educator / Tutor in Nursing colleges",
      "Military Nursing Service officer",
      "Healthcare Administrator / Nurse Manager",
      "Global opportunities in UK, USA, Canada, and Gulf nations"
    ]
  },
  {
    slug: "gnm",
    name: "General Nursing & Midwifery (G.N.M)",
    collegeSlug: "jcn",
    duration: "3 Years",
    type: "Diploma",
    category: "Nursing",
    eligibility: "10+2 passed in any stream (English core/elective or science preferred) with minimum 40% marks.",
    seatIntake: "40 Seats",
    affiliationText: "Recognized by Indian Nursing Council (INC) & UP State Medical Faculty.",
    overview: "GNM is a diploma level course designed to prepare general nurses to function as members of the health team in both urban and rural setups. The training focuses on clinical procedures, maternal care, child care, and community hygiene.",
    keySubjects: [
      "Bio-Sciences (Anatomy, Physiology & Microbiology)",
      "Behavioral Sciences (Psychology & Sociology)",
      "Nursing Foundations & First Aid",
      "Community Health Nursing & Environmental Hygiene",
      "Medical Surgical Nursing-I & II",
      "Mental Health Nursing",
      "Child Health Nursing",
      "Midwifery & Gynecological Nursing",
      "Health Centre Management"
    ],
    careerProspects: [
      "Staff Nurse in government/private clinics and nursing homes",
      "Home Care Nurse / Geriatric Care Nurse",
      "Industrial Nurse in corporate offices",
      "Health Visitor in rural health sub-centres",
      "Eligibility to pursue Post-Basic B.Sc Nursing for career growth"
    ]
  },
  {
    slug: "b-ed",
    name: "Bachelor of Education (B.Ed)",
    collegeSlug: "sei",
    duration: "2 Years",
    type: "Degree",
    category: "Education",
    eligibility: "50% Marks (Gen. & OBC) & 35% Marks (SC/ST) in UG/PG",
    seatIntake: "100 Seats",
    affiliationText: "Recognized by National Council for Teacher Education (NCTE) & Affiliated to Chaudhary Charan Singh (CCS) University, Meerut. (Admission through UP B.Ed JEE)",
    overview: "B.Ed is a professional course that qualifies graduates to teach in secondary (Class 9-10) and senior secondary (Class 11-12) schools. The course covers educational psychology, lesson planning, classroom management, evaluation techniques, and teaching methodologies of selected school subjects.",
    keySubjects: [
      "Contemporary India and Education",
      "Philosophical and Sociological Perspectives of Education",
      "Growing Up as a Learner",
      "Teacher, Teaching and Technology",
      "Pedagogy of School Subjects (Math, Science, Social Sci, Hindi, English, Commerce, etc.)",
      "Creating an Inclusive School",
      "Gender, School and Society",
      "School Internship & Practical Teaching (4 Months)"
    ],
    careerProspects: [
      "TGT / PGT Teacher in Central Govt. Schools (KVS, NVS, Army Schools)",
      "TGT / PGT Teacher in State Govt. & Private Schools",
      "Educational Consultant / Content Developer",
      "Principal / Vice Principal in secondary schools",
      "Curriculum Designer in EdTech startups",
      "Eligible for CTET & State TET examinations"
    ]
  },
  {
    slug: "d-el-ed",
    name: "Diploma in Elementary Education (D.El.Ed / BTC)",
    collegeSlug: "sjei",
    duration: "2 Years",
    type: "Diploma",
    category: "General",
    eligibility: "50% Marks (Gen. & OBC) 45% Marks (SC/ST) in UG/PG",
    seatIntake: "50 Seats",
    affiliationText: "Recognized by National Council for Teacher Education (NCTE) & Affiliated to Exam Regulatory Authority (PNP), Prayagraj & SCERT, UP.",
    overview: "D.El.Ed (formerly known as BTC - Basic Training Certificate) is a professional diploma designed to train teachers for primary and upper-primary schools (Classes 1 to 8). It covers child development, elementary pedagogy, and activity-based learning approaches.",
    keySubjects: [
      "Child Development & Learning Process",
      "Principles of Teaching & Learning",
      "Methods of Teaching Hindi, English, Sanskrit",
      "Methods of Teaching Mathematics, Science, Social Science",
      "Art, Physical Education & Music",
      "Educational Evaluation & Action Research",
      "School Management & Hygiene",
      "Teaching Practice / Internship at Govt. Primary Schools"
    ],
    careerProspects: [
      "Primary Teacher (PRT) in Government schools (Parishadiya Schools, UP)",
      "Primary Teacher in Private CBSE/ICSE Schools",
      "Home Tutor / Educational Instructor",
      "Special Educator in elementary schools",
      "Eligible for Primary Level CTET & UPTET exams"
    ]
  },
  {
    slug: "ba-llb",
    name: "B.A. + LL.B. (Integrated 5 Year)",
    collegeSlug: "scl",
    duration: "5 Years",
    type: "Integrated",
    category: "Law",
    eligibility: "Intermediate (10+2) in any stream with 45% Marks",
    seatIntake: "120 Seats",
    affiliationText: "Approved by Bar Council of India (BCI) & Affiliated to Chaudhary Charan Singh (CCS) University, Meerut.",
    overview: "BA.LLB is an integrated dual-degree program combining Bachelor of Arts (History, Sociology, Political Science) with professional Bachelor of Laws. It saves one academic year compared to standard law graduation and equips students with legal skills right from high school. Includes court visits, moot courts, and mandatory internship hours.",
    keySubjects: [
      "English & Legal Language",
      "Political Science, Sociology & History",
      "Jurisprudence (Legal Theory)",
      "Law of Torts & Consumer Protection",
      "Law of Contracts (Mercantile Law)",
      "Constitutional Law of India",
      "Family Law (Hindu & Muslim Law)",
      "Criminal Law (Indian Penal Code)",
      "Law of Crimes (CrPC) & Civil Procedure (CPC)",
      "Law of Evidence",
      "Drafting, Pleading & Conveyancing",
      "Alternative Dispute Resolution (ADR)"
    ],
    careerProspects: [
      "Litigation Advocate in High Courts / District Courts",
      "Corporate Legal Counsel / Law Officer in MNCs",
      "Judicial Services Officer (PCS-J examination)",
      "Legal Advisor in Banks and Public Sector Undertakings (PSUs)",
      "Legal Process Outsourcing (LPO) executive",
      "Academician or Researcher in Law Universities"
    ]
  },
  {
    slug: "llb",
    name: "L.L.B. (3 Year Degree)",
    collegeSlug: "scl",
    duration: "3 Years",
    type: "Degree",
    category: "Law",
    eligibility: "50% Marks in Graduation/Post Graduation",
    seatIntake: "120 Seats",
    affiliationText: "Approved by Bar Council of India (BCI) & Affiliated to Chaudhary Charan Singh (CCS) University, Meerut.",
    overview: "LL.B is a professional postgraduate law degree. It is tailored for graduates of other fields who want to pivot to a career in law. The course covers core aspects of public, civil, criminal, international, and commercial law, focusing on court procedures and advocacy skills.",
    keySubjects: [
      "Jurisprudence",
      "Law of Contract",
      "Constitutional Law",
      "Family Law",
      "Law of Crimes (IPC)",
      "Company Law",
      "Environmental Law",
      "Labour and Industrial Law",
      "Public International Law",
      "Law of Evidence",
      "Arbitration, Conciliation & ADR",
      "Professional Ethics & Moot Court"
    ],
    careerProspects: [
      "Independent Law Practitioner",
      "Public Prosecutor / Govt. Standing Counsel",
      "Legal Executive in Corporate Firms",
      "Civil Services / Civil Judge",
      "Legal Consultant for NGOs and human rights groups",
      "Journalist / Legal Reporter"
    ]
  },
  {
    slug: "bca",
    name: "Bachelor of Computer Applications (BCA)",
    collegeSlug: "sjei",
    duration: "3 Years",
    type: "Degree",
    category: "General",
    eligibility: "10+2 passed with Mathematics as a subject at high school or intermediate level, securing minimum 45% marks (40% for SC/ST).",
    seatIntake: "60 Seats",
    affiliationText: "Approved by State Govt. & Affiliated to CCS University, Meerut.",
    overview: "BCA is a highly popular IT degree that covers software engineering, computer networks, database management, web development, and modern programming languages (C, C++, Java, Python). It prepares students for entry-level tech roles in global IT corporations.",
    keySubjects: [
      "Computer Fundamentals & Office Automation",
      "Programming in 'C' & Data Structures",
      "Digital Electronics & Computer Architecture",
      "Database Management Systems (DBMS)",
      "Object Oriented Programming using C++ / Java",
      "Operating Systems & Computer Networks",
      "Web Technologies (HTML, CSS, JS, PHP)",
      "Software Engineering",
      "Mobile Application Development / Python Programming",
      "Major Project & Viva-voce"
    ],
    careerProspects: [
      "Software Developer / Associate Programmer",
      "Web Developer / Frontend Designer",
      "Database Administrator",
      "System Administrator / IT Support Engineer",
      "QA Tester / Software Test Engineer",
      "Higher studies: MCA, M.Sc (CS/IT), MBA"
    ]
  },
  {
    slug: "bba",
    name: "Bachelor of Business Administration (BBA)",
    collegeSlug: "sjei",
    duration: "3 Years",
    type: "Degree",
    category: "General",
    eligibility: "10+2 passed in any stream with at least 45% marks (40% for SC/ST).",
    seatIntake: "60 Seats",
    affiliationText: "Approved by State Govt. & Affiliated to CCS University, Meerut.",
    overview: "BBA is a management degree designed to cultivate leadership, decision-making, and entrepreneurial skills. Students gain insights into marketing, finance, human resources, organizational behavior, and international business through case studies and internships.",
    keySubjects: [
      "Business Organization & Management",
      "Business Economics & Business Math",
      "Financial Accounting & Cost Accounting",
      "Business Communication",
      "Marketing Management",
      "Human Resource Management",
      "Financial Management",
      "Organizational Behavior",
      "Production & Operations Management",
      "Business Law & Taxation",
      "Management Information Systems (MIS)"
    ],
    careerProspects: [
      "Marketing Executive / Sales Manager",
      "Human Resource Coordinator / Recruiter",
      "Financial Analyst / Relationship Manager in Banks",
      "Operations Coordinator in Logistics",
      "Business Development Executive in corporate firms",
      "Management Trainee",
      "Higher education: MBA"
    ]
  },
  {
    slug: "bcom",
    name: "Bachelor of Commerce (B.Com)",
    collegeSlug: "sjei",
    duration: "3 Years",
    type: "Degree",
    category: "General",
    eligibility: "Intermediate (10+2) in any stream with 40% Marks",
    seatIntake: "120 Seats",
    affiliationText: "Approved by State Govt. & Affiliated to CCS University, Meerut.",
    overview: "B.Com is a foundational degree that provides extensive knowledge of accounting, auditing, commercial laws, finance, economics, and taxation. It serves as an excellent stepping stone for students aiming for chartered accountancy or financial analytics.",
    keySubjects: [
      "Financial Accounting & Advanced Accounting",
      "Business Regulatory Framework (Law)",
      "Business Regulatory Framework (Law)",
      "Business Statistics & Mathematics",
      "Corporate Accounting & Cost Accounting",
      "Income Tax Law and Practice",
      "Indirect Taxes (GST)",
      "Auditing",
      "Management Accounting",
      "Financial Market Operations",
      "Macro Economics & Money and Financial Systems"
    ],
    careerProspects: [
      "Accounts Executive / Bookkeeper",
      "Audit Assistant / Tax Consultant associate",
      "Banking Executive / Customer Relationship Officer",
      "Financial advisor / Insurance consultant",
      "Preparation for CA, CS, CMA exams",
      "Eligible for government sector exams (Banking, SSC, Railways)"
    ]
  },
  {
    slug: "ba",
    name: "Bachelor of Arts (B.A.)",
    collegeSlug: "sjei",
    duration: "3 Years",
    type: "Degree",
    category: "General",
    eligibility: "Intermediate (10+2) in any stream with 40% Marks",
    seatIntake: "180 Seats",
    affiliationText: "Approved by State Govt. & Affiliated to CCS University, Meerut.",
    overview: "Bachelor of Arts offers students the flexibility to study human history, society, literature, and governance. By choosing combinations from History, Political Science, English, Sociology, and Economics, students develop strong analytical, research, and communication skills suitable for administration and media.",
    keySubjects: [
      "English Literature / Hindi Literature",
      "Political Science (Indian Govt., International Relations)",
      "History (Ancient, Medieval & Modern India, World History)",
      "Sociology (Social Institutions, Social Change, Research Methods)",
      "Economics (Micro, Macro, Indian Economy)",
      "Environmental Studies (Compulsory)"
    ],
    careerProspects: [
      "Administrative jobs / Civil Services preparation",
      "Content Writing / Journalism & Media",
      "Public Relations executive",
      "Social worker / NGO officer",
      "Teacher (after completing B.Ed / D.El.Ed)",
      "Customer Relation Specialist"
    ]
  }
];
export const placementRecruiters = [
  { name: "TCS", logo: "💻", sector: "Information Technology" },
  { name: "Wipro", logo: "🌐", sector: "Information Technology" },
  { name: "Apollo Hospitals", logo: "🏥", sector: "Healthcare & Nursing" },
  { name: "Max Healthcare", logo: "🏥", sector: "Healthcare & Nursing" },
  { name: "Cipla", logo: "💊", sector: "Pharmaceuticals" },
  { name: "Lupin", logo: "💊", sector: "Pharmaceuticals" },
  { name: "HDFC Bank", logo: "🏦", sector: "Banking & Finance" },
  { name: "ICICI Bank", logo: "🏦", sector: "Banking & Finance" }
];

export const placementStats = [
  { value: "4.8 LPA", label: "Average Package" },
  { value: "12 LPA", label: "Highest Package" },
  { value: "85%+", label: "Placement Rate" },
  { value: "150+", label: "Recruiting Partners" }
];

export const councilMembers = [
  { name: "Dr. R.C. Deka", role: "Chairman, Academic Council", designation: "Former Director, AIIMS New Delhi", image: "👤" },
  { name: "Prof. S.K. Tyagi", role: "Advisory Council", designation: "Former Dean, Faculty of Law, CCSU", image: "👤" },
  { name: "Dr. Sandeep Kumar", role: "Dean of Pharmacy", designation: "Member of PCI Council, Author", image: "👤" },
  { name: "Prof. Mary Joseph", role: "Dean of Nursing", designation: "Former Registrar, State Nursing Council", image: "👤" }
];
