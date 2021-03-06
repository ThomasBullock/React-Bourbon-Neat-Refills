import React from 'react';

const VerticalTabs = (props) => {
	return(
		<div className="vertical-tabs">
		  <div className="vertical-tabs_items">
		    <a href="javascript:void(0)" className="js-vertical-tab vertical-tabs__item vertical-tabs__item--active" rel="tab1">Item 1</a>
		    <a href="javascript:void(0)" className="js-vertical-tab vertical-tabs_item" rel="tab2">Item 2</a>
		    <a href="javascript:void(0)" className="js-vertical-tab vertical-tabs_item" rel="tab3">Item 3</a>
		    <a href="javascript:void(0)" className="js-vertical-tab vertical-tabs_item" rel="tab4">Item 4</a>
		  </div>

		  <div className="vertical-tabs__content-container">
		    <a href="" className="js-vertical-tab-accordion-heading vertical-tabs__heading vertical-tabs__heading--active" rel="tab1">Item 1</a>
		    <div id="tab1" className="js-vertical-tab-content vertical-tabs__content">
		      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt pellentesque lorem, id suscipit dolor rutrum id. Morbi facilisis porta volutpat. Fusce adipiscing, mauris quis congue tincidunt, sapien purus suscipit odio, quis dictum odio tortor in sem. Ut sit amet libero nec orci mattis fringilla. Praesent eu ipsum in sapien tincidunt molestie sed ut magna. Nam accumsan dui at orci rhoncus pharetra tincidunt elit ullamcorper. Sed ac mauris ipsum. Nullam imperdiet sapien id purus pretium id aliquam mi ullamcorper.</p>
		    </div>

		    <a href="" className="js-vertical-tab-accordion-heading vertical-tabs__heading" rel="tab2">Item 2</a>
		    <div id="tab2" className="js-vertical-tab-content vertical-tabs__content">
		      <p>Ut laoreet augue et neque pretium non sagittis nibh pulvinar. Etiam ornare tincidunt orci quis ultrices. Pellentesque ac sapien ac purus gravida ullamcorper. Duis rhoncus sodales lacus, vitae adipiscing tellus pharetra sed. Praesent bibendum.</p>
		    </div>

		    <a href="" className="js-vertical-tab-accordion-heading vertical-tabs__heading" rel="tab3">Item 3</a>
		    <div id="tab3" className="js-vertical-tab-content vertical-tabs__content">
		      <p>Donec mattis mauris gravida metus laoreet non rutrum sem viverra. Aenean nibh libero, viverra vel vestibulum in, porttitor ut sapien. Phasellus tempor lorem id justo ornare tincidunt. Nulla faucibus, purus eu placerat fermentum, velit mi iaculis nunc, bibendum tincidunt ipsum justo eu mauris. Nulla facilisi. Vestibulum vel lectus ac purus tempus suscipit nec sit amet eros. Nullam fringilla, enim eu lobortis dapibus, quam magna tincidunt nibh, sit amet imperdiet dolor justo congue turpis.</p>
		    </div>

		    <a href="" className="js-vertical-tab-accordion-heading vertical-tabs__heading" rel="tab4">Item 4</a>
		    <div id="tab4" className="js-vertical-tab-content vertical-tabs__content">
		      <p>Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus dui urna, mollis vel suscipit in, pharetra at ligula. Pellentesque a est vel est fermentum pellentesque sed sit amet dolor. Nunc in dapibus nibh. Aliquam erat volutpat. Phasellus vel dui sed nibh iaculis convallis id sit amet urna. Proin nec tellus quis justo consequat accumsan. Vivamus turpis enim, auctor eget placerat eget, aliquam ut sapien.</p>
		    </div>
		  </div>
		</div>
	);
}

export { VerticalTabs };