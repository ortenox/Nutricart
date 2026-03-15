from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import bmi
from app.routers import meal_plan
from app.routers import checkout
from app.routers import payment_routes
from app.routers import marketplace


app = FastAPI()


app.add_middleware(

    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]

)


app.include_router(bmi.router)
app.include_router(meal_plan.router)
app.include_router(checkout.router)
app.include_router(payment_routes.router)
app.include_router(marketplace.router)