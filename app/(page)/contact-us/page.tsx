'use client'
import React from 'react';
import { Card } from '@/components/ui/card';
import { Coffee, Phone,  MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  title: string;
  description: string;
  email?: string;
  phone?: string;
  icon: React.ReactNode;
}

const ContactSection: React.FC<ContactSectionProps> = ({ title, description, email, phone, icon }) => (
  <div className="mb-8 p-6 rounded-lg bg-amber-50/50 hover:bg-amber-50 transition-colors border border-amber-100">
    <div className="flex items-center gap-3 mb-3">
      <div className="text-amber-800">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-amber-900">{title}</h3>
    </div>
    <p className="text-amber-800 mb-2">{description}</p>
    {email && <p className="text-amber-900 font-medium">{email}</p>}
    {phone && <p className="text-amber-900 font-medium">{phone}</p>}
  </div>
);

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Let&apos;s Connect Over Coffee</h1>
          <p className="text-amber-700 text-lg max-w-2xl mx-auto">
            Whether you&apos;re interested in our artisanal blends, wholesale partnerships, or just want to share your coffee story, we&apos;re here to chat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div>
            <ContactSection
              icon={<Coffee size={24} />}
              title="Coffee Consultations"
              description="Looking to explore our coffee selection or need brewing advice? Our coffee experts are here to help."
              email="Support@jlespressoservice.com"
              phone="+44 7903856712"
            />
            
            <ContactSection
              icon={<Phone size={24} />}
              title="Wholesale Inquiries"
              description="Interested in serving our coffee at your establishment? Let's discuss partnership opportunities."
              email="Support@jlespressoservice.com"
            />
            
            <ContactSection
              icon={<MessageSquare size={24} />}
              title="Customer Care"
              description="Questions about your order or our products? Our team is ready to assist."
              email="Support@jlespressoservice.com"
            />

            <div className="mt-8 p-6 bg-amber-900 rounded-lg text-amber-50">
              <h3 className="text-xl font-semibold mb-3">Visit Our Shop</h3>
              <p className="mb-2">Gretton Rd,</p>
              <p className="mb-2">Corby NN17 3HN, United Kingdom</p>
              <p>Open Monday-Friday: 9AM-5PM</p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <Card className="p-8 shadow-xl bg-white border border-amber-100">
              <h3 className="text-2xl font-semibold mb-6 text-amber-900">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-amber-800 mb-1">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-3 py-2 border-2 border-amber-200 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors bg-amber-50/30"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-amber-800 mb-1">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-2 border-2 border-amber-200 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors bg-amber-50/30"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-amber-800 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border-2 border-amber-200 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors bg-amber-50/30"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-amber-800 mb-1">
                    Phone number
                  </label>
                  <div className="flex">
                    <select className="px-3 py-2 border-2 border-amber-200 rounded-l-md border-r-0 bg-amber-50/30 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors">
                      <option>+82</option>
                      <option>+1</option>
                      <option>+44</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border-2 border-amber-200 rounded-r-md focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors bg-amber-50/30"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-amber-800 mb-1">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border-2 border-amber-200 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors bg-amber-50/30"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-900 text-amber-50 py-3 px-4 rounded-md hover:bg-amber-800 transition-all transform hover:scale-[1.02] shadow-md"
                >
                  Send Message
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center px-4 py-2 border-2 border-amber-700 text-amber-800 rounded-md hover:bg-amber-50 transition-colors gap-2"
                  >
                    <Coffee size={18} />
                    Schedule a Coffee Tasting
                  </button>
                </div>
              </form>

              <p className="text-sm text-amber-700 mt-6 text-center">
                By sending a message, you agree to our{' '}
                <a href="#" className="text-amber-900 hover:text-amber-700 underline">Privacy Policy</a>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;