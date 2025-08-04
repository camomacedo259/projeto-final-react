import Item from "./Item";

const ItemList = ({ items }) => {
  if (!items || items.length === 0) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h3>📦 Nenhum produto encontrado</h3>
        <p>Não há produtos disponíveis nesta categoria.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {items.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
