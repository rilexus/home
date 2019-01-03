import React from 'react';
import './with3DEffect.scss';


class Wth3DEffect extends React.Component{
	
	state = {
		hoveredTile: 0
	};
	
	handleMouseEnter(tileNumber){
		console.log('hovered:', tileNumber);
		this.setState(s => ({
			...s,
			hoveredTile: tileNumber
		}))
	}
	
	render(){
		return(
			<div
				className={['with3DEffect', `hovered_${this.state.hoveredTile}`].join(' ')}
				onMouseLeave={() => this.setState(s => ({...s, hoveredTile: -1}))}
			>
				<div className={['tile t_1']} onMouseEnter={()=>this.handleMouseEnter(1)}/>
				<div className={'tile t_2'} onMouseEnter={()=>this.handleMouseEnter(2)}/>
				<div className={'tile t_3'} onMouseEnter={()=>this.handleMouseEnter(3)}/>
				
				<div className={'tile t_4'} onMouseEnter={()=>this.handleMouseEnter(4)}/>
				<div className={'tile t_5'} onMouseEnter={()=>this.handleMouseEnter(5)}/>
				<div className={'tile t_6'} onMouseEnter={()=>this.handleMouseEnter(6)}/>
				
				<div className={'tile t_7'} onMouseEnter={()=>this.handleMouseEnter(7)}/>
				<div className={'tile t_8'} onMouseEnter={()=>this.handleMouseEnter(8)}/>
				<div className={'tile t_9'} onMouseEnter={()=>this.handleMouseEnter(9)}/>
				<div className={'with3D-component-wrapper'}>
					{
						this.props.children
					}
				</div>
			</div>
		);
	}
};

export default Wth3DEffect;