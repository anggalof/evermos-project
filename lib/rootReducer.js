import { combineReducers } from "redux";
import productListReducer from "./productList/productListReducer";
import productDetailReducer from "./productDetail/productDetailReducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
});

export default rootReducer;
