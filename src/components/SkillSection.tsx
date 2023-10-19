// import {
//   FaReact,
//   FaVuejs,
//   FaDatabase,
//   FaPython,
//   FaGithub,
//   FaGitAlt, // These are placeholders; replace with actual icons
// } from "react-icons/fa";
// import { BiLogoDjango } from "react-icons/bi";

// const SkillsSection = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
//           Skills & Technologies
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="flex flex-col items-center">
//             <FaReact size={40} className="mb-4" />{" "}
//             {/* Replace with actual React icon */}
//             <span>React</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaVuejs size={40} className="mb-4" />{" "}
//             {/* Replace with actual Vue icon */}
//             <span>Vue</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <BiLogoDjango size={40} className="mb-4" />{" "}
//             {/* Replace with actual Django icon */}
//             <span>Django</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaDatabase size={40} className="mb-4" />{" "}
//             {/* Replace with actual Django icon */}
//             <span>Database</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaPython size={40} className="mb-4" />{" "}
//             {/* Replace with actual Django icon */}
//             <span>Python</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaGithub size={40} className="mb-4" />{" "}
//             {/* Replace with actual Django icon */}
//             <span>GitHub</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaGitAlt size={40} className="mb-4" />{" "}
//             {/* Replace with actual Django icon */}
//             <span>Git</span>
//           </div>{" "}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;

import {
  FaReact,
  FaVuejs,
  FaDatabase,
  FaPython,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { BiLogoDjango } from "react-icons/bi";

const SkillsSection = () => {
  const skills = [
    {
      id: "react",
      name: "React",
      icon: <FaReact size={40} className="mb-4" />,
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
      id: "database",
      name: "Database",
      icon: <FaDatabase size={40} className="mb-4" />,
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
  ];
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
