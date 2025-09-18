'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
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
  Briefcase
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
      {/* Header - Clean Corporate Style */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Corporate Typography */}
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="VDV Logo" 
                  className="h-10 w-10 object-contain"
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
                  Contractor Services
                </div>
              </div>
            </div>

            {/* Desktop Nav - Clean Links */}
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

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link 
                href="/consultation"
                className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 rounded-md font-medium transition-colors inline-flex items-center gap-2"
              >
                Request Service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
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
                  Request Service
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero - Clean Business Layout */}
      <section id="home" className="relative py-20 bg-slate-50">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4" />
                Licensed Tennessee Contractor
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Digital Infrastructure
                <span className="text-slate-600 block">Implementation Services</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Professional technical contractor specializing in cryptocurrency mining infrastructure. From site assessment to full deployment and ongoing support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center justify-center gap-2"
                >
                  Our Services <ArrowRight className="w-5 h-5" />
                </button>
                <Link 
                  href="/consultation"
                  className="border-2 border-slate-300 hover:border-slate-600 hover:text-slate-800 text-slate-600 px-8 py-3 rounded-md font-semibold transition-colors text-center inline-flex items-center justify-center"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Stats/Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-slate-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Technical Support</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-slate-600 mb-2">TN</div>
                <div className="text-gray-600 font-medium">Licensed LLC</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-slate-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Compliance Focus</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-slate-600 mb-2">∞</div>
                <div className="text-gray-600 font-medium">Ongoing Support</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Services - Card Grid Layout */}
      <section id="services" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Professional Contractor Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              End-to-end digital infrastructure solutions for business partners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Business Development */}
            <div className="group">
              <div className="bg-white border-2 border-slate-200 rounded-lg p-8 hover:border-slate-400 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-700 group-hover:text-white transition-colors">
                  <Handshake className="w-6 h-6 text-slate-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Business Development</h3>
                <p className="text-slate-600 mb-6">
                  Partner identification, qualification, and relationship management. From initial contact through contract execution.
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-600" />
                    Site assessment and qualification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-600" />
                    Contract negotiation support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-600" />
                    Ongoing account management
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Implementation */}
            <div className="group">
              <div className="bg-white border-2 border-slate-200 rounded-lg p-8 hover:border-slate-400 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-700 group-hover:text-white transition-colors">
                  <Cpu className="w-6 h-6 text-slate-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Technical Installation</h3>
                <p className="text-slate-600 mb-6">
                  Complete hardware and software deployment. System integration, testing, and staff training included.
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-600" />
                    Hardware installation & config
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-600" />
                    System integration & testing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-600" />
                    Staff training & documentation
                  </li>
                </ul>
              </div>
            </div>

            {/* Ongoing Support */}
            <div className="group">
              <div className="bg-white border-2 border-slate-200 rounded-lg p-8 hover:border-slate-400 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-700 group-hover:text-white transition-colors">
                  <Headphones className="w-6 h-6 text-slate-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Support & Maintenance</h3>
                <p className="text-slate-600 mb-6">
                  24/7 technical support, performance monitoring, and relationship management services.
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-600" />
                    Round-the-clock tech support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-600" />
                    Performance optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-600" />
                    Partner satisfaction tracking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process - Timeline Style */}
      <section id="process" className="relative py-20 bg-slate-50">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('/process-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Implementation Process</h2>
            <p className="text-xl text-slate-600">Proven methodology for successful deployments</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300"></div>
              
              {[
                {
                  step: "01",
                  title: "Initial Assessment",
                  description: "Site evaluation, requirements gathering, and feasibility analysis",
                  icon: Target
                },
                {
                  step: "02", 
                  title: "Planning & Design",
                  description: "Technical specifications, timeline development, and resource allocation",
                  icon: Briefcase
                },
                {
                  step: "03",
                  title: "Installation & Testing",
                  description: "Hardware deployment, software configuration, and comprehensive testing",
                  icon: Cpu
                },
                {
                  step: "04",
                  title: "Training & Handover", 
                  description: "Staff training, documentation delivery, and operational transition",
                  icon: Users
                },
                {
                  step: "05",
                  title: "Ongoing Support",
                  description: "24/7 monitoring, maintenance, and continuous optimization",
                  icon: Clock
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
                    <p className="text-slate-600 mb-6">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* About - Two Column */}
      <section id="about" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">About Volunteer Digital Ventures</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                VDV is a Tennessee-licensed contractor specializing in digital infrastructure deployment. 
                We bridge the gap between technology providers and implementation partners through 
                professional services and ongoing support.
              </p>
              <p className="text-slate-600 mb-8">
                Operating as an independent contractor, we maintain comprehensive business insurance, 
                professional licensing, and strict compliance with all applicable regulations.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-slate-600 mx-auto mb-2" />
                  <div className="font-semibold text-slate-800">Tennessee Based</div>
                  <div className="text-sm text-slate-500">Serving Nationwide</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Shield className="w-6 h-6 text-slate-600 mx-auto mb-2" />
                  <div className="font-semibold text-slate-800">Fully Licensed</div>
                  <div className="text-sm text-slate-500">Insured & Compliant</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Professional Standards</h3>
              <div className="space-y-4">
                {[
                  "Licensed business operations in Tennessee",
                  "Comprehensive general liability insurance",
                  "Full regulatory compliance maintained", 
                  "Professional documentation for all projects",
                  "Independent contractor status verified"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-white rounded-lg border border-slate-200">
                <p className="text-sm text-slate-600">
                  <strong>Important:</strong> VDV provides technical and business development services only. 
                  We do not offer financial services, investment advice, or regulatory compliance consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Form Style */}
      <section id="contact" className="py-20 bg-slate-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Contact us to discuss your technical infrastructure needs and service requirements
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Contact Info */}
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
                      <h4 className="font-semibold text-slate-800">Entity Type</h4>
                      <p className="text-slate-600">Tennessee Limited Liability Company</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Service Area</h4>
                      <p className="text-slate-600">Professional contractor services available nationwide</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-slate-200 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Business Hours</h4>
                  <p className="text-slate-600 text-sm">
                    Project inquiries: Business hours<br />
                    Technical support: 24/7 for active clients
                  </p>
                </div>
              </div>

              {/* Service Request Form */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Request Technical Services</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    For digital infrastructure projects, technical implementation services, or partnership opportunities, 
                    contact us to discuss your requirements and timeline.
                  </p>
                  
                  <div className="bg-slate-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-2">Our Service Process</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Initial project consultation</li>
                      <li>• Technical requirements assessment</li>
                      <li>• Service agreement development</li>
                      <li>• Implementation & ongoing support</li>
                    </ul>
                  </div>
                  
                  <Link 
                    href="/consultation"
                    className="w-full bg-slate-700 hover:bg-slate-800 text-white py-3 px-6 rounded-md font-semibold transition-colors inline-flex items-center justify-center gap-2"
                  >
                    Schedule Consultation <ExternalLink className="w-4 h-4" />
                  </Link>
                  
                  {/* Simple contact info for now */}
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <p className="text-sm text-slate-500 text-center">
                      Professional contractor services available nationwide.<br/>
                      Licensed Tennessee LLC with comprehensive business insurance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 lg:mb-0">
              <div className="h-10 w-10 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="VDV Logo" 
                  className="h-8 w-8 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <Wrench className="h-5 w-5 text-slate-600" style={{display: 'none'}} />
              </div>
              <div>
                <div className="font-bold">Volunteer Digital Ventures, LLC</div>
                <div className="text-sm text-gray-400">Professional Contractor Services</div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Volunteer Digital Ventures, LLC. Licensed Tennessee contractor.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}