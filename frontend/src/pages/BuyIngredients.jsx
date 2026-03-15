import { useEffect, useState } from "react";
import axios from "axios";

export default function BuyIngredients() {

  const [links, setLinks] = useState([]);

  useEffect(() => {

    const saved = localStorage.getItem("meal_result");

    if (!saved) return;

    const data = JSON.parse(saved);

    fetchLinks(data.shopping_list);

  }, []);


  const fetchLinks = async (ingredients) => {

    try {

      const res = await axios.post(
        "http://localhost:8000/marketplace",
        {
          ingredients: ingredients
        }
      );

      setLinks(res.data.results);

    } catch (error) {

      console.error("Marketplace error:", error);

    }

  };

  return (

    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">
        🛍 Buy Ingredients
      </h1>

      <div className="space-y-4">

        {links.map((item, i) => (

          <div
            key={i}
            className="bg-white p-4 rounded shadow flex justify-between"
          >

            <span>{item.name}</span>

            <a
              href={item.link}
              target="_blank"
              className="text-indigo-600 font-semibold"
            >
              Buy
            </a>

          </div>

        ))}

      </div>

    </div>

  );

}