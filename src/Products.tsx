import React, { useState, useRef } from 'react';
import products from '../products.json';
import './Products.css';

function ProductCard({ product }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalIdRef = useRef(null); // useRefを使用してintervalIdを保存

  const changeImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % product.image_urls.length);
  };

  return (
    <div className="product-card">
      <img
        src={product.image_urls[currentIndex]}
        alt={product.name}
        className="product-image"
        onMouseEnter={() => {
          // マウスが画像の上にある時、setIntervalを使って画像を更新
          if (!intervalIdRef.current) {
            intervalIdRef.current = setInterval(changeImage, 500);
          }
        }}
        onMouseLeave={() => {
          // onMouseLeaveでタイマーをクリア
          clearInterval(intervalIdRef.current);
          intervalIdRef.current = null; // タイマーIDをリセット
        }}
      />
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">{product.price}</p>
        <p className="product-title">{product.title}</p>
      </div>
    </div>
  );
}

function Products() {
  return (
    <>
	  <h1>
		
	  </h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Products;

