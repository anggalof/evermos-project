import { SERVICES } from "../../configs";
import axios from "axios";

export const fetchNewProductList = () => {
  return async (dispatch) => {
    dispatch(fetchNewProductListRequest());
    axios
      .get(SERVICES.NEW_PRODUCT_LIST)
      .then((response) => {
        const newProductList = response;
        dispatch(fetchNewProductListSuccess(newProductList));
      })
      .catch((error) => {
        dispatch(fetchNewProductListFailure(error.message));
      });
  };
};

export const fetchNewProductListRequest = () => {
  return {
    type: "FETCH_NEW_PRODUCT_LIST_REQUEST",
  };
};

export const fetchNewProductListSuccess = (newProductList) => {
  return {
    type: "FETCH_NEW_PRODUCT_LIST_SUCCESS",
    payload: newProductList,
  };
};

export const fetchNewProductListFailure = (error) => {
  return {
    type: "FETCH_NEW_PRODUCT_LIST_FAILURE",
    payload: error,
  };
};
