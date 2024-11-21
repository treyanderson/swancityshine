import React from 'react';
import { Sparkles, Droplets, Clock, Shield, Send } from 'lucide-react';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-100 to-dark-50 text-gray-100">
      <Toaster position="top-right" />
      
      {/* Hero Section */}
      <header className="bg-dark-200">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Swan City Shine
                <span className="block text-blue-400">Window Cleaning Service</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">Professional window cleaning that brings sparkle to your view!</p>
              <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                Get a Quote <Send size={18} />
              </a>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1527689638836-411945a2b57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Professional window cleaning" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-dark-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">Spotless Results</h3>
              <p className="text-gray-400">Crystal clear windows guaranteed every time</p>
            </div>
            <div className="text-center">
              <div className="bg-dark-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">Reliable Service</h3>
              <p className="text-gray-400">Always on time and ready to work</p>
            </div>
            <div className="text-center">
              <div className="bg-dark-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-400">Your property is protected</p>
            </div>
            <div className="text-center">
              <div className="bg-dark-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-400">Safe cleaning solutions used</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-dark-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <img 
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Window cleaning service" 
              className="rounded-lg shadow-lg hover:opacity-75 transition-opacity"
            />
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Professional window cleaning" 
              className="rounded-lg shadow-lg hover:opacity-75 transition-opacity"
            />
            <img 
              src="https://images.unsplash.com/photo-1527689638836-411945a2b57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Window washing" 
              className="rounded-lg shadow-lg hover:opacity-75 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-dark-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <Testimonials />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Get Your Free Quote</h2>
            <div className="bg-dark-200 p-8 rounded-xl shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-300 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Swan City Shine. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;