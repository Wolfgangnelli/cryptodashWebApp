import { API_ALL_COINS, API_KEY, API_GET_PRICES } from "../Config/index";
import { GET_COINS, GET_PRICES } from "./actionTypes";
import axios from "axios";

export const getCoins = () => ({
  type: GET_COINS,
  payload: axios.get(API_ALL_COINS),
});

export const getPrices = (sym) => ({
  type: GET_PRICES,
  payload: axios.get(`${API_GET_PRICES}${sym}&tsyms=USD,EUR`),
});
