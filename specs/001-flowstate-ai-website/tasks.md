# Tasks: Build FlowState AI Website

**Input**: Design documents from `/specs/001-flowstate-ai-website/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Not requested in specification - tests are optional and not included.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Single project: `src/`, `lib/` at repository root
- Paths follow Next.js app router structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create Next.js project structure per implementation plan
- [x] T002 Install dependencies: Next.js, React, Tailwind CSS, jsPDF, Zustand
- [x] T003 Configure static export in next.config.js

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Create hardcoded data files: lib/data/meetings.ts, lib/data/milestones.ts, lib/data/invoices.ts, lib/data/projects.ts
- [x] T005 Setup global styles and dark mode with Tailwind in src/app/globals.css
- [x] T006 Initialize Zustand store for state management in lib/store/index.ts

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Automate Meeting to Actions (Priority: P1) 🎯 MVP

**Goal**: Enable one-click automation to generate status report and invoice from mock meeting data

**Independent Test**: Provide mock meeting input, trigger automation, verify formatted PDF report and invoice are generated and displayed/downloadable

### Implementation for User Story 1

- [x] T007 Create mock meeting input component in src/components/AutomationInput.tsx
- [x] T008 Implement PDF generator utility in lib/utils/pdfGenerator.ts
- [x] T009 Implement invoice simulator utility in lib/utils/invoiceSimulator.ts
- [x] T010 Create automation button component in src/components/AutomationButton.tsx
- [x] T011 Integrate automation logic in AutomationButton.tsx to generate report and invoice on click

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - View Dashboard Sections (Priority: P2)

**Goal**: Display minimalist dashboard with Pulse Feed, Financial Hub, and Visual Roadmap sections populated with mocked data

**Independent Test**: Load the dashboard page, verify presence and display of the three sections with sample milestones, invoices, and projects

### Implementation for User Story 2

- [x] T012 Create dashboard layout component in src/components/dashboard/Dashboard.tsx
- [x] T013 [P] Create PulseFeed component in src/components/dashboard/PulseFeed.tsx
- [x] T014 [P] Create FinancialHub component in src/components/dashboard/FinancialHub.tsx
- [x] T015 [P] Create VisualRoadmap component in src/components/dashboard/VisualRoadmap.tsx
- [x] T016 Integrate dashboard in src/app/page.tsx

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Interact with Pulse Feed (Priority: P3)

**Goal**: Allow viewing and interacting with AI-extracted milestones in the Pulse Feed

**Independent Test**: Load dashboard, interact with Pulse Feed (e.g., view details, mark as read), verify interactions work

### Implementation for User Story 3

- [x] T017 Add interaction handlers to PulseFeed component for milestone details
- [x] T018 Create milestone detail view or modal in src/components/MilestoneDetail.tsx

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T019 [P] Add responsive styles and mobile optimization across components
- [x] T020 [P] Final styling refinements for high-end dark-mode aesthetic
- [x] T021 Run build and validate static export works correctly

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-5)**: All depend on Foundational phase completion
  - User stories proceed in priority order (P1 → P2 → P3)
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Integrates with foundational data but independently testable
- **User Story 3 (P3)**: Can start after User Story 2 (Phase 4) - Depends on PulseFeed component

### Within Each User Story

- Models/utilities before components
- Components before integration
- Core implementation before enhancements

### Parallel Opportunities

- All Setup tasks can run in parallel
- Foundational tasks T004, T005, T006 can run in parallel
- In US2: T013, T014, T015 can run in parallel
- Polish tasks T019, T020 can run in parallel

---

## Parallel Example: User Story 2

```bash
# Launch dashboard section components in parallel:
Task: "Create PulseFeed component in src/components/dashboard/PulseFeed.tsx"
Task: "Create FinancialHub component in src/components/dashboard/FinancialHub.tsx"
Task: "Create VisualRoadmap component in src/components/dashboard/VisualRoadmap.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
