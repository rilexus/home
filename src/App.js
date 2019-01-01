import React, { Component } from 'react';
import './App.scss';
import {Route, withRouter} from "react-router";
import { CSSTransition } from 'react-transition-group';
import uuid from 'uuid';
import GreetingComponent from "./pages/greeting-page-component/greeting.component";
import {BioComponent} from "./bio/bio.component";

import {lurkerFace} from "./shared/utils";
import {TechnologyPageComponent} from "./pages/technology-page/technology-page.component";
import ContactPageComponent from "./pages/contact-page-component/contact-page.component";




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
	        	<GreetingComponent/>
	        )}/>

	        <Route exact path={'/bio'} render={() => (
		        <BioComponent show={this.state.showBio} onNext={()=>this.handleNextClick()}/>
	        )}/>

	        <Route exact path={'/technology'} render={() => (
		        <TechnologyPageComponent/>
	        )}/>

            <Route exact path={'/contact'} render={() => (
                <ContactPageComponent/>
            )}/>

        </div>
    );
  }
}
export default withRouter(App);
