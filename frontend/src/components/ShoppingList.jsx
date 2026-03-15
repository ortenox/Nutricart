import { useContext, useEffect, useState } from "react";
import { MealContext } from "../context/MealContext";
import { supabase } from "../lib/supabaseClient";
import axios from "axios";

export default function ShoppingList() {
  const { mealResult } = useContext(MealContext);
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Ambil email dari session supabase
    const fetchUserEmail = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (sessionData?.session?.user?.email) {
        setEmail(sessionData.session.user.email);
      }
    };
    fetchUserEmail();
  }, []);

  useEffect(() => {
    if (!mealResult?.shopping_list) {
      setCartItems([]);
      return;
    }

    const formatted = mealResult.shopping_list.map((item) => ({
      name: item,
      price: 10000,
      quantity: 1,
    }));

    setCartItems(formatted);
  }, [mealResult]);

  const toggleItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const totalPrice = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    if (!selectedItems.length) return alert("Pilih item dulu");

    try {
      const response = await axios.post(
        "http://localhost:8000/create-payment",
        {
          cart_items: selectedItems,
          email, // langsung pakai email login
        }
      );

      if (response.data.success) {
        window.location.href = response.data.payment_link;
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Gagal membuat invoice");
    }
  };

  if (!cartItems.length)
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">🛒 Shopping List</h1>
        <p className="text-gray-500">Generate meal plan first.</p>
      </div>
    );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🛒 Shopping List</h1>

      <ul className="space-y-3">
        {cartItems.map((item, i) => (
          <li
            key={i}
            className="flex justify-between items-center bg-white p-3 rounded shadow"
          >
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                onChange={() => toggleItem(item)}
                checked={selectedItems.includes(item)}
              />
              <span>{item.name}</span>
            </label>
            <span>Rp {(item.price * item.quantity).toLocaleString()}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex justify-between items-center">
        <p className="font-bold">Total: Rp {totalPrice.toLocaleString()}</p>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded"
          onClick={handleCheckout}
        >
          Bayar
        </button>
      </div>
    </div>
  );
}