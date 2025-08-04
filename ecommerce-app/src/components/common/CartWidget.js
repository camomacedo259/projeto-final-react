import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        textDecoration: "none",
        color: "#e0e0e0",
        padding: "8px 16px",
        borderRadius: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        transition: "all 0.3s ease",
        position: "relative",
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
      }}
    >
      <span style={{ fontSize: "20px" }}>🛒</span>

      {totalItems > 0 && (
        <span
          style={{
            backgroundColor: "#ff4757",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "12px",
            fontWeight: "bold",
            minWidth: "20px",
            textAlign: "center",
            position: "absolute",
            top: "-2px",
            right: "-2px",
          }}
        >
          {totalItems}
        </span>
      )}

      <span style={{ fontSize: "14px" }}>
        Carrinho {totalItems > 0 && `(${totalItems})`}
      </span>
    </Link>
  );
};

export default CartWidget;
