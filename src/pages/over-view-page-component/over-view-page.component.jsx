import React from 'react';
import './over-view-page-component.style.scss';
import { CSSTransition} from 'react-transition-group';


class OverViewPageComponent extends React.Component{
    state = {
      visible: false
    };

    views = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
    ];

    componentDidMount(){

    }

    handleClick(){
        this.setState(s => ({
            ...s,
            visible: !s.visible
        }))
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
                        <div className="title">
                            ALL PAGES
                        </div>
                        <CSSTransition
                            //in={this.state.visible}
                            in
                            appear
                            mountOnEnter
                            timeout={200}
                            classNames={'views-animation'}
                        >
                            <div className="views">
                                {
                                    this.views.map((value, idx) => {
                                        return(
                                            <div
                                                style={{transitionDelay: `${30 * idx}ms`}}
                                                key={`view_${idx}`}
                                                className={'view'}>
                                                {value}
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



export default OverViewPageComponent;
