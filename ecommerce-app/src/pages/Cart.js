import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeItem, clear, totalItems, totalPrice } =
    useContext(CartContext);

  if (totalItems === 0) {
    return (
      <div
        style={{
          padding: "40px",
          textAlign: "center",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "80px", marginBottom: "20px" }}>🛒</div>
        <h2 style={{ color: "#e0e0e0", marginBottom: "20px" }}>
          Seu carrinho está vazio
        </h2>
        <p style={{ color: "#999", marginBottom: "30px" }}>
          Adicione alguns produtos para começar suas compras!
        </p>
        <Link
          to="/"
          style={{
            padding: "12px 24px",
            backgroundColor: "#007bff",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          🛍️ Continuar comprando
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1
        style={{ color: "#e0e0e0", textAlign: "center", marginBottom: "30px" }}
      >
        🛒 Meu Carrinho ({totalItems} {totalItems === 1 ? "item" : "itens"})
      </h1>

      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "1fr 300px",
        }}
      >
        {/* Lista de produtos */}
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "20px",
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                marginBottom: "15px",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/100x100?text=Produto";
                }}
              />

              <div style={{ flex: 1 }}>
                <h3 style={{ margin: "0 0 10px 0", color: "#333" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#666", margin: "5px 0" }}>
                  Categoria: {item.category}
                </p>
                <p
                  style={{
                    color: "#007bff",
                    fontWeight: "bold",
                    margin: "5px 0",
                  }}
                >
                  R$ {item.price.toFixed(2)} x {item.quantity} = R${" "}
                  {(item.price * item.quantity).toFixed(2)}
                </p>
                {item.stock && (
                  <p
                    style={{
                      color: "#28a745",
                      fontSize: "14px",
                      margin: "5px 0",
                    }}
                  >
                    ✅ {item.stock} em estoque
                  </p>
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ color: "#666" }}>Qtd: {item.quantity}</span>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  style={{
                    padding: "8px 12px",
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#c82333")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#dc3545")
                  }
                >
                  🗑️ Remover
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Resumo do pedido */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            padding: "20px",
            height: "fit-content",
            position: "sticky",
            top: "20px",
          }}
        >
          <h3
            style={{ color: "#333", marginBottom: "20px", textAlign: "center" }}
          >
            📋 Resumo do Pedido
          </h3>

          <div
            style={{
              borderBottom: "1px solid #eee",
              paddingBottom: "15px",
              marginBottom: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span style={{ color: "#666" }}>Itens:</span>
              <span style={{ color: "#333" }}>{totalItems}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span style={{ color: "#666" }}>Subtotal:</span>
              <span style={{ color: "#333" }}>R$ {totalPrice.toFixed(2)}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span style={{ color: "#666" }}>Frete:</span>
              <span style={{ color: "#28a745" }}>GRÁTIS</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <span
              style={{ color: "#333", fontWeight: "bold", fontSize: "18px" }}
            >
              Total:
            </span>
            <span
              style={{ color: "#007bff", fontWeight: "bold", fontSize: "18px" }}
            >
              R$ {totalPrice.toFixed(2)}
            </span>
          </div>

          <button
            style={{
              width: "100%",
              padding: "15px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              marginBottom: "10px",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
          >
            💳 Finalizar Compra
          </button>

          <button
            onClick={clear}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "14px",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#5a6268")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#6c757d")}
          >
            🗑️ Limpar Carrinho
          </button>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link
          to="/"
          style={{
            padding: "12px 24px",
            backgroundColor: "#007bff",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          ← Continuar comprando
        </Link>
      </div>
    </div>
  );
};

export default Cart;
