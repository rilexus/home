import React, { Component } from 'react';
import './App.scss';
import {Route, withRouter} from "react-router";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import {GreetingComponent} from "./greeting/greeting.component";
import InterestedComponent from "./interested/interested.component";
import DecisionComponent from "./decision/decision.component";
import DarkenComponent from "./darken/darken.component";
import {BioComponent} from "./bio/bio.component";

import {lurkerFace} from "./shared/utils";
import {TechnologyPageComponent} from "./technology-page/technology-page.component";




class App extends Component {
  
  state = {
      showAwesome: false,
	  showBio: false
  };
  
  
  componentDidMount() {
	  console.log(lurkerFace());
	  console.log("%cSTOP LURKING! NOTHING TO SEE HERE!", "color: red; font-size: x-large");
  }
	
	handleDecision(){
  	this.setState(state => ({...state, showAwesome: true}));
  	setTimeout(()=>{
	    this.setState(state => ({
		    ...state,
		    showAwesome: false
	    }));
	    this.props.history.push('/bio');
    }, 2200);
  }
  handleNextClick(){
	  this.props.history.push('/bio/technology');
  }
  
  render() {
    return (
        <div className="App">
	        <Route path={'/'} render={() => (
		        <div>
			        <div className={'greeting-wrapper'}>
				        <GreetingComponent/>
			        </div>
			        <InterestedComponent/>
			        <DecisionComponent onClick={()=>this.handleDecision()}/>
		        </div>
	        )}/>
	        <DarkenComponent show={this.state.showAwesome}/>
	
	        <Route exact path={'/bio'} render={() => (
		        <BioComponent show={this.state.showBio} onNext={()=>this.handleNextClick()}/>
	        )}/>
	        <Route exact path={'/bio/technology'} render={() => (
		        <TechnologyPageComponent/>
	        )}/>
        </div>
    );
  }
}
export default withRouter(App);
