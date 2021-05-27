import {
  GET_COINS,
  GET_PRICES,
  GET_HISTORICAL,
  DELETE_HISTORICAL,
} from "../Actions/actionTypes";

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
    case `${GET_PRICES}_FULFILLED`: {
      const success = action.payload.status;
      if (success !== 200) {
        return state;
      }
      return {
        ...state,
        coinPrices: {
          data: action.payload.data.DISPLAY,
          message: action.payload.statusText,
          response: action.payload.status,
        },
      };
    }
    case `${GET_HISTORICAL}`: {
      return {
        ...state,
        historicalData: {
          data: action.payload,
        },
      };
    }
    case `${DELETE_HISTORICAL}`: {
      return {
        ...state,
        historicalData: {
          data: action.payload,
        },
      };
    }
    default:
      return state;
  }
};
export default coinsReducer;
