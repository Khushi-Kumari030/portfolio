export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Internship" | "Research" | "Leadership" | "Service";
  description: string;
  bullets: string[];
  skills: string[];
  metrics?: { label: string; value: string }[];
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "blackrock-aiml-intern",
    role: "AI/ML Intern",
    organization: "BlackRock",
    location: "Summer Internship",
    period: "Upcoming",
    type: "Internship",
    description: "Upcoming AI/ML Internship — I will be joining BlackRock for an upcoming AI/ML internship during the summer vacation.",
    bullets: [
      "Joining BlackRock for an AI/ML Internship during the upcoming summer vacation.",
      "Will work on applying machine learning algorithms and quantitative AI systems to high-impact financial data."
    ],
    metrics: [
      { label: "Role", value: "AI/ML Intern" },
      { label: "Company", value: "BlackRock" },
      { label: "Status", value: "Upcoming" }
    ],
    skills: ["Machine Learning", "Artificial Intelligence", "Quantitative Analysis", "Python"]
  },
  {
    id: "iit-roorkee-cv",
    role: "Computer Vision Research Intern",
    organization: "Department of Civil Engineering, IIT Roorkee",
    location: "Roorkee, India",
    period: "May 2026 – Jul 2026",
    type: "Research",
    description: "Developed AI-driven perception and analytics systems for intelligent transportation applications.",
    bullets: [
      "Developed AI-driven perception and analytics systems for intelligent transportation applications.",
      "Evaluated AutoSpeed and EgoLanes models for CIPO detection, lane perception and vehicle interaction analysis on monocular Indian road videos.",
      "Performed camera calibration using 36 checkerboard frames with 0.45 px RMS error.",
      "Built vanishing point estimation and metric BEV pipelines.",
      "Built a web-based traffic analytics platform for camera calibration, speed estimation and metric measurement from monocular videos."
    ],
    metrics: [
      { label: "Calibration RMS", value: "0.45 px" },
      { label: "Checkerboard", value: "36 Frames" },
      { label: "Framework", value: "BEV Analytics" }
    ],
    skills: ["Computer Vision", "PyTorch", "OpenCV", "BEV Transformation", "Camera Calibration", "Python"]
  },
  {
    id: "tata-motors-strategy",
    role: "Strategy Intern",
    organization: "Tata Motors",
    location: "Pune, India",
    period: "Jun 2025 – Aug 2025",
    type: "Internship",
    description: "Conducted technology assessment, market intelligence and competitive analysis for commercial vehicle strategy.",
    bullets: [
      "Conducted technology assessment, market intelligence and competitive analysis for commercial vehicle strategy.",
      "Evaluated government policies, incentives and regulatory frameworks.",
      "Performed competitive benchmarking across global OEMs.",
      "Evaluated EV, hydrogen, ADAS, SDV and V2X technology roadmaps.",
      "Developed strategic recommendations for electrification and connected mobility."
    ],
    metrics: [
      { label: "Focus", value: "EV / ADAS / SDV" },
      { label: "Scope", value: "Commercial Mobility" },
      { label: "Analysis", value: "Global Benchmarking" }
    ],
    skills: ["Strategic Assessment", "EV Roadmapping", "Competitive Intelligence", "ADAS & SDV", "Connected Mobility"]
  },
  {
    id: "megalith-design-head",
    role: "Design Team Head",
    organization: "Megalith — Civil Engineering Tech Fest, IIT Kharagpur",
    location: "IIT Kharagpur",
    period: "Jun 2024 – Present",
    type: "Leadership",
    description: "Led design and outreach initiatives for Megalith, reaching 5,000+ students and professionals across 15+ events.",
    bullets: [
      "Led design and outreach initiatives for Megalith.",
      "Promotional content reached 5,000+ students and professionals.",
      "Coordinated on-ground execution for 15+ events."
    ],
    metrics: [
      { label: "Reach", value: "5,000+" },
      { label: "Events", value: "15+" }
    ],
    skills: ["Creative Direction", "Leadership", "Event Operations", "Visual Branding"]
  },
  {
    id: "ncc-army-cadet",
    role: "NCC Cadet — Army Wing",
    organization: "National Cadet Corps",
    location: "IIT Kharagpur",
    period: "Jul 2023 – Jul 2025",
    type: "Service",
    description: "Served as an NCC Army Wing Cadet for two years, earning the B-Certificate and recognized as Best Cadet.",
    bullets: [
      "Served as an NCC Army Wing Cadet for two years.",
      "Earned the B-Certificate.",
      "Recognized as Best Cadet at Combined Annual Training Camp."
    ],
    metrics: [
      { label: "Tenure", value: "2 Years" },
      { label: "Credential", value: "B-Certificate" },
      { label: "Honor", value: "Best Cadet" }
    ],
    skills: ["Discipline", "Tactical Training", "Team Leadership", "Crisis Management"]
  }
];

