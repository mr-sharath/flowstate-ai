import { create } from 'zustand'
import { meetings, type Meeting } from '../data/meetings'
import { milestones, type Milestone } from '../data/milestones'
import { invoices, type Invoice } from '../data/invoices'
import { projects, type Project } from '../data/projects'

interface AppState {
  meetings: Meeting[]
  milestones: Milestone[]
  invoices: Invoice[]
  projects: Project[]
  generateReport: () => void
  generateInvoice: () => void
}

const useStore = create<AppState>((set, get) => ({
  meetings,
  milestones,
  invoices,
  projects,
  generateReport: () => {
    const report = 'Status Report: Project on track, deadline March 1st.'
    import('../utils/pdfGenerator').then(({ generatePDF }) => generatePDF(report))
  },
  generateInvoice: () => {
    const invoice = get().invoices[0]
    import('../utils/invoiceSimulator').then(({ generateInvoice }) => generateInvoice(invoice))
  },
}))

export default useStore
