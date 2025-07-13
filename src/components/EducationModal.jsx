import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function EducationModal({ isOpen, setIsOpen, title, content }) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 overflow-y-auto">
        <div data-aos="fade-up" className="flex items-center justify-center min-h-screen px-4">
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            <Dialog.Panel className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-xl shadow-xl max-w-xl w-full">
              <Dialog.Title className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                {title}
              </Dialog.Title>
              <div data-aos="fade-up" className="text-sm leading-relaxed">{content}</div>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                Close
              </button>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
