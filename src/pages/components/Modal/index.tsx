import { useState, Fragment, useRef } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

interface ModalProps {
  path: string;
  typeModal: string | undefined;
  description?: string;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export default function Modal(props: ModalProps) {
  const cancelButtonRef = useRef(null);

  function renderModal(type: string | undefined) {
    switch (type) {
      case "youtube":
        return (
          <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-screen-2xl sm:w-full">
            <div className="bg-white p-4">
              <iframe
                className="w-full aspect-video"
                src={props.path}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        );

      case "vimeo":
        return (
          <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-screen-2xl sm:w-full">
            <div className="bg-white p-4">
              <iframe
                className="w-full aspect-video"
                src={props.path}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
              ></iframe>
            </div>
          </div>
        );

      case "photo":
        return (
          <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-screen-xl sm:w-full">
            <div className="bg-white p-4">
              <Image
                className="object-fill"
                src={props.path}
                width="1280"
                height="854"
                alt={props.description}
              />
            </div>
          </div>
        );
    }
  }

  return (
    <Transition.Root show={props.showModal || false} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={() => props.setShowModal(false)}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            {renderModal(props.typeModal)}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
