import React, { Component } from 'react';

const renderTabs = (tabs, selectHandler) => {
	return tabs.map( (tab) => {
		const classNames = (tab.visible) ? 'accordion-tabs__link--active accordion-tabs__link' : 'accordion-tabs__link';
		return (
				<li key={tab.title} className="accordion-tabs__item" onClick={ () => selectHandler(tab.title) }>
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
	return (
			<ul className="accordion-tabs">
				{renderTabs(tabs, selectHandler)}
			</ul>
		);

};

export { AccordionTabs };

