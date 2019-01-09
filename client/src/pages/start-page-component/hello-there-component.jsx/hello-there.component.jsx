import React, {Component} from 'react';
import './hello-there-component.style.scss';
import {CSSTransition} from "react-transition-group";
import WordUnfoldComponent from "../../../shared/components/word-unfold-component/word-unfold.component";



class HelloThereComponent extends Component {
	
	state = {
		expandView: false
	};
	render() {
		const {showView} = this.props;
		return (
			<div className={'hello-there-component'}>
				<div className={'hello-there-text'}>
					<h1>
						<WordUnfoldComponent word={'Hello there!'} delay={30} in_={showView}/>
					</h1>
					<p>
						My name is Stanislav and I'm a developer.
					</p>
				</div>
				{/*<CSSTransition*/}
					{/*in={showView}*/}
					{/*appear*/}
					{/*classNames={'hello-there-view-animation'}*/}
					{/*mountOnEnter*/}
					{/*timeout={500}*/}
				{/*>*/}
					{/*<div className={'hello-there-view'}/>*/}
				{/*</CSSTransition>*/}
			</div>
		);
	}
}

export default HelloThereComponent;