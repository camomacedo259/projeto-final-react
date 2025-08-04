// Dados mock para teste
export const mockProducts = [
  {
    id: "1",
    title: "Smartphone Samsung Galaxy S23",
    price: 1299.99,
    stock: 10,
    category: "eletrônicos",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    description: "Smartphone com excelente qualidade de câmera e performance.",
  },
  {
    id: "2",
    title: "Notebook Dell Inspiron 15",
    price: 2499.99,
    stock: 5,
    category: "eletrônicos",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    description:
      "Notebook ideal para trabalho e estudos com processador Intel.",
  },
  {
    id: "3",
    title: "Fones de Ouvido Bluetooth Sony",
    price: 299.99,
    stock: 15,
    category: "eletrônicos",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    description:
      "Fones sem fio com cancelamento de ruído e excelente qualidade de som.",
  },
  {
    id: "4",
    title: "Camiseta Básica Algodão",
    price: 49.99,
    stock: 20,
    category: "roupas",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    description:
      "Camiseta 100% algodão, disponível em várias cores e tamanhos.",
  },
  {
    id: "5",
    title: "Tênis Esportivo Nike",
    price: 299.99,
    stock: 8,
    category: "roupas",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    description: "Tênis confortável para atividades físicas e uso casual.",
  },
  {
    id: "6",
    title: "Smartwatch Apple Watch",
    price: 899.99,
    stock: 3,
    category: "eletrônicos",
    image:
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=300&fit=crop",
    description: "Smartwatch com monitoramento de saúde e fitness.",
  },
];

// Simula uma busca assíncrona
export const getMockProducts = () => {
  return Promise.resolve(mockProducts);
};

// Busca produtos por categoria
export const getMockProductsByCategory = (categoryId) => {
  if (!categoryId) return Promise.resolve(mockProducts);
  const filtered = mockProducts.filter(
    (product) => product.category === categoryId
  );
  return Promise.resolve(filtered);
};
