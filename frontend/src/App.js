import React from 'react';
import data from './data';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="/" className="brand">amazona</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">

          {
            data.products.map(product => {
              return (
                <div className="card" key={product._id}>
                  <a href={`/products/${product._id}`}>

                    <img src={product.image} alt={product.name} className="medium" />
                  </a>
                  <div className="card-body">
                    <a href="product.html">
                      <h2>{product.name}</h2>
                    </a>
                    <div className="rating">
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                  
                    </div>
                    <div className="price">
                      <p>${product.price}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }


        </div>
      </main>
      <footer className="row center">
        All right Reserved by amazona
        </footer>
    </div>
  );
}

export default App;
