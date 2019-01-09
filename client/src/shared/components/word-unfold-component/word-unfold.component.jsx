import React from 'react';
import {CSSTransition} from "react-transition-group";
import './word-unfold-component.style.scss';



const WordUnfoldComponent = ({word, delay, in_}) => {

    return (
        <CSSTransition
            classNames={'word-unfold-animation'}
            timeout={100}
            in={in_}
            appear
        >

            <span className={'word-unfold-component'}>
            {
                word.split('').map((letter, idx) => {
                    return (
                        <span
                            className={['letter', letter === ' ' ? 'space': null].join(' ')}
                            style={{transitionDelay: `${delay * idx}ms`}}
                            key={`letter_${letter}-${idx}`}>
                            {letter}
                        </span>
                    )
                })
                
            }
        </span>
        </CSSTransition>
    );
};

export default WordUnfoldComponent;