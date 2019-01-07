import React from 'react';
import { CSSTransition} from 'react-transition-group';
import './greeting.style.scss';
import {textBackgroundImgStyle} from "../../shared/utils";
import InterestedComponent from "./interested/interested.component";
import DecisionComponent from "./decision-component/decision.component";
import {withRouter} from "react-router-dom";


class GreetingComponent_ extends React.Component {
	
	state = {
		words:[
			"LET'S",
			'BUILD',
			'MAGIC',
			'INTERFACES',
			'TOGETHER',
		],
		sent: 'LETS BUILD MAGIC STUFF TOGETHER',
		show: false,
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
				transitionDelay: `${50*idx}ms`
			}
		}
	};

    handleDecision(){
        this.setState(state => ({...state, showAwesome: true}));
        this.props.history.push('/start');
    }

	handleAwesomeClick(word){
		if(word === 'magic'){
		
		}
	}
	
	render(){
		return(
			
				<CSSTransition
					classNames={'animation'}
					timeout={200}
					in
					appear
					unmountOnExit
				>
					<div className={'greeting-page-component'}>
						<div className="greeting">
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
                        <InterestedComponent/>
                        <DecisionComponent onClick={()=>this.handleDecision()}/>
                        {/*<DarkenComponent show={this.state.showAwesome}/>*/}
					</div>
				</CSSTransition>
			
		)
	}
}
const GreetingComponent = withRouter(GreetingComponent_);
export default GreetingComponent