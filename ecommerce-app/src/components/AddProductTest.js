import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const AddProductTest = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [message, setMessage] = useState("");

  const addSampleProduct = async () => {
    setIsAdding(true);
    setMessage("");

    try {
      console.log("Tentando adicionar produto...");

      const sampleProduct = {
        title: "Produto Teste",
        price: 99.99,
        category: "teste",
        image: "https://via.placeholder.com/300x200?text=Produto+Teste",
        description:
          "Produto de teste para verificar se o Firebase está funcionando.",
      };

      const docRef = await addDoc(collection(db, "products"), sampleProduct);
      console.log("Produto adicionado com ID: ", docRef.id);
      setMessage(`✅ Produto adicionado com sucesso! ID: ${docRef.id}`);

      // Recarregar a página após alguns segundos para ver o produto
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Erro ao adicionar produto: ", error);
      setMessage(`❌ Erro: ${error.message}`);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "2px solid #28a745",
        borderRadius: "8px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <h3>🧪 Teste do Firebase</h3>
      <p>Clique no botão abaixo para adicionar um produto de teste:</p>

      <button
        onClick={addSampleProduct}
        disabled={isAdding}
        style={{
          padding: "12px 24px",
          backgroundColor: isAdding ? "#6c757d" : "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: isAdding ? "not-allowed" : "pointer",
          fontSize: "16px",
        }}
      >
        {isAdding ? "⏳ Adicionando..." : "➕ Adicionar Produto Teste"}
      </button>

      {message && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            borderRadius: "4px",
            backgroundColor: message.includes("✅") ? "#d4edda" : "#f8d7da",
            color: message.includes("✅") ? "#155724" : "#721c24",
            border: `1px solid ${
              message.includes("✅") ? "#c3e6cb" : "#f5c6cb"
            }`,
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default AddProductTest;
