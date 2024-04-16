import { SERVICES } from "../../configs";
import axios from "axios";

export const fetchProductDetail = () => {
  return async (dispatch) => {
    dispatch(fetchProductDetailRequest());
    axios
      .get(`${SERVICES.PRODUCT_DETAIL}?limit=8`)
      .then((response) => {
        const productDetail = response.data;
        dispatch(fetchProductDetailSuccess(productDetail));
      })
      .catch((error) => {
        dispatch(fetchProductDetailFailure(error.message));
      });
  };
};

export const fetchProductDetailRequest = () => {
  return {
    type: "FETCH_PRODUCT_DETAIL_REQUEST",
  };
};

export const fetchProductDetailSuccess = (productDetail) => {
  return {
    type: "FETCH_PRODUCT_DETAIL_SUCCESS",
    payload: productDetail,
  };
};

export const fetchProductDetailFailure = (error) => {
  return {
    type: "FETCH_PRODUCT_DETAIL_FAILURE",
    payload: error,
  };
};
