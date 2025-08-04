import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { getMockProducts } from "../data/mockProducts";
import ItemDetail from "../components/products/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingMockData, setUsingMockData] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        console.log("=== BUSCANDO PRODUTO ID:", id, "===");

        // Primeiro tenta buscar no Firebase
        const docSnap = await getDoc(doc(db, "products", id));

        if (docSnap.exists()) {
          console.log("✅ Produto encontrado no Firebase:", docSnap.data());
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log(
            "⚠️ Produto não encontrado no Firebase, buscando em mock data"
          );
          const mockProducts = await getMockProducts();
          const mockProduct = mockProducts.find((p) => p.id === id);

          if (mockProduct) {
            console.log("✅ Produto encontrado em mock data:", mockProduct);
            setProduct(mockProduct);
            setUsingMockData(true);
          } else {
            console.log("❌ Produto não encontrado em lugar nenhum!");
            setError("Produto não encontrado");
          }
        }
      } catch (err) {
        console.error("❌ Erro ao buscar produto:", err);

        // Fallback para mock data
        try {
          const mockProducts = await getMockProducts();
          const mockProduct = mockProducts.find((p) => p.id === id);

          if (mockProduct) {
            setProduct(mockProduct);
            setUsingMockData(true);
            setError(`Firebase indisponível: ${err.message}`);
          } else {
            setError("Produto não encontrado");
          }
        } catch (mockErr) {
          setError("Erro ao carregar produto");
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div
        style={{
          padding: "40px",
          textAlign: "center",
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "5px solid #f3f3f3",
            borderTop: "5px solid #007bff",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            marginBottom: "20px",
          }}
        ></div>
        <h2 style={{ color: "#e0e0e0" }}>🔄 Carregando produto...</h2>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error && !product) {
    return (
      <div
        style={{
          padding: "40px",
          textAlign: "center",
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#e74c3c", marginBottom: "20px" }}>❌ {error}</h2>
        <p style={{ color: "#999", marginBottom: "30px" }}>
          O produto que você está procurando não foi encontrado.
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
          }}
        >
          ← Voltar à loja
        </Link>
      </div>
    );
  }

  return (
    <div>
      {usingMockData && (
        <div
          style={{
            padding: "15px",
            margin: "20px",
            backgroundColor: "#fff3cd",
            border: "1px solid #ffeaa7",
            borderRadius: "5px",
            color: "#856404",
          }}
        >
          ⚠️ <strong>Usando dados de demonstração.</strong>
          <br />
          {error
            ? `Erro Firebase: ${error}`
            : "Configure o Firebase seguindo as instruções em FIREBASE_SETUP.md"}
        </div>
      )}

      {product && <ItemDetail item={product} />}
    </div>
  );
};

export default ItemDetailContainer;
