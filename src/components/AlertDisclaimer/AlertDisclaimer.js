import React from 'react';
import { toast } from 'react-toastify';
import './alertDisclaimer.css';

const AlertDisclaimer = ({ closeToast, setNotified }) => {
	const handleDisclaimer = () => {
		setNotified(window.localStorage.setItem('notified', true));
		toast.clearWaitingQueue();
		closeToast();
	};
	return (
		<div className="disclaimer-container">
			<h2>DISCLAIMER</h2>
			<p>
				This web is not related to Mercado Libre. It was made it just for
				practical purposes.
			</p>
			<br />
			<button className="disclaimer-btn" onClick={handleDisclaimer}>
				Don't show this again
			</button>
		</div>
	);
};

export default AlertDisclaimer;
