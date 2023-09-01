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
  materialui,
  chakraui,
  nodejs,
  nextjs,
  jquery,
  mongodb,
  firebase,
  wordpress,
  git,
  figma,
  docker,
  meta,
  starbucks,
  documatic,
  neocardinal,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  mediaverse,
  travel,
  urbanhub,
  crypto,
  nikeshoe,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },

  {
    name: "Firebase",
    icon: firebase,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: materialui,
  },
  {
    name: "Chakra UI",
    icon: chakraui,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Documatic",
    icon: documatic,
    iconBg: "#383E56",
    date: "April 2022 - August 2022",
    points: [
      "Collaborated on building AI-driven tools to analyse and document over 30 codebases for software developing teams.",
      "Analysed requirements alongside CTO to determine the best approach for developing app functionality with Web3.0 language codebases such as Solidity.",
      "Worked with team to create over 20 new features on existing product using agile development process.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "NeoCardinal Limited",
    icon: neocardinal,
    iconBg: "#E6DEDD",
    date: "April 2021 - August 2021",
    points: [
      "Co-ordinated with senior employees to upgrade network features in the company’s best-selling software product which increased company sales by 35% .",
      "Troubleshot known issues, solving approximately 50 problems every week.",
      "Restructured and maintained company website to increase media outreach by 60%.",
      "Composed over 25 test cases adapted to the requirements of each particular project.",
    ],
  },
];

const projects = [
  {
    name: "Travel Buddy",
    description:
      " This is a dynamic app that seamlessly combines the power of Google Maps API and geolocation technology to offer you an immersive experience in finding nearby attractions, restaurants, and hotels. With real-time updates and an intuitive interface, Travel Buddy empowers you to effortlessly explore your surroundings, whether you're in your hometown or traveling to new destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "google-maps-api",
        color: "green-text-gradient",
      },
      {
        name: "geolocation",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/Jeffansah/Travel-buddy",
    live_link: "https://travel-buddy-o.netlify.app/",
  },
  {
    name: "Mediaverse",
    description:
      "Mediaverse is a cutting-edge app that harnesses the power of YouTube's API to offer a comprehensive collection of videos, carefully categorized for a seamless streaming experience. With Mediaverse, users can effortlessly explore and access a diverse range of content, thoughtfully organized into various genres and themes. From entertainment and education to niche interests, Mediaverse ensures a personalized streaming journey, enabling users to delve into their preferred media seamlessly. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: mediaverse,
    source_code_link: "https://github.com/Jeffansah/Mediaverse-Streaming-App",
    live_link: "https://mediaverse.netlify.app",
  },
  // {
  //   name: "Urban Hub",
  //   description:
  //     "Urban Hub is an all-in-one real estate app that provides comprehensive property listings for both rentals and purchases. Seamlessly designed, Urban Hub empowers users to effortlessly filter through an extensive database to find their dream property based on essential criteria such as price, number of rooms, location, baths, utilties and more. Whether you're looking for a cozy apartment in the heart of the city or a spacious suburban home, Urban Hub's user-friendly interface allows for quick and precise searches for your ease of operation.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "chakra-ui",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: urbanhub,
  //   source_code_link: "https://github.com/Jeffansah/Real-Estate-App",
  //   live_link: "https://urbanhub.vercel.app/",
  // },
  {
    name: "Solaris",
    description:
      "Solaris is an advanced cryptocurrency platform that presents a comprehensive overview of various cryptocurrencies and their performance in the market. With a seamless interface, Solaris empowers users to filter through an array of digital currencies, accessing real-time stats and historical data across different timeframes, including years, months, weeks, and days. Whether you're tracking the trajectory of established tokens or exploring emerging coins, Solaris ensures a user-friendly experience that simplifies crypto analysis and aids informed decision-making.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "ant-design",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/Jeffansah/Solaris-Crypto-App",
    live_link: "https://solaris-o.netlify.app/",
  },
  {
    name: "NikeShop",
    description:
      "NikeShop is a minimalist landing page that showcases various Nike shoe brands and advertisements. The app provides a clean and modern interface for users to explore different shoe models and get a glimpse of Nike's product offerings.",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "green-text-gradient",
      },
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
    ],
    image: nikeshoe,
    source_code_link: "https://github.com/Jeffansah/nikeshop",
    live_link: "https://nikeshop-e.vercel.app",
  },
];

export { services, technologies, experiences, projects };
