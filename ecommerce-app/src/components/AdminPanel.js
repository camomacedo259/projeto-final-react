import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const AdminPanel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [message, setMessage] = useState("");

  const sampleProducts = [
    {
      title: "Smartphone Samsung Galaxy S23",
      price: 1299.99,
      category: "eletrônicos",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      description:
        "Smartphone com excelente qualidade de câmera e performance.",
    },
    {
      title: "Notebook Dell Inspiron 15",
      price: 2499.99,
      category: "eletrônicos",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
      description:
        "Notebook ideal para trabalho e estudos com processador Intel.",
    },
    {
      title: "Fones de Ouvido Bluetooth Sony",
      price: 299.99,
      category: "eletrônicos",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      description:
        "Fones sem fio com cancelamento de ruído e excelente qualidade de som.",
    },
  ];

  const addAllProducts = async () => {
    setIsAdding(true);
    setMessage("");

    try {
      let successCount = 0;

      for (const product of sampleProducts) {
        const docRef = await addDoc(collection(db, "products"), product);
        console.log(
          `Produto "${product.title}" adicionado com ID: ${docRef.id}`
        );
        successCount++;
      }

      setMessage(
        `✅ ${successCount} produtos adicionados com sucesso! Recarregue a página para ver.`
      );

      // Recarregar após 3 segundos
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.error("Erro ao adicionar produtos:", error);

      if (error.code === "permission-denied") {
        setMessage(
          `❌ Erro de permissão: Configure as regras do Firestore seguindo o arquivo FIREBASE_SETUP.md`
        );
      } else {
        setMessage(`❌ Erro: ${error.message}`);
      }
    } finally {
      setIsAdding(false);
    }
  };

  if (!isVisible) {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => setIsVisible(true)}
          style={{
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            fontSize: "14px",
          }}
        >
          ⚙️ Admin
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        backgroundColor: "white",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        maxWidth: "300px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <h4 style={{ margin: 0, color: "#333" }}>🔧 Painel Admin</h4>
        <button
          onClick={() => setIsVisible(false)}
          style={{
            background: "none",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            padding: "0",
            color: "#666",
          }}
        >
          ✕
        </button>
      </div>

      <p style={{ fontSize: "12px", color: "#666", margin: "0 0 15px 0" }}>
        Use após configurar as regras do Firebase
      </p>

      <button
        onClick={addAllProducts}
        disabled={isAdding}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: isAdding ? "#6c757d" : "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: isAdding ? "not-allowed" : "pointer",
          fontSize: "14px",
          marginBottom: "10px",
        }}
      >
        {isAdding ? "⏳ Adicionando..." : "📦 Adicionar 3 Produtos"}
      </button>

      {message && (
        <div
          style={{
            padding: "8px",
            borderRadius: "4px",
            fontSize: "12px",
            backgroundColor: message.includes("✅") ? "#d4edda" : "#f8d7da",
            color: message.includes("✅") ? "#155724" : "#721c24",
            border: `1px solid ${
              message.includes("✅") ? "#c3e6cb" : "#f5c6cb"
            }`,
            marginTop: "10px",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
