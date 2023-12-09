import React, { useState } from 'react';
import CartContext from './CartContext';

function CartItem() {
  const [showModal, setShowModal] = useState(false);
  const { cartItems, setCartItems, removeFromCart } = React.useContext(CartContext);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2);
  };


  const increaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
    item.id === itemId
      ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * parseFloat(item.price) }
      : item
  );
  setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
    item.id === itemId && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1, totalPrice: (item.quantity - 1) * parseFloat(item.price) }
      : item
  );
  setCartItems(updatedCartItems);
  };

  return (
    <>
    <div>
      <form className="d-flex">
        <button
          className="btn btn-outline-dark"
          type="button"
          onClick={openModal}
        >
          <i className="bi-cart-fill me-1"></i>
          Cart
          <span className="badge bg-dark text-white ms-1 rounded-pill">
          {cartItems.length}
          </span>
        </button>
      </form>

      {/* Modal */}
      <div
        className={`modal fade ${showModal ? 'show' : ''}`}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!showModal}
        style={{ display: showModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Cart Items
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">
            {cartItems && cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <>
                  <div key={index} style={{ position: 'relative' }}>
                    <p>{item.name} <span>${item.price}</span>
                    <span> Quantity: {item.quantity}</span>
                    {/* Add other item details here */}
                    <button
                          type="button"
                          className="btn btn-outline-primary btn-sm"
                          style={{
                            position: 'absolute',
                            right: 60
                          }}
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-sm"
                          style={{
                            position: 'absolute',
                            right: 35
                          }}
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>
                    <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  style={{
                    position: 'absolute',
                   
                    right: 10
                  }}
                  onClick={() => removeFromCart(item.id)}
                >
                  X
                </button></p>
                
                  </div>
                  
                  </>
                
                ))
              ) : (
                <p>No items in the cart</p>
              )}

            </div>
            <div className="modal-footer">
            <p><b>Total ${calculateTotal()}</b></p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeModal}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default CartItem;
