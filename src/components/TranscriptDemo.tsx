"use client";

import React, { useState } from 'react'
import useStore from '../lib/store'
import type { MockTranscript } from '../lib/data/mockTranscripts'

interface TranscriptDemoProps {
  onSelect: (id: string) => void
}

export default function TranscriptDemo({ onSelect }: TranscriptDemoProps) {
  const { mockTranscripts } = useStore()
  const [selectedTranscript, setSelectedTranscript] = useState<MockTranscript | null>(null)

  const handleSelect = (transcript: MockTranscript) => {
    setSelectedTranscript(transcript)
    onSelect(transcript.id)
  }

  return (
    <section className="bg-light-grey py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-dark-grey text-center mb-12">
          Try Demo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {mockTranscripts.slice(0, 3).map((transcript) => (
            <div
              key={transcript.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => handleSelect(transcript)}
            >
              <h3 className="font-semibold text-dark-grey mb-2">{transcript.title}</h3>
              <p className="text-sm text-light-grey mb-2 capitalize">{transcript.category}</p>
              <p className="text-sm text-light-grey">{transcript.duration} min</p>
            </div>
          ))}
        </div>
        {selectedTranscript && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-dark-grey mb-4">{selectedTranscript.title}</h3>
            <pre className="text-sm text-dark-grey whitespace-pre-wrap max-h-96 overflow-y-auto">
              {selectedTranscript.content}
            </pre>
          </div>
        )}
      </div>
    </section>
  )
}
