from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/bmi", tags=["BMI"])

class BMIRequest(BaseModel):
    height_cm: float
    weight_kg: float

@router.post("/calculate")
def calculate_bmi(data: BMIRequest):

    height_m = data.height_cm / 100
    bmi = data.weight_kg / (height_m ** 2)

    if bmi < 18.5:
        category = "underweight"
    elif bmi < 25:
        category = "normal"
    elif bmi < 30:
        category = "overweight"
    else:
        category = "obese"

    return {
        "bmi": round(bmi,2),
        "category": category
    }