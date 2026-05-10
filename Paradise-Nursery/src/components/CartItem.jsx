import { useState } from "react";

const CartItem = () => {

  const [cartItems, setCartItems] = useState([

    {
      id: 1,
      name: "Snake Plant",
      price: 10,
      quantity: 1,
      image: "https://via.placeholder.com/150"
    },

    {
      id: 2,
      name: "Aloe Vera",
      price: 15,
      quantity: 2,
      image: "https://via.placeholder.com/150"
    }
  ]);

  // Increase quantity
  const incrementQuantity = (id) => {

    const updatedCart = cartItems.map((item) =>

      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCartItems(updatedCart);
  };

  // Decrease quantity
  const decrementQuantity = (id) => {

    const updatedCart = cartItems.map((item) =>

      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCartItems(updatedCart);
  };

  // Remove item
  const removeItem = (id) => {

    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);
  };

  // Dynamic total amount
  const totalAmount = cartItems.reduce(

    (total, item) =>

      total + (item.price * item.quantity),

    0
  );

  return (

    <div style={{ padding: "20px" }}>

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "green",
          color: "white",
          padding: "15px"
        }}
      >

        <h2>Paradise Nursery</h2>

        <div>

          <a
            href="/"
            style={{
              color: "white",
              marginRight: "15px"
            }}
          >
            Home
          </a>

          <a
            href="/plants"
            style={{
              color: "white",
              marginRight: "15px"
            }}
          >
            Plants
          </a>

          <a
            href="/cart"
            style={{
              color: "white"
            }}
          >
            Cart
          </a>

        </div>

      </nav>

      <h1>Shopping Cart</h1>

      {
        cartItems.map((item) => (

          <div
            key={item.id}

            style={{
              border: "1px solid gray",
              marginBottom: "20px",
              padding: "15px"
            }}
          >

            <img
              src={item.image}
              alt={item.name}
              width="120"
            />

            <h3>{item.name}</h3>

            <p>Unit Price: ${item.price}</p>

            <p>Quantity: {item.quantity}</p>

            <p>
              Total Cost:
              ${item.price * item.quantity}
            </p>

            <button
              onClick={() =>
                incrementQuantity(item.id)
              }
            >
              +
            </button>

            <button
              onClick={() =>
                decrementQuantity(item.id)
              }
            >
              -
            </button>

            <button
              onClick={() =>
                removeItem(item.id)
              }
            >
              Delete
            </button>

          </div>
        ))
      }

      <h2>
        Total Cart Amount: ${totalAmount}
      </h2>

      <button
        onClick={() =>
          alert("Coming Soon")
        }
      >
        Checkout
      </button>

      <button
        onClick={() =>
          window.location.href = "/plants"
        }
      >
        Continue Shopping
      </button>

    </div>
  );
};

export default CartItem;
