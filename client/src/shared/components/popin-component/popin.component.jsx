import React from 'react';
import {CSSTransition} from "react-transition-group";
import './popin-component.style.scss';


class PopinComponent extends React.Component {
	state = {};
	
	componentDidMount() {
	
	}
	
	render() {
		const visible = this.props.in_;
		return (
			<div className={'popin-component'}>
				{/*render passed children instantly*/}
				<div className={['page-content blur-wrapper', visible ? 'blured' : null].join(' ')}>
					{this.props.children}
				</div>
				{/*render popin only on signal*/}
				<CSSTransition
					in={visible}
					appear
					mountOnEnter
					unmountOnExit
					timeout={10}
					classNames={''}>
					<div className={'popin-wrapper'}>
						<CSSTransition
							in={visible}
							appear
							mountOnEnter
							unmountOnExit
							timeout={10}
							classNames={'popin-bg-appear-animation'}>
							<div
								onClick={e => this.props.onClick(e)}
								className="popin-component-bg"
							/>
						</CSSTransition>
						
						<CSSTransition
							in={visible}
							appear
							mountOnEnter
							unmountOnExit
							timeout={200}
							classNames={'popin-appear-animation'}
						>
							<div className="popin">
								{this.props.popinContent()}
							</div>
						</CSSTransition>
					</div>
				</CSSTransition>
			</div>
		)
	}
}


export default PopinComponent;
