import { PortfolioCardDialog } from "./PortfoliDetailDialog";
import { IPortfolio } from "./RecentWorksSection";
import { useState } from "react";

interface PortfolioCardProps {
  portfolio: IPortfolio;
}

const PortfolioCard = ({ portfolio }: PortfolioCardProps) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };
  return (
    <div
      key={portfolio.id}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:md:scale-110"
      data-aos="fade-left"
    >
      <div className="relative overflow-hidden">
        <img
          src={portfolio.image}
          alt={portfolio.name}
          className="w-full object-cover md:h-96 lg:h-[350px] transition-transform transform hover:scale-100 duration-300"
        />
        <div className="absolute inset-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
        <a
          href={portfolio.linkToLive}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xl hover:text-blue-500"
        >
          View Live
        </a>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {portfolio.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {portfolio.description.substring(0, 150)} ...{" "}
        </p>
        <div className="flex flex-wrap space-x-2 mb-4">
          {portfolio.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-300 rounded-full py-1 px-2 text-xs text-gray-700 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <button
          onClick={toggleDetail}
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
        >
          See Details
        </button>
      </div>
      {showDetail && (
        <PortfolioCardDialog
          open={showDetail}
          onClose={toggleDetail}
          portfolio={portfolio}
        />
      )}
    </div>
  );
};

export default PortfolioCard;
