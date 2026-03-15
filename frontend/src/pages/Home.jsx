import { useState, useContext } from "react";
import BMIForm from "../components/BMIForm";
import MealCard from "../components/MealCard";
import WeeklyMealPlan from "../components/WeeklyMealPlan";
import NutritionBreakdown from "../components/NutritionBreakdown";
import LoadingAI from "../components/LoadingAI";
import { MealContext } from "../context/MealContext";

export default function Home() {
  const { setMealResult } = useContext(MealContext);
  const [loading, setLoading] = useState(false);
  const [localResult, setLocalResult] = useState(null);

  const handleResult = (data) => {
    setLocalResult(data);      
    setMealResult(data);      
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">NutriCart AI</h1>
          <p className="text-gray-500">Smart AI Meal Planner + Grocery Finder</p>
        </div>

        {/* FORM */}
        <BMIForm setResult={handleResult} setLoading={setLoading} />

        {/* LOADING */}
        {loading && <LoadingAI />}

        {/* RESULT */}
        {localResult && !loading && (
          <>
            {/* TOP CARDS */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <h3 className="text-gray-500 text-sm mb-2">Your BMI</h3>
                <p className="text-3xl font-bold text-indigo-600">
                  {localResult.bmi}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow text-center">
                <h3 className="text-gray-500 text-sm mb-2">Daily Calories</h3>
                <p className="text-3xl font-bold text-green-600">
                  {localResult.calories} kcal
                </p>
              </div>
            </div>

            {/* NUTRITION */}
            <NutritionBreakdown nutrition={localResult.nutrition} />

            {/* TODAY MEAL */}
            <MealCard meals={localResult.meals} />

            {/* WEEKLY PLAN */}
            <WeeklyMealPlan weekly={localResult.weekly_plan} />
          </>
        )}
      </div>
    </div>
  );
}