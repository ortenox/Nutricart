import { useContext } from "react";
import { MealContext } from "../context/MealContext";

export default function ShoppingPage() {

  const { mealData } = useContext(MealContext);

  const items = mealData?.shopping_list ?? [];

  return (

    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">
        🛒 Shopping List
      </h1>

      {items.length === 0 ? (
        <p>Generate meal plan first.</p>
      ) : (

        <ul className="space-y-2">

          {items.map((item, index) => (

            <li
              key={index}
              className="bg-white p-3 rounded shadow"
            >
              {item}
            </li>

          ))}

        </ul>

      )}

    </div>

  );
}