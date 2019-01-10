import React from 'react';
import {CSSTransition} from 'react-transition-group';
import './slideshow-page-component.style.scss';
import HeaderComponent from "../../shared/components/page-header-component/header.component";
import PageSubtitleComponent from "../../shared/components/page-subtitle-component/page-subtitle.component";
import {getWindowHeight} from "../../shared/utils";


class SlideshowPageComponent extends React.Component {
	
	// brace yourself! Magic ahead!
	componentRef = React.createRef();
	state = {
		wrapperHeight: 0,
		windowHeight: 0,
		scrollTop: 0,
		
		
	};
	
	componentDidMount() {
		//const wrapperHeight = this.componentRef.current.getBoundingClientRect();
		//const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		const windowHeight = getWindowHeight();
		this.setState(s => ({
			...s,
			//  wrapperHeight: wrapperHeight,
			windowHeight: windowHeight,
			
			imgTranslatePos: windowHeight * -1// -100vh
		}));
		
	}
	
	handleScroll(e) {
		const scrollTop = e.target.scrollTop;
		this.setState(s => ({
			...s,
			scrollTop: scrollTop,
			imgTranslatePos: this.getImgTranslatePosition()
		}));
	}
	
	scrollPassWindow() {
		const scrollTop = this.state.scrollTop;
		const windowHeigt = this.state.windowHeight;
		return scrollTop >= windowHeigt;
	}
	
	getImgTranslatePosition() {
		const scrollTop = this.state.scrollTop;
		const windowHeight = this.state.windowHeight;
		
		if (this.scrollPassWindow()) { // if user scrolled for 100vh => first image disappears, translateY of seconds needs to be updated
			const newTranslatePos = (
				windowHeight - (scrollTop - windowHeight) // distance from top
				* 1.2 // increase factor aca speed.
			) * -1; // translationY to top is negative
			
			return newTranslatePos < 0 ? newTranslatePos : 0;
		}
		return this.state.imgTranslatePos;
	}
	
	imageMoves() {
		return this.state.imgTranslatePos < this.state.windowHeight;
	}
	
	getImgScale() {
		const imgTranslatePos = this.state.imgTranslatePos * -1; // make a positive number
		const factor = 1 - (1 - (imgTranslatePos * .001));
		
		if (this.imageMoves()) {
			if (factor > .4) {
				return factor
			}
			return .4;
		}
		return 1;
	}
	
	render() {
		return (
			<div className={'slide-show-component'} onScroll={e => this.handleScroll(e)}>
					<HeaderComponent/>
				<CSSTransition
					in
					appear
					mountOnEnter
					timeout={400}
					classNames={'slide-show-component-appear-animation'}
				>
					<div className="slide-show-component-content">
						<div className="sub">
							<PageSubtitleComponent
								shrink={false}
								subtitle={this.props.subtitle}
								url={this.props.imgUrl}
								comment={this.props.comment}
							/>
						</div>
						{/*first section is 200vh heigh*/}
						<section
							//style={{height: '200vh'}}
							style={{height: `${this.state.windowHeight * 2}px`}}
						>
							{
								// img is 100vh and is set to sticky in css so it stays on top till the bottom of img touches the bottom
								// of its container: user scrolls for 100vh.
								// when it reaches the bottom it is removed from the DOM and the img below(next section) is visible
								!this.scrollPassWindow() ? // sticky image while scrollTop < 200vh
									<div className={'img-wrapper sticky'}
									     style={{height: `${this.state.windowHeight}px`}}
									>{/*100vh*/}
										<img
											src={'https://media.giphy.com/media/xThta2LP5qF9mFFKoM/source.gif'}
											alt=""/>
									</div>
									: null
							}
						</section>
						<section>
							{/*Image is translated minus windowSize(-100vh) at component mount time and updated at scroll event.*/}
							{/*See handleScroll() function.*/}
							<div className="img-wrapper"
							     style={{
								     transform: `translateY(${this.state.imgTranslatePos}px)`,
								     height: `${this.state.windowHeight}px`
							     }}>
								<img
									style={{transform: `scale(${this.getImgScale()})`}}
									src={'https://media.giphy.com/media/xThta2LP5qF9mFFKoM/source.gif'}
									alt=""/>
							</div>
						</section>
						<section>
							s
						</section>
					</div>
				</CSSTransition>
			</div>
		)
	}
}


export default SlideshowPageComponent;
