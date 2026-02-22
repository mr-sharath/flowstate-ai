export interface Milestone {
  id: string;
  description: string;
  deadline: Date;
  fee: number;
  project_id: string;
}

export const milestones: Milestone[] = [
  {
    id: '1',
    description: 'Complete project phase 1',
    deadline: new Date('2026-03-01'),
    fee: 5000,
    project_id: '1',
  },
];
