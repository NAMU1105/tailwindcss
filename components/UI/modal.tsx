import React, { ReactNode, useState } from "react";

type ModalProps = {
  type: "info" | "success" | "warning" | "danger";
  icon?: string;
  centered?: boolean;
  closeBtn?: boolean;
  footerColor?: string;
  children: ReactNode;
};

export const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const [isShowing, setIsShowing] = useState<boolean>(true);

  const toggleShowing = () => {
    setIsShowing(false);
  };

  return (
    isShowing && (
      <div className="bg-white rounded-md shadow-md flex flex-col justify-between w-1/3 min-h-100 z-50 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        {/* upperPart */}
        <div className="flex flex-1 p-5">
          <div className="self-center bg-green-300 rounded-full text-green-900 p-3 mr-5">
            <svg
              className="w-10 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex flex-col w-full ">
            <div className="flex justify-between items-baseline  mb-2">
              <h1 className="text-2xl font-bold break-all mr-5">
                titletitletitletitletitletitletitletitletitletitletitletitletitle
              </h1>
              {/* close button */}
              <svg
                className="w-10 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={toggleShowing}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              eveniet ut nisi omnis illo tempore, cumque atque eum eos soluta
              vero iusto perspiciatis consectetur in totam neque sequi molestiae
              sed explicabo odio doloribus pariatur provident? Ex nulla
              inventore rem repudiandae explicabo voluptatem saepe et quas nam,
              qui quidem libero accusamus voluptatibus in deleniti eum optio
              porro quaerat beatae. Nesciunt natus quas voluptate fugiat
              repudiandae, minus ducimus vel. Odio illo voluptas blanditiis.
              Velit illo mollitia voluptatem atque maiores libero maxime
              voluptas! Maxime tempore necessitatibus sit debitis inventore
              velit consectetur voluptas. Placeat magni nihil quidem asperiores,
              expedita corporis sapiente nulla nemo sed.
            </p>
          </div>
        </div>
        {/* lowerPart, footer */}
        <div className="flex flex-row-reverse p-5 bg-gray-100">
          {props.children}
        </div>
      </div>
    )
  );
};
export const CenteredModal: React.FC<ModalProps> = (props: ModalProps) => {
  return (
    <>
      <div></div>
    </>
  );
};
