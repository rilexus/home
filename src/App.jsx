import React, { Component } from 'react';
import './App.scss';
import {Route, withRouter} from "react-router";
import {lurkerFace} from "./shared/utils";
import OverViewPageComponent from "./pages/over-view-page-component/over-view-page.component";
import FullViewComponent from "./full-view-component/full-view.component";
import AboutMePageComponent from "./pages/about-me-page-component/about-me-page.component";
import {BioComponent} from "./pages/bio/bio.component";
import {TechnologyPageComponent} from "./pages/technology-page/technology-page.component";
import ContactPageComponent from "./pages/contact-page-component/contact-page.component";
import * as uuid from "uuid";
import StartPageComponent from "./pages/start-page-component/start-page.component";
import GreetingComponent from "./pages/greeting-page-component/greeting.component";


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
        url: '/technology',
        title: 'Technology',
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
  }

  render() {
    return (
        <div className="App">

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
                this.state.pages.map(({url, PageComponent}, idx) => {
                    return(
                        <Route
                            key={`component_${idx}`}
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

            <OverViewPageComponent pages={[...this.state.pages]}/>
        </div>
    );
  }
}
export default withRouter(App);
