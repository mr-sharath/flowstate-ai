import React from 'react'
import useStore from '../../lib/store'

export default function VisualRoadmap() {
  const { projects } = useStore()

  return (
    <div className="bg-slate-900 p-6 rounded-lg shadow-lg border border-slate-700 text-slate-100">
      <h2 className="text-xl font-bold mb-4">Visual Roadmap</h2>
      {projects.map(p => (
        <div key={p.id} className="mb-2">
          <p>{p.name}</p>
          <p>Status: {p.status}</p>
        </div>
      ))}
    </div>
  )
}
