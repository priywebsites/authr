# Authentic Cuts Barbershop Website

## Overview

This is a modern, responsive barbershop website built with React, TypeScript, and Express.js. The application showcases Authentic Cuts Barbershop in Kissimmee, FL, featuring a premium design with extensive animations, multiple content sections, and a fully responsive layout. The site is designed to feel sleek and professional while highlighting the barbershop's services and location.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with custom CSS variables
- **UI Components**: Shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for scroll reveals, fade-ins, and smooth transitions
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Development**: Hot module replacement via Vite integration
- **File Structure**: Modular architecture with separate client/server/shared directories

### Component Structure
The application follows a section-based layout with these main components:
- Navigation with smooth scrolling
- Hero section with animated background and floating elements
- About section with contact information
- Business hours with real-time status
- Services showcase with icons and descriptions
- Image gallery
- Customer reviews carousel
- Interactive Google Maps location
- Footer with comprehensive information

## Key Components

### Data Flow
- **State Management**: React hooks for component-level state
- **API Integration**: TanStack Query for data fetching (configured but minimal usage)
- **Real-time Features**: Business hours hook calculates current open/closed status

### Animation System
- Extensive use of Framer Motion for:
  - Scroll-triggered animations (useInView)
  - Floating elements in hero section
  - Staggered card animations
  - Smooth page transitions
  - Hover effects throughout

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Custom mobile detection hook
- Responsive navigation with mobile menu
- Optimized layouts for all screen sizes

## External Dependencies

### Core Technologies
- **Database**: Drizzle ORM configured for PostgreSQL (Neon serverless)
- **Fonts**: Google Fonts (Inter) for modern typography
- **Maps**: Embedded Google Maps for location display
- **Icons**: Lucide React for consistent iconography

### Development Tools
- **Type Safety**: Full TypeScript implementation
- **Code Quality**: ESLint configuration
- **Build System**: Vite with React plugin and development enhancements
- **Replit Integration**: Special development plugins for Replit environment

### UI Framework
- **Component Library**: Comprehensive Shadcn/ui implementation
- **Primitives**: Radix UI for accessible component foundations
- **Styling**: Tailwind CSS with custom design tokens
- **Color Scheme**: Blue-themed color palette with CSS custom properties

## Deployment Strategy

### Build Process
- **Client**: Vite builds React app to `dist/public`
- **Server**: ESBuild bundles Express server to `dist/index.js`
- **Assets**: Static assets handled via Vite's asset pipeline

### Environment Configuration
- **Development**: Vite dev server with HMR
- **Production**: Express serves built static files
- **Database**: Environment-based PostgreSQL connection via DATABASE_URL

### Hosting Requirements
- Node.js environment
- PostgreSQL database (configured for Neon serverless)
- Static file serving capability
- Environment variable support for database connection

### Key Features Implemented
- Fully responsive design across all devices
- Smooth scroll navigation between sections
- Real-time business hours calculation
- Interactive Google Maps integration
- Animated image gallery with authentic barbershop photos
- Customer reviews carousel
- Contact information prominently displayed
- No contact forms (as specifically requested)
- Modern blue-themed color scheme with red accents
- Extensive animations and micro-interactions
- Authentic barbershop storefront hero background
- Mobile-optimized Book Now button centering
- Vercel deployment configuration