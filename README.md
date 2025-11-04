# Nera Dental Clinic — Starter (Next.js + PocketBase)

A clean starter for dental clinic management: patients, appointments, billing, and x‑ray uploads using Next.js 14 and PocketBase.

## Features (MVP)
- Email/password login via PocketBase `users` collection
- Patients list (CRUD to be added)
- Appointments list
- Billing & invoices overview (balance = total - paid)
- Simple, clean UI with Tailwind (no CSS framework bloat)
- Ready to package as a desktop app using **Tauri** or **Electron**

## Quick Start

### 1) Run PocketBase
Download from https://pocketbase.io/ and run locally:
```bash
./pocketbase serve
```
Open http://127.0.0.1:8090/_/ and create an admin.

Import the schema:
- Go to **Settings → Import collections** and import `pb_schema.json` from this repo.

### 2) Configure env
Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_PB_URL` to your PocketBase URL.

### 3) Install & run web app
```bash
npm install
npm run dev
```

### 4) Create a user
In PocketBase admin, create a user in the `users` collection, then login at `/login`.

## Building for Windows (.exe)
Use **Tauri** to wrap the Next.js build:
- Install Rust and Tauri CLI, then
```bash
npm run build
# init tauri in this folder (tauri init) and point to the out directory
```
Alternatively, use **Electron** with a minimal wrapper.

## Collections
See `pb_schema.json` for collections:
- `users` (auth)
- `clinics`
- `patients`
- `appointments`
- `invoices`
- `payments`
- `xray_images`
- `treatments`

You can extend with per-clinic roles and revenue dashboards.

## Notes
This is a starter scaffold. Add create/edit forms and server actions for full CRUD, role-based access, and reports (monthly income, pending per clinic, etc.).


## 🛰️ Deploy Online (Recommended)

### Backend: PocketBase on Render
- Use `deploy/pocketbase/Dockerfile` and `render.yaml`.
- Add a **Persistent Disk** at `/pb/pb_data` so data survives restarts.
- Set **CORS** in PocketBase → Settings → CORS:
  - Allowed origins: your frontend domain(s) (e.g., https://nera-dental.vercel.app, http://localhost:3000)
  - Allowed headers: *
  - Allow credentials: true

### Frontend: Next.js on Vercel
1. Import this repo into Vercel.
2. Add Environment Variable: `NEXT_PUBLIC_PB_URL` = `https://<your-render>.onrender.com`
3. Build & deploy — you’ll get `https://your-app.vercel.app`

### (Optional) Frontend on Netlify
- `netlify.toml` included. Set `NEXT_PUBLIC_PB_URL` in Netlify Site Settings → Environment variables.

