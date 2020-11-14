import { API_ALL_COINS, API_KEY } from "../Config/index";
import { GET_COINS } from "./actionTypes";
import axios from "axios";

export const getCoins = () => ({
  type: GET_COINS,
  payload: axios.get(API_ALL_COINS),
});
