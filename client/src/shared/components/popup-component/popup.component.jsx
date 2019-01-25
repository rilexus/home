import React from 'react';
import './popup-component.style.scss';
import {CSSTransition} from "react-transition-group";


const PopupComponent = ({visible, topPos, leftPos, text, subtext, showTop, classNames}) => {
	return(

		<CSSTransition
			in={visible}
			appear
			timeout={200}
			mountOnEnter
			unmountOnExit
			classNames={'popup-component-animation'}
		>
			<div className={["popup-component", classNames ? classNames.join(' ') : null].join(' ')}
			     style={{
				     top: `${topPos}px`,
				     left: `${leftPos}px`
			     }}
			>
				<div className={'popup'}>
					<div className="popup-text">
						{text}
					</div>
					{
						subtext ?
							<div className="popup-subtext">
								{subtext}
							</div>
							: null
					}
				</div>
				{
					showTop ?
						<div className={'popup-corner'}/>
						: null
				}
			</div>
			
		</CSSTransition>
	);
};

export default PopupComponent;