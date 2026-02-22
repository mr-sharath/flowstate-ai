export interface Meeting {
  id: string;
  transcript: string;
  date: Date;
}

export const meetings: Meeting[] = [
  {
    id: '1',
    transcript: 'Client meeting: Project deadline is March 1st, fee $5000.',
    date: new Date('2026-02-20'),
  },
  {
    id: '2',
    transcript: 'Follow-up: Payment due on completion.',
    date: new Date('2026-02-21'),
  },
];
