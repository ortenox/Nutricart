import os
from dotenv import load_dotenv

load_dotenv()

# Gemini
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Mayar
MAYAR_API_KEY = os.getenv("MAYAR_API_KEY")
MAYAR_BASE_URL = os.getenv("MAYAR_BASE_URL")

# Frontend
FRONTEND_URL = os.getenv("FRONTEND_URL")