import React from 'react'

function Section({details, addToCart, cartItems=[], removeFromCart }) {

    const isItemInCart = cartItems.some((item) => item.id === details.id);

    // const handleAddToCart = () => {
    //     addToCart(details);
    //   };
    const handleToggleCart = () => {
        if (isItemInCart) {
          // If item is in cart, remove it
          removeFromCart(details.id);
        } else {
          // If item is not in cart, add it
          addToCart(details);
        }
      };

  return (
    <div>
    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src={details.image} alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">{details.name}</h5>
                                    
                                    ${details.price}
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {/* <div className="text-center"><a className="btn btn-outline-dark mt-auto"  href="">Add to Cart</a></div> */}
                                <div className="text-center"><button className="btn btn-primary" onClick={handleToggleCart}>
                                {isItemInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button></div>
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default Section