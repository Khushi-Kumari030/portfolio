export interface CompetitionItem {
  id: string;
  title: string;
  event: string;
  organization: string;
  period: string;
  award?: string;
  description: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  tags: string[];
  githubUrl?: string;
  techStack?: string[];
  workflowStages?: string[];
  competitiveEdge?: string[];
}

export const competitionsData: CompetitionItem[] = [
  {
    id: "platinum-jubilee-2026",
    title: "Platinum Jubilee Innovation Challenge 2026",
    event: "Student Innovation Challenge 2026",
    organization: "IIT Kharagpur",
    period: "2026",
    award: "Semi-Final Round",
    description: "IntelliHall — An AI-powered hostel maintenance management platform designed specifically for IIT Kharagpur Halls to digitize the complete complaint lifecycle.",
    highlights: [
      "Digitizes hostel complaint lifecycle: digital reporting, photo attachments, real-time tracking, AI complaint prioritization, AI-assisted worker recommendation, worker scheduling, and student confirmation before closure.",
      "Addresses traditional hostel maintenance delays caused by manual registers, phone calls, and informal WhatsApp messaging across Students, Hall Admins, Workers, and Institute Administration.",
      "Achieved TRL 6–7 Functional Prototype status with a 9-stage end-to-end tested workflow."
    ],
    metrics: [
      { label: "Result", value: "Semi-Finalist" },
      { label: "Status", value: "TRL 6–7 Prototype" },
      { label: "Workflow", value: "9-Stage Tested" }
    ],
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "FastAPI", "SQLAlchemy", "PostgreSQL", "Python NLP", "Docker"],
    githubUrl: "https://github.com/oindrilaSinghaGithub/IntelliHall",
    techStack: ["React", "Next.js", "TypeScript", "TailwindCSS", "FastAPI", "SQLAlchemy", "PostgreSQL", "Python NLP", "Docker", "JWT Auth"],
    workflowStages: [
      "Student Registration",
      "Hall Verification",
      "Complaint Submission",
      "Admin Verification",
      "Worker Assignment",
      "Complaint Scheduling",
      "Completion Slip",
      "Student Confirmation",
      "Complaint Closure"
    ],
    competitiveEdge: [
      "AI-assisted complaint prioritization",
      "AI-recommended worker assignment",
      "End-to-end hostel complaint lifecycle tracking",
      "Student verification before closure",
      "Centralized hall-wise analytics dashboard",
      "Automated notifications and escalation"
    ]
  },
  {
    id: "general-championship-tsg",
    title: "General Championship — Data Analytics",
    event: "Data Analytics Event • Technology Students' Gymkhana",
    organization: "IIT Kharagpur",
    period: "Mar 2025 – Apr 2025",
    award: "Championship Contributor",
    description: "Collaborated within a 20-member analytics team to build multi-dimensional feature engineering pipelines and interactive Power BI dashboards driving marketing channel strategies.",
    highlights: [
      "Derived 30+ features from external weather, seasonal holidays, pricing elasticity, and promotional discounts.",
      "Analyzed product-channel relationships using correlation and performance scores.",
      "Built interactive Power BI dashboards with drill-down KPIs for executive decision-making.",
      "Synthesized actionable insights for data-driven marketing strategy."
    ],
    metrics: [
      { label: "Team Size", value: "20 Members" },
      { label: "Features", value: "30+ Derived" },
      { label: "Tooling", value: "Power BI / Python" }
    ],
    tags: ["Power BI", "Feature Engineering", "Data Analytics", "Marketing Strategy", "Team Collaboration"]
  },
  {
    id: "open-iit-case-study-2024",
    title: "Open IIT Case Study Competition 2024–25",
    event: "Open IIT Case Study Competition",
    organization: "IIT Kharagpur",
    period: "Sep 2024 – Oct 2024",
    award: "Participant",
    description: "Evaluated QPo Cabs' market positioning and derived localized expansion strategies against major industry competitors.",
    highlights: [
      "Assessed QPo Cabs' competitive position across features, pricing, and customer experience against 5+ leading industry competitors.",
      "Derived market-entry opportunities by analyzing high-traffic zones and underserved regions to recommend a localized expansion strategy.",
      "Formulated data-backed recommendations using SWOT, market analysis, and basic data modeling.",
      "Proposed scalable operational enhancements."
    ],
    metrics: [
      { label: "Competitors", value: "5+ Analyzed" },
      { label: "Methodology", value: "SWOT & Modeling" },
      { label: "Domain", value: "Market Expansion" }
    ],
    tags: ["Market Intelligence", "SWOT Analysis", "Competitive Strategy", "Data Modeling", "Case Analysis"]
  }
];

