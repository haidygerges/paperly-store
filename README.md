# 🛍️ Paperly Store

A modern e-commerce web application for stationery and paper products, built with React, Vite, and Tailwind CSS.

## ✨ Features

- 🏠 **Home page** — Hero section with featured products
- 🛒 **Product catalog** — Browse all available items
- 📄 **Product detail page** — Full product info and add-to-cart
- 🧺 **Shopping cart** — Manage cart items with quantity controls
- 💳 **Checkout page** — Order summary and form submission
- 📱 **Fully responsive** — Works on mobile, tablet, and desktop

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI library |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [React Router v7](https://reactrouter.com/) | Client-side routing |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Lucide React](https://lucide.dev/) | Icon library |

## 📁 Project Structure

```
paperly-store/
├── public/
│   └── assets/          # Product images
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── CartItem.jsx
│   ├── context/
│   │   └── CartContext.jsx   # Global cart state
│   ├── data/
│   │   └── products.json     # Product data
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   └── Checkout.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/paperly-store.git
   cd paperly-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.
5. ### Option 2: Live Server (recommended for development)
If you use VS Code, install the [Live Server]( https://haidygerges.github.io/paperly-store/) extension and click **Go Live**.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## 📦 Deployment

Build the project for production:

```bash
npm run build
```

The output will be in the `dist/` folder — ready to deploy to [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or any static hosting.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
