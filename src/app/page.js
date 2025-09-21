'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

import { 
  Wrench,
  Building2, 
  Handshake, 
  Headphones, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone,
  Shield,
  Award,
  Users,
  Target,
  Cpu,
  Menu,
  X,
  ArrowRight,
  ExternalLink,
  Clock,
  Briefcase,
  Settings,
  TrendingUp,
  Zap
} from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'process', 'about', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header - Same as before */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="VDV Logo" 
                  width={40}
                  height={40}
                  className="object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <Wrench className="h-6 w-6 text-slate-600" style={{display: 'none'}} />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-slate-800 tracking-tight">Volunteer Digital Ventures</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider leading-tight">
                  Implementation Services
                </div>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'process', label: 'Process' },
                { id: 'about', label: 'About' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'bg-slate-100 text-slate-800' 
                      : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:block">
              <Link 
                href="/consultation"
                className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 rounded-md font-medium transition-colors inline-flex items-center gap-2"
              >
                Get Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col space-y-2">
                {['Home', 'Services', 'Process', 'About', 'Contact'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())} 
                    className="text-gray-700 text-left px-4 py-2 rounded-md hover:bg-slate-50"
                  >
                    {item}
                  </button>
                ))}
                <Link 
                  href="/consultation"
                  className="bg-slate-700 text-white px-4 py-2 rounded-md font-medium mt-2 text-center block"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero - Professional & Clean */}
      <section id="home" className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                Licensed Gambino Gold Implementation Partner
                <a href="https://gambino.gold" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:text-blue-800 underline text-xs">
                  Learn More →
                </a>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Cryptocurrency Infrastructure
                <span className="text-slate-600 block">for Business Venues</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                VDV installs and manages Gambino Gold cryptocurrency mining systems for restaurants, bars, and entertainment venues. Professional deployment with full technical support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center justify-center gap-2"
                >
                  Learn More <ArrowRight className="w-5 h-5" />
                </button>
                <Link 
                  href="/consultation"
                  className="border-2 border-slate-300 hover:border-slate-600 hover:text-slate-800 text-slate-600 px-8 py-3 rounded-md font-semibold transition-colors text-center inline-flex items-center justify-center"
                >
                  Schedule Assessment
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-slate-600">Complete Installation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-slate-600">Staff Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-slate-600">Ongoing Support</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Gambino Gold Systems</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Professional cryptocurrency mining infrastructure designed for hospitality businesses
                  </p>
                  <div className="bg-white p-3 rounded-lg border border-blue-200 mb-3">
                    <div className="text-xs text-slate-500 mb-1">Revenue Opportunity</div>
                    <div className="text-lg font-bold text-slate-800">New Income Stream</div>
                    <div className="text-xs text-slate-500">for your venue</div>
                  </div>
                  <a 
                    href="https://gambino.gold" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm underline"
                  >
                    Learn about Gambino Gold →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - What VDV Actually Does */}
      <section id="services" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 lg:text-4xl mb-4">
              How We Implement Gambino Gold Systems
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
              Complete end-to-end service from initial assessment to ongoing operations. We handle all technical aspects so you can focus on your business.
            </p>
            <p className="text-slate-500 text-sm">
              <a href="https://gambino.gold" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                Learn more about Gambino Gold&apos;s cryptocurrency mining platform →
              </a>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Site Assessment */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Site Assessment</h3>
              <p className="text-slate-600 mb-6">
                Professional evaluation of your venue to determine optimal system placement and configuration requirements.
              </p>
              <ul className="text-slate-600 text-sm space-y-2">
                <li>• Space and layout analysis</li>
                <li>• Electrical and network requirements</li>
                <li>• Customer flow optimization</li>
                <li>• Revenue potential evaluation</li>
              </ul>
            </div>

            {/* System Installation */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Professional Installation</h3>
              <p className="text-slate-600 mb-6">
                Complete hardware setup and software configuration by certified technicians with full testing and verification.
              </p>
              <ul className="text-slate-600 text-sm space-y-2">
                <li>• Hardware installation and setup</li>
                <li>• Gambino software configuration</li>
                <li>• Network integration and testing</li>
                <li>• Security and performance verification</li>
              </ul>
            </div>

            {/* Staff Training */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Team Training</h3>
              <p className="text-slate-600 mb-6">
                Comprehensive training program for your staff covering system operations, customer service, and daily procedures.
              </p>
              <ul className="text-slate-600 text-sm space-y-2">
                <li>• System operation training</li>
                <li>• Customer service procedures</li>
                <li>• Daily maintenance routines</li>
                <li>• Troubleshooting basics</li>
              </ul>
            </div>

            {/* Ongoing Support */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <Headphones className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Technical Support</h3>
              <p className="text-slate-600 mb-6">
                Round-the-clock technical support with remote monitoring, maintenance, and performance optimization.
              </p>
              <ul className="text-slate-600 text-sm space-y-2">
                <li>• 24/7 technical helpdesk</li>
                <li>• Remote system monitoring</li>
                <li>• Performance optimization</li>
                <li>• Software updates and patches</li>
              </ul>
            </div>

            {/* Business Partnership */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Handshake className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Partnership Management</h3>
              <p className="text-slate-600 mb-6">
                VDV manages your relationship with Gambino Gold, handling contracts, settlements, and compliance requirements.
              </p>
              <ul className="text-slate-600 text-sm space-y-2">
                <li>• Contract and legal coordination</li>
                <li>• Settlement processing oversight</li>
                <li>• Compliance management</li>
                <li>• Performance reporting</li>
              </ul>
            </div>

            {/* Revenue Optimization */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Performance Optimization</h3>
              <p className="text-slate-600 mb-6">
                Ongoing analysis and optimization to maximize system performance and ensure smooth operations.
              </p>
              <ul className="text-slate-600 text-sm space-y-2">
                <li>• Performance monitoring and analytics</li>
                <li>• Operational efficiency improvements</li>
                <li>• Customer experience optimization</li>
                <li>• Regular system maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process - Keep existing timeline */}
      <section id="process" className="relative py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Implementation Process</h2>
            <p className="text-xl text-slate-600">Proven methodology for successful Gambino Gold deployments</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300"></div>
              
              {[
                {
                  step: "01",
                  title: "Initial Assessment",
                  description: "Site evaluation, requirements gathering, and feasibility analysis for Gambino Gold systems",
                  icon: Target
                },
                {
                  step: "02", 
                  title: "System Design",
                  description: "Custom configuration planning, equipment specifications, and implementation timeline",
                  icon: Briefcase
                },
                {
                  step: "03",
                  title: "Professional Installation",
                  description: "Complete hardware deployment, software setup, and comprehensive system testing",
                  icon: Settings
                },
                {
                  step: "04",
                  title: "Team Training", 
                  description: "Staff education, operational procedures, and knowledge transfer for daily operations",
                  icon: Users
                },
                {
                  step: "05",
                  title: "Go-Live Support",
                  description: "Launch support, performance monitoring, and ongoing technical assistance",
                  icon: Zap
                }
              ].map((item, index) => (
                <div key={index} className="relative flex items-start mb-12 last:mb-0">
                  <div className="flex-shrink-0 w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold z-10">
                    {item.step}
                  </div>
                  <div className="ml-6 bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="w-5 h-5 text-slate-600" />
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About - Updated for Gambino partnership */}
      <section id="about" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">About Volunteer Digital Ventures</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                VDV is a Tennessee-licensed contractor specializing in cryptocurrency infrastructure deployment. 
                As an authorized Gambino Gold implementation partner, we bring cutting-edge mining technology to hospitality venues across the United States.
              </p>
              <p className="text-slate-600 mb-8">
                Our team handles every aspect of system deployment, from initial site assessment through ongoing technical support, ensuring venues can seamlessly integrate cryptocurrency operations into their business.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-slate-600 mx-auto mb-2" />
                  <div className="font-semibold text-slate-800">Tennessee Based</div>
                  <div className="text-sm text-slate-500">Serving Nationwide</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Shield className="w-6 h-6 text-slate-600 mx-auto mb-2" />
                  <div className="font-semibold text-slate-800">Authorized Partner</div>
                  <div className="text-sm text-slate-500">Gambino Gold Certified</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Professional Standards</h3>
              <div className="space-y-4">
                {[
                  "Licensed Tennessee LLC with comprehensive insurance",
                  "Authorized Gambino Gold implementation partner",
                  "Professional technical certification and training", 
                  "Full regulatory compliance and documentation",
                  "24/7 technical support for all installations"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-white rounded-lg border border-slate-200">
                <p className="text-sm text-slate-600">
                  <strong>Service Focus:</strong> VDV provides technical implementation and support services. 
                  We are not a financial services provider and do not offer investment advice or regulatory consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Same as before but updated copy */}
      <section id="contact" className="py-20 bg-slate-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Explore Cryptocurrency Infrastructure?</h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Contact VDV to discuss Gambino Gold system implementation for your venue
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="bg-slate-50 p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Business Address</h4>
                      <p className="text-slate-600">1135 Gray Bill Dr<br />Gallatin, TN 37066</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Authorization</h4>
                      <p className="text-slate-600">Licensed Gambino Gold Implementation Partner</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Service Area</h4>
                      <p className="text-slate-600">Professional implementation services nationwide</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-slate-200 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Support Hours</h4>
                  <p className="text-slate-600 text-sm">
                    Project consultations: Business hours<br />
                    Technical support: 24/7 for active clients
                  </p>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Schedule Your Assessment</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Interested in bringing Gambino Gold cryptocurrency systems to your venue? 
                    Contact us for a professional site assessment and implementation consultation.
                  </p>
                  
                  <div className="bg-slate-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-2">Assessment Process</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Site evaluation and feasibility analysis</li>
                      <li>• System requirements and configuration planning</li>
                      <li>• Implementation timeline and cost estimate</li>
                      <li>• Ongoing support and partnership details</li>
                    </ul>
                  </div>
                  
                  <Link 
                    href="/consultation"
                    className="w-full bg-slate-700 hover:bg-slate-800 text-white py-3 px-6 rounded-md font-semibold transition-colors inline-flex items-center justify-center gap-2"
                  >
                    Request Assessment <ExternalLink className="w-4 h-4" />
                  </Link>
                  
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <p className="text-sm text-slate-500 text-center">
                      Professional cryptocurrency infrastructure implementation.<br/>
                      Licensed Tennessee contractor with full Gambino Gold authorization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Same as before */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 lg:mb-0">
              <div className="h-10 w-10 flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="VDV Logo" 
                  width={32}
                  height={32}
                  className="object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <Wrench className="h-5 w-5 text-slate-600" style={{display: 'none'}} />
              </div>
              <div>
                <div className="font-bold">Volunteer Digital Ventures, LLC</div>
                <div className="text-sm text-gray-400">Gambino Gold Implementation Services</div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Volunteer Digital Ventures, LLC. Licensed implementation partner.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}