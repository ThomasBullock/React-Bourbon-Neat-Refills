import React from 'react';

const Switch = (props) => {
	const { switchHandler } = props;
	return (
		<label className="switch">
			<input className="switch__input "type="checkbox" onClick={() => switchHandler()} />
			<div className="switch__checkbox" />
		</label>
	);
};

export { Switch };
