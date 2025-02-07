import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Zap, Phone, Tv, CreditCard, Wallet, DollarSign } from 'lucide-react';

export function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { icon: <Phone className="w-12 h-12 text-indigo-600" />, title: 'Airtime & Data', description: 'Purchase airtime and data bundles for all networks' },
    { icon: <Tv className="w-12 h-12 text-indigo-600" />, title: 'Cable TV', description: 'Subscribe to your favorite TV packages' },
    { icon: <Zap className="w-12 h-12 text-indigo-600" />, title: 'Electricity', description: 'Pay your electricity bills instantly' },
    { icon: <Wallet className="w-12 h-12 text-indigo-600" />, title: 'Wallet', description: 'Secure wallet system for quick transactions' },
  ];

  const pricingPlans = [
    { name: 'Basic', price: '0', features: ['Basic VTU Access', 'Standard Rates', 'Email Support', '24/7 Service'] },
    { name: 'Business', price: '4,999', features: ['Reduced Rates', 'Priority Support', 'Transaction Analytics', 'API Access'] },
    { name: 'Enterprise', price: '9,999', features: ['Lowest Rates', 'Dedicated Support', 'Custom Integration', 'Bulk Purchases'] },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <DollarSign className="w-8 h-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-800">VTU Platform</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
              <a href="#about" className="text-gray-600 hover:text-indigo-600">About Us</a>
              <a href="#services" className="text-gray-600 hover:text-indigo-600">Services</a>
              <a href="#pricing" className="text-gray-600 hover:text-indigo-600">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact Us</a>
              <Link to="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Login
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Home</Link>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">About Us</a>
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Services</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Pricing</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Contact Us</a>
              <Link to="/login" className="block px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Your One-Stop VTU Solution</h1>
            <p className="text-xl md:text-2xl mb-8">Purchase airtime, data, pay bills, and more - all in one place</p>
            <Link to="/login" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">₦{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
                <Link to="/login" className="block w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}