export function generateInvoice(invoice: { amount: number; items: { description: string; amount: number }[] }) {
  const content = `Invoice\nAmount: $${invoice.amount}\nItems:\n${invoice.items.map(i => `${i.description}: $${i.amount}`).join('\n')}`
  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'invoice.txt'
  a.click()
}
