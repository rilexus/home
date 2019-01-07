import React from 'react';
import {CSSTransition} from "react-transition-group";
import './scroll-down-icon-component.style.scss';


const ScrollDownIconComponent = ({fade}) => {

    return (
        <CSSTransition
            in
            appear
            classNames={'mouse-container-animation'}
            timeout={400}
        >
            <div className={['mouse-container', fade ? 'hidden' : ''].join(' ')}>
                <div className='mouse'>
                    <span className='scroll-down'/>
                </div>
            </div>
        </CSSTransition>
    );
};

export default ScrollDownIconComponent;