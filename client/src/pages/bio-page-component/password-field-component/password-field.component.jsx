import React, {Component} from 'react';
import './password-field-component.style.scss';
import PasswordInputComponent from "./password-input-component/password-input.component";
// import PopupComponent from "../../../shared/components/popup-component/popup.component";



class PasswordFieldComponent extends Component {
	
	state = {
		inputs: [
			{
				value:'',
				focused: true
			},
			{
				value:'',
				focused: true
			},
			{
				value:'',
				focused: true
			},
			{
				value:'',
				focused: true
			}
		],
		popup: {
			visible: false,
			pos: {
				top: 0,
				left: 0,
			}
		}
	};
	
	inputValid(){
		const inputsValues = this.getInputs().map(({value})=> value);
		return !inputsValues.includes('');
	}
	getPopupPos(){
		return {...this.state.popup.pos};
	}
	
	
	setValue(value, idx){
		const newValues = this.getInputs();
		newValues[idx].value = value;
		this.setState(s=> ({
			...s,
			inputs: newValues
		}))
	}
	
	getInputs(){
		return [...this.state.inputs]
	}
	
	closePopin(e){
		this.props.onClose(e);
	}
	
	getPopupVisability(){
		return this.state.popup.visible;
	}
	popupVisible(){
		return this.getPopupVisability() //&& this.inputValid();
	}
	
	showPopup(e){
		const top = e.target.getBoundingClientRect().top - 60;
		const left = e.target.getBoundingClientRect().left + 25;
		console.log(e.target.getBoundingClientRect());
		this.setState(s => ({
			...s,
			popup: {
				...s.popup,
				visible: true,
				pos: {
					top: top,
					left: left
				}
			}
		}))
	}
	hidePopUp(e){
		console.log('hier');
		this.setState(s => ({
			...s,
			popup: {
				...s.popup,
				visible: false,
			}
		}))
	}
	
	render() {
		return (
			<div className={'password-field-component'}>
				<div className={'center'}>
					<h2>Password required!</h2>
					<p>please enter the provided password</p>
				</div>
				<div className="password-field">
					{
						this.getInputs().map(({value},idx) => {
							return(
								<PasswordInputComponent
									key={`password-input-${idx}`}
									value={value}
									idx={idx}
									onChange={(value, idx) => this.setValue(value, idx)}
								/>
							)
						})
					}
					
				</div>
				<div className="send-button-wrapper">
					{/*<PopupComponent*/}
						{/*showTop={true}*/}
						{/*visible={this.popupVisible()}*/}
						{/*topPos={this.getPopupPos().top}*/}
						{/*leftPos={this.getPopupPos().left}*/}
						{/*text={'Please enter the password'} />*/}
					<button
						disabled={!this.inputValid()}
						onClick={(e)=>this.closePopin(e)}
						onMouseEnter={(e) => this.showPopup(e)}
						onMouseLeave={(e) => this.hidePopUp(e)}
					>
						Download
					</button>
				</div>
			</div>
		);
	}
}

export default PasswordFieldComponent;