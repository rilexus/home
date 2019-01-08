import React from 'react';
import HeaderComponent from "../../shared/components/page-header-component/header.component";
import './contact-page-component.style.scss';
import PageTitleComponent from "../../shared/components/page-title-component/page-title.component";
import PageSubtitleComponent from "../../shared/components/page-subtitle-component/page-subtitle.component";
import {CSSTransition} from "react-transition-group";



class ContactPageComponent extends React.Component{
	state = {
		minify: false
	};
	
	componentDidMount(){
	
	}
	
	handleScroll(pos){
		if(pos > 205){
			this.setState(s => ({
				...s,
				minify: true,
			}))
		} else{
			this.setState(s => ({
				...s,
				minify: false,
			}))
		}
	}
	
	render(){
		return(
			<div className={'contact-page-component'} onScroll={(e)=> this.handleScroll(e.target.scrollTop)}>
				<CSSTransition
					in
					appear
					timeout={400}
					classNames={'animation-wrapper-animation'}>
					<div className={'animation-wrapper'}>
						<HeaderComponent/>
						<PageTitleComponent
							title={this.props.title} comment={''}/>
						<PageSubtitleComponent
							subtitle={'CALL ME'}
							comment={'let’s chat'}
							url={'https://media.giphy.com/media/26FPq8u5gvYO9GzoA/giphy.gif'}
							shrink={this.state.minify}
						/>
						
						<section>
							<div className="wrapper">
								<CSSTransition
									in
									appear
									timeout={600}
									classNames={'content-text-animation'}>
									<div className="text-container">
										<h2>
											Let’s talk about UI
										</h2>
										<p>
                                            If you have a project in mind let's chat about it.
											I will be happy to hear your ideas and give you feedback on best practices.
										</p>
										<a href="mailto:mail@stanislavpanchenko.de">mail@stanislavpanchenko.de</a>
									</div>
								</CSSTransition>
							</div>
						</section>
						
					</div>
				</CSSTransition>
			</div>
		)
	}
}

export default ContactPageComponent;

