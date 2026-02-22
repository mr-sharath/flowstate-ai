"use client";

import AutomationInput from '../components/AutomationInput'
import AutomationButton from '../components/AutomationButton'
import Dashboard from '../components/dashboard/Dashboard'

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">FlowState AI Dashboard</h1>
      <AutomationInput />
      <AutomationButton />
      <Dashboard />
    </main>
  )
}
