# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (faster bundling)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint with Next.js and TypeScript rules
- `npm start` - Start production server

## Tech Stack & Architecture

This is a **Next.js 15** personal portfolio using the **App Router** with **TypeScript** and **Tailwind CSS v4**. The design is minimalist with subtle Framer Motion fade-in animations.

### Project Structure
- `/src/app/` - Next.js App Router with layout.tsx and page.tsx
- `/src/components/` - Section components (Hero, About, Projects, Contact)
- `/public/` - Static assets including resume PDF and images
- Path aliases: `@/*` maps to `./src/*`

### Key Architecture Patterns

1. **Single Page Application**: Single column, centered layout (~700px max-width)
2. **Dark Mode Only**: Clean dark background (#0a0a0a) with light text
3. **Minimal Animations**: Subtle fade-in on scroll using Framer Motion
4. **TypeScript Strict Mode**: All components use TypeScript interfaces
5. **SEO Optimized**: Comprehensive metadata in `layout.tsx` including OpenGraph and Twitter cards

### Styling Approach
- **Tailwind CSS v4** with utility-first approach
- Minimal color palette in `tailwind.config.ts`:
  - `background`: #0a0a0a (dark background)
  - `foreground`: #ededed (light text)
  - `muted`: #888888 (secondary text)
  - `accent`: #3B82F6 (blue links)
- Clean typography with Inter font
- Mobile-first responsive design

### Component Patterns
- **Hero**: Name, tagline, profile photo, quick links
- **About**: "Currently" section - what you're working on
- **Projects**: Simple list format (title + description + link)
- **Contact**: Icon links for email, GitHub, LinkedIn

### Key Dependencies
- **Next.js 15** with App Router
- **React 19** with strict TypeScript
- **Framer Motion** for subtle animations
- **React Icons** for contact icons
- **Google Fonts** (Inter & Roboto Mono)

## Development Notes

- Font loading optimized with CSS variables and `display: 'swap'`
- ESLint v9 with flat config format (`eslint.config.mjs`)
- Build uses Turbopack for faster development
- Resume PDF (`resume9.8.pdf`) stored in `/public/`
