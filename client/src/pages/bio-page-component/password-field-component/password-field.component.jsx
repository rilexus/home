import React, {Component} from 'react';
import './password-field-component.style.scss';
import PasswordInputComponent from "./password-input-component/password-input.component";
// import {getServerURL} from "../../../utils";


class PasswordFieldComponent extends Component {
	
	state = {
		error: false,
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
		return this.getParsedValue().length === 4;
	}

	getPopupPos(){
		return {...this.state.popup.pos};
	}
	
	
	
	
	requestDownload(){
		if(this.inputValid()) {
            fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/cv/download`, {
                method: 'POST',
				headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
				},
                body: JSON.stringify({query: this.getParsedValue()})
            }).then(res => {
	            	if(res.status === 200) {
			            return res.blob()
		            } else {
			            this.setError();
		            }
            }).then(blob => {
            	const a = this.linkRef.current;
            	const url = window.URL.createObjectURL(blob);
            	a.download = 'Lebenslauf.pdf';
            	a.href = url;
            	a.click();
            	a.href = '';
            	this.closePopin({});
            }).catch(err => console.error(err));
        }
	}

	getParsedValue(){
		const value = this.state.inputs.map(v =>v.value).join('');
		return value;
	}
	
	setValue(value, idx){
		const newValues = this.getInputs();
		newValues[idx].value = value;
		this.setState(s=> ({
			...s,
			inputs: newValues
		}));
		const v = newValues.map(v => v.value);
		this.props.onChange(v.join(''));
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
		this.setState(s => ({
			...s,
			popup: {
				...s.popup,
				visible: false,
			}
		}))
	}
	
	setError(){
		this.setState(s => ({
			...s,
			error: true,
			inputs: s.inputs.map((inp, idx) => ({
				...s.inputs[idx],
				value: ''
			}))
		}))
	}
	
	
	
	
	
	
	linkRef = React.createRef();
	
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
									error={this.state.error}
									idx={idx}
									onChange={(value, idx) => this.setValue(value, idx)}
								/>
							)
						})
					}
					
				</div>
				<div className="send-button-wrapper">
					
					<button
						disabled={!this.inputValid()}
						onClick={(e)=>this.requestDownload()}
						onMouseEnter={(e) => this.showPopup(e)}
						onMouseLeave={(e) => this.hidePopUp(e)}
					>
						Download
					</button>
					<a ref={this.linkRef}/>
				</div>
			</div>
		);
	}
}

export default PasswordFieldComponent;