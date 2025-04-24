# Coin View

A real-time cryptocurrency price tracking application built with React and TypeScript. Monitor live price updates, market statistics, and performance metrics for top cryptocurrencies.

## Features

- Real-time price updates every 2 seconds
- Live price change indicators (1h, 24h, 7d)
- Market cap and volume tracking
- Circulating supply visualization
- Responsive design with mobile support

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Routing**: React Router v7
- **UI Components**: Custom components with Radix UI primitives
- **Styling**: TailwindCSS
- **Data Fetching**: TanStack Query (React Query)
- **Notifications**: Sonner
- **Icons**: Lucide React

## Project Architecture

The project follows a modular architecture with the following structure:

```
src/
├── components/      # Reusable UI components
├── lib/            # Utility functions and helpers
├── pages/          # Route components
└── store/          # Redux state management
```

## Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/PPRAMANIK62/coin-view.git
cd coin-view
```

2. Install dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

3. Start the development server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun
bun dev
```

4. Open http://localhost:5173 in your browser

## Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build
- `lint` - Run ESLint

## Environment Setup

The project requires:

- Node.js 18+ (20+ recommended)
- npm/yarn/pnpm/bun
