import { SERVICES } from "../../configs";
import axios from "axios";

export const fetchNewProductDetail = (id) => {
  return async (dispatch) => {
    dispatch(fetchNewProductDetailRequest());
    axios
      .get(`${SERVICES.NEW_PRODUCT_LIST}/${id}`)
      .then((response) => {
        const newProductDetail = response.data;
        dispatch(fetchNewProductDetailSuccess(newProductDetail));
      })
      .catch((error) => {
        dispatch(fetchNewProductDetailFailure(error.message));
      });
  };
};

export const fetchNewProductDetailRequest = () => {
  return {
    type: "FETCH_NEW_PRODUCT_DETAIL_REQUEST",
  };
};

export const fetchNewProductDetailSuccess = (newProductDetail) => {
  return {
    type: "FETCH_NEW_PRODUCT_DETAIL_SUCCESS",
    payload: newProductDetail,
  };
};

export const fetchNewProductDetailFailure = (error) => {
  return {
    type: "FETCH_NEW_PRODUCT_DETAIL_FAILURE",
    payload: error,
  };
};
