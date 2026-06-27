import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import star from "../assets/star.png";

function Cart({ products, cart, setCart }) {
  //  product info + qty
  const cartProducts = cart.map((item) => {
    const product = products.find((p) => p.id === item.id);
    return { ...product, qty: item.qty };
  });

  // Remove item from the list
  function handleRemove(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  // Increase qty function
  function increaseQty(id) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  }

  // decrease qty function
  function decreaseQty(id) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty - 1) }
          : item
      )
    );
  }

  // total
  const grandTotal = cartProducts
    .reduce((sum, p) => sum + p.price * p.qty, 0)
    .toFixed(2);

  return (
    <>
      <h3 className="mb-3">
        Cart {cart.length ? `(${cart.length} items)` : "(empty)"}
      </h3>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cartProducts.map((product) => (
        <Card className="d-flex flex-row mb-3" key={product.id}>
          <Card.Img
            className="productImage"
            variant="top"
            src={product.thumbnail}
              style={{
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "8px"
  }}
          />

          <Card.Body className="d-flex flex-column gap-3">
            <div>
              <Card.Title>{product.title}</Card.Title>

              <Card.Text>
                {product.rating}
                {[...new Array(Math.round(product.rating))].map((_, index) => (
                  <img src={star} width={12} key={index} />
                ))}
              </Card.Text>

              <Card.Text className="fs-4">
                £{product.price} × {product.qty} ={" "}
                <strong>£{(product.price * product.qty).toFixed(2)}</strong>
              </Card.Text>
            </div>

            {/* Quantity  */}
            <div className="d-flex align-items-center gap-3">
              <Button
                variant="outline-secondary"
                onClick={() => decreaseQty(product.id)}
              >
                -
              </Button>

              <span className="fs-4">{product.qty}</span>

              <Button
                variant="outline-secondary"
                onClick={() => increaseQty(product.id)}
              >
                +
              </Button>
            </div>

            {/* remove button */}
            <Button
              variant="danger"
              className="rounded-pill"
              onClick={() => handleRemove(product.id)}
            >
              Remove
            </Button>
          </Card.Body>
        </Card>
      ))}

      {/* Total calculation */}
      {cart.length > 0 && (
        <h3 className="mt-4">
           Total: <span className="text-success">£{grandTotal}</span>
        </h3>
      )}
    </>
  );
}

export default Cart;
