import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const sampleProducts = [
  {
    title: "Smartphone Samsung Galaxy",
    price: 1299.99,
    category: "eletrônicos",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    description: "Smartphone com excelente qualidade de câmera e performance.",
  },
  {
    title: "Notebook Dell Inspiron",
    price: 2499.99,
    category: "eletrônicos",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    description: "Notebook ideal para trabalho e estudos.",
  },
  {
    title: "Fones de Ouvido Bluetooth",
    price: 299.99,
    category: "eletrônicos",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "Fones sem fio com excelente qualidade de som.",
  },
  {
    title: "Camiseta Básica",
    price: 49.99,
    category: "roupas",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Camiseta 100% algodão, disponível em várias cores.",
  },
  {
    title: "Tênis Esportivo",
    price: 199.99,
    category: "roupas",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    description: "Tênis confortável para atividades físicas.",
  },
];

const populateProducts = async () => {
  try {
    console.log("Iniciando população do banco...");

    for (const product of sampleProducts) {
      const docRef = await addDoc(collection(db, "products"), product);
      console.log("Produto adicionado com ID: ", docRef.id);
    }

    console.log("Todos os produtos foram adicionados com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar produtos: ", error);
  }
};

export default populateProducts;
