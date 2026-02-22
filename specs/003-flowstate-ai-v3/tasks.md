# Tasks: Build FlowState AI v3

**Input**: Design documents from `/specs/003-flowstate-ai-v3/`

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
- [x] T002 Install dependencies: Next.js, React, Tailwind CSS, Zustand, Lucide React
- [x] T003 Configure static export in next.config.js

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Update Tailwind config with light color palette in tailwind.config.js
- [x] T005 Setup global styles and light theme in src/app/globals.css
- [x] T006 Initialize Zustand store with mock data in lib/store/index.ts

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Landing Experience (Priority: P1) 🎯 MVP

**Goal**: Create professional homepage with hero, features, testimonials

**Independent Test**: Load homepage, verify hero, carousel, testimonials display

### Implementation for User Story 1

- [x] T007 Create HeroSection component in src/components/HeroSection.tsx
- [x] T008 Create FeatureCarousel component in src/components/FeatureCarousel.tsx
- [x] T009 Create Testimonials component in src/components/Testimonials.tsx
- [x] T010 Update homepage layout in src/app/page.tsx

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Mock Transcript Demo (Priority: P2)

**Goal**: Enable demo with sample transcripts and generated files

**Independent Test**: Select transcript, verify demo displays generated files

### Implementation for User Story 2

- [x] T011 Create mock data files: lib/data/mockTranscripts.ts, lib/data/mockFiles.ts, lib/data/testimonials.ts, lib/data/features.ts
- [x] T012 Create TranscriptDemo component in src/components/TranscriptDemo.tsx
- [x] T013 Create FileDisplay component in src/components/FileDisplay.tsx
- [x] T014 Integrate demo in homepage in src/app/page.tsx

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Upload and Convert (Priority: P3)

**Goal**: Allow transcript upload and mock file generation

**Independent Test**: Upload transcript, verify files generate and display

### Implementation for User Story 3

- [x] T015 Create TranscriptInput component in src/components/TranscriptInput.tsx
- [x] T016 Update store for upload simulation in lib/store/index.ts
- [x] T017 Add file generation UI in src/components/FileDisplay.tsx
- [x] T018 Integrate upload flow in homepage in src/app/page.tsx

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T019 Add cursor effects and animations in src/utils/animations.ts
- [x] T020 Implement responsive design across components
- [x] T021 Final styling refinements and accessibility
- [x] T022 Run build and validate static export works correctly

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
- **User Story 2 (P2)**: Can start after User Story 1 (Phase 3) - Depends on homepage layout
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - No dependencies on other stories

### Within Each User Story

- Core implementation before enhancements

### Parallel Opportunities

- All Setup tasks can run in parallel
- Foundational tasks T004, T005, T006 can run in parallel
- In US1: T007, T008, T009 can run in parallel
- In US2: T011, T012, T013 can run in parallel
- In US3: T015, T016, T017 can run in parallel
- Polish tasks T019, T020, T021 can run in parallel

---

## Parallel Example: User Story 1

```bash
# Launch homepage components in parallel:
Task: "Create HeroSection component in src/components/HeroSection.tsx"
Task: "Create FeatureCarousel component in src/components/FeatureCarousel.tsx"
Task: "Create Testimonials component in src/components/Testimonials.tsx"
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
