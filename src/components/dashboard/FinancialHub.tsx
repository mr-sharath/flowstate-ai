import React from 'react'
import useStore from '../../lib/store'

export default function FinancialHub() {
  const { invoices } = useStore()

  return (
    <div className="bg-slate-900 p-6 rounded-lg shadow-lg border border-slate-700 text-slate-100">
      <h2 className="text-xl font-bold mb-4">Financial Hub</h2>
      {invoices.map(i => (
        <div key={i.id} className="mb-2">
          <p>Amount: ${i.amount}</p>
          <p>Status: {i.status}</p>
        </div>
      ))}
    </div>
  )
}
