import React from 'react';
import './bio.style.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


export class BioComponent extends React.Component{
	interval_1 = -1;
	interval_2 = -1;
	
	state ={
		numbers: ['',
			// 'GET', 'READY', 'FOR' , 'MY' , 'BIO!'
		],
		numberIndex: 1,
		sidebarEnter: false,
		bio:[
			'',
			'MALE',
			'26',
			'STUDEN',
			'COMPUTER',
			'SCIENCE',
			'FH',
			'AACHEN',
			'EXPERIENCE',
			'2',
			'YEARS',
			'SPEAKS',
			'ENGLISH',
			'GERMAN',
			'RUSSIAN',
			'KNOWS',
			'FRONTEND',
			'SASS/SCSS',
			'CSS',
			'HTML',
			'ANGULAR',
			'REACT',
			'REDUX',
			'JAVASCRIPT',
			'KNOWS',
			'BACKEND',
			'NODE',
			'NESTJS',
			'OOP',
			'MONGODB',
			'GRAPHQL',
			'DOCKER',
			'KNOWS',
			'GIT',
			'CAN',
			'START',
			'NOW',
			// 'MAX',
			// '20',
			// 'HOURS',
			// 'PER',
			// 'WEEK',
			// 'NEEDS',
			// '1300',
			// '$',
			// 'TO',
			// 'SURVIVE',
		],
		index: 0,
		
		interval_1: null,
		interval_2: null,
	};
	componentDidMount() {
		this.play();
	}
	componentWillUnmount() {
		if(this.interval_2 !== -1){
			clearInterval(this.interval_2);
		}
		if(this.interval_1 !== -1){
			clearInterval(this.interval_1);
		}
	}
	
	play(){
		if(this.state.index === this.state.bio.length){
			this.setState(state => ({
				...state,
				index: 0,
				numberIndex: 1
			}))
		}
		setTimeout(()=>{
			this.interval_1 =  setInterval(()=>{
				if(this.state.numberIndex < this.state.numbers.length){
					this.setState(state => ({
						...state,
						numberIndex: state.numberIndex + 1
					}))
				} else {
					clearInterval(this.interval_1)
				}
			}, 1000);// show numbers
		},1000); //wait till action
		
		setTimeout(()=>{
			this.interval_2 = setInterval(()=>{
				if(this.state.index < this.state.bio.length){
					this.setState(state => ({
						...state,
						index: state.index + 1
					}))
				}else {
					clearInterval(this.interval_2);
				}
			}, 200); // show bio (fast)
			
		}, (this.state.numbers.length * 1000) + 2000) // wait till numbers were shown
	}
	handleNextClick(){
		this.setState(state => ({
			...state,
			sidebarEnter: true
		}));
		
		setTimeout(()=> {
			this.props.onNext();
		},700); // wait till sidebar opens
	}
	
	
	render() {
		return (
			<div className={'bio-component'}>
				<div className="ready-word" style={{fontSize: `${18 / this.state.numberIndex}rem`}}>
					{
						this.state.numbers[this.state.numberIndex]
					}
				</div>
				<div className={'flash-word'}>
					{
						this.state.bio[this.state.index]
					}
				</div>
					{
						this.state.index === this.state.bio.length ?
							<div className="controls">
								<div className="flash-word" id={'done'}>
									BAAM!
								</div>
								<button className={'again-button'} onClick={() => this.play()}>PLAY AGAIN</button>
								<button className={'again-button'} onClick={()=> this.handleNextClick()}>TO TECH STACK</button>
							</div>
						: null
					}
			</div>
		);
	}
}