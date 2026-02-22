"use client";

import React from 'react'
import useStore from '../lib/store'
import { Brain, CheckSquare, Download, Zap, Users, FileText, Link, Shield } from 'lucide-react'

const iconMap = {
  Brain,
  CheckSquare,
  Download,
  Zap,
  Users,
  FileText,
  Link,
  Shield
}

export default function FeatureCarousel() {
  const { features } = useStore()

  return (
    <section className="bg-light-grey py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-dark-grey text-center mb-12">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Brain
            return (
              <div key={feature.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-beige rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-dark-grey" />
                </div>
                <h3 className="text-xl font-semibold text-dark-grey mb-2">
                  {feature.title}
                </h3>
                <p className="text-light-grey">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
