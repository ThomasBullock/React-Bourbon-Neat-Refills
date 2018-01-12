import React, { Component } from 'react';

const renderTabs = (tabs, selectHandler) => {
	console.log(tabs);
	return Array.from(tabs).map( (tab, i) => {
		const classNames = (tab.visible) ? 'accordion-tabs__link--active accordion-tabs__link' : 'accordion-tabs__link';
		return (
				<li key={i} className="accordion-tabs__item" onClick={ () => selectHandler(i) }>
					<a href="javascript:void(0)" className={classNames}>{tab.title}</a>
					<div className="accordion-tabs__content">
						<p>{tab.content}</p>
					</div>
				</li>		
		);
	});
}

const AccordionTabs = (props) => {
	const { tabs, selectHandler } = props;
	console.log(tabs);
	return (
			<ul className="accordion-tabs">
				{renderTabs(tabs, selectHandler)}
			</ul>
		);

};

export { AccordionTabs };

