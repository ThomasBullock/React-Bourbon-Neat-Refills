const action = name => `${name}`;
const OFFCANVAS_TOGGLE = action('OFFCANVAS_TOGGLE');
// const OFFCANVAS_CLOSE = action('OFFCANVAS_CLOSE');

export const offCanvasToggle = () => ({ type: OFFCANVAS_TOGGLE });
// export const closeOffCanvas = () => ({ type: OFFCANVAS_CLOSE });

const initialState = {
    offCanvasOpen: false,
};

const offCanvas = (state = initialState, action) => {
  switch (action.type) {
   	case OFFCANVAS_TOGGLE:
      return Object.assign({}, state, {
        offCanvasOpen: !state.offCanvasOpen
      });    
   		// console.log('opening')
     //  // clone the state // Object.assign(state, {offCanvasOpen: true}) doesn't work!
     //  var newState = Object.assign({}, state);
     //  newState.offCanvasOpen = !newState.offCanvasOpen;
     //  return newState;

    // case OFFCANVAS_CLOSE:
    //   return Object.assign(state, {offCanvasOpen: false});

    default:
      return state;
  }
};

export default offCanvas;
