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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  port,
  // jobit,
  // tripguide,
  CanvasCraft,
  ImagiGen,
  threejs,
  refocus,
  nibtube,
  skillswag,
  imagiinator,
  FlappyBird,
  imazilla,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Me",
  },
  {
    id: "work",
    title: "Experience",
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
    title: "Content Creator",
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Bentley Systems",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jan'24 - Current ",
    points: [
      "Embark on a digital odyssey with our masterful website development. We blend artistry and technology to sculpt your online presence into a captivating realm where aesthetics harmonize with functionality.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Easyryt",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "May’23 - Aug’23",
    points: [
      "Designed and implemented an Admin Panel and Website, leveraging React, to deliver a user-friendly interface with over10+ features.",
      "Played a key role in the development and maintenance of REST APIs for backend applications, leading to enhanced performance, scalability, and security. Created a Docker Image for the entire application and successfully deployed the project on AWS."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Zigy.in",
    icon: mongodb,
    iconBg: "#383E56",
    date: "July’22 - Oct’22",
    points: [
      "Witness operational alchemy as we transmute manual tasks into automated symphonies. Our automation expertise orchestrates efficiency, enhancing productivity and optimizing your business's inner workings.",
      "Led and reviewed the integration with the Frontend and assisted in the preparation of APIs."
    ],
  }
  // {
  //   title: "Designing",
  //   // company_name: "Meta",
  //   // icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "#figma #canva",
  //   points: [
  //     "Evoke emotions and spark desires with our creative prowess. We sculpt visual narratives that breathe life into your brand, leaving an indelible mark on hearts and minds through exquisite design."
  //   ],
  // },
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
    name: "ReFocus",
    description: `Full Stack website and Chrome Extension to improve the student’s concentration and level of attentiveness,   
    -> Helps to Improve the concentration and attentiveness of students to 40 %.
    -> Leveraged expertise in Node.js and MongoDB to architect and implement a robust backend infrastructure.
    -> Won Smart India Hackathon 2022`,
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "ChromeExtension",
        color: "green-pink-gradient",
      },
    ],
    image: refocus,
    source_code_link: "https://github.com/codewithmitesh/ReFocus",
  },
  {
    name: "Nibtube",
    description:
      `Video sharing application to watch, create and share online videos like YouTube
      -> Proficiently used the MERN (MongoDB, Express.js, React, Node.js) Stack to architect and develop the complete
      ecosystem, ensuring robust functionality and an engaging user experience.
      -> Used Firebase for video storage while also utilizing Redux to facilitate seamless frontend state management.`,
    tags: [
      {
        name: "mongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "react.js",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      }
    ],
    image: nibtube,
    source_code_link: "https://github.com/codewithmitesh/NibTube",
  },
  {
    name: "Skillswag",
    description:
      `Social media application to showcase a skillset, earn swags, and connect with similarly skilled people
      -> Leveraged the versatility of the Flutter SDK in conjunction with Firebase to design and implement the application.
      -> Used Provider for seamless state management, integrating multiple libraries to enhance the app's user experience.`,
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
      {
        name: "providers",
        color: "pink-text-gradient",
      },
      {
        name: "websockets",
        color: "orange-text-gradient",
      },
    ],
    image: skillswag,
    source_code_link: "https://github.com/codewithmitesh/skillswag",
  },
  {
    name: "Imagiinator",
    description:
      `Spearheaded the development of the innovative Imaginator app, harnessing the power of DALL-E API to revolutionize image generation, with a sleek React.js frontend and robust Node.js backend infrastructure.
      -> Demonstrated expertise in full-stack development by seamlessly integrating cutting-edge technologies to deliver a dynamic and user-centric application, showcasing proficiency in both frontend design and backend implementation.`,
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "DallE",
        color: "orange-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "green-text-gradient",
      }
    ],
    image: imagiinator,
    source_code_link: "https://github.com/codewithmitesh/Imagiinator",
  },
  {
    name: "Flappy Bird",
    description: `Engineered the Flappy Bird mobile application using Flutter framework and Dart language, showcasing proficiency in mobile app development and cross-platform compatibility.
    -> Leveraged Flutter's rich set of widgets and Dart's reactive programming paradigm to create a captivating gaming experience, demonstrating creativity and technical acumen in app design and implementation.`,
    tags: [
      {
        name: "Flutter ",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "Game",
        color: "pink-text-gradient",
      },
      {
        name: "Ui/Ux",
        color: "orange-text-gradient",
      }
    ],
    image: FlappyBird,
    source_code_link: "https://github.com/codewithmitesh/Flappy-Bird",
  },
  {
    name: "Imazilla",
    description:
      `Spearheaded the development of Imazila, a cutting-edge mobile application built on Flutter framework and Dart language, revolutionizing the wallpaper search and download experience for users worldwide.

      -> Demonstrated expertise in mobile app development by designing an intuitive and visually stunning interface, coupled with seamless functionality for effortless wallpaper exploration and download, showcasing proficiency in Flutter and Dart technologies.`,
    tags: [
      {
        name: "Flutter ",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "Ui/Ux",
        color: "orange-text-gradient",
      }
    ],
    image: imazilla,
    source_code_link: "https://github.com/codewithmitesh/Imazilla/",
  }
];

export { services, technologies, experiences, testimonials, projects };
