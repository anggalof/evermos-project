const initialState = {
  loading: false,
  productDetail: {},
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_DETAIL_REQUEST":
      return {
        loading: true,
      };
    case "FETCH_PRODUCT_DETAIL_SUCCESS":
      return {
        loading: false,
        productDetail: action.payload,
        error: "",
      };
    case "FETCH_PRODUCT_DETAIL_FAILURE":
      return {
        loading: false,
        productDetail: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
