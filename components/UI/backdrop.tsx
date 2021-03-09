import React, { ReactNode } from "react";

type BackdropProps = {
  children: ReactNode;
};

const Backdrop: React.FC<BackdropProps> = (props: BackdropProps) => {
  return (
    <div className="w-screen h-screen bg-black opacity-70 relative z-30">
      {props.children}
    </div>
  );
};
export default Backdrop;
