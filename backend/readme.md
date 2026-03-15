# NutriCart AI - Cara Penggunaan

**NutriCart** adalah aplikasi meal planner dan online shop untuk bahan makanan sehat, berbasis **React** (frontend) dan **Python** (backend).

---

## 1. Clone Repository
Clone project dari GitHub:
```bash
git clone https://github.com/ortenox/NutriCart.git
cd NutriCart
```

---

## 2. Buat File `.env`
Sebelum menjalankan aplikasi, buat file `.env` di root project.
File ini menyimpan **API key dan konfigurasi penting**.

Contoh `.env`:
```
MAYAR_API_KEY=YOUR_API_KEY_HERE
FRONTEND_URL=http://localhost:3000
```

> **PENTING:** Jangan commit file `.env` ke GitHub.
> Untuk tim, bisa buat `.env.example` agar orang lain tahu variabel yang dibutuhkan tanpa melihat key asli.

---

## 3. Install Dependencies

### Frontend (React)
```bash
cd frontend
npm install
```

### Backend (Python)
```bash
cd ../backend
pip install -r requirements.txt
```

---

## 4. Menjalankan Project

### Backend
```bash
cd backend
uvicorn main:app --reload
```
> API akan berjalan di `http://localhost:8000`

### Frontend
```bash
cd frontend
npm run dev
```
> UI akan berjalan di `http://localhost:5173` (Vite default)

---

## 5. Cara Menggunakan

1. **Buka halaman frontend** di browser (`http://localhost:5173`).
2. **Masukkan data BMI dan tujuan** (misal: weight loss, maintenance, dll).
3. **Dapatkan meal plan** untuk setiap hari.
4. **Tambahkan bahan makanan ke shopping list**.
5. **Gunakan fitur Buy Ingredients** untuk checkout (integrasi payment Mayar).
6. **Pantau breakdown nutrisi** setiap meal plan.

---

## 6. Tips Keamanan

- Semua **API key harus di `.env`**, jangan di-commit.
- Gunakan **`.env.example`** untuk tim kolaborasi.
- Jika project di-deploy, jangan letakkan API key langsung di frontend. Gunakan backend sebagai proxy.

---
