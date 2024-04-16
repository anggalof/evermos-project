import React, { useState, useEffect } from "react";
import db from "../../data/db.json";
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

  useEffect(() => {
    setHeaderSection(db?.data?.header);
    setBanner(db?.data?.banner);
    setOurNewProductSection(db?.data?.our_new_products);
    setOurProductSection(db?.data?.our_products);
    setOurNewsSection(db?.data?.our_news);
  }, []);

  return (
    <React.Fragment>
      <Header data={headerSection} dataBanner={banner} />
      <OurNewProducts data={ourNewProducts} />
      <SectionHeader />
      <OurProducts data={ourProducts} />
      <ProductBrand />
      <OurNews data={ourNews} />
    </React.Fragment>
  );
};

export default App;
