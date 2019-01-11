import React from 'react';
import {CSSTransition} from "react-transition-group";
import './popin-component.style.scss';



class PopinComponent extends React.Component{
    state = {

    };

    componentDidMount(){

    }

    render(){
        return(
            <CSSTransition
                in={this.props.in_}
                appear
                mountOnEnter
                unmountOnExit
                timeout={1}
                classNames={'popin-component-appear-animation'}
            >
                <div className={'popin-component'}>
                    <CSSTransition
                        in={this.props.in_}
                        appear
                        mountOnEnter
                        unmountOnExit
                        timeout={10}
                        classNames={'popin-bg-appear-animation'}>
                        <div
                            onClick={e => this.props.onClick(e)}
                            className="popin-component-bg"
                        />
                    </CSSTransition>

                    <CSSTransition
                        in={this.props.in_}
                        appear
                        mountOnEnter
                        unmountOnExit
                        timeout={200}
                        classNames={'popin-appear-animation'}
                    >
                        <div className="popin">
                            {this.props.children}
                        </div>
                    </CSSTransition>
                </div>
            </CSSTransition>
        )
    }
}



export default PopinComponent;
