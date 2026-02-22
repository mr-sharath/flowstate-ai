export interface MockTranscript {
  id: string;
  title: string;
  content: string;
  date: Date;
  participants: string[];
  duration: number;
  category: 'sales' | 'project' | 'client' | 'team';
}

export const mockTranscripts: MockTranscript[] = [
  {
    id: "transcript-1",
    title: "Q4 Sales Pipeline Review",
    content: `Jordan: Let's review our Q4 pipeline. We have 15 active deals totaling $2.4M.

Maria: The healthcare vertical is strong with 8 deals at $1.8M. But we're light on enterprise.

Jordan: Enterprise is concerning. Only 2 deals at $600K. We need to focus there.

Maria: Agreed. I'll prioritize enterprise outreach this month.

Jordan: Good. Let's schedule follow-ups for the top 5 deals by end of week.`,
    date: new Date("2024-10-15"),
    participants: ["Jordan Lee (Sales Manager)", "Maria Rodriguez (Sales Rep)"],
    duration: 30,
    category: "sales"
  },
  {
    id: "transcript-2",
    title: "Product Development Sprint Planning",
    content: `Alex: Sprint goal is to complete the new dashboard feature.

Sarah: Backend APIs are 80% done. Frontend needs 3 more days.

Alex: Dependencies? Any blockers?

Sarah: Waiting on design specs from marketing. Should have by tomorrow.

Alex: Okay. Let's commit to dashboard completion by Friday.

Mike: QA testing will take 2 days after development.

Alex: Timeline: Dev complete Wednesday, QA Friday, deploy Monday.`,
    date: new Date("2024-10-16"),
    participants: ["Alex Chen (Product Manager)", "Sarah Kim (Developer)", "Mike Johnson (QA)"],
    duration: 45,
    category: "project"
  },
  {
    id: "transcript-3",
    title: "Client Onboarding Call",
    content: `Priya: Welcome to our system. I'll walk you through setup.

Client: Thanks. We have 50 users to onboard.

Priya: We'll start with admin training tomorrow at 10 AM.

Client: What about data migration?

Priya: Migration scheduled for next Tuesday. Will take 4 hours downtime.

Client: Acceptable. Send calendar invites and documentation.

Priya: Done. You'll receive everything by end of day.`,
    date: new Date("2024-10-17"),
    participants: ["Priya Shah (Account Manager)", "John Smith (Client)"],
    duration: 25,
    category: "client"
  },
  {
    id: "transcript-4",
    title: "Team Standup Meeting",
    content: `Lead: What did you accomplish yesterday?

Dev1: Completed user authentication module. Started on dashboard.

Dev2: Fixed 3 critical bugs. Working on performance optimization.

QA: Ran regression tests. Found 2 new issues, both minor.

Lead: Blockers?

Dev1: Need API documentation from backend team.

Dev2: No blockers.

QA: Need updated test cases for new features.

Lead: Goals for today: Dev1 finish dashboard, Dev2 complete optimization, QA update test cases.`,
    date: new Date("2024-10-18"),
    participants: ["Team Lead", "Developer 1", "Developer 2", "QA Engineer"],
    duration: 15,
    category: "team"
  },
  {
    id: "transcript-5",
    title: "Budget Planning Discussion",
    content: `Finance: Q1 budget is $500K. Marketing gets $150K, Engineering $200K, Operations $150K.

Marketing: We need $180K for the new campaign.

Finance: Can approve $170K. Show ROI projections by Friday.

Engineering: Requesting $220K for hiring and tools.

Finance: Approved $210K. Justify the tool costs.

Operations: Our $150K covers current needs.

Finance: Final approval pending documentation. Send by end of week.`,
    date: new Date("2024-10-19"),
    participants: ["Finance Director", "Marketing Manager", "Engineering Lead", "Operations Manager"],
    duration: 40,
    category: "project"
  }
]
