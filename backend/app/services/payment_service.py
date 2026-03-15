# backend/app/services/payment_service.py
import requests
from config import MAYAR_API_KEY, FRONTEND_URL

def create_invoice(cart_items, email):
    items = []
    for item in cart_items:
        items.append({
            "quantity": item["quantity"],
            "rate": item["price"],         # Mayar API pakai "rate"
            "description": item["name"]
        })

    payload = {
        "name": "NutriCart Customer",
        "email": email,
        "mobile": "08123456789",
        "redirectUrl": f"{FRONTEND_URL}/payment-success",
        "description": "NutriCart Grocery Purchase",
        "items": items
    }

    headers = {
        "Authorization": f"Bearer {MAYAR_API_KEY}",
        "Content-Type": "application/json"
    }

    url = "https://api.mayar.id/hl/v1/invoice/create"

    try:
        response = requests.post(url, json=payload, headers=headers)
        data = response.json()
        if data.get("statusCode") == 200:
            return {"success": True, "payment_link": data["data"]["link"]}
        else:
            return {"success": False, "message": data.get("messages", "Invoice gagal dibuat")}
    except Exception as e:
        return {"success": False, "message": str(e)}