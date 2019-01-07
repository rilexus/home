import React from "react";
import './full-view-component.style.scss';



const FullViewComponent = (props) => {

    return (
        <div className={'full-view-component'}>
            {props.children}
        </div>
    );
};

export default FullViewComponent;