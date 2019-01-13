import React, {Component} from 'react';
import './password-input-component.style.scss';



class PasswordInputComponent extends Component {
	
	state = {
		value: ''
	};
	
	getValue(){
		return this.props.value;
	}
	setValue(e){
		const value = e.target.value[e.target.value.length - 1] || '';
		if(value !== '-' && value !== '+'){
			this.props.onChange(value, this.props.idx);
		}
	}
	
	render() {
		return (
			<div className={'password-input-component'}>
				<input
					className={['number-input', this.props.value !== '' ? 'with-border': ''].join(' ')}
					value={this.props.value}
					type="number"
					onChange={e => this.setValue(e)}
				/>
			</div>
		);
	}
}

export default PasswordInputComponent;