import React from "react";

const FirebaseTest = () => {
  console.log("Variáveis de ambiente:");
  console.log("API_KEY:", process.env.REACT_APP_API_KEY);
  console.log("AUTH_DOMAIN:", process.env.REACT_APP_AUTH_DOMAIN);
  console.log("PROJECT_ID:", process.env.REACT_APP_PROJECT_ID);
  console.log("STORAGE_BUCKET:", process.env.REACT_APP_STORAGE_BUCKET);
  console.log(
    "MESSAGING_SENDER_ID:",
    process.env.REACT_APP_MESSAGING_SENDER_ID
  );
  console.log("APP_ID:", process.env.REACT_APP_APP_ID);

  return (
    <div style={{ margin: "20px", padding: "20px", border: "1px solid #ccc" }}>
      <h3>Teste de Configuração Firebase</h3>
      <p>
        API Key:{" "}
        {process.env.REACT_APP_API_KEY ? "Configurada" : "NÃO CONFIGURADA"}
      </p>
      <p>
        Auth Domain:{" "}
        {process.env.REACT_APP_AUTH_DOMAIN ? "Configurado" : "NÃO CONFIGURADO"}
      </p>
      <p>
        Project ID:{" "}
        {process.env.REACT_APP_PROJECT_ID ? "Configurado" : "NÃO CONFIGURADO"}
      </p>
      <p>
        Storage Bucket:{" "}
        {process.env.REACT_APP_STORAGE_BUCKET
          ? "Configurado"
          : "NÃO CONFIGURADO"}
      </p>
      <p>
        Messaging Sender ID:{" "}
        {process.env.REACT_APP_MESSAGING_SENDER_ID
          ? "Configurado"
          : "NÃO CONFIGURADO"}
      </p>
      <p>
        App ID:{" "}
        {process.env.REACT_APP_APP_ID ? "Configurado" : "NÃO CONFIGURADO"}
      </p>
    </div>
  );
};

export default FirebaseTest;
