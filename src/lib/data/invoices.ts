export interface Invoice {
  id: string;
  amount: number;
  items: { description: string; amount: number }[];
  status: string;
}

export const invoices: Invoice[] = [
  {
    id: '1',
    amount: 5000,
    items: [{ description: 'Project phase 1', amount: 5000 }],
    status: 'draft',
  },
];
