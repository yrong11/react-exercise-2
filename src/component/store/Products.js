import React from 'react';
import Product from './Product';
import './product.scss';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categroys: [
        {
          category: 'iPhone',
          products: [
            {
              name: 'iPhone11',
              price: '5999',
            },
            {
              name: 'iPhoneXS',
              price: '5399',
            },
            {
              name: 'iPhoneSE',
              price: '3599',
            },
          ],
        },
        {
          category: 'HUAWEI',
          products: [
            {
              name: 'HUAWEI P40 Pro+',
              price: '7999',
            },
            {
              name: 'HUAWEI Mate 30',
              price: '5000',
            },
            {
              name: 'HUAWEI nova 7',
              price: '4000',
            },
          ],
        },
      ],
    };
  }

  post(item){
    console.log(item)
    return (
      <div className="category">
        <h1>{item.category}</h1>
        <div className="pros">
          {item.products.map((pro) =>
            // eslint-disable-next-line react/jsx-key
            <Product
              key={pro.name}
              name={pro.name}
              price={pro.price}
              addToCart={() => console.log('haode')}
            />
          )}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="categorys">
        {this.state.categroys.map(item => (this.post(item)))}
      </div>
    );
  }
}

export default Products;
