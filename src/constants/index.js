import { mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, figma, docker, meta, starbucks, tesla, shopify, carrent, jobit, tripguide, RentMyHouse, threejs,} from "../assets";
  
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
  
/*   const services = [
    {
      title: "Frontend Web developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Develo ",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ]; */
  
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
/*     {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    }, */
  ];
  
  const experiences = [
    {
      title: "Next.js Developer",
      company_name: "FreeLancer",
      /* icon: starbucks, */
      iconBg: "#383E56",
      date: "2021 - Present",
      points: [
        "Utilized Next.js and associated technologies to develop and maintain web applications for clients.",
        "Fostered collaboration with cross-functional teams, including designers, product managers, and fellow developers, to deliver top-notch products.",
        "Implemented responsive design techniques and ensured compatibility across various browsers.",
        "Actively participated in code reviews, offering valuable feedback to enhance the work of other developers."
      ],
    },
    {
      title: "React.js developer",
      company_name: "Avover",
      /* icon: tesla, */
      iconBg: "#E6DEDD",
      date: "Sasonal",
      points: [
        "Creating responsive user interfaces using modern front-end technologies for engaging media experiences.",
        "Optimizing website performance through efficient coding practices and advanced techniques.",
        "Integrating third-party APIs and services to enhance media features seamlessly.",  
        "Implementing front-end security measures for safeguarding user data and privacy."
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "House Rent Model",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
      ],
      image: RentMyHouse,
      source_code_link: "https://start-up-rent-model.vercel.app",
    },
   /*  {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    }, */
  ];
  
  export {technologies, experiences, testimonials, projects };