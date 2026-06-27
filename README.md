
 E‑Commerce React Application

This project is a partly functional e‑commerce web application built with **React**, **React Router**, and **Bootstrap**.  
It includes d product listings, category‑based browsing, detailed product pages, and a working shopping cart system.

Products and categories are fetched live from the **DummyJSON API**, making the store fully dynamic and automatically updated using react methods such as useState and useEffect.

---

 - Features

 Dynamic Home Page

- Categories loaded directly from the API
- Each category links to its own dedicated page

 Product Listing Page
- Grid layout for clean product display
- Sorting options (price low→high, high→low, rating)
- Add‑to‑cart button with quantity handling

 Category Pages
- Auto‑generated pages based on API category slugs
- Each page shows products belonging to that category
- Fully responsive grid layout

 Product Details Page
- Large product image
- Full description
- Rating stars
- Price and discount
- Add‑to‑cart functionality

 Shopping Cart
- Add items from any page
- Increase/decrease quantity
- Remove items
- Auto‑calculated total price

 Navigation Bar
- Gradient UI design
- Links to Home, Products, Cart
- Cart item count badge

---

 API Used

This project uses the **DummyJSON Products API**:

- All products:  
  `https://dummyjson.com/products`

- Categories list:  
  `https://dummyjson.com/products/categories`

- Products by category:  
  `https://dummyjson.com/products/category/{slug}`

---

Tech Stack

- **React**
- **React Router**
- **Bootstrap**
- **JavaScript (ES6+)**
- **DummyJSON API**

---



Install dependencies:

npm install @vite latest
npm install react-bootstrap
npm install react-dom



 Further  improvements  can be done by creating additional features such as :
- Search bar

- Wishlist system

- Dark mode

- User login

- Checkout page

- Featured products carousel

