import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import star from "../assets/star.png";
import { Link } from "react-router-dom";

function CategoryPage({ cart, setCart }) {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setItems(data.products));
  }, [category]);

  return (
    <div className="container mt-4">
      <h2 className="text-capitalize mb-4">{category}</h2>

      <div className="row g-4">
        {items.map((product) => (
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

export default CategoryPage;
