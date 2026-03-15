export default function MealResult({ result }) {

  if (!result) return null;

  if (result.error) {
    return <p>{result.error}</p>;
  }

  return (

    <div className="result">

      <h2>Daily Calories</h2>
      <p>{result.calories}</p>

      <h2>Meal Plan</h2>

      <ul>
        <li><b>Breakfast:</b> {result.meal_plan.breakfast}</li>
        <li><b>Lunch:</b> {result.meal_plan.lunch}</li>
        <li><b>Dinner:</b> {result.meal_plan.dinner}</li>
        <li><b>Snacks:</b> {result.meal_plan.snacks}</li>
      </ul>

      <h2>Shopping List</h2>

      <ul>
        {result.shopping_list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>

  );
}