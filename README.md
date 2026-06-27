# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 🛍️ E‑Commerce React Application

This project is a fully functional e‑commerce web application built with **React**, **React Router**, and **Bootstrap**.  
It includes dynamic product listings, category‑based browsing, detailed product pages, and a working shopping cart system.

Products and categories are fetched live from the **DummyJSON API**, making the store fully dynamic and automatically updated.

---

## ✨ Features

### 🔹 Dynamic Home Page
- Hero section with branding
- Categories loaded directly from the API
- Each category links to its own dedicated page

### 🔹 Product Listing Page
- Grid layout for clean product display
- Sorting options (price low→high, high→low, rating)
- Add‑to‑cart button with quantity handling

### 🔹 Category Pages
- Auto‑generated pages based on API category slugs
- Each page shows products belonging to that category
- Fully responsive grid layout

### 🔹 Product Details Page
- Large product image
- Full description
- Rating stars
- Price and discount
- Add‑to‑cart functionality

### 🔹 Shopping Cart
- Add items from any page
- Increase/decrease quantity
- Remove items
- Auto‑calculated total price

### 🔹 Navigation Bar
- Gradient UI design
- Links to Home, Products, Cart
- Cart item count badge

---

## 🔗 API Used

This project uses the **DummyJSON Products API**:

- All products:  
  `https://dummyjson.com/products`

- Categories list:  
  `https://dummyjson.com/products/categories`

- Products by category:  
  `https://dummyjson.com/products/category/{slug}`

---

## 🛠️ Tech Stack

- **React**
- **React Router**
- **Bootstrap**
- **JavaScript (ES6+)**
- **DummyJSON API**

---

## 🚀 Getting Started

Install dependencies:

```bash
npm install
