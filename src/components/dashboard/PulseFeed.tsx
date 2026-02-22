"use client";

import React, { useState } from 'react'
import useStore from '../../lib/store'
import { type Milestone } from '../../lib/data/milestones'
import MilestoneDetail from '../MilestoneDetail'

export default function PulseFeed() {
  const { milestones } = useStore()
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null)

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-xl font-bold mb-2">Pulse Feed</h2>
      {milestones.map(m => (
        <div key={m.id} className="mb-2 cursor-pointer" onClick={() => setSelectedMilestone(m)}>
          <p>{m.description}</p>
          <p>Deadline: {m.deadline.toDateString()}</p>
          <p>Fee: ${m.fee}</p>
        </div>
      ))}
      {selectedMilestone && <MilestoneDetail milestone={selectedMilestone} />}
    </div>
  )
}
