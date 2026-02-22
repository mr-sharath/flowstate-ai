# Tasks: Build FlowState AI v2

**Input**: Design documents from `/specs/002-flowstate-ai-v2/`
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
- [x] T002 Install dependencies: Next.js, React, Tailwind CSS, jsPDF, Zustand, groq-sdk
- [x] T003 Configure static export in next.config.js

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Create hardcoded data files: lib/data/meetings.ts, lib/data/milestones.ts, lib/data/invoices.ts, lib/data/projects.ts
- [x] T005 Setup global styles and dark mode with Tailwind in src/app/globals.css
- [x] T006 Initialize Zustand store with LLM state in lib/store/index.ts

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Integrate LLM for Transcript Processing (Priority: P1) 🎯 MVP

**Goal**: Enable LLM to analyze meeting transcripts and extract business information

**Independent Test**: Input a transcript, verify LLM processes it and returns extracted data

### Implementation for User Story 1

- [x] T007 Create LLM client utility in lib/utils/llmClient.ts
- [x] T008 Update Zustand store to call LLM for transcript processing in lib/store/index.ts
- [x] T009 Handle LLM API errors and responses in lib/store/index.ts

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Generate Real Reports and Invoices (Priority: P2)

**Goal**: Generate customized reports and invoices based on LLM-extracted data

**Independent Test**: Process transcript, generate deliverables, verify they reflect the content

### Implementation for User Story 2

- [x] T010 Update PDF generator to use extracted data in lib/utils/pdfGenerator.ts
- [x] T011 Update invoice simulator for dynamic content in lib/utils/invoiceSimulator.ts
- [x] T012 Integrate dynamic generation in automation button in src/components/AutomationButton.tsx

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Redesign UI to Sleek Professional (Priority: P3)

**Goal**: Redesign UI components to be sleek and professional like Claude or ChatGPT

**Independent Test**: View interface, verify professional design elements

### Implementation for User Story 3

- [x] T013 [P] Redesign PulseFeed component for professional look in src/components/dashboard/PulseFeed.tsx
- [x] T014 [P] Redesign FinancialHub component in src/components/dashboard/FinancialHub.tsx
- [x] T015 [P] Redesign VisualRoadmap component in src/components/dashboard/VisualRoadmap.tsx
- [x] T016 Update app layout for sleek design in src/app/layout.tsx

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T017 Add responsive styles and mobile optimization across components
- [x] T018 Final styling refinements for high-end dark-mode aesthetic
- [x] T019 Run build and validate static export works correctly

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
- **User Story 2 (P2)**: Can start after User Story 1 (Phase 3) - Depends on LLM processing
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - No dependencies on other stories

### Within Each User Story

- Core implementation before enhancements

### Parallel Opportunities

- All Setup tasks can run in parallel
- Foundational tasks T004, T005, T006 can run in parallel
- In US3: T013, T014, T015 can run in parallel
- Polish tasks T017, T018 can run in parallel

---

## Parallel Example: User Story 3

```bash
# Launch UI redesign components in parallel:
Task: "Redesign PulseFeed component for professional look in src/components/dashboard/PulseFeed.tsx"
Task: "Redesign FinancialHub component in src/components/dashboard/FinancialHub.tsx"
Task: "Redesign VisualRoadmap component in src/components/dashboard/VisualRoadmap.tsx"
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
