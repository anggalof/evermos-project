import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import Head from 'next/head';
import { fetchProductDetail, fetchNewProductDetail } from "../../../../lib";
import sections from "../../../../data/sections.json";
import Breadcrumb from '../../../../components/common/Breadcrumb';
import Loading from '../../../../components/common/Loading';
import { priceSplitter } from '../../../../utils/formatter/currency';

const ProductDetail = () => {
  const [ourProductDetail, setOurProductDetail] = useState({});
  const [dataTab, setTabDetail] = useState('info');
  const [varian, setVarian] = useState('');
  const [shipping, setShipping] = useState([]);
  const [moreDetail, setMoreDetail] = useState(true);
  const [moreTitle, setMoreTitle] = useState('Lihat Selengkapnya');
  const router = useRouter();

  const newProductDetail = useSelector((state) => state.newProductDetail.newProductDetail);
  const productDetail = useSelector((state) => state.productDetail.productDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    if (router.query && router.query.id) {
      if (router.query.id.includes('product')) {
        dispatch(fetchNewProductDetail(router.query.id));
      } else {
        dispatch(fetchProductDetail(router.query.id));
      }
    }
  }, [router.query]);

  useEffect(() => {
    setOurProductDetail(newProductDetail || productDetail);
    setVarian(newProductDetail ? newProductDetail.defaultVarian : (productDetail && productDetail.defaultVarian));
    setShipping(sections?.data?.shipping);
  }, [newProductDetail, productDetail]);

  const handleMore = () => {
    setMoreDetail(!moreDetail);
    if (moreTitle === 'Lihat Selengkapnya') {
      setMoreTitle('Lihat Lebih Sedikit');
    } else {
      setMoreTitle('Lihat Selengkapnya');
    }
  };

  const handleClick = (tab) => {
    setTabDetail(tab);
  };

  const handleVarian = (title) => {
    setVarian(title);
  };

  const renderTitle = (product) => {
    let title = product.name;
    title += ` - ${varian}`;
    return title;
  };

  if (Object.keys(ourProductDetail).length === 0 && !varian) {
    return <Loading />;
  }

  return (
    <div id="product-detail">
      <Head>
        <title>{`Jual ${ourProductDetail.name} Berkualitas & Dijamin Murah. Kualitas terbaik dengan harga terjangkau`}</title>
        <meta
          name="title"
          content={`Jual ${ourProductDetail.name} Berkualitas & Dijamin Murah. Kualitas terbaik dengan harga terjangkau`}
        />
        <meta
          name="description"
          content="Transaksi di jamin aman dan amanah di evermos.com - Tempat jual beli semua produk dengan banyak pilihan cek selengkapnya!"
        />
        <meta name="author" content="@anggalof" />
        <meta
          property="og:title"
          content={`Jual ${ourProductDetail.name} Berkualitas & Dijamin Murah. Kualitas terbaik dengan harga terjangkau`}
          key="ogtitle"
        />{' '}
        <meta
          property="og:description"
          content="Transaksi di jamin aman dan amanah di evermos.com - Tempat jual beli semua produk dengan banyak pilihan cek selengkapnya!"
          key="ogdesc"
        />
        <meta property="og:image" content="/images/evermos-logo.png" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:type" content="product" />
        <meta
          property="og:image:alt"
          content={ourProductDetail.name}></meta>
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/evermos-logo.png" />
      </Head>

      <Breadcrumb titleGeneral={ourProductDetail.name} />

      <div className="container">
        <div className="product-detail__wrapper">
          <div className="product-detail__view">
            <div className="product-detail__image">
              <div className="product-detail__grid-image">
                <div className="product-detail__default">
                  <img src={ourProductDetail.image_url} alt={ourProductDetail.name} width={88} height={88} />
                </div>
              </div>
            </div>
            <div className="product-detail__content">
              <h2>{renderTitle(ourProductDetail)}</h2>
              <div className="product-detail__see">
                <i className="fa fa-eye"></i> 20000x dilihat
              </div>
              <div className="product-detail__price">
                {ourProductDetail.varian.map((item, index) => {
                  if (item.name === varian) {
                    return (
                      <div className="product-detail__price-varian" key={index}>
                        Rp. {priceSplitter(item.price)}
                      </div>
                    );
                  }
                })}
              </div>
              <div className="product-detail__information">
                {ourProductDetail.varian.length > 1 && (
                  <div className="product-detail_box-info size-block">
                    <b>Pilih varian:</b>
                    <div className="product-detail__varian">
                      {ourProductDetail.varian.map((v, index) => {
                        return (
                          <div
                            className={`product-detail__varian-title ${v.name === varian && 'product-detail__varian-active'}`}
                            key={index}
                            onClick={() => handleVarian(v.name)}>
                            {v.name}
                          </div>
                        );
                      })}
                    </div>
                    <div className="line-general"></div>
                  </div>
                )}
              </div>
              <div className="product-detail__order">
                <div className="product-detail__order-button">
                  Beli Sekarang
                </div>
              </div>
              <div className="product-detail__tab">
                <div
                  className={`product-detail__tab-title ${dataTab === 'info' && 'product-detail__tab-active'}`}
                  onClick={() => handleClick('info')}>
                  Info Penting
                </div>
              </div>
              <div className="product-detail__line"></div>
              {dataTab === 'info' && (
                <>
                  <div className="product-detail__box-info">
                    <div className="product-detail__verified-wrapper">
                      <div className="product-detail__verified-content">
                        <img
                          src="/images/icons/icon-verified.png"
                          alt="verified"
                          width={14}
                          height={14}
                        />
                        <span>Verified</span>
                      </div>
                      <div className="product-detail__verified-desc">
                        Transaksi Aman dan Terpercaya di Evermos
                      </div>
                    </div>
                    <div className="product-detail__info">
                      <span>Tipe</span>
                      <span>: {ourProductDetail.product_type}</span>
                    </div>
                    <div className="product-detail__info">
                      <span>Kondisi</span>
                      <span className="variant-color">: Baru</span>
                    </div>
                    <div className="product-detail__info">
                      <span>Garansi</span>
                      <span>: Klaim tersedia apabila terdapat video unboxing</span>
                    </div>
                  </div>
                  <div className="product-detail__line" />
                  <div className="product-detail__content-info">
                    <div
                      className={`${
                        moreDetail ? 'product-detail__content-desc' : 'product-detail__content-description'
                      }`}
                      dangerouslySetInnerHTML={{
                        __html: 
                          "Barang di jamin baru dan harga bersaing bisa dibilang lebih murah. <br /><br />Jadi jangan ragu untuk beli dikita, bisa tanya-tanya seputar produk yang ingin di beli secara free. Barang juga siap dikirim untuk seluruh pengiriman di Indonesia sampai langsung ke depan rumah Anda."
                      }}
                    />
                  </div>
                  <div className="product-detail__desc-more" onClick={handleMore}>
                    {moreTitle}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="product-detail__information">
            {ourProductDetail.varian.length > 0 && (
              <div className="product-detail__box-info size-none">
                <h2>Pilih varian:</h2>
                <div className="product-detail__varian-detail">
                  {ourProductDetail.varian.map((v, index) => {
                    return (
                      <div
                        className={`product-detail__varian-title ${v.name === varian && 'product-detail__varian-active'}`}
                        key={index}
                        onClick={() => handleVarian(v.name)}>
                        {v.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            <div className="product-detail__box-info">
              <h2>Pengiriman</h2>
              <div className="product-detail__send-from">
                <img src="/images/icons/location.png" alt="location" className="product-detail__location-img" />
                <span>Dikirim dari</span>
                <span>{ourProductDetail.location}</span>
              </div>
              <div className="product-detail__shipping">
                {shipping.map((cargo, index) => {
                  return (
                    <div key={index}>
                      <div className="product-detail__shipping-info">
                        <img src={cargo.image} alt="cargo-delivery" width={128} height={96} />
                        <div className="product-detail__shipping-desc">
                          <div>via {cargo.name}</div>
                          <label>
                            <i className="fa fa-check"></i>Tersedia
                          </label>
                        </div>
                      </div>
                      <div className="product-detail__line"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
