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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  flowerStation,
  searchEngine,
  mimar,
  bytewise,
  sga,
  we,
  fhub,
  rentnest,
  streetscom,
  netflix,
  linkedin,
  slack,
  saas,
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
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Video Editor",
    icon: backend,
  },
  {
    title: "Graphics Designer",
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
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Flower Station",
    icon: flowerStation,
    iconBg: "#383E56",
    date: "August 2023 - September 2023",
    points: [
      "Developing and maintaining web applicationsa and e-commerce stores using html, css, javascript, react, shopify liquid and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and suggesting improvements.",
    ],
  },
  {
    title: "ReactJS/Native Developer",
    company_name: "Mimar Studios",
    icon: mimar,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Deep Learning Fellowship",
    company_name: "Bytewise",
    icon: bytewise,
    iconBg: "#E6DEDD",
    date: "March 2023 - July 2023",
    points: [
      "Learning various concepts related to deep learning and implementing them in differeny Tasks and Projects.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Director Graphics Designing",
    company_name: "Student Government Organization",
    icon: sga,
    iconBg: "#383E56",
    date: "September 2022 - May 2023",
    points: [
      "Designing and Creating Various Graphics and managing Social Media Campaigns.",
      "Collaborating with cross-functional teams including designers, and other creators to create high-quality graphics.",
    ],
  },
  {
    title: "Video Editor",
    company_name: "Wonderful Engineering",
    icon: we,
    iconBg: "#E6DEDD",
    date: "September 2022 - December 2022",
    points: ["Creating Informative reels and Videos for Social Media Page."],
  },
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
    name: "SAAS Translator",
    description:
      "A full Stack web application which allows the users to communicate in 10 languages with real time translation. Developed using NextJs. It has NextAuth authentication, stripe integeration to handle Pro subscriptions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "nextAuth",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "blue-text-gradient",
      },
    ],
    image: saas,
    source_code_link: "https://github.com/ShahabAli-1/Saas-translator",
    demo_link: "https://saas-translator-pink.vercel.app/",
  },
  {
    name: "FriendifyHub",
    description:
      "A fully responsive MERN Stack web application. It has jwt authentication. User can add posts, view posts of other people, add/remove friends and view their profiles.",
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
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "purple-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: fhub,
    source_code_link: "https://github.com/ShahabAli-1/friendifyHub",
    demo_link: "https://friendify-hub.vercel.app/",
  },
  {
    name: "Movies Web App",
    description:
      "Web-based movies app similar to netflix that displays the latest movies in various categories It also includes Firebase Authentication, API Data Fetching.",
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
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
      {
        name: "youtube-trailer",
        color: "orange-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/ShahabAli-1/netflix-clone",
    demo_link: "https://movies-inventory-s1.netlify.app/",
  },
  {
    name: "Streets Commerce",
    description:
      "An e-commerce website built using Nextjs. In uses NextAuth authentication, firebase firestore, api data fetching, cart management and stripe checkout.",
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
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "blue-text-gradient",
      },
    ],
    image: streetscom,
    source_code_link: "https://github.com/ShahabAli-1/StreetsCommerce",
    demo_link: "https://streets-commerce.vercel.app/",
  },
  {
    name: "Rentnest",
    description:
      "A fully responsive MERN Stack web application. It has jwt authentication. User can add places, view other's places, make bookings.",
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
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "purple-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: rentnest,
    source_code_link: "https://github.com/ShahabAli-1/bookingapp-rentnest-sa",
    demo_link: "https://bookingapp-rentnest-sa-one.vercel.app/",
  },
  {
    name: "Search Engine",
    description:
      "A search engine created in react with the help of google apis. Users can perform their searches just like google on any topic with limit of 100 searches per day.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "googleapi",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
    ],
    image: searchEngine,
    source_code_link: "https://github.com/ShahabAli-1/Google-clone",
    demo_link: "https://shahab-search-engine.netlify.app/",
  },

  {
    name: "Social Media App",
    description:
      "Web application similar to Linkedin Built in react that has authentication, data storage, data fetching and responsive design. Users can share and view posts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
    ],
    image: linkedin,
    source_code_link: "https://github.com/ShahabAli-1/linkedin-clone",
    demo_link: "https://socialapp-s1.netlify.app/",
  },
  {
    name: "Chat Room",
    description:
      "A chatroom web app that has authentication, storage, separate chat-rooms can be created for separate chats and real time communcation.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: slack,
    source_code_link: "https://github.com/ShahabAli-1/Slack-clone",
    demo_link: "https://chatroom-s1.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
