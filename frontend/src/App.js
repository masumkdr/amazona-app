import React from 'react';
import {Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import {useSelector} from 'react-redux';


function App() {

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;

  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <Link to="/" className="brand">amazona</Link>
        </div>
        <div>
          <Link to="/cart">
            Cart {
              cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )
            }
          </Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </header>
      <main>
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductScreen} exact />
        
      </main>
      <footer className="row center">
        All right Reserved by amazona
        </footer>
    </div>
  );
}

export default App;
