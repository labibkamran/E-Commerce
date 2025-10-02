# E-Commerce Store

This is a modern e-commerce web application built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). It features a clean UI, product catalog, shopping cart, and responsive design.

## Features

- 🛒 Product listing and details
- 🛍️ Shopping cart functionality
- 🎨 Responsive and modern UI with Tailwind CSS
- ⚡ Fast performance with Next.js
- 🗂️ Modular component structure

## Project Structure

```
├── app/
│   ├── cart/           # Cart page
│   ├── components/     # Reusable UI components
│   ├── product/        # Product details pages
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx        # Home page
├── public/             # Static assets
├── utils/              # Utility functions
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── ...
```

## Getting Started

1. **Install dependencies:**
	```bash
	npm install
	```

2. **Run the development server:**
	```bash
	npm run dev
	```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run start` — Start the production server

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

## Customization

- Add products and update product data in `utils/products.tsx`.
- Customize styles in `app/globals.css` and `tailwind.config.js`.

