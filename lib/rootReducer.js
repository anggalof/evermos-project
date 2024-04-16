import { combineReducers } from "redux";
import productListReducer from "./productList/productListReducer";
import newProductListReducer from "./newProductList/newProductListReducer";
import productDetailReducer from "./productDetail/productDetailReducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  newProductList: newProductListReducer,
  productDetail: productDetailReducer,
});

export default rootReducer;
