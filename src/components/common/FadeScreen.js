import React from 'react';


const FadeScreen = (props) => {
	const { visible, switchHandler } = props;
	const canvasClasses = (visible) ? 'fade-screen fade-screen--visible' : 'fade-screen';
	return (
		<div className={canvasClasses} onClick={ () => switchHandler() }></div>
	);
};

export { FadeScreen };
