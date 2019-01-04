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
                        subtitle={'It’s Me'}
                        url={'https://media.giphy.com/media/26AHL0EG33tA1geoE/giphy.gif'}
                        
                        shrink={false}
                        comment={''}/>
                    {/*<PageContentWrapperComponent>*/}
                    <div className="content">
                        <div className="text">
	                        <h3>Passion</h3>
	                        <p>
		                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor mauris dolor. Nam ornare suscipit tortor, malesuada rhoncus ipsum vulputate in. Nulla facilisi. Nam ac tellus eu sapien pulvinar rhoncus eget sed risus. Praesent porta massa nisl, sed accumsan ex scelerisque ut. Etiam porta suscipit maximus.
	                        </p>
                        </div>
	
                        <div className="text">
                            <h3>Creating Things</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor mauris dolor. Nam ornare suscipit tortor, malesuada rhoncus ipsum vulputate in. Nulla facilisi. Nam ac tellus eu sapien pulvinar rhoncus eget sed risus. Praesent porta massa nisl, sed accumsan ex scelerisque ut. Etiam porta suscipit maximus.
                            </p>
                        </div>
                    </div>
                    {/*</PageContentWrapperComponent>*/}
                </div>
            </CSSTransition>
        )
    }
}



export default AboutMePageComponent;
