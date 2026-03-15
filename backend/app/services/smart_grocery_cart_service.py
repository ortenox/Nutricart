def generate_smart_cart(ingredients: list):

    cart = []
    total_cost = 0

    for item in ingredients:

        price = 15000

        cart.append({
            "item": item,
            "quantity": "1 pack",
            "estimated_price": price
        })

        total_cost += price

    return {
        "cart": cart,
        "total_estimated_cost": total_cost
    }