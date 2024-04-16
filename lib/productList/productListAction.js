import { SERVICES } from "../../configs";
import axios from "axios";

export const fetchProductList = () => {
  return async (dispatch) => {
    dispatch(fetchProductListRequest());
    axios
      .get(`${SERVICES.PRODUCT_LIST}?limit=8`)
      .then((response) => {
        const productList = response.data;
        dispatch(fetchProductListSuccess(productList));
      })
      .catch((error) => {
        dispatch(fetchProductListFailure(error.message));
      });
  };
};

export const fetchProductListRequest = () => {
  return {
    type: "FETCH_PRODUCT_LIST_REQUEST",
  };
};

export const fetchProductListSuccess = (productList) => {
  return {
    type: "FETCH_PRODUCT_LIST_SUCCESS",
    payload: productList,
  };
};

export const fetchProductListFailure = (error) => {
  return {
    type: "FETCH_PRODUCT_LIST_FAILURE",
    payload: error,
  };
};
