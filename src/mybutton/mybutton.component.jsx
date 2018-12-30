import React from 'react';
import './mybutton-component.style.scss';



const MyButtonComponent = (props) => {
	return(
		<button className={'myButton'}
		        onClick={() => props.onClick()}
		>+</button>
	);
};

export default MyButtonComponent;
