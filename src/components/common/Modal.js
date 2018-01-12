import React from 'react';

const Modal = (props) => {
	return (
		<div className="modal">
		  <label for="modal__label">
		    <div className="modal__trigger">Click for Modal</div>
		  </label>
		  <input className="modal__state" id="modal-1" type="checkbox" />
		  <div className="modal__fade-screen">
		    <div className="modal__inner">
		      <div className="modal__close" for="modal-1"></div>
		      <h1>Modal Title</h1>
		      <p className="modal__intro">Intro text lorem ipsum dolor sit ametm, quas, eaque facilis aliquid cupiditate tempora cumque ipsum accusantium illo modi commodi  minima.</p>
		      <p className="modal__content">Body text lorem ipsum dolor ipsum dolor sit sit possimus amet, consectetur adipisicing elit. Itaque, placeat, explicabo, veniam quos aperiam molestias eriam molestias molestiae suscipit ipsum enim quasi sit possimus quod atque nobis voluptas earum odit accusamus quibusdam. Body text lorem ipsum dolor ipsum dolor sit sit possimus amet.</p>
		    </div>
		  </div>
		</div>
	)
}

export { Modal };