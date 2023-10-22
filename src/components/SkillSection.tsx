import { FaReact, FaVuejs, FaPython, FaGithub, FaGitAlt } from "react-icons/fa";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoPostgresql,
  BiLogoRedux,
} from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { GiSpiderWeb} from "react-icons/gi";
import { BiLogoDjango } from "react-icons/bi";

const SkillsSection = () => {
  const skills = [
    {
      id: "react",
      name: "React",
      icon: <FaReact size={40} className="mb-4" />,
    }, 
    {
      id: "redux",
      name: "State Management (Redux) ",
      icon: <BiLogoRedux size={40} className="mb-4" />,
    },
    {
      id: "vue",
      name: "Vue",
      icon: <FaVuejs size={40} className="mb-4" />,
    },
    {
      id: "django",
      name: "Django",
      icon: <BiLogoDjango size={40} className="mb-4" />,
    },
    {
      id: "python",
      name: "Python",
      icon: <FaPython size={40} className="mb-4" />,
    },
    {
      id: "github",
      name: "GitHub",
      icon: <FaGithub size={40} className="mb-4" />,
    },
    {
      id: "git",
      name: "Git",
      icon: <FaGitAlt size={40} className="mb-4" />,
    },
    {
      id: "typescript",
      name: "TypeScript",
      icon: <BiLogoTypescript size={40} className="mb-4" />,
    },
    {
      id: "javascript",
      name: "JavaScript",
      icon: <BiLogoJavascript size={40} className="mb-4" />,
    },
    {
      id: "css3",
      name: "CSS3",
      icon: <BiLogoCss3 size={40} className="mb-4" />,
    },
    {
      id: "html5",
      name: "HTML5",
      icon: <BiLogoHtml5 size={40} className="mb-4" />,
    },

    // PostgreSQL, MySQL, Front-end development, responsive web design
    {
      id: "postgreSQL",
      name: "PostgreSQL",
      icon: <BiLogoPostgresql size={40} className="mb-4" />,
    },
    {
      id: "MySQL",
      name: "MySQL",
      icon: <DiMysql size={40} className="mb-4" />,
    },
    {
      id: "responsive-web-design",
      name: "Responsive Web Design",
      icon: <GiSpiderWeb size={40} className="mb-4" />,
    },
  ];
  // skills: JavaScript, CSS3, React, Redux, TypeScript, Ruby,
  // Ruby on Rails, PostgreSQL, MySQL, Front-end development, responsive web design
  return (
    <section className="py-16 bg-gray-50" id="skills">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap justify-center gap-12">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-64"
            >
              {skill.icon}
              <h3 className="text-2xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default SkillsSection;
