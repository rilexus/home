import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../3DEffect/with3DEffect.scss';
import './technology-page-component.style.scss';
import './slide-animation.scss';

import PageTitleComponent from "../../shared/components/page-title-component/page-title.component";
import HeaderComponent from "../../shared/components/page-header-component/header.component";
import UnfoldComponent from "../../unfold-component/unfold.component";
import PageSubtitleComponent from "../../shared/components/page-subtitle-component/page-subtitle.component";
import Wth3DEffect from "../../3DEffect/With3DEffect";


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

const withAnimation = (_in, appear, component, key) => {
	return(
		<CSSTransition
			key={key}
			in={_in}
			appear={appear}
			timeout={400}
			classNames={'slide-animation'}
		>
			<div className={'slide'}>
				{
					<Wth3DEffect>
						{component}
					</Wth3DEffect>
				}
			</div>
		</CSSTransition>
	)
};


export class TechnologyPageComponent extends React.Component{
	
	state = {
		bgColor: 'white',
		openDescriptionName: 'React',
		contentOpen: true,
		indicatorPos: 30,
		shrink: false,

		showContent: false
	};
	
	handleScroll(pos){
		if(pos > 35){
			this.setState(s => ({
				...s,
				shrink: true
			}))
		} else if(pos > 300){
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
	
	openDescription(e,name) {
		const pos = e.target.getBoundingClientRect().left;
		this.setState(s => ({
			...s,
			openDescriptionName: name,
			contentOpen: true,
			indicatorPos: pos
		}))
	}

	showContent(){
		setTimeout(()=>{
            this.setState(s => ({...s, showContent: true}))
		},200)
	}
	
	
	render(){
		return(
			<div className={'technology-page-component'}
				 onScroll={(e)=> this.handleScroll(e.target.scrollTop)}
				 style={{backgroundColor: this.state.bgColor}}>

                <CSSTransition
                    in
					appear
                    timeout={200}
                    classNames={'enter'}
                    onEntered={()=> this.showContent()}
                >
                    <div className={'side-overlay'}/>
                </CSSTransition>
				<HeaderComponent/>
				
				<CSSTransition
					in={this.state.showContent}
					appear
					timeout={400}
					classNames={'anim'}
				>
					<div className="page-wrapper">
						<PageTitleComponent title={'Technology'} comment={''}/>
						
						<PageSubtitleComponent
							subtitle={'TECH I LOVE'}
							shrink={this.state.shrink}
							comment={'TECH IM PASSIONATE ABOUT'}
							url={'https://media.giphy.com/media/l46C7yr4XM8YNWnEQ/giphy.gif'}
							// url={'https://media3.giphy.com/media/3oFzlUASnAYgzmujja/giphy.gif?cid=3640f6095c28cf3a3677586351192a65'}
						/>
						
						<section className={'tech'}>
							<div className={'open-indicator'}
								 style={{left: this.state.indicatorPos + 'px'}}
							/>
							
							<div className="tech-titles">
								<UnfoldComponent
									onClick={(e, name) => this.openDescription(e, name)}
									delay={80}
									values={stuff.map(({name}, idx) => name)}/>
							</div>
							
							<div className={[
								'content',
								this.state.contentOpen ? 'open' : null
							].join(' ')}>
								
									{
										stuff.map(({name, descr, imgUrl}, idx) => {
											if(name === this.state.openDescriptionName) {
												return (
													<div key={`key_${name}`} className={['tech-description',]}>
														<div className="tab-content">
															<div className="descr">
																{
																	descr
																}
															</div>
															<div className="img-wrapper">
																<img
																	id={name === 'React' ? 'react_img' : null}
																	src={imgUrl} alt=""/>
															</div>
														</div>
													</div>
												);
											}
										})
									}
								
							</div>
						</section>
						
					</div>
				</CSSTransition>
			</div>
		);
	}
};

