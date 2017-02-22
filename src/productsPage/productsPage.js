import React, { Component } from 'react';
import './productsPage.css';

class ProductsPage extends Component{
  constructor(props) {
    super(props);
    this.state={
      products: []
    };
  }

  componentDidMount() {
    const url = "http://localhost:8080/WebStore/store/user/products/";
    fetch(url)
    .then(response=>response.json())
    .then(json=>{
      this.setState({products: json.productsArray});
    });
  }

  render() {
    return (
      <div className='tableProducts'>
        {this.state.products.map((product, index) =>
          <div className='products'>
            <div className='productsHeader'>      {product.header}</div>
            <div className='imageBlock'>          <img src={product.image}
                                                  role='presentation'
                                                  className='productsImage'/>
            </div>
            <div className='productsDescription'> {product.description}</div>
            <div className='productsCost'>        {product.cost}$</div>
          </div>
        )}
      </div>
    );
  }
}

export default ProductsPage;
