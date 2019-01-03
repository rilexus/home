import React, { Component } from 'react';
import './App.scss';
import {Route, withRouter} from "react-router";
import { CSSTransition } from 'react-transition-group';
import GreetingComponent from "./pages/greeting-page-component/greeting.component";
import {BioComponent} from "./pages/bio/bio.component";

import {lurkerFace} from "./shared/utils";
import {TechnologyPageComponent} from "./pages/technology-page/technology-page.component";
import ContactPageComponent from "./pages/contact-page-component/contact-page.component";
import StartPageComponent from "./pages/start-page-component/start-page.component";
import OverViewPageComponent from "./pages/over-view-page-component/over-view-page.component";
import FullViewComponent from "./full-view-component/full-view.component";


class App extends Component {
  
  state = {
      showAwesome: false,
	  showBio: false
  };
  
  
  componentDidMount() {
	  console.log(lurkerFace());
	  console.log("%cSTOP LURKING! NOTHING TO SEE HERE!", "color: red; font-size: x-large");
  }
	
  // handleDecision(){
  // 	this.setState(state => ({...state, showAwesome: true}));
  // 	setTimeout(()=>{
	//     this.setState(state => ({
	// 	    ...state,
	// 	    showAwesome: false
	//     }));
	//     this.props.history.push('/bio');
  //   }, 2200);
  // }

  handleNextClick(){
	  this.props.history.push('/technology');
  }


  render() {
    return (
        <div className="App">
	        <Route path={'/'} exact render={() => (
                <FullViewComponent>
                    <GreetingComponent/>
                </FullViewComponent>
	        )}/>

	        <Route exact path={'/bio'} render={() => (
		        <BioComponent show={this.state.showBio} onNext={()=>this.handleNextClick()}/>
	        )}/>

	        <Route exact path={'/technology'} render={() => (
                <FullViewComponent>
                    <TechnologyPageComponent/>
                </FullViewComponent>
	        )}/>

            <Route exact path={'/contact'} render={() => (
                <FullViewComponent>
                    <ContactPageComponent/>
                </FullViewComponent>
            )}/>
            <Route exact path={'/start'} render={() => (
                <StartPageComponent/>
            )}/>

            <OverViewPageComponent/>
        </div>
    );
  }
}
export default withRouter(App);
