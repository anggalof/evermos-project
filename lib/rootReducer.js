import { combineReducers } from "redux";
import productListReducer from "./productList/productListReducer";
import newProductListReducer from "./newProductList/newProductListReducer";
import productDetailReducer from "./productDetail/productDetailReducer";
import newProductDetailReducer from "./newProductDetail/newProductDetailReducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  newProductList: newProductListReducer,
  productDetail: productDetailReducer,
  newProductDetail: newProductDetailReducer,
});

export default rootReducer;
