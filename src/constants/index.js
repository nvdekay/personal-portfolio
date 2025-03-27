import project1 from "../assets/images/projects/project-1.jpg";
import project2 from "../assets/images/projects/project-2.jpg";
import project3 from "../assets/images/projects/project-3.jpg";
import project4 from "../assets/images/projects/project-4.jpg";

export const HERO_CONTENT = `I am a software engineer with 1 year of experience, but the products I have made are carefully invested. I am also
an active person at work, constantly learning new skills..
I am always open to new opportunities and challenges. If you would like to reach me, feel free to drop me a
message in the email.
`;

export const ABOUT_TEXT = 'Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Software Engineer",
    company: "JS Club.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    year: "March 2023",
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, pagination and user authentication.",
    github: "https://github.com/nvdekay/boost-your-style",
    technologies: ["JSP", "Bootstrap", "Servlet", "SQL Server"],
  },
  {
    year: "April 2025",
    title: "Personal Portfolio",
    image: project2,
    description:
      "My personal portfolio website showcasing my skills and projects.",
    github: "https://github.com/nvdekay/personal-portfolio",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
  },
];

export const CONTACT = {
  address: "Ha Noi, Viet Nam",
  phoneNo: "+84 123 456 789",
  email: "khanhnvd.work@gmail.com",
};
