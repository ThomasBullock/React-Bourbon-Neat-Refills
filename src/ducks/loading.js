const action = name => `birdnerd/auth/${name}`;
const LOAD = action('LOAD');
const LOADED = action('LOADED');

export const load = () => ({ type: LOAD });
export const loaded = () => ({ type: LOADED });

const initialState = {
    currentState: false,
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return Object.assign(state, {currentState: true});

    case LOADED:
      return Object.assign(state, {currentState: false});

    default:
      return state;
  }
};

export default loading;
