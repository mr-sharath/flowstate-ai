"use client";

import React from 'react'
import useStore from '../lib/store'

export default function TranscriptInput() {
  const { transcript, setTranscript, processTranscriptAsync, generateReport, generateInvoice } = useStore()

  const handleProcess = async () => {
    await processTranscriptAsync(transcript)
    generateReport()
    generateInvoice()
  }

  return (
    <section className="bg-light-grey py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-dark-grey text-center mb-8">
          Upload Your Transcript
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <textarea
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            placeholder="Paste your meeting transcript here..."
            className="w-full h-64 p-4 border border-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-beige resize-none"
          />
          <button
            onClick={handleProcess}
            disabled={!transcript.trim()}
            className="mt-4 w-full bg-beige text-dark-grey py-3 px-6 rounded-lg hover:bg-light-grey transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Process Transcript
          </button>
        </div>
      </div>
    </section>
  )
}
