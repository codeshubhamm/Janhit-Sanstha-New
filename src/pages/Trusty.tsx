import React from 'react';

const Trusty = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            🤝 Trust & Governance
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">Janhit Sanstha </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-600">Trustees</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our dedicated board of trustees ensures proper governance and strategic direction for all our initiatives.
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-500 to-orange-500 text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Sr. No.</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Designation</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">By Profession</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Education</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-orange-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">Vivek Vasantrao Kalpande</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-600 font-semibold">President</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Business, Journalist</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">BA Graduate</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">Anil Linganna Jakkawar</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-600 font-semibold">Vice-President</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Business</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">BA Graduate</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">Swapnil Ramkrushna Bomenwar</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-600 font-semibold">Secretary</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Business</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">BA Graduate</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">Rajani Gangadhar Atram</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-600 font-semibold">Trustee</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Social Worker</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">BA, BEd, MA Marathi & MA Sociology</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">Ashwini Savish Nainwar</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-600 font-semibold">Trustee</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Advocate</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">BA, LLB, MA, Marathi</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">Pratik Santosh Singhaniya</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-600 font-semibold">Trustee</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Business</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">B.Com - Jr Diploma in French Language</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">7</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">Ravindra Chandrabhan Bomenwar</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-600 font-semibold">Trustee</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Social Worker</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">BA Graduate</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">8</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">Mahadev Narsing Mallelwar</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-600 font-semibold">Trustee</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Farmer</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">HSC</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">9</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">Sunita Bhaurao Apselwar</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-600 font-semibold">Trustee</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Gov. Employee</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">MA, Bed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trusty; 