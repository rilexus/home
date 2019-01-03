import React from 'react';
import './start-page-component.style.scss';
import HeaderComponent from "../../shared/components/page-header-component/header.component";
import PageTitleComponent from "../../shared/components/page-title-component/page-title.component";
import PageSubtitleComponent from "../../shared/components/page-subtitle-component/page-subtitle.component";


class StartPageComponent extends React.Component{
    state = {

    };

    componentDidMount(){

    }

    render(){
        return(
            <div className={'start-page-component'}>
                <HeaderComponent/>
                <PageTitleComponent title={'Start'} comment={''}/>
                <PageSubtitleComponent
                    subtitle={'UX/XD'}
                    url={'https://media.giphy.com/media/3oz8xTZLNWZ3W660bC/giphy.gif'}
                    comment={'WITH PASSION FOR DESIGN'}
                />
            </div>
        )
    }
}



export default StartPageComponent;
