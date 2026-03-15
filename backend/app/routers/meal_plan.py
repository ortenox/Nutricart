from fastapi import APIRouter
from pydantic import BaseModel

from app.services.gemini_service import generate_meal_plan
from app.services.marketplace_service import generate_marketplace_links
from app.services.smart_grocery_cart_service import generate_smart_cart

router = APIRouter()


# ===== REQUEST MODELS =====

class MealRequest(BaseModel):
    height: float
    weight: float
    goal: str
    budget: int


class IngredientRequest(BaseModel):
    ingredients: list


# ===== MEAL PLAN ENDPOINT =====

@router.post("/meal-plan")
def meal_plan(request: MealRequest):

    height_m = request.height / 100
    bmi = request.weight / (height_m ** 2)

    result = generate_meal_plan(
        bmi,
        request.goal,
        request.budget
    )

    if "error" in result:
        return result

    return {

        "bmi": round(bmi, 1),

        "budget": request.budget,

        "calories": result.get("calories", 0),

        "nutrition": result.get("nutrition", {
            "protein": 0,
            "carbs": 0,
            "fat": 0
        }),

        "meals": result.get("meal_plan", {
            "breakfast": "",
            "lunch": "",
            "dinner": "",
            "snacks": ""
        }),

        "weekly_plan": result.get("weekly_plan", {}),

        "shopping_list": result.get("shopping_list", []),

        "estimated_cost": result.get("estimated_cost", 0)
    }


# ===== MARKETPLACE MATCHER =====

@router.post("/marketplace")
def marketplace(data: IngredientRequest):

    results = []

    for item in data.ingredients:

        results.append({
            "name": item,
            "link": f"https://www.tokopedia.com/search?q={item}"
        })

    return {
        "results": results
    }


# ===== SMART CART =====

@router.post("/smart-cart")
def smart_cart(data: IngredientRequest):

    cart = generate_smart_cart(data.ingredients)

    return cart