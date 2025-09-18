'use client'
import { useState } from 'react'
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Send,
  CheckCircle,
  User,
  MessageSquare,
  Briefcase,
  ArrowLeft,
  Wrench
} from 'lucide-react'

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    timeline: '',
    budget: '',
    location: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    // Let the form submit naturally to Formspree
    setIsSubmitting(true);
  };

  const goBack = () => {
    window.history.back();
  };

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <button 
              onClick={goBack}
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Site
            </button>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-slate-800 mb-4">Consultation Request Sent</h1>
              <p className="text-slate-600 mb-6">
                Thank you for your interest in VDV's technical services. We'll review your project requirements 
                and contact you within 24 hours to schedule your consultation.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm text-slate-500">
                  <strong>Next Steps:</strong><br/>
                  • Initial project review (24 hours)<br/>
                  • Consultation scheduling<br/>
                  • Technical requirements assessment<br/>
                  • Service agreement development
                </p>
              </div>
              <button 
                onClick={goBack}
                className="mt-6 bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 rounded-md font-medium transition-colors"
              >
                Return to Site
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Wrench className="h-6 w-6 text-slate-600" />
              <div>
                <div className="text-lg font-bold text-slate-800">VDV Consultation Request</div>
                <div className="text-xs text-slate-500">Professional Technical Services</div>
              </div>
            </div>
            <button 
              onClick={goBack}
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Site
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-4">Request Technical Consultation</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tell us about your project and we'll get back to you within 24 hours to discuss your requirements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Contact Info Side */}
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

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Response Timeline</h4>
                  <p className="text-blue-700 text-sm">
                    We typically respond to consultation requests within 24 hours during business days.
                  </p>
                </div>
              </div>

              {/* Form Side */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Project Details</h3>
                
                <form 
                  action="https://formspree.io/f/mandrykb"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Contact Information */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        <User className="w-4 h-4 inline mr-1" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        <Building2 className="w-4 h-4 inline mr-1" />
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        <Mail className="w-4 h-4 inline mr-1" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-1" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                    >
                      <option value="">Select project type</option>
                      <option value="mining-infrastructure">Cryptocurrency Mining Infrastructure</option>
                      <option value="business-development">Business Development Partnership</option>
                      <option value="technical-installation">Technical Installation & Setup</option>
                      <option value="ongoing-support">Ongoing Support & Maintenance</option>
                      <option value="consultation">General Technical Consultation</option>
                      <option value="other">Other (please specify in message)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        Project Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="3-months">Within 3 months</option>
                        <option value="6-months">Within 6 months</option>
                        <option value="planning">Still planning</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        <MapPin className="w-4 h-4 inline mr-1" />
                        Project Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                        placeholder="City, State"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Estimated Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                    >
                      <option value="">Select budget range (optional)</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k-plus">$500,000+</option>
                      <option value="discuss">Prefer to discuss</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-1" />
                      Project Description *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                      placeholder="Please describe your project requirements, technical needs, or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.projectType || !formData.message}
                    className="w-full bg-slate-700 hover:bg-slate-800 disabled:bg-slate-400 text-white py-3 px-6 rounded-md font-semibold transition-colors inline-flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Consultation Request
                      </>
                    )}
                  </button>

                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-slate-500 text-center">
                      By submitting this form, you agree to be contacted regarding your project inquiry. 
                      We respect your privacy and will not share your information with third parties.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}