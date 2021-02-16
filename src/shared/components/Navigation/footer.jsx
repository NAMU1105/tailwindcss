import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Footer = (props) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-red h-footer text-white grid place-items-center	">
            <div>
                {/* <i className="fab fa-linkedin"></i> */}
                <FontAwesomeIcon icon={faCoffee} />
                <FontAwesomeIcon icon={faCoffee} />
                <FontAwesomeIcon icon={faCoffee} />
                <FontAwesomeIcon icon={faCoffee} />
                <FontAwesomeIcon icon={faCoffee} />
            </div>

            <span>© ${currentYear} 4DREPLAY All rights reserved</span>
        </footer>
    );
};

export default Footer;
