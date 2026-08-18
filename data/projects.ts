export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Machine Learning" | "Computer Vision" | "NLP" | "Time Series" | "Deep Learning";
  period: string;
  guideOrType: string;
  description: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "credit-risk-intelligence",
    title: "Explainable Credit Risk Intelligence Platform",
    subtitle: "End-to-End Default Prediction with SHAP & AI Assistant",
    category: "Machine Learning",
    period: "May 2026",
    guideOrType: "Self Project",
    description: "Architected and deployed a full-stack credit risk assessment engine trained on 150K+ loan records. Benchmarked four machine learning models with SMOTE imbalanced sampling, advanced feature engineering, interactive SHAP waterfall/beeswarm explainability, and an AI-powered conversational credit advisor.",
    highlights: [
      "Benchmarked 4 ML models (XGBoost, Random Forest, LightGBM, Logistic Regression) using SMOTE and class-weight balancing.",
      "Achieved XGBoost ROC-AUC of 0.86 and 76.5% Recall for high-risk loan default identification.",
      "Integrated SHAP (SHapley Additive exPlanations) to provide real-time risk factor attributions per applicant.",
      "Engineered an interactive Next.js dashboard backed by high-throughput FastAPI microservices."
    ],
    metrics: [
      { label: "Dataset Size", value: "150K+" },
      { label: "ROC-AUC", value: "0.86" },
      { label: "Default Recall", value: "76.5%" }
    ],
    technologies: ["Python", "XGBoost", "Machine Learning", "SHAP", "FastAPI", "Next.js", "Scikit-learn"],
    githubUrl: "https://github.com/Khushi-Kumari030",
    image: "/projects/credit_risk_shap.png",
    featured: true
  },
  {
    id: "streamflow-prediction",
    title: "Daily Streamflow & Hydrological Prediction",
    subtitle: "Comparative Deep Learning & Ensemble Modeling for Flood Risk",
    category: "Time Series",
    period: "Apr 2026",
    guideOrType: "Course Project • Prof. Rajib Maity",
    description: "Developed multi-horizon daily streamflow predictive models using historical meteorological rainfall and lagged hydrological discharge dynamics. Evaluated sequential neural architectures against tree ensembles with comprehensive model interpretability for flood warning systems.",
    highlights: [
      "Processed multi-year rainfall, runoff, and lagged catchment hydrological indicators.",
      "Trained and evaluated Random Forest, LightGBM, LSTM, and Temporal Transformer architectures.",
      "Utilized SHAP-based feature importance to isolate seasonal lag influences and extreme runoff triggers.",
      "Formulated probabilistic flood-risk bounds to empower data-driven watershed management decisions."
    ],
    metrics: [
      { label: "Architectures", value: "LSTM + Transf." },
      { label: "Models", value: "LightGBM / RF" },
      { label: "Explainability", value: "SHAP" }
    ],
    technologies: ["Python", "Time Series", "LightGBM", "LSTM", "Transformer", "SHAP", "Pandas"],
    githubUrl: "https://github.com/Khushi-Kumari030",
    featured: true
  },
  {
    id: "fashion-image-classifier",
    title: "Fashion-MNIST Deep CNN Apparel Classifier",
    subtitle: "Multi-Class Computer Vision & Hyperparameter Optimization",
    category: "Deep Learning",
    period: "Jun 2025",
    guideOrType: "Deep Learning / Self Project",
    description: "Engineered a deep Convolutional Neural Network (CNN) in TensorFlow/Keras to perform accurate multi-class classification on 70,000+ Fashion-MNIST grayscale images across 10 apparel categories with rigorous performance validation.",
    highlights: [
      "Constructed multi-layer Conv2D, Batch Normalization, Max Pooling, and Dropout architectures.",
      "Achieved 88% overall test accuracy across diverse apparel classes.",
      "Conducted extensive hyperparameter tuning over learning rate schedules, optimizer variants, and kernel filters.",
      "Evaluated class-wise precision, recall, confusion matrix distributions, and F1 scores."
    ],
    metrics: [
      { label: "Images", value: "70,000+" },
      { label: "Test Accuracy", value: "88%" },
      { label: "Classes", value: "10" }
    ],
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "Deep Learning", "Matplotlib"],
    githubUrl: "https://github.com/Khushi-Kumari030",
    featured: true
  },
  {
    id: "news-category-classifier",
    title: "BBC News NLP Category Classifier",
    subtitle: "Text Categorization Engine with TF-IDF & Real-Time Inference",
    category: "NLP",
    period: "May 2025",
    guideOrType: "NLP / Self Project",
    description: "Built an NLP categorization pipeline on 2,200+ BBC article documents covering five topical classes (Business, Tech, Politics, Sport, Entertainment). Features automated tokenization, lemmatization, and real-time prediction inference.",
    highlights: [
      "Engineered text preprocessing pipelines with NLTK tokenization, custom regex cleaners, and stopword removal.",
      "Extracted semantic n-gram representations via Term Frequency-Inverse Document Frequency (TF-IDF).",
      "Trained calibrated Logistic Regression achieving 96% test accuracy across all 5 news domains.",
      "Designed a real-time text analysis interface for instantaneous single-article topic classification."
    ],
    metrics: [
      { label: "Articles", value: "2,200+" },
      { label: "Test Accuracy", value: "96%" },
      { label: "Categories", value: "5" }
    ],
    technologies: ["Python", "NLP", "TF-IDF", "NLTK", "Scikit-learn", "Logistic Regression"],
    githubUrl: "https://github.com/Khushi-Kumari030",
    featured: true
  },
  {
    id: "stock-price-lstm",
    title: "Equity Stock Price Forecasting with LSTM",
    subtitle: "Recurrent Deep Neural Networks for Sequential Price Trend Modeling",
    category: "Time Series",
    period: "2025 – 2026",
    guideOrType: "GitHub Repository",
    description: "Developed deep recurrent sequential architectures with Long Short-Term Memory (LSTM) cells to capture non-linear temporal dependencies and momentum signals in time-series equity price data.",
    highlights: [
      "Formulated lookback sliding-window feature matrices across multivariate price & volume signals.",
      "Implemented stacked LSTM layers with regularization to mitigate sequential overfitting.",
      "Visualized predictive trend bands against actual market trajectories."
    ],
    metrics: [
      { label: "Architecture", value: "Stacked LSTM" },
      { label: "Framework", value: "Keras / TF" }
    ],
    technologies: ["Python", "LSTM", "TensorFlow", "Keras", "Jupyter Notebook", "NumPy"],
    githubUrl: "https://github.com/Khushi-Kumari030/stock_price_prediction_lstm",
    featured: false
  },
  {
    id: "traffic-congestion-classifier",
    title: "Traffic Congestion & Density Classifier",
    subtitle: "Vision-based Vehicle Interaction & Road State Analysis",
    category: "Computer Vision",
    period: "2025",
    guideOrType: "GitHub Repository",
    description: "Computer vision pipeline for automated traffic congestion detection, road state assessment, and vehicle density estimation from real-world roadway video streams.",
    highlights: [
      "Extracted spatial-temporal features from monocular video footage for traffic bottleneck detection.",
      "Classified road congestion levels dynamically to assist urban transportation flow analysis."
    ],
    metrics: [
      { label: "Domain", value: "Intelligent Transport" },
      { label: "Pipeline", value: "Vision Analytics" }
    ],
    technologies: ["Python", "Computer Vision", "OpenCV", "PyTorch"],
    githubUrl: "https://github.com/Khushi-Kumari030/Traffic_Congestion_Classifier",
    featured: false
  }
];
