import * as actionTypes from "../ActionTypes/productActionType";
import axios from "axios";

const url = "http://localhost:5000";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/products`);
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
  }
};
