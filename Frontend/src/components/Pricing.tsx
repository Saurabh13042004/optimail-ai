import React from 'react';
import { Check, Zap, Crown, Rocket } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: 29,
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 1,000 emails/month",
        "Basic AI personalization",
        "Email templates library",
        "Basic analytics",
        "Email support"
      ],
      color: "blue",
      popular: false
    },
    {
      name: "Professional",
      icon: Crown,
      price: 79,
      description: "Best for growing sales teams",
      features: [
        "Up to 10,000 emails/month",
        "Advanced AI personalization",
        "A/B testing",
        "Advanced analytics & insights",
        "CRM integrations",
        "Priority support",
        "Custom templates"
      ],
      color: "purple",
      popular: true
    },
    {
      name: "Enterprise",
      icon: Rocket,
      price: 199,
      description: "For large organizations",
      features: [
        "Unlimited emails",
        "Custom AI training",
        "White-label solution",
        "Advanced reporting",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee"
      ],
      color: "green",
      popular: false
    }
  ];

  const getColorClasses = (color: string, isButton: boolean = false) => {
    if (isButton) {
      const buttonColors = {
        blue: "bg-blue-500 hover:bg-blue-600",
        purple: "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600",
        green: "bg-green-500 hover:bg-green-600"
      };
      return buttonColors[color as keyof typeof buttonColors];
    }
    
    const colors = {
      blue: "text-blue-500",
      purple: "text-purple-500",
      green: "text-green-500"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <plan.icon className={`w-8 h-8 ${getColorClasses(plan.color)} mr-3`} />
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                </div>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <button className={`w-full text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 mb-8 ${getColorClasses(plan.color, true)}`}>
                  Start Free Trial
                </button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All plans include 14-day free trial • No setup fees • Cancel anytime</p>
          <button className="text-blue-600 hover:text-blue-700 font-semibold">
            Compare all features →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;