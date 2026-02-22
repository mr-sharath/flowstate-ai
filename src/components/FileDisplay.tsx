"use client";

import React from 'react'
import useStore from '../lib/store'
import { Download, FileText, File, Archive } from 'lucide-react'

const iconMap = {
  summary: FileText,
  report: File,
  notes: FileText,
  'action-items': File,
  transcript: Archive
}

export default function FileDisplay({ transcriptId }: { transcriptId: string }) {
  const { mockFiles } = useStore()
  const files = mockFiles.filter(file => file.transcriptId === transcriptId)

  const handleDownload = (file: any) => {
    // Simulate download
    const blob = new Blob([file.content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${file.title}.${file.format}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  if (files.length === 0) return null

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-dark-grey text-center mb-12">
          Generated Files
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {files.map((file) => {
            const IconComponent = iconMap[file.type as keyof typeof iconMap] || File
            return (
              <div key={file.id} className="bg-light-grey p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <IconComponent className="w-8 h-8 text-beige mr-3" />
                  <div>
                    <h3 className="font-semibold text-dark-grey">{file.title}</h3>
                    <p className="text-sm text-light-grey">{file.type} • {file.size} bytes</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDownload(file)}
                  className="w-full bg-beige text-dark-grey py-2 px-4 rounded-lg hover:bg-light-grey transition-colors duration-300 cursor-pointer flex items-center justify-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download {file.format.toUpperCase()}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
