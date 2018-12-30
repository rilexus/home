import React from 'react';
import {CSSTransition} from "react-transition-group";
import './unfold-component.style.scss';



const UnfoldComponent = (props) => {
	return (
		<CSSTransition
			classNames={'scroll-animation'}
			timeout={500}
			in
			appear
			unmountOnExit
		>
			<div className="scroll">
				{
					props.values.map((value, idx) => {
						return (
							<span
								style={{transitionDelay: `${props.delay * idx}ms`}}
								key={`tech_name: ${value}`}>
								<i
									id={`tech_name_${value}`}
									onClick={(e) => props.onClick(e, value)}
								>
									{value}
									</i>
							</span>
						)
					})
				}
			</div>
		</CSSTransition>
	);
};

export default UnfoldComponent;