import React from 'react';
import HeaderComponent from "../../shared/components/page-header-component/header.component";
import PageTitleComponent from "../../shared/components/page-title-component/page-title.component";
import PageSubtitleComponent from "../../shared/components/page-subtitle-component/page-subtitle.component";
import './about-me-page-component.style.scss';
import {CSSTransition} from "react-transition-group";


class AboutMePageComponent extends React.Component{
    state = {

    };

    componentDidMount(){

    }

    render(){
        return(
                
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
                        subtitle={'Me'}
                        url={'https://media.giphy.com/media/26AHL0EG33tA1geoE/giphy.gif'}
                        
                        shrink={false}
                        comment={''}/>
                    
	                
	                <section>
		                <div className="wrapper">
			                <div className="text-container center">
				                <h1 >Hallo, <br/> i’m Stanislav</h1>
				                <p>
					                I’m a frontend developer,
					                <strong>
						                <a target={"_black"} href="https://medium.freecodecamp.org/whats-the-difference-between-ux-and-ui-design-2ca8d107de14">UI designer </a>
					                </strong>
					                and
					                <strong><a target={"_black"} href="https://medium.freecodecamp.org/whats-the-difference-between-ux-and-ui-design-2ca8d107de14"> UX geek.</a> </strong>
					                I love creating user centered and delightful
					                interfaces for the web.
				                </p>
			                </div>
		                </div>
	                </section>
                    <section>
	                    <div className="wrapper">
                        <div className="text-container">
	                        <h3>My Passion</h3>
	                        <p>
		                        <strong>Since school</strong> i had one hobby: User Interfaces.
		                        Even when i hadn't programing skills i dived deep in to designing mobile interfaces.
		                        To be able to inhale life in to my designs i have started studying Computer Science.
		                        And since then i combine CS knowledge with delightfull art to create awesome UI’s.
	                        </p>
                        </div>
	
                        <div className="text-container">
                            <h3>I love creating things</h3>
                            <p>
	                            I love creating UI’s. My whole life circles around code and UI’s.
	                            There is hardly one days when i dont code interfaces. I love what i do <span className={'icon'}>❤️</span>
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
