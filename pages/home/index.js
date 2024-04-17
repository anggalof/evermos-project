import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import sections from "../../data/sections.json";
import { fetchProductList, fetchNewProductList } from "../../lib";
import { Header } from "../../components/sections/Header";
import { OurNewProducts } from "../../components/sections/OurNewProducts";
import { OurProducts } from "../../components/sections/OurProducts";
import { OurNews } from "../../components/sections/OurNews";
import { SectionHeader } from "../../components/sections/SectionHeader";
import { ProductBrand } from "../../components/sections/ProductBrand";

const App = () => {
  const [headerSection, setHeaderSection] = useState({});
  const [banner, setBanner] = useState([]);
  const [ourNewProducts, setOurNewProductSection] = useState({});
  const [ourProducts, setOurProductSection] = useState({});
  const [ourNews, setOurNewsSection] = useState({});
  const isNewProductLoading = useSelector((state) => state.newProductList.loading);
  const newProductList = useSelector((state) => state.newProductList.newProductList);
  const isProductLoading = useSelector((state) => state.productList.loading);
  const productList = useSelector((state) => state.productList.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductList());
    dispatch(fetchNewProductList());
  }, []);

  useEffect(() => {
    if (newProductList) {
      setOurNewProductSection(newProductList.data);
    }

    if (productList) {
      setOurProductSection(productList.data);
    }
  }, [newProductList, productList]);

  useEffect(() => {
    setHeaderSection(sections?.data?.header);
    setBanner(sections?.data?.banner);
    setOurNewsSection(sections?.data?.our_news);
  }, []);

  return (
    <React.Fragment>
      <Header data={headerSection} dataBanner={banner} />
      <OurNewProducts data={ourNewProducts} loading={isNewProductLoading} />
      <SectionHeader />
      <OurProducts data={ourProducts} loading={isProductLoading} />
      <ProductBrand />
      <OurNews data={ourNews} />
    </React.Fragment>
  );
};

export default App;
