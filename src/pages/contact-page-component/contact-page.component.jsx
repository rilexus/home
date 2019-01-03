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
        if(pos > 50){
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
                <div className={'contact-page-component'}
                     onScroll={(e)=> this.handleScroll(e.target.scrollTop)}
                >
                    <CSSTransition
                        in
                        appear
                        timeout={400}
                        classNames={'contact-page-animation'}
                    >
                        <div className="scroll-wrapper">
                            <HeaderComponent/>
                            <PageTitleComponent title={'Contact'} comment={''}/>
                            <PageSubtitleComponent
                                subtitle={'CALL ME'}
                                comment={'ill wait'}
                                // url={'https://media.giphy.com/media/l46C7yr4XM8YNWnEQ/giphy.gif'}

                                //https://media.giphy.com/media/26FPq8u5gvYO9GzoA/giphy.gif
                                url={'https://media.giphy.com/media/26FPq8u5gvYO9GzoA/giphy.gif'}
                                shrink={this.state.minify}
                            />
                            <div>
                                <ScrollDownIconComponent fade={this.state.minify}/>
                            </div>
                            <div className="contact">
                                <div className="phone">
                                    <span className={'label'}>Phone:</span>
                                    <WordUnfoldComponent
                                        word={'+4917645840631'}
                                        in_={this.state.minify}
                                        delay={30}/>
                                </div>
                                <div className={'mail'}>
                                    <span className={'label'}>Mail:</span>
                                    <WordUnfoldComponent
                                        in_={this.state.minify}
                                        delay={30}
                                        word={'mail@stanislavpanchenko.de'}/>
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                </div>
        )
    }
}

export default ContactPageComponent;

