import React from 'react';
import './bio.style.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


export class BioComponent extends React.Component{
	
	state ={
		numbers: ['', 'GET', 'READY', 'FOR' , 'MY' , 'BIO!'],
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
			'MAX',
			'20',
			'HOURS',
			'PER',
			'WEEK',
			'NEEDS',
			'1300',
			'$',
			'TO',
			'SURVIVE',
		],
		index: 0,
		
		interval_1: null,
		interval_2: null,
	};
	componentDidMount() {
		this.play();
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
			let interval =  setInterval(()=>{
				if(this.state.numberIndex < this.state.numbers.length){
					this.setState(state => ({
						...state,
						numberIndex: state.numberIndex + 1
					}))
				} else {
					clearInterval(interval)
				}
			}, 1000);
		},1000);
		
		setTimeout(()=>{
			let intervaL_2 = setInterval(()=>{
				if(this.state.index < this.state.bio.length){
					this.setState(state => ({
						...state,
						index: state.index + 1
					}))
				}else {
					clearInterval(intervaL_2);
				}
			}, 200);
			
		}, 8000)
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