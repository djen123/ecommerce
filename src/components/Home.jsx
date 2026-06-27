import onlineShopping from "../assets/onlineShopping.gif";
import { Link } from "react-router-dom";

function Home({ categories }) {
  return (
    <div
      className="text-center p-5"
      style={{ background: "linear-gradient(135deg, #f8f9fa, #e3f2fd)", minHeight: "100vh" }}
    >
      <h1 className="fw-bold text-primary">ShoptiFy</h1>
      <h4 className="text-muted">Where shopping gets easier</h4>

      <img src={onlineShopping} width="300" className="my-4 shadow rounded" />

      <Link className="btn btn-primary btn-lg rounded-pill" to="/products">
        Browse Products
      </Link>

      <h2 className="mt-5 fw-bold">Shop by Category</h2>

      <div className="row g-4 mt-3 justify-content-center">
       {categories?.map((cat, i) => (
  <div className="col-6 col-md-3" key={i}>
    <Link to={`/category/${cat.slug}`} className="text-decoration-none">
      <div className="p-4 rounded shadow-sm bg-white">
        <h5 className="text-dark">{cat.name}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
