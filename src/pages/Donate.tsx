import React, { useState } from 'react';
import { Heart, CreditCard, Smartphone, Building, Shield, CheckCircle } from 'lucide-react';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000];

  const projects = [
    {
      title: "Kishori Vikas Project",
      description: "Support education and empowerment of 350 adolescent girls",
      image: "https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=400",
      goal: 500000,
      raised: 325000
    },
    {
      title: "Digital Saksharta Program",
      description: "Provide digital literacy training to 230 villagers",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400",
      goal: 300000,
      raised: 180000
    },
    {
      title: "Pankh Sapno Ki Udaan",
      description: "Educational support for 450 students across 16 villages",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400",
      goal: 750000,
      raised: 450000
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium mb-4 sm:mb-6 shadow-lg">
            💝 Make a Donation
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Support Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Mission</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Your contribution directly impacts the lives of tribal communities in Maharashtra. 
            Every donation helps us provide education, digital literacy, and empowerment programs.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl border border-orange-100 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 sm:p-8 text-white text-center">
              <Heart className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Make a Difference Today</h2>
              <p className="text-orange-100">Choose your donation amount and help transform lives</p>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              {/* Donation Type */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Donation Type</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      donationType === 'one-time'
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    <div className="font-semibold">One-time</div>
                    <div className="text-sm text-gray-600">Single donation</div>
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      donationType === 'monthly'
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    <div className="font-semibold">Monthly</div>
                    <div className="text-sm text-gray-600">Recurring support</div>
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Amount (₹)</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`p-3 sm:p-4 rounded-xl border-2 font-semibold transition-all duration-300 ${
                        selectedAmount === amount && !customAmount
                          ? 'border-orange-500 bg-orange-500 text-white'
                          : 'border-gray-200 hover:border-orange-300 text-gray-700'
                      }`}
                    >
                      ₹{amount.toLocaleString()}
                    </button>
                  ))}
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(0);
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 transition-colors cursor-pointer">
                    <CreditCard className="h-6 w-6 text-orange-500 mr-3" />
                    <span className="font-medium">Credit/Debit Card</span>
                  </div>
                  <div className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 transition-colors cursor-pointer">
                    <Smartphone className="h-6 w-6 text-orange-500 mr-3" />
                    <span className="font-medium">UPI/Digital Wallet</span>
                  </div>
                  <div className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 transition-colors cursor-pointer">
                    <Building className="h-6 w-6 text-orange-500 mr-3" />
                    <span className="font-medium">Net Banking</span>
                  </div>
                </div>
              </div>

              {/* Security & Tax Benefits */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl mb-8">
                <div className="flex items-start space-x-3 mb-4">
                  <Shield className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Secure & Transparent</h4>
                    <p className="text-sm text-gray-600">Your donation is processed securely and we provide complete transparency on fund utilization.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Tax Benefits</h4>
                    <p className="text-sm text-gray-600">Donations are eligible for tax deduction under Section 80G of the Income Tax Act.</p>
                  </div>
                </div>
              </div>

              {/* Donate Button */}
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Donate ₹{customAmount || selectedAmount.toLocaleString()} {donationType === 'monthly' ? '/month' : ''}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Support Specific Projects</h2>
            <p className="text-lg text-gray-600">Choose a project that resonates with your values</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Raised: ₹{project.raised.toLocaleString()}</span>
                      <span>Goal: ₹{project.goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-orange-500 h-2 rounded-full" 
                        style={{ width: `${(project.raised / project.goal) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                    Support This Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Your Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">₹500</div>
              <div className="text-orange-100 text-sm">Educates 1 child for a month</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">₹1,000</div>
              <div className="text-orange-100 text-sm">Digital literacy for 2 adults</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">₹2,500</div>
              <div className="text-orange-100 text-sm">Empowers 5 adolescent girls</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">₹5,000</div>
              <div className="text-orange-100 text-sm">Supports entire village program</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;