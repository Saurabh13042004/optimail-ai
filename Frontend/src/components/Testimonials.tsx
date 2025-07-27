import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Sales",
      company: "TechFlow Inc",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "EmailAI Pro increased our cold email response rate from 3% to 12% in just two months. The AI personalization is incredible!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Business Development Manager",
      company: "Growth Labs",
      avatar: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The analytics dashboard is a game-changer. We can see exactly what's working and optimize our campaigns in real-time.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Founder & CEO",
      company: "StartupCo",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "As a startup, we needed something powerful yet affordable. EmailAI Pro delivered beyond our expectations.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by Sales Teams Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of companies that have transformed their outreach with EmailAI Pro
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-blue-500 mb-4" />
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop" alt="User" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop" alt="User" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop" alt="User" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop" alt="User" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-gray-900">Join 10,000+ happy customers</div>
              <div className="text-sm text-gray-500">⭐⭐⭐⭐⭐ 4.9/5 average rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;