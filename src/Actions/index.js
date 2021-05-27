import {
  API_ALL_COINS,
  API_KEY,
  API_GET_PRICES,
  API_HISTORICAL_DATA,
} from "../Config/index";
import {
  GET_COINS,
  GET_PRICES,
  GET_HISTORICAL,
  DELETE_HISTORICAL,
} from "./actionTypes";
import axios from "axios";

export const getCoins = () => ({
  type: GET_COINS,
  payload: axios.get(API_ALL_COINS),
});

export const getPrices = (sym) => ({
  type: GET_PRICES,
  payload: axios.get(`${API_GET_PRICES}${sym}&tsyms=USD,EUR`),
});

export const getHistorical = (res) => ({
  type: GET_HISTORICAL,
  payload: res,
});

export const deleteHistorical = () => ({
  type: DELETE_HISTORICAL,
  payload: [],
});
