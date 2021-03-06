import React from 'react';
import './over-view-page-component.style.scss';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import {withRouter} from "react-router-dom";
import PopupComponent from "../../shared/components/popup-component/popup.component";
import HeaderComponent from "../../shared/components/page-header-component/header.component";
import PageTitleComponent from "../../shared/components/page-title-component/page-title.component";
import PageSubtitleComponent from "../../shared/components/page-subtitle-component/page-subtitle.component";



class OverViewPageComponent extends React.Component{

	constructor(props){
		super(props);

		this.state = {
            visible: false,
            mouseOnView: false,
            title: 'All Pages',
            defaultTitleVisible: true,
            subtitle: 'all subsites',
			views: props.pages.map(page => ({...page, hovered: false})),
			
			
			popupTop: 0,
			popupLeft: 0,
			popupVisible: false
		}
	}
	timeoutId = -1;

	
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
	
    navigateTo(url){
	    this.props.history.push(url);
    }
    
    handleViewClick(withId){
	    const {url} = this.state.views.find(v => v.id === withId);
	    this.markUnhovered(withId);
     
	    this.navigateTo(url);
    }
	
	handleButtonMouseLeave(e){
		this.setState(s => ({
			...s,
			popupVisible: false
		}))
	}
	handleButtonMouseEnter(e){
		const {top, left} = e.target.getBoundingClientRect();
		this.setState(s => ({
			...s,
			popupTop: top - 50,
			popupLeft: left + 20,
			popupVisible: true
		}))
	}
	
	render(){
		return(
			<div className={'over-view-page-component'}>
				<PopupComponent
					//visible={this.state.popupVisible}
					visible={false}
					text={'All Pages'}
					top={this.state.popupTop}
					left={this.state.popupLeft}
					fromTop
				/>
				<button
					id={'over-view-button'}
					onClick={() => this.handleClick()}
					onMouseEnter={e => this.handleButtonMouseEnter(e)}
					onMouseLeave={e => this.handleButtonMouseLeave(e)}
				>
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
                                        return hovered ?
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
	                                        : ''
                                    })
                                }
                            </TransitionGroup>
                            
	                        <CSSTransition
                                in={this.state.defaultTitleVisible}
                                appear
                                mountOnEnter
                                unmountOnExit
                                timeout={800}
                                classNames={'title-animation'}>
	                                <div className="title">
                                        {this.getDefaultTitle()}
                                     </div>
                            </CSSTransition>
	                        
                        </div>

						<CSSTransition
							in
							appear
							mountOnEnter
                            unmountOnExit
							timeout={200}
							classNames={'views-animation'}
						>
							<div className="views">
								<div className="scrolling-wrapper">
									{
										this.state.views.map(({PageComponent,title, id, hovered, url, subtitle, imgUrl, comment}, idx,) => {
											return(
												<div className={'view'}
												     style={{
													     transitionDelay: `${50 * idx}ms`,
													     transform: `translateX(-${32 * idx}%) ${hovered ? 'scale(.74)': 'scale(.7)'}`,
													     opacity: !hovered && this.state.mouseOnView ? .5 : null,
													     // filter: `blur(${!hovered && this.state.mouseOnView ? 2 : 0}px)`
												     }}
												     onClick={()=>this.handleViewClick(id)}
												     key={`view_${idx}`}
												     onMouseEnter={() => this.handleMouseEnterOnView(id)}
												     onMouseLeave={() => this.handleMouseLeaveOnView(id)}
												>
													<div className="view-content">
														{/*<PageComponent/>*/}
														<div>
															{/*<HeaderComponent/>*/}
															<PageTitleComponent title={title} comment={''}/>
															<PageSubtitleComponent
																subtitle={subtitle}
																url={imgUrl}
																comment={comment}
															/>
														</div>
														<div className="overlay"/>
													</div>
												</div>
											)
										})
									}
								</div>
							</div>
						</CSSTransition>
					</div>
				</CSSTransition>
			</div>
		)
	}
}



export default withRouter(OverViewPageComponent);
