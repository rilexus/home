import React from 'react';
import './start-page-component.style.scss';
import HeaderComponent from "../../shared/components/page-header-component/header.component";
import PageTitleComponent from "../../shared/components/page-title-component/page-title.component";
import PageSubtitleComponent from "../../shared/components/page-subtitle-component/page-subtitle.component";
import {Link, withRouter} from "react-router-dom";
import ScrollDownIconComponent from "../../shared/components/scroll-down-icon-component/scroll-down-icon.component";
import * as uuid from "uuid";
import {CSSTransition} from "react-transition-group";
import FadeinAnimationComponent from "../../shared/animations/fadein-animation/fadein-animation.component";
import {getWindowHeight} from "../../shared/utils";
import HelloThereComponent from "./hello-there-component.jsx/hello-there.component";
import SlideupAnimationComponent from "../../shared/animations/slideup-animation/slideup-animation.component";



class StartPageComponent_ extends React.Component {
	state = {
		minify: false,
		windowHeight: 0,
		mouseVisible: true,
		listVisible: false,
		
		showGreeting: false,
		showSecondGreeting: false,
		
		subtitle: true,
		greetingList: [
			{
				id: uuid(),
				h: 'Practices',
				p: 'I’m a programmer who knows design.\n' +
					' I know best practices from both worlds and combine them\n' +
					' in frontend development and UX/XD.\n' +
					' I work close with designers and programmers equally.'
			},
			{
				id: uuid(),
				h: 'Full Stack',
				p: 'I am competent in backend technologies as well as web design. I work equally well in a team or develop a project completely on my own.'
			},
			{
				id: uuid(),
				h: 'Prototyping',
				p: 'After understanding all requirements I sketch out the first design and test it for functionality. Then I create a quick prototype. I say: "A prototype tells more than 100 sketches"'
			},
			{
				id: uuid(),
				h: 'Process',
				p: 'Before starting to develop I make sure I understand the needs and requirements for the project. Therefore I ask a lot of questions and interview future users.'
			},
			
		]
	};
	
	componentDidMount() {
		const windowHeight = getWindowHeight();
		this.setState(s => ({
			...s,
			windowHeight: windowHeight
		}));
	}
	
	hideGreeting() {
		this.setState(s => ({
			...s,
			showGreeting: false
		}));
	}
	
	handleMouseIcon(scrollTop) {
		if (scrollTop > 150) {
			this.setState(s => ({
				...s,
				mouseVisible: false
			}));
		} else {
			this.setState(s => ({
				...s,
				mouseVisible: true
			}))
		}
	}
	
	handleSubtitle(scrollTop) {
		const windowHeight = this.state.windowHeight;
		if (scrollTop > (windowHeight / 2) - 120) {
			this.setState(s => ({
				...s,
				subtitle: false
			}));
		} else {
			this.setState(s => ({
				...s,
				subtitle: true
			}));
		}
	}
	
	handleGreeting(scrollTop) {
		const windowHeight = this.state.windowHeight;
		if (scrollTop > (windowHeight / 2) - 120) {
			this.setState(s => ({
				...s,
				showGreeting: true
			}));
		}
		if (scrollTop < windowHeight || scrollTop > windowHeight + (windowHeight / 2)) {
			this.setState(s => ({
				...s,
				showGreeting: false
			}));
		}
	}
	
	handleSecondGreeting(scrollTop) {
		const windowHeight = this.state.windowHeight;
		if (scrollTop > windowHeight * 2) {
			this.setState(s => ({
				...s,
				showSecondGreeting: true
			}));
		} else if (scrollTop < windowHeight * 2) {
			this.setState(s => ({
				...s,
				showSecondGreeting: false
			}));
		}
	}
	
	handleList(scrollTop) {
		const windowHeight = this.state.windowHeight;
		if (scrollTop > (windowHeight * 3) - 200) {
			console.log('hier')
			this.setState(s => ({
				...s,
				listVisible: true
			}));
		} else if (scrollTop < windowHeight * 3) {
			this.setState(s => ({
				...s,
				listVisible: false
			}));
		}
	};
	
	handleScroll(scrollTop) {
		console.log(scrollTop);
		
		this.handleMouseIcon(scrollTop);
		this.handleSubtitle(scrollTop);
		this.handleGreeting(scrollTop);
		
		this.handleSecondGreeting(scrollTop);
		
		this.handleList(scrollTop);
		
	}
	
	
	render() {
		return (
			<div className={'start-page-component'} onScroll={(e) => this.handleScroll(e.target.scrollTop)}>
				<HeaderComponent/>
				
				<section className={'start-page-component-subtitle'}>
					<PageTitleComponent title={this.props.title} comment={''}/>
					<FadeinAnimationComponent duration={1000} timeout={200} _in={this.state.subtitle}>
						<PageSubtitleComponent
							subtitle={'UX&UI'}
							url={'https://media.giphy.com/media/3o6ZtrcBDLanIMbdRe/source.gif'}
							comment={'WITH PASSION FOR DESIGN'}
						/>
					</FadeinAnimationComponent>
				</section>
				<section>
					<ScrollDownIconComponent fade={!this.state.mouseVisible}/>
				</section>
				
				
				<section className={'greet'}>
					<div className="sticky">
						<FadeinAnimationComponent
							timeout={200}
							duration={1300}
							_in={this.state.showGreeting}>
							<HelloThereComponent showView={this.state.showGreeting}/>
						</FadeinAnimationComponent>
					</div>
				</section>
				
				<section className={'greet'}>
					<div className="text-container">
						<SlideupAnimationComponent
							_in={this.state.showSecondGreeting}
							duration={2000}>
							<FadeinAnimationComponent
								timeout={1000}
								duration={2000}
								_in={this.state.showSecondGreeting}>
								<h2>
									Creating magic
								</h2>
								<p>
									Building beautiful sites is my passion.
								</p>
							</FadeinAnimationComponent>
						</SlideupAnimationComponent>
					</div>
				</section>
				
				
				<section>
					<div className="wrapper">
						<ul className={'list'}>
							{
								this.state.greetingList.map(({id, h, p}, idx) => {
									return (
										<CSSTransition
											key={id}
											in={this.state.listVisible}
											timeout={100}
											classNames={'li-animation'}>
											<li className={'li'}
											    style={{transitionDelay: `${100 * idx}ms`}}>
												<h3>{h}</h3>
												<p>{p}</p>
											</li>
										</CSSTransition>
									)
								})
							}
						</ul>
					</div>
				</section>
				
				<hr/>
				
				<section className={'recent-work-section'}>
					<div className="wrapper">
						<div className={'recent-works'}>
							<h4>
								RECENT WORK
							</h4>
							<div className="text-container">
								<p className={'no-proj'}>
									NO PUBLIC PROJECTS YET
								</p>
							</div>
						</div>
					</div>
				</section>
				
				<hr/>
				
				
				<section className={'about-me grey-bg'}>
					<div className="wrapper">
						<div className={'text-container'}>
							<h3>Hi! I’m Stanislav</h3>
							<p className={'greeting'}>
								Hello, my name is Stanislav (Stan) Panchenko
								and I’m crazy about web design and UX/XD.
								I’m currently studying Computer Science in Aachen,
								Germany and work as a frontend developer.
							</p>
							<p>
								I’m always excited to start new projects! If you have ideas, let’s chat about it.
								<Link to={'/contact'}> Drop me a message </Link> and lets
								create <strong> awesome</strong> sites.
							</p>
						</div>
					</div>
				</section>
			
			
			</div>
		)
	}
}


const StartPageComponent = withRouter(StartPageComponent_);
export default StartPageComponent;
