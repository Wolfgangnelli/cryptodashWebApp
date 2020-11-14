import { GET_COINS } from "../Actions/actionTypes";

const coinsReducer = (state = {}, action) => {
  switch (action.type) {
    case `${GET_COINS}_FULFILLED`: {
      const success = action.payload.data.Response;
      if (!success) {
        return state;
      }
      return {
        ...state,
        listCoins: {
          response: action.payload.data.Response,
          message: action.payload.data.Message,
          data: action.payload.data.Data,
        },
      };
    }
    default:
      return state;
  }
};
export default coinsReducer;
