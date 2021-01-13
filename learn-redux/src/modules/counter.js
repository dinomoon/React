const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const SET_DIFF = 'counter/SET_DIFF';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const setDiff = (diff) => ({ type: SET_DIFF, diff });

const initialState = {
  number: 0,
  diff: 1,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case 'SET_DIFF':
      return {
        ...state,
        diff: action.diff,
      };
    case 'INCREASE':
      return {
        ...state,
        number: state.number + 1,
      };
    case 'DECREASE':
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
}
