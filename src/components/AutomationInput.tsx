"use client";

import React from 'react'
import useStore from '../lib/store'

export default function AutomationInput() {
  const { transcript, setTranscript } = useStore()

  return (
    <div className="mb-4">
      <textarea
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        placeholder="Enter meeting transcript"
        className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
      />
    </div>
  )
}
