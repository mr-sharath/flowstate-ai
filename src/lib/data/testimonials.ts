export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechCorp",
    quote: "FlowState AI transformed how we handle meeting notes. The AI summaries are incredibly accurate and save us hours every week.",
    avatar: "/avatars/sarah-chen.jpg",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Marcus Johnson",
    role: "Sales Director",
    company: "Global Solutions Inc",
    quote: "Our sales team loves the automated action items. We close deals faster and never miss follow-ups anymore.",
    avatar: "/avatars/marcus-johnson.jpg",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Dr. Emily Rodriguez",
    role: "Medical Director",
    company: "Westside Family Practice",
    quote: "In healthcare, documentation is critical. FlowState AI ensures our meeting notes are accurate and HIPAA-compliant.",
    avatar: "/avatars/emily-rodriguez.jpg",
    rating: 5
  },
  {
    id: "testimonial-4",
    name: "David Kim",
    role: "Engineering Lead",
    company: "InnovateTech",
    quote: "The sprint summaries are spot-on. Our team stays aligned and productive with clear action items from every meeting.",
    avatar: "/avatars/david-kim.jpg",
    rating: 5
  },
  {
    id: "testimonial-5",
    name: "Lisa Thompson",
    role: "Operations Manager",
    company: "RetailMax",
    quote: "We tried other AI tools, but FlowState AI actually understands business context. The insights are actionable.",
    avatar: "/avatars/lisa-thompson.jpg",
    rating: 5
  },
  {
    id: "testimonial-6",
    name: "Robert Chen",
    role: "CEO",
    company: "StartupXYZ",
    quote: "As a startup founder, time is everything. FlowState AI gives me perfect meeting recaps in seconds, not hours.",
    avatar: "/avatars/robert-chen.jpg",
    rating: 5
  }
]
