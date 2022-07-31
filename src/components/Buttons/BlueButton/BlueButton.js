import React from 'react';
import './blueButton.css';

const BlueButton = ({ text }) => {
	return (
		<>
			<button type="text" className="blue-btn">
				{text}
			</button>
		</>
	);
};

export default BlueButton;
