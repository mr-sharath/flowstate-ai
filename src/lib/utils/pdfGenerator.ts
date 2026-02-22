import jsPDF from 'jspdf'

export function generatePDF(report: string) {
  const doc = new jsPDF()
  doc.text(report, 10, 10)
  doc.save('status-report.pdf')
}
