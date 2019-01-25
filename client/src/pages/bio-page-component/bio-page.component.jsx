import React from 'react';
import './bio-page-component.style.scss';

import HeaderComponent from "../../shared/components/page-header-component/header.component";
import PageSubtitleComponent from "../../shared/components/page-subtitle-component/page-subtitle.component";
import PageTitleComponent from "../../shared/components/page-title-component/page-title.component";
import PopinComponent from "../../shared/components/popin-component/popin.component";
import LockIconComponent from "../../shared/icons/lock-icon.component";
import FadeinAnimationComponent from "../../shared/animations/fadein-animation/fadein-animation.component";
import SlideupAnimationComponent from "../../shared/animations/slideup-animation/slideup-animation.component";
import PasswordFieldComponent from "./password-field-component/password-field.component";


export class BioPageComponent extends React.Component{

	
	state = {
		openPopin: false

	};
	componentDidMount() {

	}
	componentWillUnmount() {

	}

	openPopin(){
		this.setState(s => ({
			...s,
			openPopin: true
		}))
	}
	getPopinState(){
		return this.state.openPopin;
	}
	
	setPopinState(state){
		if(this.getPopinState() === state){
			return;
		}
		this.setState(s => ({
			...s,
			openPopin: state
		}))
	}
	
	closePopin(e){
        this.setPopinState(false);
    }
    
    getPopinContent(){
		return (
			<div className="password-wrapper">
				<PasswordFieldComponent/>
			</div>
		);
    }

    handlePasswordChange(value){
		
	}

	render() {
		return (
			<div className={'bio-page-component'}>
				<PopinComponent
					in_={this.state.openPopin}
					onClick={(e)=>this.closePopin(e)}
					popinContent={()=>(
						<div className="password-wrapper">
							<PasswordFieldComponent
								onChange={(value) => this.handlePasswordChange(value)}
								onClose={(e)=> this.closePopin(e)}/>
						</div>
					)}>
					<div>
						<HeaderComponent/>
						<PageTitleComponent title={this.props.title} comment={''}/>
						<PageSubtitleComponent
							comment={this.props.comment}
							url={this.props.imgUrl}
							subtitle={this.props.subtitle}/>
						
						<div className="wrapper">
							<SlideupAnimationComponent timeout={200} _in={true} duration={700}>
								<FadeinAnimationComponent duration={1200} _in={true} timeout={400}>
									<div className="text-container center">
										<div className="text-title">
											<h2>
												Full CV
											</h2>
											<h3>
												Download
											</h3>
										</div>
										<p>
											You can download my full CV here
										</p>
										<div className="download-button-wrapper">
											<button
												onClick={()=>this.openPopin()}
												className={'download-button'}>
												<LockIconComponent/>
												Download
											</button>
										</div>
									</div>
								</FadeinAnimationComponent>
							</SlideupAnimationComponent>
						</div>
					</div>
				</PopinComponent>
			</div>
		);
	}
}