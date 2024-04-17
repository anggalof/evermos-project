const initialState = {
  loading: false,
  newProductDetail: {},
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NEW_PRODUCT_DETAIL_REQUEST":
      return {
        loading: true,
      };
    case "FETCH_NEW_PRODUCT_DETAIL_SUCCESS":
      return {
        loading: false,
        newProductDetail: action.payload,
        error: "",
      };
    case "FETCH_NEW_PRODUCT_DETAIL_FAILURE":
      return {
        loading: false,
        newProductDetail: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
