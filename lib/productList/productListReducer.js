const initialState = {
  loading: false,
  productList: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_LIST_REQUEST":
      return {
        loading: true,
      };
    case "FETCH_PRODUCT_LIST_SUCCESS":
      return {
        loading: false,
        productList: action.payload,
        error: "",
      };
    case "FETCH_PRODUCT_LIST_FAILURE":
      return {
        loading: false,
        productList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
