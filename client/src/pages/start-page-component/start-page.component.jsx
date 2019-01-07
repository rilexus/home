import React from 'react';
import './start-page-component.style.scss';
import HeaderComponent from "../../shared/components/page-header-component/header.component";
import PageTitleComponent from "../../shared/components/page-title-component/page-title.component";
import PageSubtitleComponent from "../../shared/components/page-subtitle-component/page-subtitle.component";
import {Link, withRouter} from "react-router-dom";
import ScrollDownIconComponent from "../../shared/components/scroll-down-icon-component/scroll-down-icon.component";
import WordUnfoldComponent from "../../shared/components/word-unfold-component/word-unfold.component";
import * as uuid from "uuid";
import {CSSTransition} from "react-transition-group";


class StartPageComponent_ extends React.Component {
	state = {
		minify: false,
		mouseVisible: false,
		listVisible: false,
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
			{
				id: uuid(),
				h: 'Values',
				p: ''
			}
		]
	};
	
	componentDidMount() {
	}
	
	handleScroll(height) {
		if (height > 40) {
			this.setState(s => ({...s, mouseVisible: true}))
		}
		if (height > 200) {
			this.setState(s => ({
				...s,
				minify: true,
			}));
		} else {
			this.setState(s => ({
				...s,
				minify: false,
				mouseVisible: false,
				listVisible: false
			}))
		}
		
	}
	
	render() {
		return (
			<div className={'start-page-component'} onScroll={(e) => this.handleScroll(e.target.scrollTop)}>
				<HeaderComponent/>
				<PageTitleComponent title={this.props.title} comment={''}/>
				<PageSubtitleComponent
					subtitle={'UX&UI'}
					url={'https://media.giphy.com/media/3oz8xTZLNWZ3W660bC/giphy.gif'}
					comment={'WITH PASSION FOR DESIGN'}
				/>
				<ScrollDownIconComponent fade={this.state.mouseVisible}/>
				<main>
					{/*<section className="content">*/}
					<section>
						<div className="wrapper">
							
							<h2>
								<WordUnfoldComponent
									delay={20}
									word={'Hi! I\'m a Developer.'}
									in_={this.state.minify}/>
							</h2>
							<p>
								<WordUnfoldComponent
									delay={30}
									word={'With passion for design!'}
									in_={this.state.minify}/>
							</p>
							<div className="wrapper">
								<ul className={'list'}>
									{
										this.state.greetingList.map(({id, h, p}, idx) => {
											return (
												<CSSTransition
													key={id}
													in={this.state.minify}
													timeout={100}
													classNames={'li-animation'}>
													<li className={'li'}
													    style={{transitionDelay: `${70 * idx}ms`}}>
														<h3>{h}</h3>
														<p>{p}</p>
													</li>
												</CSSTransition>
											)
										})
									}
								</ul>
							</div>
						
						</div>
					</section>
					
					<hr/>
					
					<section>
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
				
				</main>
			</div>
		)
	}
}


const StartPageComponent = withRouter(StartPageComponent_);
export default StartPageComponent;
