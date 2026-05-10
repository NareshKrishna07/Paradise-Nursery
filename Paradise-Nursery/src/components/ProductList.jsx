const ProductList = () => {

  const plants = [

    {
      id: 1,
      name: "Snake Plant",
      price: 10,
      category: "Indoor"
    },

    {
      id: 2,
      name: "Aloe Vera",
      price: 15,
      category: "Succulent"
    },

    {
      id: 3,
      name: "Peace Lily",
      price: 20,
      category: "Air Purifying"
    },

    {
      id: 4,
      name: "Spider Plant",
      price: 18,
      category: "Indoor"
    },

    {
      id: 5,
      name: "Cactus",
      price: 12,
      category: "Succulent"
    },

    {
      id: 6,
      name: "Money Plant",
      price: 22,
      category: "Air Purifying"
    }
  ];

  return (
    <div>

      <nav>
        <h2>Paradise Nursery</h2>

        <a href="/">Home</a> | 
        <a href="/plants">Plants</a> | 
        <a href="/cart">Cart 🛒</a>
      </nav>

      <h1>Plants</h1>

      {
        plants.map((plant) => (

          <div key={plant.id}>

            <h3>{plant.name}</h3>

            <p>{plant.category}</p>

            <p>${plant.price}</p>

            <button>Add to Cart</button>

          </div>
        ))
      }

    </div>
  );
};

export default ProductList;