import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import star from "../assets/star.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Products({ products, cart, setCart }) {
  const [sortType, setSortType] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "price-low") return a.price - b.price;
    if (sortType === "price-high") return b.price - a.price;
    if (sortType === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="container mt-4">
      <select className="form-select w-auto mb-3" onChange={(e) => setSortType(e.target.value)}>
        <option value="default">Sort by</option>
        <option value="price-low">Price: Low → High</option>
        <option value="price-high">Price: High → Low</option>
        <option value="rating">Rating</option>
      </select>

      <div className="row g-4">
        {sortedProducts.map((product) => (
          <div className="col-12 col-sm-6 col-md-4" key={product.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img src={product.thumbnail} style={{ height: "200px", objectFit: "cover" }} />

              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.title}</Card.Title>

                <Card.Text>
                  {product.rating}
                  {[...new Array(Math.round(product.rating))].map((_, i) => (
                    <img src={star} width={12} key={i} />
                  ))}
                </Card.Text>

                <Card.Text className="fs-4">£{product.price}</Card.Text>

                <div className="mt-auto d-flex gap-2">
                  <Button as={Link} to={`/product-details/${product.id}`} variant="secondary">
                    See more
                  </Button>

                  <Button
                    variant="primary"
                    onClick={() => {
                      const exist = cart.find((item) => item.id === product.id);
                      if (exist) {
                        setCart(cart.map((item) =>
                          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                        ));
                      } else {
                        setCart([...cart, { id: product.id, qty: 1 }]);
                      }
                    }}
                  >
                    Add
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
