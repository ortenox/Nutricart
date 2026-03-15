import { createContext, useState } from "react";

export const MealContext = createContext({});

export function MealProvider({ children }) {
  const [mealResult, setMealResult] = useState(null);

  return (
    <MealContext.Provider value={{ mealResult, setMealResult }}>
      {children}
    </MealContext.Provider>
  );
}