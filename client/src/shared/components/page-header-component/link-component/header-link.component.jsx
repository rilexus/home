import React from 'react';
import {Link, withRouter} from "react-router-dom";
import './header-link-component.style.scss';



const HeaderLinkComponent = ({to, text}) => {

    return (
        <div className={'link-component'}>
            <span/>
            <span/>
            <span/>
            <Link to={to}>{text}</Link>
        </div>
    );
};

export default withRouter(HeaderLinkComponent);