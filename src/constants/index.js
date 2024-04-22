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
  shope,
  prisma,
  polaroid,
  shadcn,
  globechat,
  asanka,
  resortbooking,
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
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "Typescript",
    icon: typescript,
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
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Git",
    icon: git,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Prisma",
    icon: prisma,
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
    name: "Shadcn-ui",
    icon: shadcn,
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
    title: "WordPress Developer",
    company_name: "Freelance",
    icon: wordpress,
    iconBg: "#E6DEDD",
    date: "November 2019 – Present",
    points: [
      "Developed and maintained customized WordPress websites for various clients, enhancing functionality, aesthetics, and responsiveness to meet specific business needs.",
      "Designed and implemented custom plugins and themes using PHP, JavaScript, and CSS to extend website capabilities and improve user experiences.",
      "Optimized website performance through advanced techniques such as caching, image optimization, and database optimization, achieving up to 50% reduction in load times.",
      "Integrated WooCommerce for e-commerce solutions, boosting client sales by implementing payment gateways, product customization, and inventory management.",
      "Implemented SEO strategies and analytics tools to improve organic traffic and user engagement, resulting in an average 40% increase in traffic for client sites.",
      "Enhanced security measures, conducted regular updates and backups, minimizing vulnerability to attacks and ensuring compliance with data protection regulations.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Documatic",
    icon: documatic,
    iconBg: "#383E56",
    date: "May 2022 - August 2022",
    points: [
      "Collaborated on building AI-driven tools to analyse and document over 30 codebases for software developing teams.",
      "Analysed requirements alongside CTO to determine the best approach for developing app functionality with Web3.0 language codebases such as Solidity.",
      "Worked with team to create over 20 new features on existing product using agile development process.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "NeoCardinal Limited",
    icon: neocardinal,
    iconBg: "#E6DEDD",
    date: "April 2021 - December 2024",
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
    name: "The APT Stays",
    description:
      "The APT Stays is a luxurious hotel,resort, cabin and villa booking platform that offers a wide range of accommodations in exotic destinations worldwide. Our platform is designed to provide you with a seamless booking experience, featuring a user-friendly interface, secure payment options, and real-time availability updates. Whether you're planning a romantic getaway or a family vacation, The APT Stays ensures a hassle-free booking process, allowing you to discover and reserve your dream stay with ease.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn-ui",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: resortbooking,
    source_code_link: "https://github.com/Jeffansah/The_Apt_Stays.git",
    live_link: "https://apt-stays.vercel.app/",
  },
  {
    name: "Globe.chat",
    description:
      "Global.chat: Your passport to effortless global communication. Seamlessly connect with people worldwide using our multilingual Saas chat application, thanks to cutting-edge technology in Next.js13 and Shadcn-UI. Enjoy real-time language translation, user-friendly design, and robust security, leveraging the power of NextAuth and firebase rules. Plus, end-to-end data management with Firestore and exclusive pro features for subscribers through secure stripe payments!",
    tags: [
      {
        name: "nextjs13",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "zustand",
        color: "pink-text-gradient",
      },
    ],
    image: globechat,
    source_code_link: "https://github.com/Jeffansah/globe-chat-app",
    live_link: "https://globe-chat.vercel.app/",
  },
  {
    name: "AsankaSend",
    description:
      "A gateway to financial empowerment for the African diaspora. Our intuitive platform offers secure money transfers, comprehensive savings, and investment services, tailored for those supporting families in Africa. Embrace a world of financial possibilities with AsankaSend, where every transaction is a step towards community growth and prosperity.",
    tags: [
      {
        name: "elementor",
        color: "blue-text-gradient",
      },
      {
        name: "ui-core",
        color: "green-text-gradient",
      },
      {
        name: "element-pack",
        color: "pink-text-gradient",
      },
    ],
    image: asanka,
    source_code_link: "#",
    live_link: "https://asankasend.com/",
  },
  {
    name: "Shop-E",
    description:
      "Shop-E is your one-stop destination for online shopping, offering a vast selection of products and a seamless shopping experience. Powered by the cutting-edge Next.js 13, Shop-E demonstrates mastery in database management by harnessing the full potential of Prisma and Supabase. It seamlessly integrates Stripe for secure payments and leverages Vercel for effortless server deployment. Featuring user authentication, robust search capabilities, a convenient shopping cart, and a secure checkout process, Shop-E sets the standard for the future of e-commerce.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: shope,
    source_code_link: "https://github.com/Jeffansah/Shop-E",
    live_link: "https://shop-e-io.vercel.app/",
  },
  {
    name: "Urban Hub",
    description:
      "Urban Hub redefines your travel experience by offering a diverse selection of accommodations in cities across the globe. Our platform is designed to provide you with effortless booking and access to a wide range of stays. What sets us apart is our innovative RESTful API, meticulously crafted to manage, store, and display stays with precision. Whether you're seeking a cozy apartment or a luxurious hotel, Urban Hub simplifies your travel planning. Discover, book, and explore hassle-free, all within a single, user-friendly platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
    ],
    image: urbanhub,
    source_code_link: "https://github.com/Jeffansah/urban-hub",
    live_link: "https://urban-hub.vercel.app/",
  },
  {
    name: "Pixibee",
    description:
      "Pixibee is a cutting-edge cloud image storing application built with Next.js and TypeScript. It leverages the power of Cloudinary for secure and efficient photo storage and updates. The user interface is crafted with the beautiful Shadcn UI library, providing a seamless and visually stunning experience. Pixibee goes beyond standard image storage by offering advanced image editing capabilities, including AI generative fill. With Pixibee, you can securely store, manage, and enhance your image collection with ease.",
    tags: [
      {
        name: "cloudinary",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn-ui",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: polaroid,
    source_code_link: "https://github.com/Jeffansah/Pixibee",
    live_link: "https://pixibee.vercel.app/",
  },
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
  {
    name: "NikeShop",
    description:
      "NikeShop is a sleek landing page featuring a collection of Nike shoe brands and captivating advertisements. With a clean, modern interface, users can effortlessly explore various shoe models and discover the latest offerings from Nike. Whether you're a sports enthusiast or a fashion-conscious individual, NikeShop provides a delightful browsing experience to satisfy your footwear cravings.",
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
];

export { services, technologies, experiences, projects };
