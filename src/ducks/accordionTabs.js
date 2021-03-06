const action = name => `${name}`;
const REQUEST_TAB_CONTENT = action('REQUEST_TAB_CONTENT');
const RECEIVE_TAB_CONTENT = action('RECEIVE_TAB_CONTENT');
const TAB_SELECT = action('TAB_SELECT');

export const requestTabContent = () => ({ type: REQUEST_TAB_CONTENT });
export const receiveTabContent = () => ({ type: RECEIVE_TAB_CONTENT });
export const tabSelect = (tab) => ({ type: TAB_SELECT, tab });

const initialState = [
		// key: null,
		// title: null,
		// content: null,
		// loading: false,
  //   tabSelected: false,
	{
		title: "Bombers",
		content: "Not everyone’s a hypocrite. Some of us will pour one out for the late Flo Bjelke-Petersen, purely to send the old witch down to whatever level of hell currently plays host to the tormented shade of her unlamented husband, Sir Joh, the last of the hillbilly dictators.",
		visible: true,		
	},
	{
		title: "Magpies",
		content: "If ever you needed another reason to stoke your contempt for the top hatted muppet currently impersonating a Prime Minister (spoiler, I know you don’t) Mycroft Trumble’s dewy eyed tweet in praise of Lady Flo this week was just the ticket.",
		visible: false,		
	}  
];



const accordionTabs = (state = initialState, action) => {
	switch (action.type) {
		case TAB_SELECT:
			// [...state.slice(0, action.tab), 
			//         Object.assign({}, state[action.tab], {visible: true}),
			//         ...state.slice(action.tab + 1)]		
			// return Object.assign([...state], {} state, {

			// })
			// console.log(action.tab);
			var newState = state.slice();
			console.log(newState);
			for(var i = 0; i < newState.length; i++) {
				console.log(newState[i]);
				newState[i].visible = false;				
			};
			newState[action.tab].visible = true;
			console.log(newState)
			return newState;
		default:
			return state;
	}
};

export default accordionTabs;