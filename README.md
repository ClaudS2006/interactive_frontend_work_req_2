# Interactive Fun Facts Generator

A React-based web application that displays random fun facts with smooth visual effects and auto-play functionality.

## Features

- 🎲 **Random Fact Display** - Shows interesting fun facts from a curated collection
- ⏯️ **Auto-Play Mode** - Automatically cycles through facts every 2 seconds
- ✨ **Visual Effects** - Smooth glow animation when facts change
- 🎨 **Clean UI** - Minimalist design with responsive layout
- 🖼️ **Visual Elements** - Themed imagery to enhance the experience

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

## Learning Objectives Achieved

This project demonstrates:

- **React Hooks**: useState, useEffect for state management and side effects
- **TypeScript Integration**: Interface definitions and type safety
- **Component Lifecycle**: Effect cleanup and dependency management  
- **CSS Animations**: Smooth transitions and filter effect
- **Data Fetching**: JSON data loading
- **Event Handling**: User interactions and state updates

## Future Enhancements

- [ ] Manual next/previous buttons
- [ ] Fact categories and filtering
- [ ] Speed controls for auto-play
- [ ] Favorite facts feature
- [ ] Share functionality

## License

MIT License