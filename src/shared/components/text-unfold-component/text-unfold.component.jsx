import React from 'react';
import {CSSTransition} from "react-transition-group";
import WordUnfoldComponent from "../word-unfold-component/word-unfold.component";
import './text-unfold-component.scss'


const TextUnfoldComponent = ({text, in_, delay}) => {
	return(
		<CSSTransition
			classNames={'text-unfold-animation'}
			timeout={100}
			in={in_}
			appear
		>
            <span className={'text-unfold-component'}>
            {
	            text.split(' ').map((word, idx) => {
		            return (
			            <span
				            className={'word'}
				            style={{transitionDelay: `${delay * idx}ms`}}
				            key={`letter_${word}-${idx}`}>
                            <WordUnfoldComponent in_={in_} word={word} delay={delay}/>
                        </span>
		            )
	            })
            }
        </span>
		</CSSTransition>
	);
};

export default TextUnfoldComponent;