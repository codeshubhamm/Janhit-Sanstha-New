import React, { useState } from 'react';

const AnnualReports = () => {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const annualReports = [
    {
      year: "2024-25",
      title: "Janhit Sanstha Annual Report 2024-25",
      description: "Comprehensive overview of our latest initiatives, impact metrics, and community development achievements. This report highlights our expanded digital literacy programs, women empowerment initiatives, and sustainable development projects across rural communities.",
      file: "/Annul Reports/Janhit Sanstha Annual Report 2024-25.pdf",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-100 to-orange-200",
      textColor: "text-orange-600",
      highlights: [
        "Digital Literacy Programs Expansion",
        "Women Empowerment Initiatives",
        "Sustainable Development Projects",
        "Community Impact Metrics"
      ]
    },
    {
      year: "2023-24",
      title: "Janhit Sanstha Annual Report 2023-24",
      description: "Detailed analysis of our programs, community impact, and strategic initiatives from the previous year. This report showcases our educational programs, healthcare initiatives, and environmental conservators efforts.",
      file: "/Annul Reports/Janhit Sanstha Annual Report 2023-24.pdf",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-100 to-blue-200",
      textColor: "text-blue-600",
      highlights: [
        "Educational Programs Success",
        "Healthcare Initiatives",
        "Environmental Conservators",
        "Strategic Partnerships"
      ]
    },
    {
      year: "2022-23",
      title: "Janhit Sanstha Annual Report 2022-23",
      description: "Comprehensive review of our foundational programs and community development milestones. This inaugural report establishes our commitment to rural development and community empowerment.",
      file: "/Annul Reports/Janhit Sanstha Annual Report 2022-23.pdf",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-100 to-green-200",
      textColor: "text-green-600",
      highlights: [
        "Foundation Establishment",
        "Community Development",
        "Rural Empowerment",
        "Program Inception"
      ]
    }
  ];

  const handleShare = (report: any) => {
    if (navigator.share) {
      navigator.share({
        title: report.title,
        text: `Check out our ${report.year} annual report showcasing our rural development impact!`,
        url: window.location.origin + report.file
      });
    } else {
      navigator.clipboard.writeText(window.location.origin + report.file);
      alert('Link copied to clipboard!');
    }
  };

  const openPdfViewer = (file: string) => {
    setSelectedReport(file);
  };

  const closePdfViewer = () => {
    setSelectedReport(null);
  };

  return (
    <div className="min-h-screen bg-white">
            {/* Hero Section with Comprehensive Information */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Annual Reports
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-4xl mx-auto">
            Transparency, Accountability, and Impact Measurement
          </p>
        </div>
      </section>

      {/* Annual Reports Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Annual Reports</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive annual reports to understand our impact, achievements, and commitment to rural development and community empowerment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {annualReports.map((report, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* PDF Thumbnail */}
                <div className={`bg-gradient-to-br ${report.bgColor} p-8 flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="w-24 h-32 bg-white rounded-lg shadow-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-16 h-16 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className={`font-semibold ${report.textColor}`}>Annual Report</div>
                    <div className={`font-bold text-lg ${report.textColor}`}>{report.year}</div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{report.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{report.description}</p>
                  
                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {report.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className={`w-2 h-2 rounded-full ${report.textColor.replace('text-', 'bg-')} mr-2`}></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={() => openPdfViewer(report.file)}
                      className={`bg-gradient-to-r ${report.color} text-white px-6 py-3 rounded-lg text-center font-semibold hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Online
                    </button>
                    <a 
                      href={report.file}
                      download
                      className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg text-center font-semibold hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download PDF
                    </a>
                    <button 
                      onClick={() => handleShare(report)}
                      className="bg-gray-50 text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-6xl h-full max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-bold text-gray-900">Annual Report Viewer</h3>
              <button 
                onClick={closePdfViewer}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close PDF viewer"
                title="Close PDF viewer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 p-6">
              <iframe
                src={`${selectedReport}#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full h-full rounded-lg border"
                title="Annual Report PDF Viewer"
              />
            </div>
          </div>
        </div>
      )}

      {/* Additional Information Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Annual Reports Matter</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our annual reports are more than just documents - they are a testament to our commitment to transparency, accountability, and community impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600">Complete disclosure of our activities, finances, and impact metrics for public accountability.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Impact Measurement</h3>
              <p className="text-gray-600">Detailed analysis of our programs' effectiveness and community transformation outcomes.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community Stories</h3>
              <p className="text-gray-600">Real stories of transformation and empowerment from the communities we serve.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Accountability</h3>
              <p className="text-gray-600">Complete financial statements and resource utilization for donor transparency.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnnualReports;

