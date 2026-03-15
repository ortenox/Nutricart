# backend/app/routes/payment_routes.py
from fastapi import APIRouter
from pydantic import BaseModel
from app.services.payment_service import create_invoice

router = APIRouter()

class CartItem(BaseModel):
    name: str
    quantity: int
    price: int

class PaymentRequest(BaseModel):
    cart_items: list[CartItem]
    email: str

@router.post("/create-payment")
async def create_payment(request: PaymentRequest):
    cart_items = request.cart_items
    email = request.email
    result = create_invoice([item.dict() for item in cart_items], email)
    return result