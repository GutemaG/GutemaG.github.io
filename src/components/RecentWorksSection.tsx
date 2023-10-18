import budgetApp1 from "../assets/budget-app-1.png";
import PortfolioCard from "./PortfolioCard";
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
}

const portfolios: IPortfolio[] = [
  {
    id: "ruby-budget",
    name: "Ruby Budget App",
    description: `Ruby Budget app is a simple app built using rails. The application is a create a group/category for their transactions and manage their transactions.`,
    image: budgetApp1,
    technologies: ["Ruby", "Rails", "JavaScript"],
    linkToLive: "https://ruby-budget-app.onrender.com/",
    linkToSource: "https://github.com/GutemaG/rails-budget-app",
    featured: "",
    clientRoleYear: ["Ruby", "Ruby", "2023"],
  },
  {
    id: "portfolio1",
    name: "Tonic",
    description: `Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's standard 
      dummy text ever since the 1500s, when an unknown printer took a 
      galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into 
      lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      ever since the 1500s, when an unknown printer took a galley of
      ever since the 1500s, when an unknown printer took a galley of
      ever since the 1500s, when an unknown printer took a galley of
      ever since the 1500s, when an unknown printer took a galley of
      ever since the 1500s, when an unknown printer took a galley of
      ever since the 1500s, when an unknown printer took a galley of
      ever since the 1500s, when an unknown printer took a galley of
      ever since the 1500s, when an unknown printer took a galley of
      ever since the 1500s, when an unknown printer took a galley of
      lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      electronic typesetting, remaining essent`,
    image: budgetApp1,
    technologies: ["HTML", "CSS", "JavaScript"],
    linkToLive: "#",
    linkToSource: "#",
    featured: "",
    clientRoleYear: ["CANOPY", "Back End Dev", "2022"],
  },
  {
    id: "ruby-budget2",
    name: "Ruby Budget App",
    description: `Ruby Budget app is a simple app built using rails. The application is a create a group/category for their transactions and manage their transactions.`,
    image: budgetApp1,
    technologies: ["Ruby", "Rails", "JavaScript"],
    linkToLive: "https://ruby-budget-app.onrender.com/",
    linkToSource: "https://github.com/GutemaG/rails-budget-app",
    featured: "",
    clientRoleYear: ["Ruby", "Ruby", "2023"],
  },
  {
    id: "portfolio12",
    name: "Tonic",
    description: `Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's standard electronic typesetting, remaining essent`,
    image: budgetApp1,
    technologies: ["HTML", "CSS", "JavaScript"],
    linkToLive: "#",
    linkToSource: "#",
    featured: "",
    clientRoleYear: ["CANOPY", "Back End Dev", "2022"],
  },
];

const RecentWorksSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-12">
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
