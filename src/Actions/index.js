import { API_ALL_COINS, API_KEY } from "../Config/index";
import { GET_COINS } from "./reqTypes";
import axios from "axios";

export const getCoins = async () => {
  try {
    const response = await axios.get(`${API_ALL_COINS}${API_KEY}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
