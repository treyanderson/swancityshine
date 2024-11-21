import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "Incredible service! My windows have never looked better. Very professional and thorough.",
    rating: 5
  },
  {
    name: "Mike Thompson",
    text: "Punctual, polite, and did an amazing job. Highly recommend for any window cleaning needs.",
    rating: 5
  },
  {
    name: "Lisa Anderson",
    text: "Great attention to detail and very reasonable prices. Will definitely use again!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-dark-200 p-6 rounded-xl shadow-lg">
          <div className="flex mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-300 mb-4">{testimonial.text}</p>
          <p className="font-medium text-gray-100">{testimonial.name}</p>
        </div>
      ))}
    </div>
  );
}