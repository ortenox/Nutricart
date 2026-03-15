import os
import json
import re
from google import genai
from dotenv import load_dotenv

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

client = genai.Client(api_key=GEMINI_API_KEY)


def generate_meal_plan(bmi: float, goal: str, budget: int):

    prompt = f"""
You are a professional nutritionist AI.

Create a healthy INDONESIAN meal plan. With this data

BMI: {bmi}
Goal: {goal}
Maximum Daily budget: Rp {budget}

Requirements:
- Use foods common in Indonesia
- Ingredients easy to find in Tokopedia/Shopee
- Estimated cost must NOT exceed daily budget

Return ONLY JSON with stricly this structure:

{{
  "calories": number,
  "nutrition": {{
    "protein": number,
    "carbs": number,
    "fat": number
  }},
  "meal_plan": {{
    "breakfast": "string",
    "lunch": "string",
    "dinner": "string",
    "snacks": "string"
  }},
  "weekly_plan": {{
    "monday": {{
      "breakfast": "string",
      "lunch": "string",
      "dinner": "string",
      "snacks": "string"
    }},
    "tuesday": {{
      "breakfast": "string",
      "lunch": "string",
      "dinner": "string",
      "snacks": "string"
    }},
    "wednesday": {{
      "breakfast": "string",
      "lunch": "string",
      "dinner": "string",
      "snacks": "string"
    }},
    "thursday": {{
      "breakfast": "string",
      "lunch": "string",
      "dinner": "string",
      "snacks": "string"
    }},
    "friday": {{
      "breakfast": "string",
      "lunch": "string",
      "dinner": "string",
      "snacks": "string"
    }},
    "saturday": {{
      "breakfast": "string",
      "lunch": "string",
      "dinner": "string",
      "snacks": "string"
    }},
    "sunday": {{
      "breakfast": "string",
      "lunch": "string",
      "dinner": "string",
      "snacks": "string"
    }}
  }},
  "shopping_list": [
    "ingredient"
  ],
  "estimated_cost": number
}}
"""

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        text_output = response.text.strip()

        # hapus markdown
        text_output = text_output.replace("```json", "").replace("```", "")

        # ambil hanya JSON pertama
        json_match = re.search(r"\{.*\}", text_output, re.DOTALL)

        if not json_match:
            raise ValueError("JSON tidak ditemukan di response AI")

        clean_json = json_match.group()

        data = json.loads(clean_json)

        return {
            "bmi": bmi,
            "goal": goal,
            **data
        }

    except Exception as e:

        print("Gemini error:", e)

        return {
            "error": str(e)
        }