# Kaviareň pod Vŕbou - Website

Modern, responsive website for Kaviareň pod Vŕbou café in Bratislava, Slovakia.

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
   - **Images are automatically copied** from `../photos/` to `public/coffee_shops/kaviaren_pod_vrbou/photos/` before starting the dev server
   - No need to run `copy-images` manually!
```bash
npm run dev
```

3. Build for production:
   - **Images are automatically copied** before building
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
├── public/
│   └── coffee_shops/
│       └── kaviaren_pod_vrbou/
│           └── photos/          # Café images
├── src/
│   ├── components/              # Reusable UI components
│   ├── pages/                   # Page components
│   ├── data/                    # Data files
│   ├── types/                   # TypeScript types
│   ├── App.tsx                  # Main app component with routing
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎨 Design System

### Colors

The website uses a warm coffee-toned palette:

- **Latte** - Light beige tones for backgrounds
- **Espresso** - Dark brown for text and accents
- **Crema** - Golden tones for highlights and CTAs

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## 📄 Pages

- **Home** (`/`) - Hero, highlights, featured products, gallery preview
- **Menu** (`/menu`) - Filterable menu by category
- **About** (`/about`) - Café story, values, opening hours
- **Gallery** (`/gallery`) - Image grid with lightbox
- **Contact** (`/contact`) - Contact info, form, map placeholder

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. The `dist/` folder contains the production-ready files.

3. Deploy to your preferred hosting service (Vercel, Netlify, etc.)

## 📝 TODO / Future Enhancements

- [ ] Add Google Maps embed to Contact page
- [ ] Implement actual contact form submission (backend integration)
- [ ] Add image optimization (WebP, lazy loading)
- [ ] Add SEO meta tags and Open Graph images
- [ ] Implement multi-language support (SK/EN toggle)
- [ ] Add online ordering system
- [ ] Add blog/news section
- [ ] Add testimonials/reviews section
- [ ] Add admin panel for menu management

## 👥 Credits

Website for **Kaviareň pod Vŕbou**
- Address: Ráztočná 2, Bratislava, Slovakia
- Phone: 0908 388 917
- Email: kaviarenpodvrbou@gmail.com
- Facebook: [Kaviareň pod Vŕbou](https://www.facebook.com/kaviarenpodvrbou?locale=sk_SK)

