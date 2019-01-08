import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './slideshow-page-component.style.scss';


class SlideshowPageComponent extends React.Component {
    state = {
        slides: 3,
        curSlide: 0
    };

    componentDidMount() {
        const screenHeight = 900 * this.state.slides;

    }

    nextSlide() {
        this.setState(s => ({
            ...s,
            curSlide: s.curSlide < s.slides ? s.curSlide + 1 : s.curSlide
        }));
    }

    prevSlide() {
        this.setState(s => ({
            ...s,
            curSlide: s.curSlide > 0 ? s.curSlide - 1 : 0
        }));
    }
    handleScroll(e){
        // this.setState(s => ({
        //     ...s,
        // }));
        this.nextSlide();
    }

    render() {
        return (
            <div className={'slide-show-component'}
                 onScroll={(e) => this.handleScroll(e)}

            >
                <CSSTransition
                    in
                    appear
                    timeout={200}
                    classNames={'slide-show-appear-animation'}
                >
                    <div className={'slides-wrapper'}>
                        {
                            this.state.curSlide === 0 ?
                                <div className="slide-show-slide"
                                     style={{backgroundColor: 'red'}}
                                >
                                    0
                                </div>
                            : null
                        }
                        {
                            this.state.curSlide === 1 ?
                                <div className="slide-show-slide"
                                     style={{backgroundColor: 'blue'}}
                                >
                                    1
                                </div>
                                : null
                        }
                        {
                            this.state.curSlide === 2 ?
                                <div className="slide-show-slide"
                                     style={{backgroundColor: 'yellow'}}
                                >
                                    2
                                </div>
                                : null
                        }
                        {
                            this.state.curSlide === 3 ?
                                <div className="slide-show-slide"
                                     style={{backgroundColor: 'green'}}
                                >
                                    4
                                </div>
                                : null
                        }
                    </div>
                </CSSTransition>
            </div>
        )
    }
}


export default SlideshowPageComponent;
