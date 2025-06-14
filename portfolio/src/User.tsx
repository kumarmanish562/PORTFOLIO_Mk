import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
  name: "Manish Kumar",
  stack: [
    "Frontend Developer",
    "React & Next.js Developer",
    "Full Stack Learner",
    "Hackathon Winner",
  ],
  bio: "I'm a passionate frontend developer and backend developer from Bhilai, India, focused on building modern, accessible, and performance-driven web applications using React, Tailwind, and cloud technologies. Always exploring new tools and contributing to real-world projects. Let's collaborate and build something impactful!"
};



const ProjectInfo = [
    {
    "title": "VR World Metaverse",
    "desc": "An immersive metaverse platform built with React and Tailwind CSS. This responsive web application features interactive UI elements, animated transitions, and a sleek design that introduces users to virtual reality experiences. Key features include animated hero sections, feature showcases, video demos via popup player, app store integration, and a full dark mode experience. The custom gradient effects and smooth animations create an engaging user experience that highlights the possibilities of VR technology.",
    "image": "VR-World.png",
    "live": true,
    "technologies": ["React", "Tailwind CSS", "Vite", "AOS Animation", "React Icons"],
    "link": "https://vr-world-metaverse.vercel.app/",
    "github": "https://github.com/kumarmanish562/gamer_platform.git"
},
   {
    title: "BiblioStore Web",
    desc: "BiblioStore_Web is a sleek and responsive online bookstore built using React, TailwindCSS, Redux, and Heroicons. It offers features like book browsing by category, real-time search, detailed book previews, and a shopping cart. Users can register and log in securely, manage their wishlist, and check out with form validation. After purchasing, users can view their order history. Bilil makes discovering and purchasing books convenient and enjoyable with its minimal yet powerful UI.",
    image: "bibil.png",
    live: true,
    technologies: ["React", "Tailwind", "Redux", "Heroicons"],
    // link: "https://code-mars.github.io/Bilil/",
    // github: "https://github.com/Code-Mars/Bilil/"
}
,
{
    title: "AnMa-Academy",
    desc: "AnMa-Academy is a responsive and modern frontend for an online learning platform built with React, TailwindCSS, and HeadlessUI. It enables users to explore courses, view instructor profiles, watch preview lectures, and register or log in for a personalized learning experience. The clean UI components, dynamic course cards, and responsive layouts provide a seamless experience on all devices.",
    image: "AnMa-Academy.png",
    live: true,
    technologies: ["React", "Tailwind", "Heroicons", "HeadlessUI"],
    link: "https://kumarmanish562.github.io/AnMa-Academy/",
    github: "https://github.com/kumarmanish562/AnMa-Academy.git"
},
{
  title: "MGaming",
  desc: "MGaming is a next-generation, fully responsive gaming website built with React, Vite, and TailwindCSS. It features trending games, gameplay trailers, user reviews, and upcoming releases. Users can browse by genre, explore featured titles, and enjoy an immersive UI with smooth animations, image sliders, and interactive effects powered by SwiperJS and GSAP.",
  image: "game.png",
  live: true,
  technologies: ["React", "Vite", "Tailwind CSS", "Heroicons", "SwiperJS", "GSAP"],
  link: "https://kumarmanish562.github.io/MGaming/",
  github: "https://github.com/kumarmanish562/MGaming.git"
}
,
{
    title: "Disney+ Hotstar Clone",
    desc: "A modern, responsive streaming platform clone built with React, Vite, and Tailwind CSS. This project replicates the Disney+ Hotstar experience with movie and show listings, authentication, and a sleek animated UI. Features include responsive design for all devices, animated banners, interactive cards, user authentication, dynamic routing, and a dark theme inspired by Disney+. The modular component structure makes it easy to customize and extend.",
    image: "disney.png",
    live: true,
    technologies: ["React", "Vite", "Tailwind CSS", "React Router", "Axios"],
    link: "https://kumarmanish562.github.io/gamer_platform/",
    github: "https://github.com/kumarmanish562/disney_clone_frontend.git"
}
   
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS",  "JavaScript", "React JS",  "Redux", "Tailwind CSS", "GSAP", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: [ "Node JS", "Express JS",  "MongoDB", "Firebase", ]
    },
    {
        title: "Languages",
        skills: ["C",  "Java", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass"]
    }
]
const socialLinks = [
    { link: "https://github.com/kumarmanish562", icon: IconBrandGithub },
    { link: "", icon: IconBrandLinkedin },
    { link: "", icon: IconBrandInstagram }, 
    { link: "", icon: IconBrandYoutube },
    { link: "", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
   {
  role: "Frontend Development Intern",
  company: "ThevBlackThreat",
  date: "Dec 2023 - Jun 2024",
  desc: "During my internship, I focused on building modern and responsive web interfaces using React.js and Tailwind CSS. I collaborated on real-world projects, improved user experiences, and followed best practices in frontend development. The experience strengthened my skills in component-based design, state management, and API integration.",
  skills: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Git", "Responsive Design"]
}

    // {
    //     role: "System Engineer",
    //     company: "Infosys",
    //     date: "Nov 2022 - Sep 2023",
    //     desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
    //     skills: ["Java", "MySQL", "Hibernate", "Selenium", "Jenkins", "JIRA", "Automation Testing"]
    // }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
   
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };