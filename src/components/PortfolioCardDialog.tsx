import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IPortfolio } from "./RecentWorksSection";

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
          className="fixed inset-0 overflow-y-auto"
          onClose={onClose}
        >
          <div className="min-h-screen px-4 text-center">
            {/* Background overlay */}
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />

            {/* Dialog content */}
            <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="sm:flex sm:items-start">
                {/* Image */}
                <div className="relative w-full sm:w-1/2">
                  <img
                    src={portfolio.image}
                    alt={portfolio.name}
                    className="w-full h-auto"
                  />
                  <a
                    href={portfolio.linkToLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl hover:underline"
                  >
                    View Live
                  </a>
                </div>

                {/* Text content */}
                <div className="p-4 sm:p-6 w-full sm:w-1/2">
                  <Dialog.Title className="text-lg font-medium text-gray-900">
                    {portfolio.name}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {portfolio.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onClose}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
