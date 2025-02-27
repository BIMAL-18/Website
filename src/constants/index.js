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
  carrent,
  jobit,
  tripguide,
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
    title: "App Developer",
    icon: web,
  },
  {
    title: "Python Programmer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "AI Developer",
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
    title: "Web & App Developer",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Developed responsive web applications using HTML, CSS, and JavaScript.",
      "Built cross-platform mobile apps using React Native and Flutter.",
      "Integrated APIs and third-party services for enhanced app functionality.",
      "Optimized web and app performance to ensure fast loading times and smooth user experience.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Learning",
    points: [
      "Designed and implemented software using Object-Oriented Programming (OOP) principles.",
      "Optimized algorithms and data structures for efficient problem-solving.",
      "Managed code versions using Git and GitHub for seamless collaboration.",
      "Performed unit testing and debugging to ensure code quality and functionality.",
      "Worked in Agile/Scrum environments, delivering iterative software updates.",
    ],
  },
  {
    title: "Artificial Intelligence Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Learning",
    points: [
      "Developed machine learning models for classification and regression tasks.",
      "Applied NLP techniques to extract insights from textual data.",
      "Built deep learning networks for computer vision applications.",
      "Optimized AI algorithms to improve efficiency and model accuracy.",
    ],
  },
  {
    title: "Problem Solving",
    // company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "Quickly identified and fixed bugs to ensure smooth app performance.",
    "Collaborated with the team to find efficient solutions to technical challenges.",
    "Optimized code for better speed and scalability.",
    "Applied troubleshooting skills to resolve complex issues effectively.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Bimal, you're doing exceptional work—I'd love to have you join our team at Tesla to help shape the future of technology.",
    name: "Elon Musk",
    designation: "CEO",
    company: "Tesla Inc",
    image: "https://imgs.search.brave.com/3s9_swpN18-jtzIq_39pMz3h68pAhsZjOWogPFpktBg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2Y0L1VTQUZBX0hv/c3RzX0Vsb25fTXVz/a18oSW1hZ2VfMV9v/Zl8xNylfKGNyb3Bw/ZWQpLmpwZw",
  },
  {
    testimonial:
      "Bimal, your talent and vision are exactly what we need at Meta—I’d like to offer you the opportunity to lead the company.",
    name: "Mark Zuckerberg",
    designation: "CEO",
    company: "Meta",
    image: "https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg",
  },
  {
    testimonial:
      "Bimal, your skills are perfect for the future of Microsoft—I’d like to offer you the CEO role!",
    name: "Bill Gates",
    designation: "Owner",
    company: "Microsoft",
    image: "https://imgs.search.brave.com/kAp38RcJ05uniLOKnJ--tx7s5ehzKjgG3qOz2dYSRLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/OTU0Mjg1NS9waG90/by9iaWxsLWdhdGVz/LSVDMyVBMC10b2t5/by1sZS0xOC1hbyVD/MyVCQnQtMjAyMi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/eE5NVFEwNDBjQmtN/cjBYSFZ4TnhQLWF5/X2JWSm81RVpkMFBp/WWJBejdUbz0",
  },
];

const projects = [
  {
    name: "Jarvis",
    description:
      "Jarvis is an intelligent virtual assistant designed to help streamline tasks, manage schedules, and provide real-time information through advanced artificial intelligence.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
    ],
    image: "https://imgs.search.brave.com/j85YR7pgyeB4x_rBHHvMB-0Z0K6I6qwvigA4Vs9l0Mk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzUzNS85MDEv/MTk2L3RoZS1hdmVu/Z2Vycy1hdmVuZ2Vy/cy1lbmRnYW1lLWF2/ZW5nZXJzLWVuZGdh/bWUtaXJvbi1tYW4t/bWFydmVsLWNvbWlj/cy1oZC13YWxscGFw/ZXItcHJldmlldy5q/cGc",
    source_code_link: "https://github.com/bimal-18",
  },
  {
    name: "Rock Paper Scissor",
    description:
      "Rock, Paper, Scissors is a simple hand game often played between two people, where each player simultaneously forms one of three shapes—rock, paper, or scissors—with their hand, and the winner is determined based on the rules of the game.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: "https://imgs.search.brave.com/yyBZSn4IJQGnWmKSJ8iDfz7Ao-bSDJAZKoze2jZa58k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzA3LzU1Lzc3/LzM2MF9GXzIwNzU1/NzcyNF9OZ21TSXQy/UGxVOU1BbFpqbkhj/dmQ4Z2lVb2pNU2Fn/Zi5qcGc",
    source_code_link: "https://github.com/bimal-18",
  },
  {
    name: "Instagram Clone App",
    description:
      "Instagram is a popular social media platform that allows users to share photos, videos, and stories, connect with friends, follow influencers, and explore content from around the world through a visually-driven interface.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "oop",
        color: "green-text-gradient",
      },
      {
        name: "FCM",
        color: "pink-text-gradient",
      },
    ],
    image: "https://imgs.search.brave.com/QLdh5rr1ObgTlTgvVqs6aNHJ7PejeXkdG5fRZamrfiU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzcwMy84Mzgv/MzkyL3lvdXR1YmUt/ZmFjZWJvb2stdHdp/dHRlci1pbnN0YWdy/YW0td2FsbHBhcGVy/LXByZXZpZXcuanBn",
    source_code_link: "https://github.com/bimal-18",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
