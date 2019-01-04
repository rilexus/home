import React from 'react';
import HeaderComponent from "../../shared/components/page-header-component/header.component";
import './contact-page-component.style.scss';
import PageTitleComponent from "../../shared/components/page-title-component/page-title.component";
import PageSubtitleComponent from "../../shared/components/page-subtitle-component/page-subtitle.component";
import WordUnfoldComponent from "../../shared/components/word-unfold-component/word-unfold.component";
import ScrollDownIconComponent from "../../shared/components/scroll-down-icon-component/scroll-down-icon.component";
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
	                <HeaderComponent/>
	                <PageTitleComponent
		                title={'Contact'} comment={''}/>
	                <PageSubtitleComponent
		                subtitle={'CALL ME'}
		                comment={'and let’s chat'}
		                url={'https://media.giphy.com/media/26FPq8u5gvYO9GzoA/giphy.gif'}
		                shrink={this.state.minify}
	                />
                    
                    <CSSTransition
                        in
                        appear
                        timeout={400}
                        classNames={'contact-page-animation'}>
                        
                        <section className="content">
                            <div className="content-text">
                                <h2>
                                    Let’s talk
                                </h2>
                                <p>
                                    If you have a project in mind lets chat about it.
                                    I will be happy to hear you ideas and giving you advice on best practices.
                                </p>
	                            <a href="mailto:mail@stanislavpanchenko.de">mail@stanislavpanchenko.de</a>
                            </div>
                            
                            
                        </section>
                    </CSSTransition>
                </div>
        )
    }
}

export default ContactPageComponent;

