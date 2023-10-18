import { Dialog } from "@headlessui/react";
import { IPortfolio } from "./RecentWorksSection";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

interface PortfolioCardDialogProps {
  portfolio: IPortfolio;
  open: boolean;
  onClose: () => void;
}

export const PortfolioCardDialog = ({
  open,
  onClose,
  portfolio,
}: PortfolioCardDialogProps) => {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
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
              <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="rounded-lg bg-white p-4 text-left shadow-xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {portfolio.name}
                  </Dialog.Title>

                  <div className="md:flex">
                    <div className="md:w-1/2 md:pr-4">
                      <img
                        src={portfolio.image}
                        alt={portfolio.name}
                        className="w-full object-cover"
                      />
                    </div>

                    <div className="md:w-1/2 mt-4 md:mt-0 md:pl-4">
                      {/* Add max-h-[400px] to limit the right-side container height */}
                      <div className="max-h-[400px] overflow-y-auto">
                        <p>{portfolio.description}</p>
                        <div className="flex space-x-2 mt-2">
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

                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 mt-4 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
