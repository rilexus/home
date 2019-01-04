import React from 'react';
import './page-content-wrapper-component.style.scss';



const PageContentWrapperComponent = (props) => {

    return (
        <section className={'page-content-wrapper-component'}>
            {
                props.children
            }
        </section>
    );
};

export default PageContentWrapperComponent;