# SOC Dashboard (React + Tailwind)

A Security Operations Center (SOC) dashboard built with React and Tailwind CSS.

## Features
- Metric cards (Total Alerts, Critical, Open, Resolved)
- Interactive alerts table with:
  - Severity & status filters
  - Resolve alert action
- Severity distribution chart
- Sidebar navigation
- Dark / Light mode toggle
- Responsive design

## Tech Stack
- React
- Vite
- Tailwind CSS
- Recharts

## What This Demonstrates
- Component-based UI design
- State management with React hooks
- Real-world SOC-style workflows
- Clean, maintainable frontend architecture

## Future Improvements
- Backend integration (API)
- Authentication & roles
- Real-time alerts (WebSockets)
- Pagination & search




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
