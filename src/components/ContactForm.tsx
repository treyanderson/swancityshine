import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Send } from 'lucide-react';

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = {
      to_email: 'swancityshine@gmail.com',
      from_name: form.name.value,
      from_email: form.email.value,
      phone: form.phone.value,
      message: form.message.value
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY
      );
      toast.success('Message sent successfully!');
      form.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 bg-dark-100 border border-dark-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 bg-dark-100 border border-dark-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-2 bg-dark-100 border border-dark-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2 bg-dark-100 border border-dark-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
      </button>
    </form>
  );
}