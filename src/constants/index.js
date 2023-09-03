import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    java,
    python,
    unity,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Game Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "unity",
      icon: unity,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Wedding House Patisserie",
      // icon: ,
      iconBg: "#383E56",
      date: "August 2019 - May 2020",
      points: [
        "Developed and maintained web applications using React.js and other related technologies.",
        "Implemented responsive design and ensured cross-browser compatibility.",
        "Participated in code reviews and provided constructive feedback to other developers.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Cake Order (In development)",
      description:
        "Web-based platform that allows users to search, design, and order cakes from various providers, for any occasion all in one space.",
      
      // image: ,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };