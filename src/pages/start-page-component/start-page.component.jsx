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
import PageContentWrapperComponent
    from "../../shared/components/page-content-wrapper-component/page-content-wrapper.component";


class StartPageComponent_ extends React.Component{
    state = {
        minify: false,
        mouseVisible: false,

        greetingList: [
            {
                id: uuid(),
                h:'Development',
                p: 'I’m a programmer who knows design.\n' +
                    ' I know best practices from both worlds and combine them\n' +
                    ' in frontend development and UX/XD.\n' +
                    ' I work close with designers and programmers equally.'
            },
            {
                id: uuid(),
                h: 'Process',
                p: 'Before starting i make sure i understand the needs and requirements for the project. There for\n' +
                    ' i ask a lot of questions and interview the future users.'
            },
            {
                id: uuid(),
                h: 'Process',
                p: 'Before starting i make sure i understand the needs and requirements for the project. There for\n' +
                    ' i ask a lot of questions and interview the future users.'
            },
            {
                id: uuid(),
                h: 'Process',
                p: 'Before starting i make sure i understand the needs and requirements for the project. There for\n' +
                    ' i ask a lot of questions and interview the future users.'
            },
            {
                id: uuid(),
                h: 'Process',
                p: 'Before starting i make sure i understand the needs and requirements for the project. There for\n' +
                    ' i ask a lot of questions and interview the future users.'
            }
        ]
    };

    componentDidMount(){}

    handleScroll(height){
        if(height > 40){
            this.setState(s=>({...s, mouseVisible: true}))
        }
        if(height > 200){
            this.setState(s=>({...s, minify: true}))
        } else {
            this.setState(s=>({...s, minify: false, mouseVisible: false}))
        }

    }

    render(){
        return(
            <div className={'start-page-component'} onScroll={(e) => this.handleScroll(e.target.scrollTop)}>
                <HeaderComponent/>
                <PageTitleComponent title={'Start'} comment={''}/>
                <PageSubtitleComponent
                    subtitle={'UX/XD'}
                    url={'https://media.giphy.com/media/3oz8xTZLNWZ3W660bC/giphy.gif'}
                    comment={'WITH PASSION FOR DESIGN'}
                />
                <ScrollDownIconComponent fade={this.state.mouseVisible}/>
                <main>
                    {/*<section className="content">*/}
                    <PageContentWrapperComponent>
                        <h2>
                            <WordUnfoldComponent
                                delay={20}
                                word={'I\'m a Developer.'}
                                in_={this.state.minify}/>
                        </h2>
                        <p>
                            <WordUnfoldComponent
                                delay={30}
                                word={'with passion for design.'}
                                in_={this.state.minify}/>
                        </p>
                        <ul className={'list'}>
                            {
                                this.state.greetingList.map(({id, h, p}, idx) => {
                                    return(
                                        <CSSTransition
                                            key={id}
                                            in={this.state.minify}
                                            appear
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
                    </PageContentWrapperComponent>

                    {/*</section>*/}
                    <div className={'recent-works'}>
                        <PageContentWrapperComponent>
                            <h4>
                                RECENT WORK
                            </h4>
                            <p className={'no-proj'}>
                                NO PUBLIC PROJECTS YET
                            </p>
                        </PageContentWrapperComponent>
                    </div>

                    <div className={'about-me'}>
                        <PageContentWrapperComponent>
                            <h3>Hi! I’m Stanislav</h3>
                            <p className={'greeting'}>
                                Hallo, my name is Stanislav(Stan) Panchenko.
                                I’m currently studying Computer Science in Aachen, Germany
                                and work as a frontend developer.
                                By side that i’m crazy about web design and UX/XD.
                            </p>
                            <p>
                                Currently i’m not occupied with any projects and have time to help you building
                                <strong> awesome</strong> websites. If you have ideas for a project
                                <Link to={'/contact'}> let me know.</Link>
                            </p>
                            <p>
                                I’m passionate about programming and designing, awesome websites.
                            </p>
                        </PageContentWrapperComponent>
                    </div>
                </main>
            </div>
        )
    }
}


const StartPageComponent = withRouter(StartPageComponent_);
export default StartPageComponent;
