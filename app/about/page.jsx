"use client";

import React, { useState } from 'react';

const About = () => {
  const [donationAmount, setDonationAmount] = useState(10);
  const [donationMessage, setDonationMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDonationSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setDonationMessage(`JazakAllah Khair for your donation of $${donationAmount}! May Allah reward you abundantly.`);
    setIsSubmitting(false);
    
    setTimeout(() => setDonationMessage(''), 6000);
  };

  const features = [
    {
      title: "Daily Islamic Tips",
      description: "Receive authentic Islamic advice to improve your daily life",
      icon: "📖"
    },
    {
      title: "Prayer Times & Qibla",
      description: "Accurate prayer schedules and direction finder",
      icon: "🕌"
    },
    {
      title: "Quran & Hadith Library",
      description: "Access to authentic Islamic texts and explanations",
      icon: "☪️"
    },
    {
      title: "Islamic Community",
      description: "Connect with other Muslims on the same journey",
      icon: "👳"
    }
  ];

  const donationTiers = [5, 10, 25, 50, 100];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">About Islamic Bhai</h1>
          <p className="text-xl text-emerald-600 max-w-2xl mx-auto">
            Your comprehensive guide to living a better life through authentic Islamic teachings
          </p>
        </div>
        
        {/* Mission Section */}
        <div className="bg-white rounded-2xl  p-8 mb-12">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-6 text-center">Our Mission</h2>
          <p className="text-gray-700 text-lg mb-6 text-center">
            Islamic Bhai was created to provide Muslims with easy access to authentic Islamic knowledge, 
            daily tips, and resources to strengthen faith and improve life according to Quran and Sunnah.
          </p>
          <div className="flex justify-center">
            <div className="bg-emerald-100 inline-block rounded-full px-6 py-3">
              <p className="text-emerald-800 font-medium text-center">
                "Seeking knowledge is obligatory upon every Muslim." (Ibn Majah)
              </p>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-emerald-800 mb-10 text-center">What You'll Find</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl  p-6 duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Donation Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl  p-8 text-white mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Support Our Mission</h2>
          <p className="text-center mb-8 text-emerald-100">
            Your donations help keep Islamic Bhai running, secure, and filled with valuable content for the Ummah.
          </p>
          
          {donationMessage ? (
            <div className="bg-white text-emerald-700 p-6 rounded-xl text-center">
              <p className="text-lg font-medium">{donationMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleDonationSubmit} className="max-w-md mx-auto">
              <div className="mb-6">
                <label className="block mb-3 text-emerald-100">Select Donation Amount ($)</label>
                <div className="grid grid-cols-5 gap-2">
                  {donationTiers.map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setDonationAmount(tier)}
                      className={`py-2 rounded-lg transition-colors ${
                        donationAmount === tier
                          ? 'bg-white text-emerald-700 font-bold'
                          : 'bg-emerald-700 text-white hover:bg-emerald-800'
                      }`}
                    >
                      ${tier}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="customAmount" className="block mb-2 text-emerald-100">Or Enter Custom Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    id="customAmount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 rounded-lg text-emerald-800 font-medium"
                    min="1"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-amber-500 hover:bg-amber-600'
                }`}
              >
                {isSubmitting ? 'Processing...' : 'Donate Now'}
              </button>
              
              <p className="text-emerald-200 text-sm text-center mt-4">
                100% of donations go toward maintaining and improving Islamic Bhai
              </p>
            </form>
          )}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-emerald-800 mb-4">Join Our Community</h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Help us spread authentic Islamic knowledge and make a difference in the lives of Muslims worldwide. 
            Share Islamic Bhai with your friends and family.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Share with Friends
            </button>
            <button className="border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-lg font-medium transition-colors">
              Suggest a Feature
            </button>
          </div>
        </div>
        
        {/* Footer Note */}
        <div className="mt-16 text-center text-gray-600">
          <p>Made with ❤️ for the Ummah | May Allah accept our efforts</p>
        </div>
      </div>
    </div>
  );
};

export default About;