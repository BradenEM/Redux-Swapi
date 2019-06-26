import { FETCHING, FETCHING_FAILURE, FETCHING_SUCCESS } from "../actions";
const initialState = {
  fetching: false,
  error: "",
  characters: []
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true,
        error: ""
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: "",
        characters: [...action.payload]
      };
    case FETCHING_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
