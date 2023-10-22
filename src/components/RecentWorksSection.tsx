import budgetApp1 from "../assets/budget-app-1.png";
import PortfolioCard from "./PortfolioCard";
import todoImage from "../assets/todo.png";
import mealsApiImage from "../assets/meals-api.png";
import spaceTravelImage  from '../assets/space-travel.png'
// import PortfolioDetailDialog from "./PortfolioDetailDialog";

export interface IPortfolio {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  linkToLive: string;
  linkToSource: string;
  clientRoleYear: string[];
  image: string;
  featured: string;
  videoDescriptionLink: string;
}

const portfolios: IPortfolio[] = [
  {
    id: "ruby-budget",
    name: "Ruby Budget App",
    description: `Ruby Budget app is a simple app built using rails. The application is a create a group/category for their transactions and manage their transactions.`,
    image: budgetApp1,
    technologies: ["Ruby", "Rails", "JavaScript", "Postgresql"],
    linkToLive: "https://ruby-budget-app.onrender.com/",
    linkToSource: "https://github.com/GutemaG/rails-budget-app",
    featured: "",
    clientRoleYear: ["Ruby", "Ruby", "2023"],
    videoDescriptionLink:
      "https://www.loom.com/share/e014f313b7834929a575df5a8d7494db",
  },
  {
    id: "todo-list",
    name: "To Do List",
    description: `
      A user-friendly To Do List application that allows users to efficiently track their tasks. 
      Features include adding tasks, removing tasks, marking tasks as complete, and clearing completed tasks.
      The application provides data persistence using the browser's local storage and is built using ES6 features.`,
    image: todoImage,
    technologies: ["JavaScript", "HTML5", "CSS3", "Webpack"],
    linkToLive: "https://gutemag.github.io/todo-list-application/dist",
    linkToSource: "https://github.com/GutemaG/todo-list-application",
    featured: "",
    clientRoleYear: ["Self", "Full Stack Developer", "2022"],
    videoDescriptionLink: "",
  },

  {
    id: "meals-api",
    name: "Meals API",
    description: `
    This is my capstone project for @microverse which includes a restaurant app in 
    which all data is being fetch using API (Cards Popups Comments)
    and when you add new comment or new Like
     to a card the interaction is saved on the Involvement API.
    `,
    image: mealsApiImage,
    technologies: ["JavaScript", "HTML5", "CSS3", "Webpack"],
    linkToLive: "https://jolly-palmier-ef9b64.netlify.app/",
    linkToSource: "https://github.com/ahadb802/First-API-Project-",
    featured: "",
    clientRoleYear: ["Ruby", "Ruby", "2023"],
    videoDescriptionLink: "",
  },
  {
    id: "space-travel",
    name: "Space Travelers Hub",
    description: `
    Space Travelers' Hub is a web application for a company that provides commercial and scientific space travel services. 
    It fetch data about rockets and missions from Api.
    The application will allow users to book rockets and join selected space missions. It was coded using React and Redux.
    `,
    image: spaceTravelImage,
    technologies: ["React","HTML5","CSS3","JavaScript","Redux"],
    linkToLive: "https://www.paulsaenzsucre.dev/space-travelers-hub/",
    linkToSource: "https://github.com/paulsaenzsucre/space-travelers-hub",
    featured: "",
    clientRoleYear: ["Ruby", "Ruby", "2023"],
    videoDescriptionLink: "",
  },
];

const RecentWorksSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          Recent Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map((portfolio) => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorksSection;
