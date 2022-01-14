import { GeneralAction } from "../actions";

const initialState = {
  isAppLoading: true,
  token: "", 
};

const GeneralReducer = (state, action) => {
  switch (action.type) {
    case GeneralAction.types.SET_IS_APPLOADING:
      return { ...state, isAppLoading: action.payload };
    case GeneralAction.types.SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default GeneralReducer;
