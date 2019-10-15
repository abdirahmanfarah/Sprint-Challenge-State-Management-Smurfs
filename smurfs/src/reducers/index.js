import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/index'
const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
  
}

const reducer = (state = initialState, action) => {
  switch(action.type) {

    case START_FETCHING:
        return {
          ...state,
          isFetching:true,
          error: ''
        }
     case FETCH_SUCCESS:
       return {
          ...state,
          isFetching:false,
          error: '',
          smurfs: action.payload
  
          }
     case FETCH_FAILURE:
        return {
         ...state,
        isFetching:false
          }
      case "ADD_SMURF":
          let newSmurf = {
            smurf:action.payload
          }
    default:
      return state;
  }
}
export default reducer;