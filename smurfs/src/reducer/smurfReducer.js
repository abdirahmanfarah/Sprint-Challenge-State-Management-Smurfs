import {
  FETCHING_SMURF_SUCCESS,
  FETCHING_SMURF_FAILURE,
  ADDING_SMURF,
  ADDING_SMURF_FAILURE
} from '../actions';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch(action.type) {

    case FETCHING_SMURF_SUCCESS:
        return [...state, ...action.payload]

    case FETCHING_SMURF_FAILURE:
      return [...state]
    
    case ADDING_SMURF: 
      return [...state, action.payload]

    case ADDING_SMURF_FAILURE: 
      return [...state]
    default: 
      return state;
   }
}
export default reducer;