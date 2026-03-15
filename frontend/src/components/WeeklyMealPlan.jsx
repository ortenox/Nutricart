export default function WeeklyMealPlan({ weekly }) {

  if (!weekly) return null;

  const days = Object.entries(weekly);

  return (

    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-4">
        📅 Weekly Meal Plan
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-2">

        {days.map(([day, meals], index) => (

          <div
            key={index}
            className="min-w-[260px] bg-gray-50 rounded-lg p-4 shadow"
          >

            <h3 className="font-bold capitalize mb-3">
              {day}
            </h3>

            <div className="text-sm space-y-1">

              <p>🍳 Breakfast: {meals.breakfast}</p>
              <p>🍛 Lunch: {meals.lunch}</p>
              <p>🍲 Dinner: {meals.dinner}</p>
              <p>🍎 Snacks: {meals.snacks}</p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}