# Aquarius Osuszanie

Landing page for a building drying and moisture removal service.  
The site is built with React + Vite and includes sections for services, process, social proof, and a contact form integrated with EmailJS.

## Tech Stack

- React 18
- TypeScript
- Vite 5
- SCSS Modules
- React Router
- TanStack Query
- Vitest + Testing Library

## Getting Started

### 1. Install dependencies

Choose one package manager:

```bash
npm install
```

or

```bash
yarn install
```

### 2. Start development server

```bash
npm run dev
```

or

```bash
yarn dev
```

App runs at `http://localhost:8080`.

## Available Scripts

- `dev` - start local dev server
- `build` - create production build
- `build:dev` - create development-mode build
- `preview` - preview production build locally
- `lint` - run ESLint
- `test` - run tests once with Vitest
- `test:watch` - run tests in watch mode

## Project Structure

- `src/components/ui` - UI sections (`Hero`, `Services`, `WhyChooseUs`, `Process`, `Testimonials`, `Contact`, `Footer`, `Navbar`)
- `src/pages` - routed pages (`Index`, `NotFound`)
- `src/constants` - static contact and business data
- `src/test` - test setup and sample tests

## Contact Form Integration

The contact form is implemented in `src/components/ui/Contact/Contact.tsx` and sends messages via EmailJS.

Current service/template/public key values are hardcoded.  
For production, move them to environment variables and reference them via `import.meta.env`.
