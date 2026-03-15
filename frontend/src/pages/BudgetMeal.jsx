import { useEffect, useState } from "react";

export default function BudgetMeal() {

  const [data, setData] = useState(null);

  useEffect(() => {

    const saved = localStorage.getItem("meal_result");

    if (saved) {
      setData(JSON.parse(saved));
    }

  }, []);

  if (!data) {

    return (

      <div className="p-6">

        <h1 className="text-2xl font-bold">
          Budget Meal
        </h1>

        <p>Generate meal plan first.</p>

      </div>

    );

  }

  return (

    <div className="max-w-3xl mx-auto p-6 space-y-4">

      <h1 className="text-2xl font-bold">
        Budget Meal Summary
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        <p>
          Daily Budget: Rp {data.budget}
        </p>

        <p>
          Estimated Cost: Rp {data.estimated_cost}
        </p>

        <p>
          Total Ingredients: {data.shopping_list?.length}
        </p>

      </div>

    </div>

  );

}