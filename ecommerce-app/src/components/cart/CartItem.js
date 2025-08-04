const CartItem = ({ item, removeItem }) => {
  return (
    <div>
      <h4>{item.title}</h4>
      <p>Quantidade: {item.quantity}</p>
      <p>Subtotal: R$ {item.price * item.quantity}</p>
      <button onClick={() => removeItem(item.id)}>Remover</button>
    </div>
  );
};

export default CartItem;
