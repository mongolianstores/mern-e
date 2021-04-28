import React from 'react';
import './app.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';
import LoginPage from './pages/LoginPage/Login';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ShippingAddress from './pages/ShippingPage/ShippingPage';
import PaymentMethodPage from './pages/PaymentMethodPage/PaymentMethodPage';
import PlaceOrderPage from './pages/PlaceOrderPage/PlaceOrderPage';
import OrderPage from './pages/OrderPage/OrderPage';


function App() {
  return (
    <div className="App">
      <Header/>
      
      <Switch>
        <main>
          <Route exact path="/" component={HomePage}/>
          <Route       path="/product/:id" component={ProductPage}/>
          <Route       path="/cart/:id?" component={CartPage}/>
          <Route       path="/signin" component={LoginPage}/>
          <Route       path="/register" component={RegisterPage}/>
          <Route       path="/shipping" component={ShippingAddress}/>
          <Route       path="/payment" component={PaymentMethodPage}/>
          <Route       path="/placeorder" component={PlaceOrderPage}/>
          <Route       path="/order/:id" component={OrderPage}/>
       
        </main>
      </Switch>

      <Footer/>
    </div>
  );
}

export default App;
