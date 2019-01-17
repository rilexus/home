import React from 'react';
import {Link, withRouter} from "react-router-dom";
import './header-link-component.style.scss';
import WordUnfoldComponent from "../../word-unfold-component/word-unfold.component";



const HeaderLinkComponent = ({to, text}) => {

    return (
        <div className={'link-component'}>
            <span/>
            <span/>
            <span/>
            <Link to={to}>
                {
                    <WordUnfoldComponent in_={true} delay={70} word={text}/>
                }
            </Link>
        </div>
    );
};

export default withRouter(HeaderLinkComponent);