import React from 'react';
import './popup-component.style.scss';
import {CSSTransition} from "react-transition-group";


const PopupComponent = ({visible, top, left, text, subtext, fromTop}) => {
	return(
		<CSSTransition
			in={visible}
			appear
			timeout={200}
			mountOnEnter
			unmountOnExit
			classNames={'popup-component-animation'}
		>
			<div className="popup-component"
			     style={{
				     top: `${top}px`,
				     left: `${left}px`
			     }}
			>
				<div className={'popup'}>
					<div className="text">
						{text}
					</div>
					{
						subtext ?
							<div className="subtext">
								{subtext}
							</div>
							: null
							
					}
				</div>
				{
					fromTop ?
						<div className={'popup-corner'}/>
						: null
				}
			</div>
			
		</CSSTransition>
	);
};

export default PopupComponent;