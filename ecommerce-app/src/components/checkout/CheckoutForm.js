import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

const CheckoutForm = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pedido = {
      buyer: {
        name: e.target.name.value,
        email: e.target.email.value,
      },
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      date: new Date(),
    };

    const docRef = await addDoc(collection(db, "orders"), pedido);
    setOrderId(docRef.id);
    clearCart();
  };

  return (
    <div>
      {!orderId ? (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Nome" required />
          <input name="email" type="email" placeholder="Email" required />
          <button type="submit">Finalizar compra</button>
        </form>
      ) : (
        <h3>Pedido realizado! ID: {orderId}</h3>
      )}
    </div>
  );
};

export default CheckoutForm;
