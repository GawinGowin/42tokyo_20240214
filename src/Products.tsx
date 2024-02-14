import products from '../products.json';
import './Products.css';

function Products() {
	return (
	  <>
		<h1>商品一覧</h1>
		<div className="product-list">
		  {products.map(({ id, image_urls, name, price, title }) => (
			<div key={id} className="product-card">
			  {image_urls.slice(0, 3).map((url, index) => (
				<img key={index} src={url} alt={name} className="product-image" />
			  ))}
			  <div className="product-info">
				<h2 className="product-name">{name}</h2>
				<p className="product-price">¥{price}</p>
				<p className="product-title">{title}</p>
			  </div>
			</div>
		  ))}
		</div>
	  </>
	);
  }
  
export default Products;
