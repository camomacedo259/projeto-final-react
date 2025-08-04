import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#212121",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <Link
          to="/"
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#90caf9",
            textDecoration: "none",
          }}
        >
          🛍️ Camila Store
        </Link>

        <Link
          to="/"
          style={{
            color: "#e0e0e0",
            textDecoration: "none",
            margin: "0 1rem",
            fontWeight: "500",
          }}
        >
          Todos os Produtos
        </Link>

        <Link
          to="/category/eletrônicos"
          style={{
            color: "#e0e0e0",
            textDecoration: "none",
            margin: "0 1rem",
            fontWeight: "500",
          }}
        >
          Eletrônicos
        </Link>

        <Link
          to="/category/roupas"
          style={{
            color: "#e0e0e0",
            textDecoration: "none",
            margin: "0 1rem",
            fontWeight: "500",
          }}
        >
          Roupas
        </Link>
      </div>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
