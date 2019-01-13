import React from 'react';
import HeaderComponent from "../../shared/components/page-header-component/header.component";
import PageTitleComponent from "../../shared/components/page-title-component/page-title.component";
import PageSubtitleComponent from "../../shared/components/page-subtitle-component/page-subtitle.component";
import './about-me-page-component.style.scss';
import {CSSTransition} from "react-transition-group";


class AboutMePageComponent extends React.Component {
	state = {};
	
	componentDidMount() {
	
	}
	
	render() {
		return (
			
			<div className={'about-me-page-component'}>
				<CSSTransition
					in
					appear
					timeout={400}
					classNames={'appear-animation'}>
					<div className={'content-wrapper'}>
						
						<HeaderComponent/>
						<PageTitleComponent title={'About'} comment={''}/>
						<PageSubtitleComponent
							subtitle={this.props.subtitle}
							url={this.props.imgUrl}
							comment={this.props.comment}
							
							shrink={false}
						/>
						
						
						<section>
							<div className="wrapper">
								<div className="text-container center">
									<h1>Hello, I’m Stanislav</h1>
									<p>
										I’m a frontend developer,
										<strong>
											<a target={"_black"}
											   href="https://medium.freecodecamp.org/whats-the-difference-between-ux-and-ui-design-2ca8d107de14"> UI
												designer </a>
										</strong>
										and
										<strong><a target={"_black"}
										           href="https://medium.freecodecamp.org/whats-the-difference-between-ux-and-ui-design-2ca8d107de14"> UX
											geek.</a> </strong>
										I love creating user-centered and delightful interfaces for the web.
									</p>
								</div>
							</div>
						</section>
						
						<section>
							<div className="wrapper">
								<div className="text-container">
									<h3>My Passion</h3>
									<p>
										<strong>Since school</strong> I had one hobby: designing user interfaces.
										Even when I didn't have programing skills,
										I dived deep into designing mobile interfaces with graphics editors.
										To be able to add life into my designs,
										I have started studying Computer Science.
										And since then,
										I am combining CS knowledge with delightful art to create awesome UI’s.
									</p>
								</div>
								
								<div className="text-container">
									<h3>I l<span className={'icon'} role={'img'}>❤️</span>️ve creating things</h3>
									<p>
										I love creating UI’s.
										My whole life revolves around code and UI’s.
										There is hardly one day when I don't code interfaces.
										I love what I do.
									</p>
								</div>
							</div>
						</section>
					</div>
				</CSSTransition>
			</div>
		)
	}
}


export default AboutMePageComponent;
