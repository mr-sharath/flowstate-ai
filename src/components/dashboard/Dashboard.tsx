import React from 'react'
import PulseFeed from './PulseFeed'
import FinancialHub from './FinancialHub'
import VisualRoadmap from './VisualRoadmap'

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <PulseFeed />
      <FinancialHub />
      <VisualRoadmap />
    </div>
  )
}
