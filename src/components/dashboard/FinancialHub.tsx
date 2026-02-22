import React from 'react'
import useStore from '../../lib/store'

export default function FinancialHub() {
  const { invoices } = useStore()

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-xl font-bold mb-2">Financial Hub</h2>
      {invoices.map(i => (
        <div key={i.id} className="mb-2">
          <p>Amount: ${i.amount}</p>
          <p>Status: {i.status}</p>
        </div>
      ))}
    </div>
  )
}
