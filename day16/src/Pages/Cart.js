import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
import { PlusCircle, MinusCircle, Trash } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Add this import

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId, itemName) => {
    dispatch(removeFromCart(itemId));
    toast.success(`${itemName} removed from cart !`, {
      position: 'bottom-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
    toast.success('Item increased successfully');
  };
  
  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
    toast.success('Item decreased successfully');
  };

  const totalAmount = cartItems.reduce((acc, product) => {
    return acc + product.productPrice * product.quantity;
  }, 0);

  const handleCheckout = () => {};

  return (
    <>
      <div className="container">
        {cartItems.length === 0 ? (
          <div className='cart-empty shadow card'>
            <p><b>Your cart is empty</b></p>
          </div>
        ) : (
          <div>
            <h1 className='cart-title primary'>Your Cart</h1>
            <div className='row'>
              {cartItems.map((product) => (
                <div className='col-md-4' key={product.pid}>
                  <div className="card mb-4">
                    <img src={product.productImage} alt={product.productName} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{product.productName}</h5>
                      <p className="card-text">Price: ₹{product.productPrice.toFixed(2)}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="quantity-control">
                          <button className='btn btn-sm btn-light' onClick={() => handleDecreaseQuantity(product.pid)}><MinusCircle /></button>
                          <span className="quantity">{product.quantity}</span>
                          <button className='btn btn-sm btn-light' onClick={() => handleIncreaseQuantity(product.pid)}><PlusCircle /></button>
                        </div>
                        <button className='btn btn-sm btn-danger' onClick={() => handleRemoveItem(product.pid, product.productName)}><Trash /></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className='cart-total card'>Total: ₹{totalAmount.toFixed(2)}</p>
            <button className='btn btn-primary' onClick={handleCheckout}>Checkout</button>
          </div>
        )}
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
};

export default Cart;
