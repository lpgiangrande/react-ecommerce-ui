export default function ShoppingCart({ cartItems }) {
    // Calculate total price based on the cartItems array
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
    return (
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
          {cartItems.length > 0 && (
            <div className='text-center'>
              <span>Retrive name of product + quantity </span> 
              <span>total price : price of single item * quantity</span>
              <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
                  </svg>
               </span>
            </div>
             )}
            {cartItems.map((item) => (
              <div key={item.id}>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price}</p>
              </div>
            ))}
            <p>Total Price: {totalPrice}</p>
          </>
        )}
      </div>
    );
  }
  