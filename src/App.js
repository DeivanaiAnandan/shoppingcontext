import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import "./Products.json";
import SimpleModalExample from "./SimpleModalExample";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import CartContext from "./CartContext";
import { prodList } from "./ProductList";

function App() {
  const {cartItems, setCartItems, addToCart, removeFromCart} = useContext(CartContext);

  
  return (
    <div>
      <Navbar cartItems={cartItems} removeFromCart={removeFromCart} ></Navbar>
      <Header></Header>
      <div>
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {/* <Section details = {prodList[0]}></Section>
                <Section details = {prodList[1]}></Section>
                <Section details = {prodList[2]}></Section> */}
                {prodList.map((prod, index) => (
  <Section key={index} details={prod} addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} />
))}

               
            </div>
          </div>
        </section>
      </div>

      <Footer></Footer>
      
    </div>
  );
}

export default App;
