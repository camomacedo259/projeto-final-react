import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import {
  getMockProducts,
  getMockProductsByCategory,
} from "../data/mockProducts";
import ItemList from "../components/products/ItemList";

const ItemListContainer = ({ greeting = "Bem-vindo à nossa loja!" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingMockData, setUsingMockData] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        console.log("=== TENTANDO FIREBASE ===");
        console.log("Categoria:", category);
        console.log(
          "API Key:",
          process.env.REACT_APP_API_KEY
            ? "✅ Configurada"
            : "❌ Não configurada"
        );

        let querySnapshot;
        if (category) {
          // Buscar por categoria
          const q = query(
            collection(db, "products"),
            where("category", "==", category)
          );
          querySnapshot = await getDocs(q);
        } else {
          // Buscar todos os produtos
          querySnapshot = await getDocs(collection(db, "products"));
        }

        console.log(
          "✅ Firebase conectado! Documentos encontrados:",
          querySnapshot.docs.length
        );

        const items = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
          };
        });

        if (items.length > 0) {
          console.log("✅ Usando produtos do Firebase:", items);
          setProducts(items);
        } else {
          console.log("⚠️ Nenhum produto no Firebase, usando dados mock");
          const mockProducts = category
            ? await getMockProductsByCategory(category)
            : await getMockProducts();
          setProducts(mockProducts);
          setUsingMockData(true);
        }
      } catch (err) {
        console.error("❌ ERRO no Firebase:", err);
        console.log("🔄 Carregando dados mock como fallback...");

        try {
          const mockProducts = category
            ? await getMockProductsByCategory(category)
            : await getMockProducts();
          setProducts(mockProducts);
          setUsingMockData(true);
          setError(`Firebase indisponível: ${err.message}`);
        } catch (mockErr) {
          console.error("❌ Erro até com dados mock:", mockErr);
          setError("Não foi possível carregar os produtos");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

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
        <h2 style={{ color: "#e0e0e0" }}>🔄 Carregando produtos...</h2>
        <p style={{ color: "#999" }}>
          {category
            ? `Buscando produtos da categoria "${category}"...`
            : "Conectando ao banco de dados..."}
        </p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  const getTitle = () => {
    if (category) {
      return `🏷️ ${category.charAt(0).toUpperCase() + category.slice(1)} (${
        products.length
      } produtos)`;
    }
    return `🛒 Todos os Produtos (${products.length} itens)`;
  };

  return (
    <div style={{ minHeight: "80vh" }}>
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

      <div style={{ padding: "0 20px" }}>
        <h1
          style={{
            color: "#e0e0e0",
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "28px",
          }}
        >
          {getTitle()}
        </h1>

        {!loading && products.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "#999",
            }}
          >
            <h2>📦 Nenhum produto encontrado</h2>
            <p>
              {category
                ? `Não há produtos disponíveis na categoria "${category}".`
                : "Não há produtos disponíveis no momento."}
            </p>
          </div>
        ) : (
          <ItemList items={products} />
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
