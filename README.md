**Frontend Mock** — React + Tailwind 
**Project overview**

A responsive frontend demo built with React (Vite) and Tailwind CSS that uses mock JSON data to display products. Features include search, category filter, sorting, price slider, product detail modal, favorites (persisted to localStorage), and a simple mock sign-in modal.

Quick demo / screenshot

![Project Mock (1)](https://github.com/user-attachments/assets/2c2eea42-6dd5-4033-887d-aeff7ed59284)
<img width="1893" height="948" alt="Screenshot 2025-11-15 162108" src="https://github.com/user-attachments/assets/aabd2a69-0d62-408f-ae14-4e9863663752" />
<img width="1919" height="952" alt="Screenshot 2025-11-15 162131" src="https://github.com/user-attachments/assets/19fa5a95-38ac-44c5-bdc8-224321a06fe3" />


**Tech stack**

React 18

Vite (dev server & build)

Tailwind CSS (utility-first styling)

Plain JavaScript (ESM)

LocalStorage (favorites persistence)

Static JSON (src/data/products.json) as mock API



**Setup & run (local)**
1. Install dependencies

npm install

2. Run dev server
npm run dev

3. Build for production
npm run build

npm run preview



**Key features implemented**

Responsive product grid (mobile → desktop)

Search across title & description

Category filter (derived from product list)

Sort: Popular / Price (asc/desc) / Rating

Max price range slider

Product detail modal with keyboard Escape dismissal

Favorites (add/remove), persisted in localStorage

Mock sign-in modal (client-side only) with simple validation

Image onError fallback to prevent broken images

Accessible touches: aria roles, keyboard-friendly modal close



**Bonus features (implemented)**

Favorites persisted in localStorage (survives reloads)

Single-file mock JSON data (src/data/products.json) for offline demo

Tailwind styling with a dark modern aesthetic

Clear README and instructions so the repo is deployment-ready for Netlify/Vercel



**Assumptions**

This is a frontend-only assignment; no backend server is required.

Authentication is simulated — no real user accounts or secure storage used.

Images in products.json use remote URLs. If remote images are blocked, the app will show a placeholder image (fallback).

The app uses browser localStorage for persistence (not suitable for multi-device sync).
