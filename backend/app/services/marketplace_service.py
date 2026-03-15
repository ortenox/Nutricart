def generate_marketplace_links(ingredients):

    result = []

    for item in ingredients:

        result.append({
            "name": item,
            "tokopedia": f"https://www.tokopedia.com/search?q={item}",
            "shopee": f"https://shopee.co.id/search?keyword={item}"
        })

    return result