export default function NutritionBreakdown({ nutrition }) {

  const total =
    nutrition.protein +
    nutrition.carbs +
    nutrition.fat;

  const proteinPercent = (nutrition.protein / total) * 100;
  const carbsPercent = (nutrition.carbs / total) * 100;
  const fatPercent = (nutrition.fat / total) * 100;

  return (

    <div className="bg-white shadow rounded-xl p-6 mt-8">

      <h2 className="text-xl font-semibold mb-4">
        🥑 Nutrition Breakdown
      </h2>

      {/* Protein */}
      <div className="mb-4">

        <p className="text-sm font-medium">
          Protein ({nutrition.protein}g)
        </p>

        <div className="w-full bg-gray-200 h-3 rounded">

          <div
            className="bg-green-500 h-3 rounded"
            style={{ width: `${proteinPercent}%` }}
          ></div>

        </div>

      </div>

      {/* Carbs */}
      <div className="mb-4">

        <p className="text-sm font-medium">
          Carbs ({nutrition.carbs}g)
        </p>

        <div className="w-full bg-gray-200 h-3 rounded">

          <div
            className="bg-yellow-500 h-3 rounded"
            style={{ width: `${carbsPercent}%` }}
          ></div>

        </div>

      </div>

      {/* Fat */}
      <div>

        <p className="text-sm font-medium">
          Fat ({nutrition.fat}g)
        </p>

        <div className="w-full bg-gray-200 h-3 rounded">

          <div
            className="bg-red-500 h-3 rounded"
            style={{ width: `${fatPercent}%` }}
          ></div>

        </div>

      </div>

    </div>

  );
}