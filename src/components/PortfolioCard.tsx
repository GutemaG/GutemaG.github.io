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
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative overflow-hidden bg-black">
        <img
          src={portfolio.image}
          alt={portfolio.name}
          className="w-full object-cover md:h-96 lg:h-[400px]"
        />
        <div className="absolute inset-0 bg-black opacity-50 hover:opacity-0 transition duration-300"></div>
        <a
          href={portfolio.linkToLive}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl hover:underline"
        >
          View Live
        </a>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{portfolio.name}</h3>
        <p className="text-gray-600 mb-4">
          {portfolio.description.substring(0, 150)} ...{" "}
        </p>
        <div className="flex space-x-2">
          {portfolio.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 rounded-full py-1 px-2 text-xs text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="p-2">
        <button
          onClick={toggleDetail}
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
