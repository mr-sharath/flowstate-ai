"use client";

import React from 'react'

export default function HeroSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-dark-grey mb-6">
          AI-Powered Meeting <span className="text-beige">Notes</span>
        </h1>
        <p className="text-xl text-light-grey mb-8 max-w-2xl mx-auto">
          Transform your meetings into actionable insights with intelligent transcription and summarization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-beige text-dark-grey px-8 py-4 rounded-lg hover:bg-light-grey transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md">
            Try Demo
          </button>
          <button className="border-2 border-beige text-dark-grey px-8 py-4 rounded-lg hover:bg-beige transition-all duration-300 cursor-pointer">
            Upload Transcript
          </button>
        </div>
      </div>
    </section>
  )
}
