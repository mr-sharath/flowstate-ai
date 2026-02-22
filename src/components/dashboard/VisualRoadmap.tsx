import React from 'react'
import useStore from '../../lib/store'

export default function VisualRoadmap() {
  const { projects } = useStore()

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-xl font-bold mb-2">Visual Roadmap</h2>
      {projects.map(p => (
        <div key={p.id} className="mb-2">
          <p>{p.name}</p>
          <p>Status: {p.status}</p>
        </div>
      ))}
    </div>
  )
}
