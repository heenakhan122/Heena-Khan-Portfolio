export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'software' | 'datascience' | 'design';
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
{
  title: "AMANI",
  description: "AI-enabled WASH hazard mapping platform for refugee and low-resource settings. Phone-based AR system with offline-first reporting, edge AI, and human-in-loop verification. Stanford Healthcare Design Challenge Finalist.",
  image: `${import.meta.env.BASE_URL}amani-preview.png`,
  technologies: ["Computer Vision", "Edge AI", "React Native", "Geospatial ML", "AR"],
  category: "software",
  liveUrl: "/Heena-Khan-Portfolio/projects/amani",
  githubUrl: "https://github.com/heenakhan122"
},  
{
    title: "Mobile Maristan (PWA)",
    description: "TIIP-aligned wellness app with guided journaling + dhikr/breath practices, offline-first storage, i18n/RTL support, and explainable state→practice recommendations (sakina/waswasa/huzn/ghadab).",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
    technologies: ["React", "Vite", "Tailwind", "IndexedDB", "i18next", "Chart.js"],
    category: "software",
    liveUrl: "#",
    githubUrl: "https://github.com/heenakhan122"
  },
  {
    title: "Khaista Boutique",
    description: "Modern e-commerce frontend with product gallery, cart flow, and image optimization for Afghan handmade goods. Accessibility & performance tuned for global audiences.",
    image: `${import.meta.env.BASE_URL}khaista-boutique-logo.jpg`,
    technologies: ["React", "React Router", "Tailwind", "Stripe", "Vite", "Netlify"],
    category: "software",
    liveUrl: "#",
    githubUrl: "https://github.com/heenakhan122"
  },
  {
    title: "Probabilistic Deployment of Healthcare Trainers (CS109)",
    description: "Simulation that allocates trainers across Burkina Faso to maximize impact under cost/risk constraints. Features interactive map + charts for deployment optimization.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Folium", "Streamlit"],
    category: "datascience",
    liveUrl: "#",
    githubUrl: "https://github.com/heenakhan122"
  },
  {
    title: "ModestFilter — Chrome Extension",
    description: "Filters clothing sites by sleeve/hem/neckline keywords & CSS selectors. User preferences saved with quick toggle functionality for modest fashion discovery.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
    technologies: ["Manifest V3", "Content Scripts", "React", "Local Storage"],
    category: "software",
    liveUrl: "#",
    githubUrl: "https://github.com/heenakhan122"
  },
  {
    title: "Neurotrack Data Analysis",
    description: "Statistical analysis on 50,000+ cognitive assessment records, building automated data pipelines and A/B testing frameworks to improve user experience and platform usability.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
    technologies: ["Python", "R", "Statistical Analysis", "A/B Testing"],
    category: "datascience",
    liveUrl: "#",
    githubUrl: "https://github.com/heenakhan122"
  },
  {
    title: "Interactive Web Applications",
    description: "Built responsive web applications with data visualization using modern frontend technologies, resulting in increased user engagement and strategic collaborations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
    technologies: ["HTML/CSS", "JavaScript", "D3.js", "Responsive Design"],
    category: "software",
    liveUrl: "#",
    githubUrl: "https://github.com/heenakhan122"
  }
];
