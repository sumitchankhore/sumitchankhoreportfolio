export type SkillGroup = { title: string; description: string; items: string[]; icon: string };
export const skillGroups: SkillGroup[] = [
  { title: 'Programming', description: 'Core languages for analysis and querying', items: ['Python', 'SQL'], icon: 'code' },
  { title: 'Data analytics', description: 'Preparing, exploring, and interpreting data', items: ['Pandas', 'NumPy', 'Statistics', 'Data cleaning', 'Preprocessing', 'EDA', 'Feature engineering'], icon: 'chart' },
  { title: 'Machine learning', description: 'Foundational supervised and unsupervised methods', items: ['Scikit-learn', 'Classification', 'Regression', 'Clustering', 'Model evaluation', 'Logistic regression', 'Decision trees', 'Random forest', 'Naive Bayes', 'KNN', 'SVM', 'Gradient boosting', 'K-Means'], icon: 'brain' },
  { title: 'Visualization', description: 'Explaining data through charts and reports', items: ['Matplotlib', 'Seaborn', 'Power BI*', 'Excel*'], icon: 'chart' },
  { title: 'Databases & tools', description: 'Working environments and data stores', items: ['MySQL', 'MongoDB', 'Jupyter Notebook', 'Google Colab', 'VS Code', 'Git', 'GitHub'], icon: 'database' },
  { title: 'Additional exposure', description: 'Topics explored at a foundational level', items: ['NLP fundamentals', 'Sentiment analysis', 'ANN/CNN basics', 'Flask model deployment'], icon: 'layers' },
];
