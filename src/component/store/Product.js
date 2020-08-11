import React from 'react';
import productPic from '../../assets/product_image_placeholder.png';
import './product.scss';

class Product extends React.Component {
  render() {
    return (
      <div>
        <div className="phone">
          <h2>{this.props.name}</h2>
          <img className="image-size" src={productPic}></img>
        </div>
        <div>
          <div className="price">
            <p>{this.props.price}</p>
          </div>
          <div>
            <button className="addTC" onClick={() => this.props.addToCart}>
              add to cart
            </button>
          </div>
        </div>
      </div>
    )}
}

export default Product;