from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class IngredientRequest(BaseModel):
    ingredients: list[str]


@router.post("/marketplace")
def get_marketplace_links(data: IngredientRequest):

    results = []

    for item in data.ingredients:

        results.append({
            "name": item,
            "tokopedia": f"https://www.tokopedia.com/search?q={item}",
            "shopee": f"https://shopee.co.id/search?keyword={item}"
        })

    return {
        "results": results
    }