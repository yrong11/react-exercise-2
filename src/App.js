import React, { Component } from 'react';
import './App.scss';
import Header from './component/header/Header';
import Products from './component/store/Products';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <Products />
      </main>
    );
  }
}

export default App;
