import React from 'react';
import HeaderComponent from "../../shared/components/page-header-component/header.component";
import PageTitleComponent from "../../shared/components/page-title-component/page-title.component";
import PageSubtitleComponent from "../../shared/components/page-subtitle-component/page-subtitle.component";



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
                <div className="content">
                    <h2>About Me</h2>
                </div>
            </div>
        )
    }
}



export default AboutMePageComponent;
