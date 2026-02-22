"use client";

import React from 'react'
import useStore from '../lib/store'

export default function AutomationButton() {
  const { transcript, processTranscriptAsync, generateReport, generateInvoice } = useStore()

  const handleClick = async () => {
    await processTranscriptAsync(transcript)
    generateReport()
    generateInvoice()
  }

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
    >
      One-Click Automation
    </button>
  )
}
