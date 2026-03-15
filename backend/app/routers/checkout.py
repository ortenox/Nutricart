from fastapi import APIRouter
from pydantic import BaseModel
from typing import List
from app.services.payment_service import create_invoice

router = APIRouter(prefix="/checkout")


class CartItem(BaseModel):
    name: str
    price: int
    quantity: int


class CheckoutRequest(BaseModel):
    cart: List[CartItem]


@router.post("/create-payment")
def create_payment(data: CheckoutRequest):

    cart_items = [item.dict() for item in data.cart]

    result = create_invoice(cart_items)

    return result