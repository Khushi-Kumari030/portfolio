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
}

export const competitionsData: CompetitionItem[] = [
  {
    id: "general-championship-tsg",
    title: "General Championship Data Analytics",
    event: "Data Analytics Event • Technology Students' Gymkhana",
    organization: "IIT Kharagpur",
    period: "Mar 2025 – Apr 2025",
    award: "Championship Contributor",
    description: "Collaborated within a 20-member analytics cohort to build multi-dimensional feature engineering pipelines and executive Power BI dashboards driving marketing channel strategies.",
    highlights: [
      "Derived 30+ predictive features across external weather, seasonal holidays, pricing elasticity, and promotional discounts.",
      "Analyzed intricate product-channel conversion relationships using correlation matrices and custom performance scorecards.",
      "Engineered responsive, interactive Power BI decision dashboards with drill-down KPIs.",
      "Synthesized actionable business insights adopted for strategic marketing campaign allocation."
    ],
    metrics: [
      { label: "Team Size", value: "20 Members" },
      { label: "Features Engineered", value: "30+" },
      { label: "Tool", value: "Power BI / Python" }
    ],
    tags: ["Power BI", "Feature Engineering", "Data Analytics", "Strategy", "Team Leadership"]
  },
  {
    id: "ncc-best-cadet",
    title: "National Cadet Corps (NCC) — Army Wing",
    event: "Combined Annual Training Camp",
    organization: "Ministry of Defence / IIT Kharagpur",
    period: "Jul 2023 – Jul 2025",
    award: "Best Cadet & B-Certificate",
    description: "Completed two rigorous years of military discipline, tactical field training, endurance drills, and leadership development in the Army Wing.",
    highlights: [
      "Awarded the prestigious Best Cadet recognition at the Combined Annual Training Camp.",
      "Successfully earned the NCC 'B' Certificate demonstrating exemplary physical endurance, discipline, and tactical acumen.",
      "Led contingent marching and community service outreach drives representing IIT Kharagpur."
    ],
    metrics: [
      { label: "Tenure", value: "2 Years" },
      { label: "Distinction", value: "Best Cadet" },
      { label: "Credential", value: "B-Certificate" }
    ],
    tags: ["Leadership", "Discipline", "Operations", "Team Command"]
  }
];
