import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './greeting.style.scss';
import {textBackgroundImgStyle} from "../shared/utils";
import UnfoldComponent from "../unfold-component/unfold.component";



export class GreetingComponent extends React.Component {
	
	state = {
		words:[
			"LET'S",
			'BUILD',
			'MAGIC',
			'STUFF',
			'TOGETHER',
		],
		sent: 'LETS BUILD MAGIC STUFF TOGETHER'
	};
	
	getAwesomeStyle = (word,idx) => {
		if(word ==='MAGIC') {
			return {
				...textBackgroundImgStyle('/imgs/bio/mgc.gif'),
				transitionDelay: `${50*idx}ms`,
				fontWeight: 900,
			}
		} else {
			return {
				color: '#323232',
				transitionDelay: `${25*idx}ms`
			}
		}
	};
	handleAwesomeClick(word){
		if(word === 'magic'){
		
		}
	}
	
	render(){
		return(
			<div>
				<CSSTransition
					classNames={'animation'}
					timeout={200}
					in
					appear
					unmountOnExit
				>
					<div className={'container'}>
						{
							this.state.words.map((word, idx) => {
								return(
									<span
										key={idx}
										onClick={()=>this.handleAwesomeClick()}
										style={{...this.getAwesomeStyle(word,idx)}}
									>
										{word}
									</span>
								)
							})
						}
					</div>
				</CSSTransition>
			</div>
		)
	}
}