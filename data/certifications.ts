export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  credentialUrl?: string;
  certificateImage?: string;
  topics: string[];
  description: string;
}

export const certificationsData: Certification[] = [
  {
    id: "deloitte-data-analytics",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia (via Forage)",
    issueDate: "Dec 2025",
    credentialId: "RmkLk7YHq7NoTwWaS",
    certificateImage: "/deloitte_certificate.png",
    topics: ["Data Analytics", "Forensic Analytics", "Data Modeling", "Business Intelligence"],
    description: "Completed practical simulation involving client data extraction, telemetry exploratory analysis, data modeling, and executive dashboard communication."
  },
  {
    id: "summer-analytics-iitg",
    title: "Summer Analytics 2025",
    issuer: "Consulting & Analytics Club, IIT Guwahati",
    issueDate: "Jul 2025",
    credentialId: "7301a512-4653-4f72-a47e-df64b0b0e004",
    topics: ["Machine Learning", "Statistical Modeling", "Python", "Data Wrangling"],
    description: "Comprehensive data science program covering supervised and unsupervised learning algorithms, feature engineering, and statistical modeling."
  },
  {
    id: "time-series-unstop",
    title: "Time Series Analysis Certification",
    issuer: "Unstop",
    issueDate: "Apr 2025",
    credentialId: "324977b1-1bf8-4db0-8769-4ace95966926",
    topics: ["Time Series", "Forecasting", "ARIMA / SARIMA", "Trend & Seasonality"],
    description: "Rigorous coursework and assessment on temporal data decomposition, stationary testing, sequential forecasting models, and error metric evaluation."
  }
];
