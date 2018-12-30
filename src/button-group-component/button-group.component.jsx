import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import uuid from "uuid";


export class ButtonGoupComponent extends React.Component{
	
	
	state = {
		buttons: [
			{id: uuid(), value: 'some_2'},
			{id: uuid(), value: 'some_3'},
			{id: uuid(), value: 'some_4'}
		],
		buttonsVisible: [{id: uuid(), value: 'some_1'}],
		time: 0
	};
	
	
	addButtons(){
		if(this.state.buttons.length > 0) {
			setTimeout(() => {
				this.setState(state => ({
					...state,
					buttons: [...state.buttons.slice(1)],
					buttonsVisible: [...state.buttonsVisible, ...this.state.buttons.slice(0, 1)],
					time: state.time + 20
				}))
			}, this.state.time);
		}
	}
	
	render(){
		return(
			<TransitionGroup className={'buttonGroup'}>
				{
					this.state.buttonsVisible.map(({value, id}) => {
						return(
							<CSSTransition
								key={id}
								timeout={500}
								appear={true}
								onEntering={()=>this.addButtons()}
								// in={this.state.viewOpen}
								classNames={'inner-button'}>
								<button className={'button'}
								        onClick={()=>this.props.onClick(value)}
								>
									{value}
								</button>
							</CSSTransition>
						)
					})
				}
			</TransitionGroup>
		)
	}
};

export default ButtonGoupComponent;