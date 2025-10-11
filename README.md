# AgenticX Landing Page

AI-powered customer experience platform connecting customers with businesses through intelligent search, real-time analytics, and agentic insights.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn-ui (Radix UI)
- **Routing:** React Router
- **State Management:** TanStack Query
- **Internationalization:** Custom i18n (EN, FR, ES, AR)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (http://localhost:8080)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Structure

- `src/components/` - Page sections (Hero, Features, Demos, etc.)
- `src/components/ui/` - Reusable UI components (shadcn-ui)
- `src/contexts/` - React contexts (LanguageContext)
- `src/locales/` - Translation files (en, fr, es, ar)
- `src/pages/` - Route pages

## Key Features

- Multi-language support with context-based translation
- Responsive landing page sections
- Customer and Manager demo interfaces
- Dialog forms for demo booking and trial signup
- Real-time analytics visualization

## Development Notes

- Path alias `@/` maps to `src/`
- Development server runs on port 8080
- TypeScript with relaxed strictness for rapid development
- Custom Tailwind animations and theme configuration
