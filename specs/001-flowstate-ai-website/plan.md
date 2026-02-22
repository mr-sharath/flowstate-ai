# Implementation Plan: Build FlowState AI Website

**Branch**: `001-flowstate-ai-website` | **Date**: 2026-02-21 | **Spec**: spec.md
**Input**: Feature specification from `/specs/001-flowstate-ai-website/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Build a static web prototype of FlowState AI dashboard using Next.js, featuring dark-mode, mobile-responsive design with hardcoded data for meetings, milestones, invoices, and roadmap. Focus on one-click automation for generating reports and invoices via front-end state.

## Technical Context

**Language/Version**: JavaScript/TypeScript with Next.js 14+  
**Primary Dependencies**: Next.js, React, Tailwind CSS for styling, jsPDF for PDF reports, Zustand for state management  
**Storage**: N/A (hardcoded data)  
**Testing**: Jest for unit tests, Cypress for e2e  
**Target Platform**: Modern web browsers, mobile-responsive  
**Project Type**: Static web application  
**Performance Goals**: Dashboard loads in <3s, automation completes in <5s  
**Constraints**: No backend, static export, dark-mode aesthetic, zero-backend setup  
**Scale/Scope**: Single-page dashboard with three sections

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

From constitution.md:
- Purpose: Deliver static web application without custom backend.
- Scope: Static pages, client-side interactivity, responsive layout.
- Non-goals: No server-side APIs, auth, real-time.

This plan aligns: using Next.js static export, client-side only, no backend.

Gates pass.

Post-design check: No additional technologies or patterns introduced that violate the constitution. All logic remains client-side, no backend dependencies added.

Gates pass.

## Project Structure

### Documentation (this feature)

```text
specs/001-flowstate-ai-website/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── app/  # Next.js app router
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── dashboard/
│   │   ├── PulseFeed.tsx
│   │   ├── FinancialHub.tsx
│   │   └── VisualRoadmap.tsx
│   ├── AutomationButton.tsx
│   └── ...
├── lib/
│   ├── data/
│   │   ├── meetings.ts
│   │   ├── milestones.ts
│   │   ├── invoices.ts
│   │   └── projects.ts
│   └── utils/
│       ├── pdfGenerator.ts
│       └── invoiceSimulator.ts
└── styles/

public/
├── assets/
│   ├── icons/
│   └── images/
└── ...
```

**Structure Decision**: Single Next.js project using app router for static export, with components for dashboard sections and lib for hardcoded data and utilities.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
