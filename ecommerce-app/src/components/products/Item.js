import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="product-card">
      {product.image && (
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "4px",
            marginBottom: "10px",
          }}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x200?text=Produto";
          }}
        />
      )}

      <h3 style={{ margin: "10px 0", color: "#333", fontSize: "18px" }}>
        {product.title}
      </h3>

      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#007bff",
          margin: "10px 0",
        }}
      >
        R${" "}
        {typeof product.price === "number"
          ? product.price.toFixed(2)
          : product.price}
      </p>

      <p
        style={{
          color: "#666",
          fontSize: "14px",
          lineHeight: "1.4",
          margin: "10px 0",
        }}
      >
        {product.description}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "15px",
        }}
      >
        <span
          style={{
            padding: "4px 8px",
            backgroundColor: "#f8f9fa",
            borderRadius: "12px",
            fontSize: "12px",
            color: "#666",
          }}
        >
          {product.category}
        </span>

        {product.stock !== undefined && (
          <span
            style={{
              padding: "4px 8px",
              backgroundColor: product.stock > 0 ? "#d4edda" : "#f8d7da",
              color: product.stock > 0 ? "#155724" : "#721c24",
              borderRadius: "12px",
              fontSize: "12px",
            }}
          >
            {product.stock > 0 ? `Stock: ${product.stock}` : "Sem estoque"}
          </span>
        )}
      </div>

      <Link
        to={`/item/${product.id}`}
        style={{
          display: "block",
          textAlign: "center",
          marginTop: "15px",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Ver Detalhes
      </Link>
    </div>
  );
};

export default Item;
