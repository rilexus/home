import React from 'react';
import HeaderComponent from "../../shared/components/page-header-component/header.component";
import PageTitleComponent from "../../shared/components/page-title-component/page-title.component";
import PageSubtitleComponent from "../../shared/components/page-subtitle-component/page-subtitle.component";
import './about-me-page-component.style.scss';
import PageContentWrapperComponent
    from "../../shared/components/page-content-wrapper-component/page-content-wrapper.component";



class AboutMePageComponent extends React.Component{
    state = {

    };

    componentDidMount(){

    }

    render(){
        return(
            <div className={'about-me-page-component'}>
                <HeaderComponent/>
                <PageTitleComponent title={'About Me'} comment={''}/>
                <PageSubtitleComponent
                    subtitle={'I\'ts Me'}
                    url={''}
                    shrink={false}
                    comment={''}/>
                <PageContentWrapperComponent>
                    <h3>About Me</h3>
                </PageContentWrapperComponent>
            </div>
        )
    }
}



export default AboutMePageComponent;
