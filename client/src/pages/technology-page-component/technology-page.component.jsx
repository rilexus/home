import React from 'react';
import {CSSTransition} from 'react-transition-group';
import '../../3DEffect/with3DEffect.scss';
import './technology-page-component.style.scss';
import './slide-animation.scss';

import PageTitleComponent from "../../shared/components/page-title-component/page-title.component";
import HeaderComponent from "../../shared/components/page-header-component/header.component";
import UnfoldComponent from "./unfold-component/unfold.component";
import PageSubtitleComponent from "../../shared/components/page-subtitle-component/page-subtitle.component";
import Wth3DEffect from "../../3DEffect/With3DEffect";
import PopupComponent from "../../shared/components/popup-component/popup.component";
import PageContentWrapperComponent
	from "../../shared/components/page-content-wrapper-component/page-content-wrapper.component";


const stuff = [
	{
		name: 'React',
		descr: 'In computing, React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
		imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
	},
	{
		name: 'SASS/SCSS',
		descr: 'Sass is a style sheet language initially designed by Hampton Catlin and developed by Natalie Weizenbaum. After its initial versions, Weizenbaum and Chris Eppstein have continued to extend Sass with SassScript, a simple scripting language used in Sass files',
		imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/512px-Sass_Logo_Color.svg.png'
	},
	{
		name: 'HTML',
		descr: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.',
		imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
	},
	{
		name: 'CSS',
		descr: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.',
		imgUrl: 'https://pluralsight.imgix.net/paths/path-icons/css-c9b214f0d7.png'
	},
	{
		name: 'Javascript',
		descr: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm',
		imgUrl: 'https://cdn-images-1.medium.com/max/1052/1*DN7ToydkJZEdVaJVK_Nhvw.png'
	},
	{
		name: 'Angular',
		descr: 'Angular is a TypeScript-based open-source front-end web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
		imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png'
	},
	
	{
		name: 'GraphQL',
		descr: 'GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.',
		imgUrl: 'http://www.stickpng.com/assets/images/5847fb26cef1014c0b5e48d4.png'
	},
	{
		name: 'NESTJS',
		descr: 'A progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
		imgUrl: 'https://nestjs.com/logo-small.5d4d1c8f.svg'
	},

];


export class TechnologyPageComponent extends React.Component {
	
	state = {
		bgColor: 'white',
		shrink: false,
		popupPosition: {
			top: 500,
			left: 500
		},
		popupText: '',
		popupSubtext: '',
		showPopup: false
	};
	
	handleScroll(pos) {
		if (pos > 200) {
			this.setState(s => ({
				...s,
				shrink: true
			}))
		} else if (pos > 300) {
			this.setState(s => ({
				...s,
				bgColor: '#f2f2f2',
				// shrink: true
			}))
		} else {
			this.setState(s => ({
				...s,
				bgColor: 'white',
				shrink: false
			}))
		}
	}
	
	openDescription(e, name) {
		const pos = e.target.getBoundingClientRect().left;
		this.setState(s => ({
			...s,
			openDescriptionName: name,
			contentOpen: true,
			indicatorPos: pos
		}))
	}
	
	showContent() {
		setTimeout(() => {
			this.setState(s => ({...s, showContent: true}))
		}, 200)
	}
	
	handlePopup(e) {
		const {top, left, name, url} = e;
		this.setState(s => ({
			...s,
			popupPosition: {
				top: top,
				left: left
			},
			popupText: name,
			popupSubtext: url,
			showPopup: true,
		}))
	}
	
	hidePopup(e) {
		this.setState(s => ({
			...s,
			showPopup: false
		}))
	}
	
	
	render() {
		return (
			<div className={'technology-page-component'}
			     onScroll={(e) => this.handleScroll(e.target.scrollTop)}
			     style={{backgroundColor: this.state.bgColor}}>
				
				<CSSTransition
					in
					appear
					timeout={200}
					classNames={'enter'}
					onEntered={() => this.showContent()}
				>
					<div className={'side-overlay'}/>
				</CSSTransition>
				<HeaderComponent/>
				<PageTitleComponent title={this.props.title} comment={''}/>
				
				<PageSubtitleComponent
					subtitle={'TOOLS'}
					//shrink={this.state.shrink}
					comment={'I’M WORKING WITH'}
					//url={'https://media.giphy.com/media/26FPq8u5gvYO9GzoA/giphy.gif'}
					url={'https://media.giphy.com/media/3o6ZtrcBDLanIMbdRe/source.gif'}
				/>
				
				<PopupComponent
					visible={this.state.showPopup}
					top={this.state.popupPosition.top}
					left={this.state.popupPosition.left}
					text={this.state.popupText}
					subtext={this.state.popupSubtext}
					fromTop
				/>
				<CSSTransition
					in={this.state.showContent}
					appear
					timeout={400}
					classNames={'anim'}
				>
					
					<div className="page-wrapper">
						
						<section className={'tech'}>
							<div className="tech-titles">
								<UnfoldComponent
									onClick={(e, name) => this.openDescription(e, name)}
									delay={80}
									onMouseEnter={(e) => this.handlePopup(e)}
									onMouseLeave={(e) => this.hidePopup(e)}
									values={stuff.map(({name, imgUrl}, idx) => ({name, imgUrl}))}/>
							</div>
						</section>
						
						<PageContentWrapperComponent>
							<div className="text center">
								<h2>
									Advance
								</h2>
								<p>
									<a target={'_black'}
									   href="https://frontendmasters.com/books/front-end-handbook/2018/what-is-a-FD.html">Frontend
										development </a>
                                    Frontend development is not like it was 5 years ago. Technology is changing constantly!
									With years I’ve got in touch with many different technologies and tools for developing websites.
								</p>
								<p>
                                    Every tool serves a certain purpose and solves a specific problem.
									Those are my tools which help me solving mine.
								</p>
							</div>
						</PageContentWrapperComponent>
					
					</div>
				</CSSTransition>
			</div>
		);
	}
};

