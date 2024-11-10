'use client'
import React, { useState } from 'react';
import {Sparkles, Shield, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { createClient } from '@supabase/supabase-js'
import { supabase } from './supabase';

const WaitlistForm = () => {
    
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    phone: '',
    propertyType: '',
    units: '',
    address: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const {data, error } = await supabase
        .from('waitlist')
        .insert([formData])
      
      if (error) throw error
      console.log('Data:', data)
      setSubmitted(true)
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-6">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to the Future!</h2>
          <p className="text-gray-600 mb-6">You're now on the waitlist for Berlin's most innovative property management platform.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">We'll be in touch soon with exclusive early access details.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">PropTech</div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Sales
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🚀 Join the Property Management Revolution
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Manage Properties<br />
            <span className="text-blue-600">Like Never Before</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your property management with AI-powered solutions. Join hundreds of property managers already on the waitlist.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="block text-2xl font-bold text-blue-600">500+</span>
              <span className="text-sm text-gray-600">Units Managed</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="block text-2xl font-bold text-blue-600">98%</span>
              <span className="text-sm text-gray-600">Customer Satisfaction</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="block text-2xl font-bold text-blue-600">24/7</span>
              <span className="text-sm text-gray-600">Support Available</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
              <Sparkles className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-xl mb-3">AI-Powered Management</h3>
            <p className="text-gray-600">Smart solutions that automate routine tasks and predict maintenance needs</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-xl mb-3">Enhanced Security</h3>
            <p className="text-gray-600">Bank-level security for all your property and tenant data</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 p-3 rounded-lg inline-block mb-4">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-xl mb-3">Real-time Updates</h3>
            <p className="text-gray-600">Instant notifications and live dashboard updates</p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-600 mb-6">TRUSTED BY LEADING PROPERTY MANAGERS IN BERLIN</p>
          <div className="flex justify-center gap-12 grayscale opacity-50">
            <div className="w-32 h-12 bg-gray-200 rounded"></div>
            <div className="w-32 h-12 bg-gray-200 rounded"></div>
            <div className="w-32 h-12 bg-gray-200 rounded"></div>
            <div className="w-32 h-12 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Waitlist Form */}
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium">
            Limited Early Access
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Join Our Waitlist</h2>
          <p className="text-gray-600 mb-6">Be among the first to experience the future of property management.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+49 123 456 789"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Type
              </label>
              <select
                name="propertyType"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.propertyType}
                onChange={handleChange}
              >
                <option value="">Select type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="mixed">Mixed Use</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Units
              </label>
              <input
                type="number"
                name="units"
                required
                min="1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.units}
                onChange={handleChange}
                placeholder="10"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Address
              </label>
              <textarea
                name="address"
                required
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street, City, Postal Code"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 text-lg font-medium"
            >
              Get Early Access
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <p className="text-center text-sm text-gray-500">
              Join 200+ property managers already on the waitlist
            </p>
          </form>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">Michael Schmidt</h4>
                <p className="text-gray-600 text-sm">Property Manager, Berlin</p>
              </div>
            </div>
            <p className="text-gray-600">"The most innovative property management solution I've seen in years. Can't wait for the full release!"</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">Sarah Mueller</h4>
                <p className="text-gray-600 text-sm">Real Estate Investor</p>
              </div>
            </div>
            <p className="text-gray-600">"Finally, a modern solution for property management that understands the Berlin market."</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-gray-200 pt-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">PropTech Berlin</h4>
              <p className="text-gray-600 text-sm">Transforming property management with innovative technology.</p>
            </div>
            <div>
              <h5 className="font-medium mb-4">Contact</h5>
              <p className="text-gray-600 text-sm">Friedrichstraße 123<br />10117 Berlin, Germany</p>
            </div>
            <div>
              <h5 className="font-medium mb-4">Social</h5>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            <div>
              <h5 className="font-medium mb-4">Legal</h5>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>© 2024 PropTech Berlin. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default WaitlistForm;