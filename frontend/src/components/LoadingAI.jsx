export default function LoadingAI() {

  return (
    <div className="text-center mt-8">

      <div className="animate-pulse">

        <p className="text-lg font-semibold text-indigo-600">
          🤖 AI is generating your meal plan...
        </p>

        <div className="mt-4 flex justify-center gap-2">

          <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce delay-200"></div>
          <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce delay-400"></div>

        </div>

      </div>

    </div>
  );
}