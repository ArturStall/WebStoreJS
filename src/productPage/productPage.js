import React, { Component } from 'react';
import './productPage.css';
import LinkMenu from '../Links/linkMenu';
import Footer from '../footer/footer';

class ProductPage extends Component{
  constructor(props) {
    super(props);
    this.state={
      product: {}
    };
  }

  componentDidMount() {
    fetch("http://echo.jsontest.com/productID/Arthur/productHeader/Tyler/productImage/img/productDescription/Descriprion/productCost/cost!!!")
      .then(response=>response.json())
      .then(json=>{
        this.setState({product: json});
      });
  }

  render() {
    return (
      <div>
        <LinkMenu page={'productPage'} />
          <div className='userProductDescriptionForm'>
            <div className='product'>
              <div className='productHeader'>     {this.state.product.productHeader}</div>
              <div className='productImage'>
                <img src={this.state.product.productImage}
                role='presentation'/>
              </div>
              <div className='productDescription'>{this.state.product.productDescription}</div>
              <div className='productCost'>       {this.state.product.productCost}</div>
            </div>
          </div>
          <Footer />
        </div>
    );
  }
}

export default ProductPage;
