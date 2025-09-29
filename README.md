# Interactive Fun Facts Generator

A React-based web application that displays random fun facts with smooth visual effects and auto-play functionality.

## Features

- 🎲 **Random Fact Display** - Shows interesting fun facts from a curated collection
- ⏯️ **Auto-Play Mode** - Automatically cycles through facts every 2 seconds
- ✨ **Visual Effects** - Smooth glow animation when facts change
- 🎨 **Clean UI** - Minimalist design with responsive layout

## Technologies Used

- React 18 - Framework
- TypeScript - Language
- CSS3 (Transitions & Filters) - Styling
- Vite - Build tool
- Visual Studio Code (VS Code) - Development environment

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repo-url]
cd interactive_frontend_work_req_2
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## How It Works
### Random Fact Selection
The app loads all fun facts from a JSON file (`public/json/funfacts.json`) into the component state using React's `useEffect` hook. When a new fact is needed, the system generates a random index using `Math.floor(Math.random() * allFacts.length)` to select a fact from the array.
### Timing Implementation
Auto-play functionality uses `setInterval()` within a `useEffect` hook to automatically change facts every 2000 milliseconds (2 seconds). The effect includes proper cleanup with `clearInterval()` to prevent memory leaks when the component unmounts or when auto-play is toggled off.
### Visual Effects
When facts change, the text triggers visual effects using CSS transitions and filters. The flash effect is coordinated through React state (`isFlashing`) and automatically resets after 1000ms using `setTimeout()`.

## Project Structure

```
src/
├── assets
├── components/
│   └── RandomFunFactsHelper.tsx
├── utils
├── App.tsx
├── App.css
└── main.tsx

public/
├── json/
│   └── funfacts.json
└── images/
    └── aha.webp
```

## License

MIT License
