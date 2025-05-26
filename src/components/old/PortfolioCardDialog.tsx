import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IPortfolio } from "./RecentWorksSection";
import { FaGithub } from "react-icons/fa";

interface PortfolioCardProps {
  portfolio: IPortfolio;
  open: boolean;
  onClose: () => void;
}

export const PortfolioCardDialog = ({
  open,
  onClose,
  portfolio,
}: PortfolioCardProps) => {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={onClose}
        >
          <div className="flex items-center justify-center min-h-screen p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-60" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative z-20 w-full max-w-3xl p-4 mx-auto mt-8">
                <Dialog.Panel className="rounded-lg bg-white dark:bg-gray-900 p-4 text-left shadow-xl transition-colors">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    {portfolio.name}
                  </Dialog.Title>
                  <div className="md:flex">
                    <div className="md:w-1/2 md:pr-4">
                      <img
                        src={portfolio.image}
                        alt={portfolio.name}
                        className="w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="max-h-[400px] overflow-y-auto md:w-1/2 mt-4 md:mt-0">
                      <p className="text-gray-700 dark:text-gray-200">
                        {portfolio.description}
                      </p>
                      <div className="flex space-x-2 mt-2 wrap">
                        {portfolio.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gray-200 dark:bg-gray-700 rounded-full py-1 px-2 text-xs text-gray-600 dark:text-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <a
                          href={portfolio.linkToLive}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                        >
                          View Demo
                        </a>
                        <a
                          href={portfolio.linkToSource}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex justify-center items-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2"
                        >
                          <FaGithub className="mr-2" />
                          View Source
                        </a>
                        {portfolio.videoDescriptionLink && (
                          <a
                            href={portfolio.videoDescriptionLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex justify-center items-center rounded-md border border-transparent bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                          >
                            Video Description
                          </a>
                        )}
                      </div>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 dark:bg-blue-800 px-4 py-2 mt-4 text-sm font-medium text-blue-900 dark:text-white hover:bg-blue-200 dark:hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={onClose}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PortfolioCardDialog;
