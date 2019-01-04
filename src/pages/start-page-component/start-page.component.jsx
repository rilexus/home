import React from 'react';
import './start-page-component.style.scss';
import HeaderComponent from "../../shared/components/page-header-component/header.component";
import PageTitleComponent from "../../shared/components/page-title-component/page-title.component";
import PageSubtitleComponent from "../../shared/components/page-subtitle-component/page-subtitle.component";
import TextUnfoldComponent from "../../shared/components/text-unfold-component/text-unfold.component";
import {Link, withRouter} from "react-router-dom";
import ScrollDownIconComponent from "../../shared/components/scroll-down-icon-component/scroll-down-icon.component";


class StartPageComponent extends React.Component{
    state = {
        minify: false,
        mouseVisible: false
    };

    componentDidMount(){

    }
    
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
                    <section className="content">
                        
                            <h2>
                                {/*<WordUnfoldComponent delay={25} word={'I\'m a Developer.'} in_={this.state.minify}/>*/}
                                <TextUnfoldComponent delay={25} in_={this.state.minify} text={'I\'m a Developer'}/>
                            </h2>
                            <p>
                                {/*<WordUnfoldComponent delay={30} word={'I\'m a developer.'} in_={this.state.minify}/>*/}
                                <TextUnfoldComponent delay={30} in_={this.state.minify} text={'with passion for design.'}/>
                            </p>
        
                            <ul className={'list'}>
                                <li>
                                    <h3>
                                        Development
                                    </h3>
                                    <p>
                                        I’m a <strong>programmer</strong> who knows design.
                                        I know best practices from both worlds and combine them
                                        in frontend development and UX/XD.
                                        I work close with designers and programmers equally.
                                    </p>
                                </li>
            
                                <li>
                                    <h3>
                                        Process
                                    </h3>
                                    <p>
                                        Before starting i make sure i understand the needs and requirements for the project. There for
                                        i ask a lot of questions and interview the future users.
                                    </p>
                                </li>
                                <li>
                                    <h3>
                                        Process
                                    </h3>
                                    <p>
                                        Before starting i make sure i understand the needs and requirements for the project. There for
                                        i ask a lot of questions and interview the future users.
                                    </p>
                                </li>
                            </ul>
                        
                    </section>
                    
                    <section className={'recent-works'}>
                        <div className="content">
	                        <h4>
                                RECENT WORK
	                        </h4>
                            <p className={'no-proj'}>
                                NO PUBLIC PROJECTS YET
                            </p>
                         
	                        {/*<ul className={'list'}>*/}
		                        {/*<li className={'work'}>*/}
			                        {/*<a href="">*/}
				                        {/*<div className="content">*/}
                            
				                        {/*</div>*/}
			                        {/*</a>*/}
		                        {/*</li>*/}
                          
	                        {/*</ul>*/}
                        </div>
                    </section>
                    
                    <section className={'about-me'}>
                        <div className="content">
                            <h3>Hi! I’m Stanislav</h3>
                            <p className={'greeting'}>
                                Hallo, my name is Stanislav(Stan) Panchenko. I work as a frontend developer.
	                            I’m currently living and studying Computer Science in Aachen, Germany.
                            </p>
                            <p>
                                Currently i’m not occupied with any projects and have time to help you building
                                <strong> awesome</strong> websites. If you have ideas for project
                                <Link to={'/contact'}> let me know</Link>.
                            </p>
                            <p>
	                            I’m passionate about programming and designing, awesome websites.
                            </p>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}



export default withRouter(StartPageComponent);
