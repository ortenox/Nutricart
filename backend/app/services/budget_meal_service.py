def generate_budget_meal_plan(goal: str, budget: int):

    if budget <= 50000:
        meal_plan = {
            "breakfast": {
                "meal": "Oatmeal + banana",
                "estimated_cost": 10000
            },
            "lunch": {
                "meal": "Nasi merah + tempe + sayur",
                "estimated_cost": 20000
            },
            "dinner": {
                "meal": "Sup ayam + sayur",
                "estimated_cost": 20000
            }
        }

    elif budget <= 100000:
        meal_plan = {
            "breakfast": {
                "meal": "Egg omelette + whole wheat bread",
                "estimated_cost": 20000
            },
            "lunch": {
                "meal": "Brown rice + grilled chicken + vegetables",
                "estimated_cost": 40000
            },
            "dinner": {
                "meal": "Chicken soup + salad",
                "estimated_cost": 30000
            }
        }

    else:
        meal_plan = {
            "breakfast": {
                "meal": "Avocado toast + egg",
                "estimated_cost": 30000
            },
            "lunch": {
                "meal": "Salmon rice bowl",
                "estimated_cost": 50000
            },
            "dinner": {
                "meal": "Grilled chicken salad",
                "estimated_cost": 40000
            }
        }

    return {
        "daily_budget": budget,
        "meal_plan": meal_plan
    }