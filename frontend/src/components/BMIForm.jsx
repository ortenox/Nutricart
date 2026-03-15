import { useState } from "react";
import axios from "axios";

export default function BMIForm({ setResult, setLoading }) {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [budget, setBudget] = useState("");
  const [goal, setGoal] = useState("weight loss");

  const handleSubmit = async (e) => {

    e.preventDefault();
    setLoading(true);

    const res = await axios.post(
      "http://localhost:8000/meal-plan",
      {
        height,
        weight,
        goal,
        budget
      }
    );

    setResult(res.data);
    setLoading(false);
  };

  return (

    <div className="bg-white rounded-xl shadow p-6">

      <h3 className="text-lg font-semibold mb-4">
        AI Meal Planner
      </h3>

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-3"
      >

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="border p-2 rounded w-32"
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="border p-2 rounded w-32"
        />

        <input
          type="number"
          placeholder="Budget / day (Rp)"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="border p-2 rounded w-40"
        />

        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="weight loss">Weight Loss</option>
          <option value="maintain">Maintain</option>
          <option value="weight gain">Weight Gain</option>
        </select>

        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Generate Meal Plan
        </button>

      </form>

    </div>
  );
}