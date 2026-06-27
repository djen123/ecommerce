import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import star from "../assets/star.png";

function ProductDetails({ products,setCart,cart }) {
  const { id } = useParams();
  const product = products.find((item) => item.id == id);

  const [mainImage, setMainImage] = useState(product?.thumbnail);
  const [qty, setQty] = useState(1);

  if (!product) {
    return <p>Product not found</p>;
  }

  const finalPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="d-flex flex-column gap-4">

      {/* IMAGE + THUMBNAILS */}
      <div className="d-flex gap-4">
        <div>
          <img
            src={mainImage}
            alt={product.title}
            className="border rounded"
            style={{ width: "350px" }}
          />

          <div className="d-flex gap-2 mt-3">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumb"
                onClick={() => setMainImage(img)}
                style={{
                  width: "60px",
                  height: "60px",
                  cursor: "pointer",
                  border: mainImage === img ? "2px solid #000" : "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
            ))}
          </div>
        </div>

        {/* Product details */}
        <Card className="flex-grow-1 p-3">
          <Card.Body className="d-flex flex-column gap-3">

            <Card.Title className="fs-2">{product.title}</Card.Title>

            {/* Rating */}
            <div className="d-flex align-items-center gap-2">
              <span className="fw-bold">{product.rating}</span>
              {[...new Array(Math.round(product.rating))].map((_, index) => (
                <img src={star} width={16} key={index} />
              ))}
              <span className="text-muted">({product.reviews.length} reviews)</span>
            </div>

            {/* Price */}
            <div className="fs-3">
              <span className="text-success fw-bold">£{finalPrice}</span>
              <span className="text-decoration-line-through text-muted ms-2">
                £{product.price}
              </span>
              <span className="ms-2 bg-warning px-2 rounded">
                {product.discountPercentage}% OFF
              </span>
            </div>

            {/* selector for quantity */}
            <div className="d-flex align-items-center gap-3">
              <Button
                variant="outline-secondary"
                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
              >
                -
              </Button>
              <span className="fs-4">{qty}</span>
              <Button variant="outline-secondary" onClick={() => setQty(qty + 1)}>
                +
              </Button>
            </div>

            {/* cart add */}
            <Button variant="primary" className="rounded-pill"   onClick = {()=>{
                const exist = cart.find((item=>item.id=== product.id))
                if(exist){
                  setCart(cart.map(item=>
                    item.id=== product.id?{...item,qty:item.qty+1} :item

                  ))
                
                }else {
                  setCart([...cart,{id:product.id,qty:1}])
                }
              }}>
              Add {qty} to Cart
            </Button>

            {/* back button*/}
            <Button as={Link} to="/products" variant="outline-dark">
              ← Back to Products
            </Button>
          </Card.Body>
        </Card>
      </div>

      {/* Product specs */}
      <div>
        <h3>Specifications</h3>
        <ul className="list-group">
          <li className="list-group-item">Brand: {product.brand}</li>
          <li className="list-group-item">Weight: {product.weight}g</li>
          <li className="list-group-item">
            Dimensions: {product.dimensions.width} × {product.dimensions.height} ×{" "}
            {product.dimensions.depth}
          </li>
          <li className="list-group-item">
            Warranty: {product.warrantyInformation}
          </li>
          <li className="list-group-item">
            Shipping: {product.shippingInformation}
          </li>
        </ul>
      </div>

      {/* reviews */}
      <div>
        <h3>Customer Reviews</h3>
        {product.reviews.map((review, i) => (
          <div key={i} className="border rounded p-3 mb-2"
            style={{
    background: "#fff8e1",
    border: "1px solid #ffe082"
  }}>
            <strong>{review.reviewerName}</strong>
            <p className="mb-1">{review.comment}</p>
            <small className="text-muted">
              {new Date(review.date).toLocaleDateString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;
