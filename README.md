# Heena Khan - Portfolio Website

A modern, responsive portfolio website showcasing software engineering projects and skills. Built with React, TypeScript, and Express.js.

## Features

- **Terminal-themed Interface**: Interactive terminal-style navigation and animations
- **Project Showcases**: Detailed case studies of software engineering projects
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS, and Express.js
- **Performance Optimized**: Fast loading times and smooth animations

## Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Radix UI components
- Wouter for routing

### Backend
- Express.js with TypeScript
- Helmet for security headers
- Rate limiting for API protection

### Development Tools
- Vite for fast development and building
- ESBuild for production bundling
- PostCSS for CSS processing

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   └── data/           # Static data
│   └── public/             # Static assets
├── server/                 # Backend Express application
├── shared/                 # Shared TypeScript types
└── dist/                   # Production build output
```

## Deployment

The application is designed to be deployed as a full-stack application with both frontend and backend components. The production build serves the React app statically while providing API endpoints.

## License

MIT License - feel free to use this as a template for your own portfolio.

## Contact

- **Email**: henakhan@stanford.edu
- **GitHub**: [heenakhan122](https://github.com/heenakhan122)
- **LinkedIn**: [Connect with me](https://linkedin.com/in/heena-khan)