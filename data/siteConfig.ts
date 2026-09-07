export interface SiteConfig {
  name: string;
  roleBadge: string;
  headline: string;
  tagline: string;
  institution: string;
  degree: string;
  department: string;
  expectedGraduation: string;
  cgpa: string;
  schooling: {
    class12: string;
    class10: string;
  };
  upcomingOpportunity: {
    role: string;
    company: string;
    note: string;
  };
  gateQualification: string;
  links: {
    github: string;
    linkedin: string;
    resume: string;
    email: string;
  };
  focusAreas: {
    title: string;
    desc: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Khushi Kumari",
  roleBadge: "DATA SCIENCE × SOFTWARE ENGINEERING",
  headline: "Building Intelligent Systems & High-Impact Software",
  tagline: "I build intelligent and scalable solutions that transform data into meaningful impact and powerful software experiences.",
  institution: "IIT Kharagpur",
  degree: "B.Tech.(Hons.) in Civil Engineering + Master of Artificial Intelligence, Machine Learning and Applications",
  department: "Indian Institute of Technology Kharagpur",
  expectedGraduation: "Expected 2028",
  cgpa: "9.17 / 10",
  schooling: {
    class12: "88.8%",
    class10: "95.4%",
  },
  upcomingOpportunity: {
    role: "AI/ML Intern",
    company: "BlackRock",
    note: "Upcoming AI/ML Internship — I will be joining BlackRock for an upcoming AI/ML internship during the summer vacation."
  },
  gateQualification: "GATE Civil Engineering — Qualified",
  links: {
    github: "https://github.com/Khushi-Kumari030",
    linkedin: "https://www.linkedin.com/in/khushi-j-kumari",
    resume: "/Khushi_Kumari_CV.pdf",
    email: "kjdk265@gmail.com",
  },
  focusAreas: [
    {
      title: "Machine Learning & Deep Learning",
      desc: "Architecting gradient boosting, neural networks, transformers, and CNN pipelines with rigorous evaluation and explainability."
    },
    {
      title: "Computer Vision & Perception",
      desc: "Developing monocular camera calibration, metric BEV transformations, vanishing point estimation, and real-time object/lane detection."
    },
    {
      title: "Software Engineering & Systems",
      desc: "Building scalable web platforms, fast REST APIs, interactive dashboards, and maintainable full-stack applications."
    },
    {
      title: "Time Series & Analytics",
      desc: "Forecasting complex multi-variate hydrological & financial dynamics with LSTMs, LightGBM, and feature engineering."
    }
  ]
};


