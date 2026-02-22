# Quickstart Guide

## Prerequisites

- Node.js 18 or higher
- npm or yarn

## Setup

1. Clone the repository and checkout the feature branch:
   ```
   git checkout 002-flowstate-ai-v2
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Development

Run the development server:
```
npm run dev
```
Open http://localhost:3000 to view the app.

## Building for Production

1. Build the static site:
   ```
   npm run build
   ```

2. The static files will be in the `out/` directory, ready for deployment to any static host like Netlify or Vercel.

## Testing

- Unit tests: `npm run test`
- E2E tests: `npm run cypress` (if configured)
