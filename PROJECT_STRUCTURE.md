# Project Structure Documentation

## Overview

This document provides detailed information about the project structure, components, and styling conventions.

## File Organization

### Source Files (`src/`)

#### Components (`src/components/`)

All reusable UI components are located here:

- **Layout.tsx** - Main layout wrapper that includes Navbar and Footer
- **Navbar.tsx** - Sticky navigation bar with mobile menu
- **Footer.tsx** - Footer with contact information and links
- **MenuCard.tsx** - Card component for displaying menu items
- **ProductGrid.tsx** - Grid layout for displaying products
- **CTABlock.tsx** - Call-to-action block component

#### Pages (`src/pages/`)

Page-level components:

- **Home.tsx** - Landing page with hero, highlights, featured products, and gallery preview
- **Menu.tsx** - Menu page with category filters and product grid
- **About.tsx** - About page with café story, values, and opening hours
- **Gallery.tsx** - Gallery page with image grid and lightbox modal
- **Contact.tsx** - Contact page with contact info, form, and map placeholder

#### Data (`src/data/`)

Data files containing café information:

- **cafeInfo.ts** - Contact information, opening hours, and café story
- **menu.ts** - Menu items with categories, prices, and descriptions
- **gallery.ts** - Gallery images metadata

#### Types (`src/types/`)

TypeScript type definitions:

- **index.ts** - All type definitions (MenuItem, ContactInfo, GalleryImage, Testimonial)

### Public Assets (`public/`)

Static assets served from the root:

- **coffee_shops/kaviaren_pod_vrbou/photos/** - Café images (logo, interior photos)

## Component Architecture

### Component Patterns

1. **Functional Components** - All components use React functional components with hooks
2. **TypeScript** - Full type safety with interfaces and types
3. **Props Interface** - Each component exports its props interface
4. **Reusability** - Components are designed to be reusable and composable

### Styling Conventions

1. **Tailwind CSS** - All styling uses Tailwind utility classes
2. **Responsive Design** - Mobile-first approach with breakpoints
3. **Color System** - Custom coffee-toned palette
4. **Typography** - Playfair Display for headings, Inter for body

## Routing

Routes are defined in `src/App.tsx`:

- `/` - Home
- `/menu` - Menu
- `/about` - About
- `/gallery` - Gallery
- `/contact` - Contact

