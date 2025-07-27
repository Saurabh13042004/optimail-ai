import React from 'react';
import { Bot, BarChart3, Target, Zap, Users, Mail, TrendingUp, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Personalization",
      description: "Our AI analyzes prospect data to craft personalized emails that feel human-written, increasing response rates by up to 300%.",
      color: "blue"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track open rates, click-through rates, and conversions with detailed insights and predictive analytics for optimization.",
      color: "purple"
    },
    {
      icon: Target,
      title: "Smart Lead Targeting",
      description: "Advanced algorithms identify and prioritize high-value prospects based on behavior patterns and engagement history.",
      color: "green"
    },
    {
      icon: Zap,
      title: "Automated Sequences",
      description: "Set up complex drip campaigns with conditional logic, A/B testing, and automatic follow-ups based on recipient behavior.",
      color: "orange"
    },
    {
      icon: Users,
      title: "CRM Integration",
      description: "Seamlessly connect with Salesforce, HubSpot, Pipedrive, and 50+ other CRMs to sync leads and track performance.",
      color: "indigo"
    },
    {
      icon: Shield,
      title: "Compliance & Deliverability",
      description: "Built-in GDPR compliance, spam detection, and reputation management ensure 98%+ deliverability rates.",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600",
      indigo: "bg-indigo-100 text-indigo-600",
      red: "bg-red-100 text-red-600"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Sales Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to scale your cold email outreach, powered by AI and backed by data-driven insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group hover:shadow-xl transition-all duration-300 p-6 rounded-2xl border border-gray-100 hover:border-blue-200">
              <div className={`w-12 h-12 rounded-xl ${getColorClasses(feature.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                See Your Results in Real-Time
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our advanced dashboard gives you instant insights into campaign performance, 
                AI optimization suggestions, and predictive analytics to maximize your ROI.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                View Demo Dashboard
              </button>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Campaign Performance</span>
                  <span className="text-green-500 font-semibold">↗ +23%</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Open Rate</span>
                    <span className="text-sm font-medium">67%</span>
                  </div>
                  <div className="bg-gray-200 h-2 rounded-full">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '67%'}}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Reply Rate</span>
                    <span className="text-sm font-medium">14%</span>
                  </div>
                  <div className="bg-gray-200 h-2 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '14%'}}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Conversion Rate</span>
                    <span className="text-sm font-medium">8%</span>
                  </div>
                  <div className="bg-gray-200 h-2 rounded-full">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '8%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;