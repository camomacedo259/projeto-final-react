import React from "react";
import populateProducts from "../utils/populateProducts";

const PopulateButton = () => {
  const handlePopulate = async () => {
    console.log("Botão clicado, populando produtos...");
    await populateProducts();
  };

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "2px solid #007bff",
        borderRadius: "5px",
      }}
    >
      <h3>Controles de Desenvolvimento</h3>
      <button
        onClick={handlePopulate}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Popular Produtos no Firebase
      </button>
      <p style={{ fontSize: "12px", color: "#666" }}>
        Clique para adicionar produtos de exemplo ao Firestore
      </p>
    </div>
  );
};

export default PopulateButton;
