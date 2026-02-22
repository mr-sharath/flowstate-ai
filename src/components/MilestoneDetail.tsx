import React from 'react'
import { type Milestone } from '../lib/data/milestones'

interface MilestoneDetailProps {
  milestone: Milestone
}

export default function MilestoneDetail({ milestone }: MilestoneDetailProps) {
  return (
    <div className="bg-slate-800 p-4 rounded mt-2">
      <h3 className="text-lg font-bold">{milestone.description}</h3>
      <p>Deadline: {milestone.deadline.toDateString()}</p>
      <p>Fee: ${milestone.fee}</p>
    </div>
  )
}
