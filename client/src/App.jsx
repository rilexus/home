import React, { Component } from 'react';
import './App.scss';
import {Route, withRouter, Redirect} from "react-router";
import {lurkerFace} from "./shared/utils";
import OverViewPageComponent from "./pages/over-view-page-component/over-view-page.component";
import FullViewComponent from "./full-view-component/full-view.component";
import AboutMePageComponent from "./pages/about-me-page-component/about-me-page.component";
import {BioPageComponent} from "./pages/bio-page-component/bio-page.component";
import {TechnologyPageComponent} from "./pages/technology-page-component/technology-page.component";
import ContactPageComponent from "./pages/contact-page-component/contact-page.component";
import * as uuid from "uuid";
import StartPageComponent from "./pages/start-page-component/start-page.component";
import GreetingComponent from "./pages/greeting-page-component/greeting.component";

import {Switch} from "react-router-dom";
import SlideshowPageComponent from "./pages/slideshow-page-component/slideshow-page.component";




export const pages = [
    {
        id: uuid(),
        PageComponent: StartPageComponent,
	    
        url: '/start',
        title: 'Start',
	    subtitle: 'UX&UI',
	    imgUrl: 'https://media.giphy.com/media/3o6ZtrcBDLanIMbdRe/source.gif',
	    comment: 'WITH PASSION FOR DESIGN',
    },

    {
        id: uuid(),
        PageComponent: TechnologyPageComponent,
	    
        url: '/technology',
        title: 'Technology',
	    subtitle:'TOOLS',
	    comment: 'I’M WORKING WITH',
	    imgUrl: 'https://media.giphy.com/media/3o6ZtrcBDLanIMbdRe/source.gif',
    },
    {
        id: uuid(),
        PageComponent: AboutMePageComponent,
	    
        url: '/about',
        title: 'About',
	    subtitle: 'Me',
	    imgUrl: 'https://media.giphy.com/media/3oz8xJMEOcCkYRlXVu/source.gif',
	    comment: ''
    },
    {
        id: uuid(),
        PageComponent: ContactPageComponent,
	    
        url: '/contact',
        title: 'Contact',
	    subtitle: 'MAIL ME',
	    comment: 'let’s chat',
	    imgUrl: 'https://media.giphy.com/media/3o6ZtrcBDLanIMbdRe/source.gif'
    },
    {
        id: uuid(),
        PageComponent: BioPageComponent,

        url: '/bio',
        title: 'Bio',
        subtitle:'BIO',
        comment: 'BRIEFLY ABOUT MY LIFE',
        imgUrl: 'https://media.giphy.com/media/3o6ZtrcBDLanIMbdRe/source.gif',
    },
    {
        id: uuid(),
        PageComponent: SlideshowPageComponent,
	    
        url: '/slideshow',
        title: 'Slideshow',
	    comment: '',
	    subtitle: 'Slide',
	    imgUrl: 'https://media.giphy.com/media/3o6ZtrcBDLanIMbdRe/source.gif'
    },
];


class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          showAwesome: false,
          showBio: false,
          pages:[...pages]
      }
  }
  
  
  componentDidMount() {
	  console.log(lurkerFace());
	  console.log(
	      "%cSTOP LURKING! NOTHING TO SEE HERE!",
          "color: red; font-size: x-large"
      );
	  
	  fetch(
	  	'http://192.168.0.115:5000/test'
	  ).then(res => {
	      if(res){
	          const resp = res;
              console.log(resp)
              return res;
              //return rep.json()
          }else {
	          return {error: 'no response'}
          }
	  }).then(d => console.log())
        .catch((er) => console.error(er))
  }

  render() {
    return (
        <div className='App'>
	        <Switch>
		        <Route
			        path={'/'}
			        exact
			        render={()=>(
				        <FullViewComponent>
					        <GreetingComponent/>
				        </FullViewComponent>
			        )}
		        />
		
		        {
			        pages.map((page) => {
			        	const {title, subtitle, url, PageComponent, imgUrl, comment} = page;
				        return(
					        <Route
						        key={`page-component:${title}`}
						        path={url}
						        exact
						        render={()=>(
						        	<PageComponent
								        title={title}
								        imgUrl={imgUrl}
								        url={url}
								        comment={comment}
								        subtitle={subtitle}
							        />
						        )}
					        />
				        );
			        })
		        }
		        <Redirect to="/start" />
	        </Switch>


            <OverViewPageComponent pages={[...pages]}/>
            {/*<CookieBannerComponent/>*/}
        </div>
    );
  }
}
export default withRouter(App);
