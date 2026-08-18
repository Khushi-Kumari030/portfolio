export interface SkillItem {
  name: string;
  iconType: string;
  tag?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "LANGUAGES",
    subtitle: "Core programming and algorithmic languages",
    skills: [
      { name: "Python", iconType: "python", tag: "Primary" },
      { name: "C", iconType: "c", tag: "Systems" },
      { name: "SQL", iconType: "sql", tag: "Databases" },
      { name: "HTML", iconType: "html", tag: "Markup" },
      { name: "CSS", iconType: "css", tag: "Styling" },
      { name: "JavaScript", iconType: "javascript", tag: "Web" }
    ]
  },
  {
    title: "DATA & MACHINE LEARNING",
    subtitle: "Deep learning frameworks, statistical learning and modeling",
    skills: [
      { name: "NumPy", iconType: "numpy", tag: "Numerical" },
      { name: "Pandas", iconType: "pandas", tag: "Data Analysis" },
      { name: "Scikit-learn", iconType: "scikitlearn", tag: "ML" },
      { name: "TensorFlow", iconType: "tensorflow", tag: "Deep Learning" },
      { name: "Keras", iconType: "keras", tag: "Neural Nets" },
      { name: "PyTorch", iconType: "pytorch", tag: "Deep Learning" }
    ]
  },
  {
    title: "DATA VISUALIZATION",
    subtitle: "Exploratory visual analytics and business intelligence dashboards",
    skills: [
      { name: "Matplotlib", iconType: "matplotlib", tag: "Visualization" },
      { name: "Seaborn", iconType: "seaborn", tag: "Statistical Viz" },
      { name: "Power BI", iconType: "powerbi", tag: "BI Dashboards" },
      { name: "Tableau", iconType: "tableau", tag: "Visual Analytics" }
    ]
  },
  {
    title: "TOOLS & PLATFORMS",
    subtitle: "Development environments, cloud notebooks and repositories",
    skills: [
      { name: "Jupyter", iconType: "jupyter", tag: "Research" },
      { name: "VS Code", iconType: "vscode", tag: "Editor" },
      { name: "Google Colab", iconType: "colab", tag: "Cloud GPU" },
      { name: "Streamlit", iconType: "streamlit", tag: "Web Apps" },
      { name: "GitHub", iconType: "github", tag: "VCS" }
    ]
  },
  {
    title: "PRODUCTIVITY",
    subtitle: "Analytical reporting, presentations and design",
    skills: [
      { name: "Excel", iconType: "excel", tag: "Spreadsheets" },
      { name: "PowerPoint", iconType: "powerpoint", tag: "Presentations" },
      { name: "Canva", iconType: "canva", tag: "Graphics" }
    ]
  }
];

