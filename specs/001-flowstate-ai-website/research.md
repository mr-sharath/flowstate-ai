# Research Findings

## Decision: Use jsPDF for PDF report generation

**Rationale**: jsPDF is a lightweight, client-side JavaScript library that allows generating PDF documents directly in the browser, perfect for static sites without backend dependencies. It supports text, images, and basic formatting needed for status reports.

**Alternatives considered**: 
- React-pdf: Requires server-side rendering or build-time generation, not suitable for client-side static sites.
- pdfmake: Similar to jsPDF but slightly more complex for basic reports.

## Decision: Use Zustand for state management

**Rationale**: Zustand is a small, fast state management library for React that provides a simple API for managing global state, ideal for handling automation state and data flow in a small application.

**Alternatives considered**:
- Redux: Overkill for a prototype with minimal state needs; adds unnecessary boilerplate.
- Context API: Built-in but less efficient for frequent updates and complex state logic.

## Decision: Use Tailwind CSS for styling

**Rationale**: Tailwind CSS offers utility-first classes that enable rapid development of responsive, dark-mode interfaces, aligning with the high-end aesthetic requirement.

**Alternatives considered**:
- Styled-components: Provides scoped styling but requires more setup for static exports.
- Plain CSS: Manual and slower for prototyping responsive designs.

## Decision: Use Next.js static export

**Rationale**: Next.js supports static site generation (SSG) and export, producing plain HTML/CSS/JS that can be served from any static host, meeting the zero-backend requirement.

**Alternatives considered**:
- Create React App: Simpler but less optimized for static export compared to Next.js.
- Vite: Fast for development but Next.js has better SSG features.
