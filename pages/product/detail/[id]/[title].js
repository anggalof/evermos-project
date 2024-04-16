import React, { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';
import { fetchProductList, fetchNewProductList } from "../../lib";
import Breadcrumb from '../../../../components/Breadcrumb';
import CarouselPhotos from '../../../../components/CarouselPhotos';
import Loading from '../../../../components/Loading';
// import Related from '../../../../components/Related';
import { priceSplitter } from '../../../../utils/formatter/currency';

const ProductDetail = (props) => {
  const { dataProduct, dataProductRelated, query, host } = props;
  const product = dataProduct.data;
  const [dataTab, setTabDetail] = useState('info');
  const [varian, setVarian] = useState(product.defaultVariant);
  const [openShare, setShare] = useState(false);
  const [moreDetail, setMoreDetail] = useState(true);
  const [moreTitle, setMoreTitle] = useState('Lihat Selengkapnya');
  const modal = useRef(null);

  useEffect(() => {
    analytics(dataProduct);
  }, [dataProduct, dataProductRelated]);

  useEffect(() => {
    setVarian(product.defaultVariant);
  }, [product.defaultVariant]);

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

  const handleShare = () => {
    setShare(!openShare);
  };

  const handleCloseShareOutside = () => {
    if (openShare) {
      setShare(false);
    }
  };

  const analytics = useCallback(
    (content) => {
      if (Object.keys(content).length !== 0) {
        const category = !content.category ? content.type : content.category[0].name;
        ga.event({
          action: 'view_item_product',
          params: {
            event_category: category,
            event_label: `${content.title} - ${varian}`
          }
        });
      }
    },
    [varian]
  );

  const renderTitle = (product) => {
    let title = `Jual ${product.title} `;

    if (product.category[0].name === 'Kucing') {
      title = `${product.title} `;
    }

    if (product.category[0].name !== 'Telur' && product.category[0].name !== 'Kucing' && product.category[0].name !== 'Hewan Industri') {
      title += 'Usia ';
    }

    if (varian === 'Usia 3-10 Bulan') {
      title += 'Anakan 2,5 - 3 Bulan ';
    } else if (product.category[0].name === 'Hewan Industri') {
      title += `${varian} Murah, Berkualitas dan Bergaransi`;
    } else {
      title += varian;
    }

    return title;
  };

  const orderAnalytic = useCallback((title) => {
    ga.event({
      action: 'click',
      params: {
        event_category: 'Pesan',
        event_label: title
      }
    });
  }, []);

  if (Object.keys(dataProduct).length === 0 && Object.keys(dataProductRelated).length === 0) {
    return <Loading />;
  }

  return (
    <>adwadawda</>
    // <div id="product-detail">
    //   <Head>
    //     <title>{`Jual ${product.title} Terpercaya dan Dijamin Kesehatannya - Semua hewan hias maupun bibit unggas pendaging dan petelur baik untuk perorangan, industri kecil maupun besar. Kualitas terbaik dengan harga terjangkau di Ternakhias`}</title>
    //     <meta
    //       name="title"
    //       content={`Jual ${product.title} Terpercaya dan Dijamin Kesehatannya - Semua hewan hias maupun bibit unggas pendaging dan petelur baik untuk perorangan, industri kecil maupun besar. Kualitas terbaik dengan harga terjangkau di Ternakhias`}
    //     />
    //     <meta
    //       name="description"
    //       content="Transaksi di jamin aman dan terpercaya di Ternakhias - Tempat beli hewan hias dan industri atau bibit pedaging dan petelur cek selengkapnya!"
    //     />
    //     <meta name="author" content="@anggalof" />
    //     <meta
    //       property="og:title"
    //       content={`Jual ${product.title} Terpercaya dan Dijamin Kesehatannya - Semua hewan hias maupun bibit unggas pendaging dan petelur baik untuk perorangan, industri kecil maupun besar. Kualitas terbaik dengan harga terjangkau di Ternakhias`}
    //       key="ogtitle"
    //     />{' '}
    //     <meta
    //       property="og:description"
    //       content="Transaksi di jamin aman dan terpercaya di Ternakhias - Tempat beli hewan hias dan industri atau bibit pedaging dan petelur cek selengkapnya!"
    //       key="ogdesc"
    //     />
    //     <meta property="og:image" content="/images/logo-ternakhias.jpg" />
    //     <meta property="og:image:type" content="image/webp" />
    //     <meta property="og:type" content="product" />
    //     <meta property="og:image:width" content="1200" />
    //     <meta property="og:image:height" content="630" />
    //     <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}/product/detail/${product.id}/${product.slug}`} />
    //     <meta
    //       property="og:image:alt"
    //       content={`${product.title} terpecaya dan aman hanya di ternakhias.com`}></meta>
        
    //     <meta name="viewport" content="width=device-width, initial-scale=1" />
    //     {/* <meta property="og:image" content={product.images[0]} key="ogimage" /> */}
    //     <meta property="product:brand" content="simple" />
    //     <meta property="product:price:amount" content={product.defaultPrice} />
    //     <meta property="product:price:currency" content="IDR" />
    //     <meta property="product:availability" content="instock" />
    //     <meta name="twitter:card" content="summary_large_image" />
    //     <meta
    //       name="twitter:title"
    //       content={`Jual ${product.title} Terpercaya dan Dijamin Kesehatannya - Shmua Hhwan maupun bibit unggas pendaging dan petelur baik untuk perorangan, industri kecil maupun besar. Kualitas terbaik dengan harga terjangkau di Ternakhias`}
    //     />
    //     <meta
    //       name="twitter:description"
    //       content="Transaksi di jamin aman dan terpercaya di Ternakhias - Tempat beli hewan hias dan industri atau bibit pedaging dan petelur cek selengkapnya!"
    //     />
    //     <meta name="twitter:image" content={product.images[0]} />
    //     <meta name="twitter:label1" content="Harga" />
    //     <meta name="twitter:data1" content={`Rp ${priceSplitter(product.defaultPrice)}`} />
    //     <meta name="twitter:label2" content="Ketersediaan" />
    //     <meta name="twitter:data2" content="Ada Persediaan" />
    //     <link rel="icon" href="/images/logo-ternakhias.png" />
    //     <link
    //       rel="canonical"
    //       href={`${process.env.NEXT_PUBLIC_BASE_URL}/product/detail/${product.id}/${product.slug}`}></link>
    //   </Head>

    //   <Breadcrumb urlBack="/products" mainTitle="Produk" titleGeneral={product.title} />

    //   <div className="container" onClick={handleCloseShareOutside}>
    //     <div className="product-detail-wrapper">
    //       <div className="product-view">
    //         <div className="product-image-wrapper">
    //           <div className="product-grid-image">
    //             {product.images.map((d, index) => {
    //               return (
    //                 <div
    //                   className={`product${index}`}
    //                   key={index}
    //                   onClick={() => modal.current.open()}>
    //                   <img src={d} alt={index} width={88} height={88} />
    //                 </div>
    //               );
    //             })}
    //           </div>
    //         </div>
    //         <div className="product-content-wrapper">
    //           <h2>{renderTitle(product)}</h2>
    //           <div className="product-see">
    //             <i className="fa fa-eye"></i> {product.viewer}x dilihat
    //           </div>
    //           <div className="product-price">
    //             {product.variant.map((item, index) => {
    //               if (item.title === varian) {
    //                 return (
    //                   <div className="price-variant" key={index}>
    //                     Rp. {priceSplitter(item.price)}
    //                   </div>
    //                 );
    //               }
    //             })}
    //           </div>
    //           <div className="product-information">
    //             {product.variant.length > 1 && (
    //               <div className="product-box-info d-block">
    //                 <b>Pilih varian:</b>
    //                 <div className="product-varian-detail">
    //                   {product.variant.map((v, index) => {
    //                     return (
    //                       <div
    //                         className={`product-varian-title ${v.title === varian && 'active'}`}
    //                         key={index}
    //                         onClick={() => handleVarian(v.title)}>
    //                         {v.title}
    //                       </div>
    //                     );
    //                   })}
    //                 </div>
    //                 <div className="line-general"></div>
    //               </div>
    //             )}
    //           </div>
    //           <div className="product-order">
    //             <div className="product-btn-order">
    //               <img src="/images/logo-wa.png" alt="whatsapp" width={48} height={48} />
    //               Pesan via whatsapp
    //             </div>
    //           </div>
    //           <div className="product-tab-wrap">
    //             <div
    //               className={`product-tab-title ${dataTab === 'info' && 'active'}`}
    //               onClick={() => handleClick('info')}>
    //               Info Penting
    //             </div>
    //           </div>
    //           <div className="product-line"></div>
    //           {dataTab === 'info' && (
    //             <>
    //               <div className="product-box-info">
    //                 <div className="product-detail-verified-wrapper">
    //                   <div className="product-detail-verified-content">
    //                     <img
    //                       src="/images/icons/icon-verified.png"
    //                       alt="verified"
    //                       width={14}
    //                       height={14}
    //                     />
    //                     <span>Verified</span>
    //                   </div>
    //                   <div className="product-detail-verified-desc">
    //                     Transaksi Aman dan Terpercaya di Ternakhias
    //                   </div>
    //                 </div>
    //                 <div className="product-info">
    //                   <span>Kategori</span>
    //                   <span className="variant-color">: {product.category[0].name}</span>
    //                 </div>
    //                 <div className="product-info">
    //                   <span>Kondisi</span>
    //                   <span>: {product.condition}</span>
    //                 </div>
    //                 <div className="product-info">
    //                   <span>Garansi</span>
    //                   <span>: Apabila mati dalam pengiriman {product.warranty}</span>
    //                 </div>
    //                 <div className="product-info">
    //                   <div className="direct-term-and-condition">Syarat & Ketentuan</div>
    //                 </div>
    //                 <div className="product-info">
    //                   <span>Estimasi Kirim:</span>
    //                   <span className="estimation">
    //                     <ul>
    //                       {product.estimation.map((est, index) => {
    //                         return <li key={index}>{est}</li>;
    //                       })}
    //                     </ul>
    //                   </span>
    //                 </div>
    //               </div>
    //               <div className="product-line" />
    //               <div className="product-content-info">
    //                 <div
    //                   className={`${
    //                     moreDetail ? 'product-content-desc' : 'product-content-description'
    //                   }`}
    //                   dangerouslySetInnerHTML={{
    //                     __html: product.information
    //                   }}
    //                 />
    //               </div>
    //               <div className="product-desc-more" onClick={handleMore}>
    //                 {moreTitle}
    //               </div>
    //             </>
    //           )}
    //         </div>
    //       </div>
    //       <div className="product-information">
    //         {product.variant.length > 1 && (
    //           <div className="product-box-info d-none">
    //             <h2>Pilih varian:</h2>
    //             <div className="product-varian-detail">
    //               {product.variant.map((v, index) => {
    //                 return (
    //                   <div
    //                     className={`product-varian-title ${v.title === varian && 'active'}`}
    //                     key={index}
    //                     onClick={() => handleVarian(v.title)}>
    //                     {v.title}
    //                   </div>
    //                 );
    //               })}
    //             </div>
    //           </div>
    //         )}
    //         <div className="product-box-info">
    //           <h2>Pengiriman</h2>
    //           <div className="product-send-from">
    //             <i className="fa fa-map-marker"></i>
    //             <span>Dikirim dari</span>
    //             <span>{product.location}</span>
    //           </div>
    //           <div className="product-shipping">
    //             {product.shipping.map((cargo, index) => {
    //               return (
    //                 <div key={index}>
    //                   <div className="product-shipping-info">
    //                     <img src={cargo.image} alt="cargo-delivery" width={128} height={96} />
    //                     <div className="product-shipping-desc">
    //                       <div>{cargo.description}</div>
    //                       <label>
    //                         <i className="fa fa-check"></i>Tersedia
    //                       </label>
    //                     </div>
    //                   </div>
    //                   <div className="product-line"></div>
    //                 </div>
    //               );
    //             })}
    //           </div>
    //         </div>
    //       </div>
    //       <Modal ref={modal}>
    //         <CarouselPhotos
    //           dataImage={product.images.map((d) => ({
    //             imageItem: d
    //           }))}
    //         />
    //       </Modal>
    //     </div>
    //   </div>
    //   <div className="product-section-information">
    //     <div className="container">
    //       <div className="product-information-wrapper">
    //         <div className="product-information-desc-wrapper">
    //           <div className="product-information-text-wrapper bg-box-left">
    //             <div className="product-information-icon">
    //               <img src="/images/icons/pdp-1.png" alt="pdp" />
    //             </div>
    //             <div className="product-information-text">
    //               Klik Pesan Via Whatsapp untuk mengetahui info stock tersedia, total harga atau informasi lainnya.
    //             </div>
    //           </div>
    //           <div className="product-information-text-wrapper bg-box-right">
    //             <div className="product-information-icon">
    //               <img src="/images/icons/pdp-2.png" alt="pdp" />
    //             </div>
    //             <div className="product-information-text">
    //               CS & Admin kami akan memberikan informasi mengenai hewan yang kalian ingin
    //               tanyakan.
    //             </div>
    //           </div>
    //           <div className="product-information-text-wrapper bg-box-left">
    //             <div className="product-information-icon">
    //               <img src="/images/icons/pdp-3.png" alt="pdp" />
    //             </div>
    //             <div className="product-information-text">
    //               Tidak perlu khawatir, semua hewan hias yang kita jual terpercaya & sudah terjamin
    //               kesehatannya.
    //             </div>
    //           </div>
    //           <div className="product-information-text-wrapper bg-box-right">
    //             <div className="product-information-icon">
    //               <img src="/images/warranty.png" alt="warranty" />
    //             </div>
    //             <div className="product-information-text">
    //               Pengiriman juga bergaransi sampai diterima ditangan pembeli jadi sudah pasti amanah.
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="container">
    //     <Related dataProductRelated={dataProductRelated} />
    //   </div>
    // </div>
  );
};

export async function getServerSideProps(context) {
  const { req, query, res } = context;
  res.setHeader('Cache-Control', 'public, s-maxage=43200, stale-while-revalidate=60');

  const dataNewProduct = await fetchNewProductList(query.id);
  const dataProduct = await fetchProductList(query.id);

  if (dataNewProduct) {
    dataNewProduct.data.slug = dataNewProduct.data.name?.toLowerCase().replace(/ /g, '-');
    dataNewProduct.data.defaultPrice = dataNewProduct.data.variant.find(
      (d) => d.name == dataNewProduct.data.defaultVariant
    ).price;
  }

  if (dataProduct) {
    dataProduct.data.slug = dataProduct.data.title?.toLowerCase().replace(/ /g, '-');
    dataProduct.data.defaultPrice = dataProduct.data.variant.find(
      (d) => d.title == dataProduct.data.defaultVariant
    ).price;
  }
  return {
    props: {
      query: query,
      host: req.headers.host,
      dataProduct,
      dataProductRelated
    }
  };
}

export default ProductDetail;
