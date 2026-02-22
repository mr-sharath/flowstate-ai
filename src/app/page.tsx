"use client";

import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import FeatureCarousel from '../components/FeatureCarousel'
import Testimonials from '../components/Testimonials'
import TranscriptDemo from '../components/TranscriptDemo'
import FileDisplay from '../components/FileDisplay'
import TranscriptInput from '../components/TranscriptInput'

export default function Home() {
  const [selectedTranscriptId, setSelectedTranscriptId] = useState<string | null>(null)

  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeatureCarousel />
      <TranscriptDemo onSelect={setSelectedTranscriptId} />
      {selectedTranscriptId && <FileDisplay transcriptId={selectedTranscriptId} />}
      <TranscriptInput />
      <Testimonials />
    </main>
  )
}
