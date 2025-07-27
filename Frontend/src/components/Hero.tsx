import React from 'react';
import { ArrowRight, Play, TrendingUp, Users, Mail, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                <span>AI-Powered Email Automation</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Scale Your Cold Email
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"> Outreach</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Automate personalized cold email campaigns with AI-driven insights and real-time metrics. 
                Boost your reply rates by 300% and convert more prospects into customers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Start Free 14-Day Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-500 hover:text-blue-500 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">300%</div>
                <div className="text-gray-600">Higher Reply Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">Deliverability</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Campaign Dashboard</h3>
                  <div className="flex items-center space-x-1 text-green-500">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">+47%</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <span className="text-sm text-gray-600">Emails Sent</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">12,847</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-5 h-5 text-purple-500" />
                      <span className="text-sm text-gray-600">Responses</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">1,893</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full">
                  <div className="bg-white h-2 rounded-full" style={{width: '73%'}}></div>
                </div>
                
                <p className="text-sm text-gray-600">AI Optimization: 73% complete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;