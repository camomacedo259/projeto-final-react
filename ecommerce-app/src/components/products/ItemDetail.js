import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = (qty) => {
    addItem(item, qty);
    setAdded(true);
  };

  return (
    <div>
      <h2>{item.title}</h2>
      <p>Preço: R$ {item.price}</p>
      <p>Estoque: {item.stock}</p>
      {!added ? (
        <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <p>Produto adicionado!</p>
      )}
    </div>
  );
};

export default ItemDetail;
