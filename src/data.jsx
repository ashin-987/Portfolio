import { FaPaintBrush } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from 'react-icons/fa';
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  figma,
  xd,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  reactnative,
  emailicon,
  whatsappicon,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Expertise" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Contact" },
];

export const services = [
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: `Crafting visually stunning and user-centric designs that ensure seamless user experiences. 
                  From wireframes to high-fidelity prototypes, I focus on creating intuitive interfaces that 
                  blend creativity and functionality, enhancing engagement and usability.`,
  },
  {
    title: "Web Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `I build dynamic, user-friendly websites using modern technologies like react & tailwind, ensuring clean code, 
    fast performance, and a strong foundation for scalability and future growth.`,
  },
  {
    title: "Responsive Design",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `I craft seamless web experiences that adapt flawlessly to all screen sizes—from desktops
     to smartphones—ensuring every user enjoys a smooth, consistent interface no matter how they access the site.`,
  },
];

export const projects = [
  {
    title: "AI Powered School",
    image: project1,
    category: "UI/UX",
    description: `Transforming education with AI, our School UI Design project revolutionizes the 
                     learning experience. Seamlessly integrating intelligent features, personalized interfaces, 
                     and intuitive navigation, our design empowers educators and students alike. Experience 
                     innovation at its finest as we pave the way for a smarter, more efficient educational 
                     journey.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "XD",
        logo: xd,
      },
    ],
  },
  {
    title: "E-Commerce Application",
    image: project2,
    category: "Web",
    description: `Enhance your online shopping experience with our E-Commerce Application 
      UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
      interface offers easy navigation, personalized recommendations, and secure 
      transactions. Elevate your digital storefront and captivate customers with a visually 
      stunning design tailored to your brand`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "XD",
        logo: xd,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "Robotic Engineering Web Application",
    image: project3,
    category: "Web",
    description: `Unlock the future of robotics with our Robotic Engineering Web Application
      project. Seamlessly integrating cutting-edge technology, data analytics, 
      and collaborative tools, our platform empowers engineers to design, simulate, 
      and optimize robotic systems. Experience innovation at its peak as we redefine the 
      boundaries of robotic engineering.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
    ],
  },
  {
    title: "Project Management application",
    image: project4,
    category: "Apps",
    description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
                     Elevate your project management experience and achieve success with ease.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "React Native",
        logo: reactnative,
      },
      {
        name: "XD",
        logo: xd,
      },
      {
        name: "CSS",
        logo: css,
      },
    ],
  },
  {
    title: "Mobile bank - App Design",
    image: project5,
    category: "UI/UX",
    description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "Figma",
        logo: figma,
      },
    ],
  },
  {
    title: "Quiz App Development",
    image: project6,
    category: "Apps",
    description: `Elevate engagement and knowledge retention with our Quiz App 
                    Development project. Seamlessly crafted for interactive learning 
                    experiences, our app offers customizable quizzes, real-time feedback, 
                    and captivating visuals. Empower users to test their knowledge anytime,
                     anywhere, fostering a dynamic learning environment tailored to their 
                     needs.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "React Native",
        logo: reactnative,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "XD",
        logo: xd,
      },
      {
        name: "Bootstrap",
        logo: bootstrap,
      },
    ],
  },
];

export const skills = [
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Intermediate",
        logo: figma,
      },
      
    ],
  },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Intermediate",
        logo: javascript,
      },
      {
        skill: "Tailwind",
        level: "Experienced",
        logo: tailwind,
      },
      {
        skill: "Bootstrap",
        level: "Intermediate",
        logo: bootstrap,
      },
      {
        skill: "React",
        level: "Intermediate",
        logo: react,
      },
      
    ],
  },
];

export const contactInfo = [
  {
    name: "Email",
    value: "ashinsh45@gmail.com",
    link: "mailto:ashinsh45@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  
  {
    name: "WhatsApp",
    value: "+91 8925688718",
    link: "https://wa.me/918925688718",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/ashin.s.h?igsh=MmFjZjV0azJzZXl4",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/ashin-987",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/ashinsh/",
  },
];
