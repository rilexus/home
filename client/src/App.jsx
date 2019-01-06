import React, { Component } from 'react';
import './App.scss';
import {Route, withRouter, Redirect} from "react-router";
import {lurkerFace} from "./shared/utils";
import OverViewPageComponent from "./pages/over-view-page-component/over-view-page.component";
import FullViewComponent from "./full-view-component/full-view.component";
import AboutMePageComponent from "./pages/about-me-page-component/about-me-page.component";
import {BioComponent} from "./pages/bio-page-component/bio.component";
import {TechnologyPageComponent} from "./pages/technology-page-component/technology-page.component";
import ContactPageComponent from "./pages/contact-page-component/contact-page.component";
import * as uuid from "uuid";
import StartPageComponent from "./pages/start-page-component/start-page.component";
import GreetingComponent from "./pages/greeting-page-component/greeting.component";
import CookieBannerComponent from "./shared/components/cookie-banner-component/cookie-banner.component";
import {Switch} from "react-router-dom";



export const pages = [
    // {
    //     url: '/',
    //     title: 'Greeting',
    //     id: uuid(),
    //     PageComponent: GreetingComponent,
    // },
    {
        url: '/start',
        title: 'Start',
        id: uuid(),
        PageComponent: StartPageComponent,
    },
    // {
    //     url: '/bio',
    //     title: 'Bio',
    //     id: uuid(),
    //     PageComponent: BioComponent,
    // },
    {
        url: '/tools',
        title: 'Tools',
        id: uuid(),
        PageComponent: TechnologyPageComponent,
    },
    {
        url: '/about',
        title: 'About',
        id: uuid(),
        PageComponent: AboutMePageComponent,
    },
    {
        url: '/contact',
        title: 'Contact',
        id: uuid(),
        PageComponent: ContactPageComponent,
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
	  	'http://localhost:3000/test'
	  ).then(res => res.json()).then(d => console.log(d))
  }

  render() {
    return (
        <div className="App">
	
	
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
			        this.state.pages.map(({url, title, PageComponent}) => {
				        return(
					        <Route
						        key={`page-component:${title}`}
						        path={url}
						        exact
						        render={()=>(
							        <FullViewComponent>
								        <PageComponent/>
							        </FullViewComponent>
						        )}
					        />
				        );
			        })
		        }
		        <Redirect to="/start" />
	        </Switch>
            

            <OverViewPageComponent pages={[...this.state.pages]}/>
            <CookieBannerComponent/>
        </div>
    );
  }
}
export default withRouter(App);
