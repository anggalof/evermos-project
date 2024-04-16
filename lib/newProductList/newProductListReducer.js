const initialState = {
  loading: false,
  newProductList: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NEW_PRODUCT_LIST_REQUEST":
      return {
        loading: true,
      };
    case "FETCH_NEW_PRODUCT_LIST_SUCCESS":
      return {
        loading: false,
        newProductList: action.payload,
        error: "",
      };
    case "FETCH_NEW_PRODUCT_LIST_FAILURE":
      return {
        loading: false,
        newProductList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
