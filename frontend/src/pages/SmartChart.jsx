import { useContext } from "react";
import { MealContext } from "../context/MealContext";

export default function SmartChart() {

  const { mealData } = useContext(MealContext);

  const nutrition = mealData?.nutrition;

  if (!nutrition) {

    return (
      <div className="p-6">
        Generate meal plan first.
      </div>
    );
  }

  return (

    <div className="max-w-3xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">
        📊 Nutrition Breakdown
      </h1>

      <div className="bg-white p-6 rounded shadow">

        <p>Protein: {nutrition.protein} g</p>
        <p>Carbs: {nutrition.carbs} g</p>
        <p>Fat: {nutrition.fat} g</p>

      </div>

    </div>

  );
}