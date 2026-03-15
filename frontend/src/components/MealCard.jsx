export default function MealCard({ title, emoji, meal }) {

  return (

    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">

      <h3 className="text-xl font-semibold mb-3">
        {emoji} {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {meal}
      </p>

    </div>

  );

}