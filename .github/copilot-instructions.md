# React + TypeScript Essentials Project

## Project Overview
Educational React 18 + TypeScript project using Vite for fast development. Focus is on learning React with TypeScript fundamentals and type-safe component patterns.

## Tech Stack
- **Runtime**: React 18.2 with TypeScript 5.0
- **Build Tool**: Vite 4.4 (dev server + HMR)
- **Styling**: Global CSS with custom properties
- **Linting**: ESLint with TypeScript + React plugins

## Development Workflow

### Running the Project
```bash
npm run dev      # Start Vite dev server (default: http://localhost:5173)
npm run build    # TypeScript compile + Vite production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint checks
```

**Note**: The terminal shows `npm start dev` failed - the correct command is `npm run dev`.

## TypeScript Configuration

### Strict Mode Enabled
- `strict: true` - All strict type checks enabled
- `noUnusedLocals: true` - Flag unused variables
- `noUnusedParameters: true` - Flag unused function parameters
- Component props must be explicitly typed

### Module Resolution
- Uses `"moduleResolution": "bundler"` (Vite-specific)
- Allows `.ts`/`.tsx` imports in source (e.g., `'./App.tsx'`)
- `noEmit: true` - TypeScript only for type-checking, Vite handles transpilation

## Component Patterns

### Inline Props Typing
Components use inline object type syntax for props (not separate interfaces):

```tsx
export default function CourseGoal({
    title,
    description
}: {
    title: string,
    description: string
}) {
    return (
        <article>
            <h2>{title}</h2>
            <p>{description}</p>
        </article>
    );
}
```

**Pattern**: Destructured props with inline type annotation - prioritize simplicity for learning.

### Component Organization
- All components in [src/components/](src/components/)
- Default exports for components
- Explicit `.tsx` extensions in imports
- No PropTypes - rely on TypeScript

## Styling Approach
- Single global stylesheet: [src/index.css](src/index.css)
- CSS imports in [main.tsx](src/main.tsx), not per-component
- Uses Google Fonts (Poppins) and CSS gradients
- No CSS modules or styled-components

## File Structure Conventions
```
src/
  App.tsx           # Root component
  main.tsx          # React entry point (renders to #root)
  index.css         # Global styles
  components/       # All reusable components
    ComponentName.tsx
```

## Key Guidelines
1. **Always include `.tsx` extensions** in imports (required by tsconfig)
2. **Type all component props** - no implicit `any`
3. **Use function components** with arrow syntax or function declarations
4. **StrictMode is enabled** - expect double rendering in dev
5. **Non-null assertion usage**: `document.getElementById('root')!` - acceptable for known DOM elements

## Common Tasks

### Adding a New Component
1. Create `src/components/MyComponent.tsx`
2. Use inline props typing pattern
3. Default export the component
4. Import with `.tsx`: `import MyComponent from './components/MyComponent.tsx'`

### Fixing Type Errors
- Check ESLint output: `npm run lint`
- TypeScript errors appear during `npm run dev` and `npm run build`
- Unused variables/params will fail linting due to strict rules
