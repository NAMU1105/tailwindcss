import React from 'react';
import ReactDOM from 'react-dom';

import { BackDrop } from '../../../style/index';

const Backdrop = (props) => {
    return ReactDOM.createPortal(
        <BackDrop onClick={props.onClick}></BackDrop>,
        document.getElementById('backdrop-hook')
    );
};

export default Backdrop;
