import React from "react";

const Footer = (props) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black h-footer text-white grid place-items-center	">
      <div>footer</div>

      <span>© ${currentYear} 4DREPLAY All rights reserved</span>
    </footer>
  );
};

export default Footer;
