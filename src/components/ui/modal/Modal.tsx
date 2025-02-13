import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export interface IModal {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  title: string;
}

export const Modal = ({
  isOpen,
  children,
  title,
  onClose = () => {},
}: IModal) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white px-12 py-7 align-middle shadow-xl transition-all dark:border dark:border-gray-light dark:bg-mento-dark">
                <Dialog.Title
                  as="h3"
                  className="text-center text-3xl font-medium text-gray-900 dark:text-white"
                >
                  {title}
                </Dialog.Title>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

Modal.displayName = "Modal";