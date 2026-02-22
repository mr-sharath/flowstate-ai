"use client";

import React from 'react'
import useStore from '../lib/store'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const { testimonials } = useStore()

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-dark-grey text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-light-grey p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center mr-4">
                  <span className="text-dark-grey font-bold">
                    {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-grey">{testimonial.name}</h4>
                  <p className="text-sm text-light-grey">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-beige text-beige" />
                ))}
              </div>
              <blockquote className="text-dark-grey italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
