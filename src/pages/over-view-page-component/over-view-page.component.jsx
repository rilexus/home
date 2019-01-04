import React from 'react';
import './over-view-page-component.style.scss';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';
import {TechnologyPageComponent} from "../technology-page/technology-page.component";
import ContactPageComponent from "../contact-page-component/contact-page.component";
import {BioComponent} from "../bio/bio.component";
import {withRouter} from "react-router-dom";
import StartPageComponent from "../start-page-component/start-page.component";



class OverViewPageComponent extends React.Component{
	timeoutId = -1;
    state = {
		visible: false,
        mouseOnView: false,
        title: 'All Pages',
	    defaultTitleVisible: true,
        subtitle: 'all subsites',
		views: [
			{
				title: 'Start',
                url: '/start',
				hovered: false,
				id: uuid(),
				component: <StartPageComponent/>
			},
			{
				title: 'Contact',
				url: '/contact',
				hovered: false,
				id: uuid(),
                component: <ContactPageComponent/>
			},
			{
				title: 'Technology',
				hovered: false,
				url: '/technology',
				id: uuid(),
				component: <TechnologyPageComponent/>
			},
		]
	};
	
	
	componentDidMount(){
	
	}
	
	componentWillUnmount() {
	    if(this.timeoutId !== -1){
	        clearTimeout(this.timeoutId);
        }
	}
	
	handleClick(){
		this.setState(s => ({
			...s,
			visible: !s.visible
		}))
	}
	
	toggleViewHover(withId){
		this.setState(s => {
			const newViews = s.views.map(view => {
				if(view.id === withId){
					view.hovered = !view.hovered;
				}
				return view;
			});
			
			return{
				...s,
				views: [...newViews],
				mouseOnView: !s.mouseOnView,
			}
			
		})
	}
	
	markUnhovered(id){
		this.setState(s => {
			const newViews = s.views.map(view => {
				if(view.id === id){
					view.hovered = false;
				}
				return view;
			});
			
			return{
				...s,
				views: [...newViews],
				mouseOnView: false,
			}
			
		})
	}
	
	markAsHovered(id){
		this.setState(s => {
			const newViews = s.views.map(view => {
				if(view.id === id){
					view.hovered = true;
				}
				return view;
			});
			
			return{
				...s,
				views: [...newViews],
				mouseOnView: true,
			}
			
		})
    }
    
    
	
	setTitle(title){
	    this.setState(s => ({
            ...s,
            title: title,
		    // titleChanged: !s.titleChanged,
            defaultTitleVisible: false,
        }))
    }
	
    getDefaultTitle(){
	    return 'ALL PAGES';
	}
	
	handleMouseEnterOnView(viewId){
	    if(this.timeoutId !== -1){
	        clearTimeout(this.timeoutId);
        }
		// this.toggleViewHover(viewId);
        this.markAsHovered(viewId);
		this.setTitle(this.state.views.find(v => v.id === viewId).title);
		
	}
	
	handleMouseLeaveOnView(viewId){
		// this.toggleViewHover(viewId);
        this.markUnhovered(viewId);
        this.timeoutId = setTimeout(()=>{
	        this.setState(s => ({...s, defaultTitleVisible: true}))
        },400);
	}
	
	viewOnHoverStyle(){
	   
    }
    
    navigateTo(url){
	    this.props.history.push(url);
    }
    
    handleViewClick(withId){
	    const {url} = this.state.views.find(v => v.id === withId);
	    this.markUnhovered(withId);
     
	    this.navigateTo(url);
    }
	
	render(){
		return(
			<div className={'over-view-page-component'}>
				<button id={'over-view-button'} onClick={() => this.handleClick()}>
					<i className="material-icons">view_module</i>
				</button>
				
				<CSSTransition
					in={this.state.visible}
					mountOnEnter
					timeout={700}
					unmountOnExit
					classNames={'over-view-animation'}
				>
					<div className="over-view" onClick={()=>this.handleClick()}>
                        <div className="title-wrapper">
                            <TransitionGroup>
                                {
                                    this.state.views.map(({title, hovered, id}) => {
                                        if(hovered){
	                                        return(
		                                        <CSSTransition
			                                        key={id}
			                                        in
			                                        appear
			                                        mountOnEnter
			                                        unmountOnExit
			                                        timeout={800}
			                                        classNames={'title-animation'}
		                                        >
			                                        <div className="title">
				                                        {this.state.title}
			                                        </div>
		                                        </CSSTransition>
	                                        )
                                        }
                                    })
                                }
                            </TransitionGroup>
                            <CSSTransition
                                in={this.state.defaultTitleVisible}
                                appear
                                mountOnEnter
                                unmountOnExit
                                timeout={800}
                                classNames={'title-animation'}
                            >
                                <div className="title">
                                    {this.getDefaultTitle()}
                                    </div>
                            </CSSTransition>
                         
                        </div>
                        
						{/*<div className="subtitle">*/}
							{/*{this.state.subtitle}*/}
						{/*</div>*/}
						<CSSTransition
							in
							appear
							mountOnEnter
                            unmountOnExit
							timeout={200}
							classNames={'views-animation'}
						>
							<div className="views">
								{
									this.state.views.map(({component ,title, id, hovered}, idx) => {
										return(
											<div
												style={{
													transitionDelay: `${25 * idx}ms`,
													transform: hovered ? 'scale(1.1)': null,
                                                    opacity: !hovered && this.state.mouseOnView ? .5 : null
												}}
                                                onClick={()=>this.handleViewClick(id)}
												key={`view_${idx}`}
												className={'view'}
												onMouseEnter={() => this.handleMouseEnterOnView(id)}
												onMouseLeave={() => this.handleMouseLeaveOnView(id)}
											>
                                                {component}
                                                <div className="overlay"/>
											</div>
										)
									})
								}
							</div>
						</CSSTransition>
					</div>
				</CSSTransition>
			</div>
		)
	}
}



export default withRouter(OverViewPageComponent);
