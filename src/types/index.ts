import type { LucideIcon } from 'lucide-react'

export interface NavLink {
  label: string
  href: string
}

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

export interface WhyItem {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

export interface PortfolioItem {
  id: string
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  link?: string
}

export interface ProcessStep {
  id: string
  step: number
  title: string
  description: string
}

export interface PricingPlan {
  id: string
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted?: boolean
}

export interface TechItem {
  id: string
  name: string
  icon: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  quote: string
}

export interface TrustedCompany {
  id: string
  name: string
}
