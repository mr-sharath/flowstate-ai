export interface Project {
  id: string;
  name: string;
  status: string;
  milestones: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'Client Project A',
    status: 'active',
    milestones: ['1'],
  },
];
