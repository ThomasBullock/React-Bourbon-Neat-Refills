import React from 'react';

const Parallax = (image) => {
	return(
		<div id="js-parallax-window" className="parallax">
		  <div className="parallax__static">
		    <b>Parallax Window</b>
		  </div>
		  <div id="js-parallax-background" className="parallax__background"></div>
		</div>
	)
}

export { Parallax }