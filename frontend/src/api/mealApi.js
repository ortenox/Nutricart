import axios from "axios";

const API_URL = "http://localhost:8000";

export const generateMeal = async (bmi, goal) => {

  try {

    const response = await axios.post(`${API_URL}/meal-plan`, {
      bmi: bmi,
      goal: goal
    });

    return response.data;

  } catch (error) {

    console.error("API Error:", error);

    return {
      error: "Failed to fetch meal plan"
    };

  }

};