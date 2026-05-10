const CartItem = () => {

  const cartItems = [
    {
      id: 1,
      name: "Snake Plant",
      price: 10,
      quantity: 2
    }
  ];

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>

      <h1>Shopping Cart</h1>

      {
        cartItems.map((item) => (

          <div key={item.id}>

            <h3>{item.name}</h3>

            <p>Unit Price: ${item.price}</p>

            <p>Quantity: {item.quantity}</p>

            <p>Total: ${item.price * item.quantity}</p>

            <button>+</button>

            <button>-</button>

            <button>Delete</button>

          </div>
        ))
      }

      <h2>Total Cart Amount: ${totalAmount}</h2>

      <button>Checkout</button>

      <button>Continue Shopping</button>

    </div>
  );
};

export default CartItem;