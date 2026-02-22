import { create } from 'zustand'
import { meetings, type Meeting } from '../data/meetings'
import { milestones, type Milestone } from '../data/milestones'
import { invoices, type Invoice } from '../data/invoices'
import { projects, type Project } from '../data/projects'
import { processTranscript } from '../utils/llmClient'

interface AppState {
  meetings: Meeting[]
  milestones: Milestone[]
  invoices: Invoice[]
  projects: Project[]
  transcript: string
  setTranscript: (t: string) => void
  extractedData: { deadlines: string[], fees: number[], projects: string[] }
  processTranscriptAsync: (transcript: string) => Promise<void>
  generateReport: () => void
  generateInvoice: () => void
}

const useStore = create<AppState>((set, get) => ({
  meetings,
  milestones,
  invoices,
  projects,
  transcript: '',
  setTranscript: (t: string) => set({ transcript: t }),
  extractedData: { deadlines: [], fees: [], projects: [] },
  processTranscriptAsync: async (transcript: string) => {
    const data = await processTranscript(transcript)
    set({ extractedData: data })
  },
  generateReport: () => {
    const { extractedData } = get()
    const report = `Status Report: Deadlines: ${extractedData.deadlines.join(', ')}, Fees: ${extractedData.fees.map(f => `$${f}`).join(', ')}, Projects: ${extractedData.projects.join(', ')}`
    import('../utils/pdfGenerator').then(({ generatePDF }) => generatePDF(report))
  },
  generateInvoice: () => {
    const { extractedData } = get()
    const total = extractedData.fees.reduce((a, b) => a + b, 0)
    const items = extractedData.fees.map((fee, i) => ({ description: `Fee ${i+1}`, amount: fee }))
    const invoice = { amount: total, items }
    import('../utils/invoiceSimulator').then(({ generateInvoice }) => generateInvoice(invoice))
  },
}))

export default useStore
