import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabaseClient";

import { MealProvider } from "./context/MealContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ShoppingList from "./components/ShoppingList";
import BuyIngredients from "./pages/BuyIngredients";
import BudgetMeal from "./pages/BudgetMeal";
import Navbar from "./components/Navbar";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => setSession(session)
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <MealProvider>
        <Routes>
          {!session ? (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/shopping-list" element={<ShoppingList />} />
              <Route path="/buy-ingredients" element={<BuyIngredients />} />
              <Route path="/budget-meal" element={<BudgetMeal />} />
            </>
          )}
        </Routes>
      </MealProvider>
    </BrowserRouter>
  );
}