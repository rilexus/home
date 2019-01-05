import React from 'react';
import HeaderComponent from "../../shared/components/page-header-component/header.component";
import PageTitleComponent from "../../shared/components/page-title-component/page-title.component";
import PageSubtitleComponent from "../../shared/components/page-subtitle-component/page-subtitle.component";
import './about-me-page-component.style.scss';
import PageContentWrapperComponent
    from "../../shared/components/page-content-wrapper-component/page-content-wrapper.component";
import {CSSTransition} from "react-transition-group";


class AboutMePageComponent extends React.Component{
    state = {

    };

    componentDidMount(){

    }

    render(){
        return(
            <CSSTransition
	            in
	            appear
	            timeout={400}
	            classNames={'appear-animation'}>
                
                <div className={'about-me-page-component'}>
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
					                <strong>
						                <a target={"_black"} href="https://medium.freecodecamp.org/whats-the-difference-between-ux-and-ui-design-2ca8d107de14"> UX expert.</a>
					                </strong>
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
		                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor mauris dolor. Nam ornare suscipit tortor, malesuada rhoncus ipsum vulputate in. Nulla facilisi. Nam ac tellus eu sapien pulvinar rhoncus eget sed risus. Praesent porta massa nisl, sed accumsan ex scelerisque ut. Etiam porta suscipit maximus.
	                        </p>
                        </div>
	
                        <div className="text-container">
                            <h3>I love creating things</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor mauris dolor. Nam ornare suscipit tortor, malesuada rhoncus ipsum vulputate in. Nulla facilisi. Nam ac tellus eu sapien pulvinar rhoncus eget sed risus. Praesent porta massa nisl, sed accumsan ex scelerisque ut. Etiam porta suscipit maximus.
                            </p>
                        </div>
	                    </div>
                    </section>
                    
                </div>
            </CSSTransition>
        )
    }
}



export default AboutMePageComponent;
