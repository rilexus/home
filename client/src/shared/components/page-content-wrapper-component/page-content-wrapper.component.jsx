import React from 'react';
import './page-content-wrapper-component.style.scss';



const PageContentWrapperComponent = ({children, classNames}) => {

    return (
        <section className={[`page-content-wrapper-component`, classNames ? classNames.join(' ') : ''].join(' ')}>
            {
                children
            }
        </section>
    );
};

export default PageContentWrapperComponent;