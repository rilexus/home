import React from 'react';
import './bio-page-component.style.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HeaderComponent from "../../shared/components/page-header-component/header.component";
import PageSubtitleComponent from "../../shared/components/page-subtitle-component/page-subtitle.component";
import PageTitleComponent from "../../shared/components/page-title-component/page-title.component";
import PopinComponent from "../../shared/components/popin-component/popin.component";
import LockIconComponent from "../../shared/icons/lock-icon.component";


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

	closePopin(e){
		// if(this.state.openPopin){
		// 	const isBio = e.target.className.includes('bio-page-component');
		// 	if(isBio){
		// 		this.setState(s => ({
		// 			...s,
		// 			openPopin: false
		// 		}))
		// 	}
		// }

        this.setState(s => ({
            ...s,
            openPopin: false
        }))
    }


	render() {
		return (
			<div className={'bio-page-component'}
				 // onClick={(e)=> this.closePopin(e)}
			>
				<div
					className={['blur-wrapper', this.state.openPopin ? 'blur-wrapper blured' : null].join(' ')}
				>
                    <HeaderComponent/>
                    <PageTitleComponent title={this.props.title} comment={''}/>
                    <PageSubtitleComponent
                        comment={this.props.comment}
                        url={this.props.imgUrl}
                        subtitle={this.props.subtitle}/>

                    <div className="wrapper">
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
                    </div>
				</div>
				<PopinComponent in_={this.state.openPopin} onClick={(e)=>this.closePopin(e)}>
					<div className={'center'}>
						<h2>Password required!</h2>
						<p>please enter the provided password</p>
					</div>
				</PopinComponent>
			</div>
		);
	}
}