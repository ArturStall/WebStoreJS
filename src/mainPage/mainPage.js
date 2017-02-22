import React, { Component } from 'react';
import LinkMenu from '../Links/linkMenu';
import ProductsPage from '../productsPage/productsPage';
import Footer from '../footer/footer';

class MainPage extends Component{

  render() {
    return (
      <div>
        <LinkMenu page={'mainPage'} />
        <ProductsPage />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
