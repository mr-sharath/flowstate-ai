export interface GeneratedFile {
  id: string;
  transcriptId: string;
  type: 'summary' | 'report' | 'notes' | 'action-items' | 'transcript';
  title: string;
  content: string;
  format: 'txt' | 'md' | 'pdf';
  createdAt: Date;
  size: number;
}

export const mockFiles: GeneratedFile[] = [
  {
    id: "file-1",
    transcriptId: "transcript-1",
    type: "summary",
    title: "Q4 Sales Pipeline Summary",
    content: `# Q4 Sales Pipeline Summary

## Overview
- Total active deals: 15
- Pipeline value: $2.4M
- Healthcare vertical: 8 deals ($1.8M)
- Enterprise vertical: 2 deals ($600K)

## Key Insights
- Healthcare showing strong performance
- Enterprise needs more focus and outreach
- Top 5 deals require immediate follow-up

## Action Items
- Prioritize enterprise outreach
- Schedule follow-ups for top 5 deals
- Review healthcare strategy for Q1`,
    format: "md",
    createdAt: new Date(),
    size: 2048
  },
  {
    id: "file-2",
    transcriptId: "transcript-1",
    type: "action-items",
    title: "Sales Action Items",
    content: `# Sales Action Items

1. **Enterprise Outreach** - Maria to prioritize enterprise prospects
2. **Deal Follow-ups** - Schedule calls for top 5 deals by end of week
3. **Pipeline Review** - Weekly pipeline meetings every Monday
4. **Target Setting** - Set Q1 enterprise goals: 10 deals at $3M`,
    format: "md",
    createdAt: new Date(),
    size: 1024
  },
  {
    id: "file-3",
    transcriptId: "transcript-2",
    type: "report",
    title: "Sprint Planning Report",
    content: `# Sprint Planning Report

## Sprint Goal
Complete new dashboard feature implementation

## Current Status
- Backend APIs: 80% complete
- Frontend development: In progress (3 days remaining)
- Design specs: Expected by tomorrow

## Timeline
- Development completion: Wednesday
- QA testing: Thursday-Friday (2 days)
- Deployment: Monday

## Blockers
- Marketing design specs delayed
- No other technical blockers identified`,
    format: "md",
    createdAt: new Date(),
    size: 1536
  },
  {
    id: "file-4",
    transcriptId: "transcript-3",
    type: "notes",
    title: "Client Onboarding Notes",
    content: `Client Onboarding Notes - John Smith (Client)

## Key Points
- 50 users to onboard
- Admin training: Tomorrow at 10 AM
- Data migration: Next Tuesday (4 hours downtime)
- All documentation and invites sent by end of day

## Next Steps
- Confirm attendance for training session
- Prepare migration checklist
- Schedule post-migration verification call`,
    format: "txt",
    createdAt: new Date(),
    size: 512
  },
  {
    id: "file-5",
    transcriptId: "transcript-4",
    type: "summary",
    title: "Standup Summary",
    content: `# Daily Standup Summary

## Accomplishments
- Dev1: Completed authentication module, started dashboard
- Dev2: Fixed 3 critical bugs, working on performance optimization
- QA: Completed regression testing, found 2 minor issues

## Blockers
- Dev1: Waiting for API documentation from backend team
- QA: Needs updated test cases for new features

## Today's Goals
- Dev1: Complete dashboard development
- Dev2: Finish performance optimization
- QA: Update test cases for new features`,
    format: "md",
    createdAt: new Date(),
    size: 768
  },
  {
    id: "file-6",
    transcriptId: "transcript-5",
    type: "action-items",
    title: "Budget Planning Actions",
    content: `# Budget Planning Action Items

## Department Requests
- Marketing: Requested $180K, approved $170K (needs ROI projections)
- Engineering: Requested $220K, approved $210K (justify tool costs)
- Operations: Approved $150K (current needs covered)

## Next Steps
1. Marketing to provide ROI projections by Friday
2. Engineering to justify additional tool costs
3. All departments to submit detailed budget breakdowns
4. Final approval pending documentation review

Total Budget: $500K`,
    format: "md",
    createdAt: new Date(),
    size: 896
  }
]
