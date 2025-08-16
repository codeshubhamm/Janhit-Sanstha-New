import React from 'react';

const AnnualReports = () => {
  const annualReports = [
    {
      year: "2024-25",
      title: "Janhit Sanstha Annual Report 2024-25",
      description: "Comprehensive overview of our latest initiatives, impact metrics, and community development achievements.",
      file: "/Annul Reports/Janhit Sanstha Annual Report 2024-25.pdf",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-100 to-orange-200",
      textColor: "text-orange-600"
    },
    {
      year: "2023-24",
      title: "Janhit Sanstha Annual Report 2023-24",
      description: "Detailed analysis of our programs, community impact, and strategic initiatives from the previous year.",
      file: "/Annul Reports/Janhit Sanstha Annual Report 2023-24.pdf",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-100 to-blue-200",
      textColor: "text-blue-600"
    },
    {
      year: "2022-23",
      title: "Janhit Sanstha Annual Report 2022-23",
      description: "Comprehensive review of our foundational programs and community development milestones.",
      file: "/Annul Reports/Janhit Sanstha Annual Report 2022-23.pdf",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-100 to-green-200",
      textColor: "text-green-600"
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - One Big Heading */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-8xl font-bold text-gray-900 mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Annual Reports
            </span>
          </h1>
        </div>
      </section>

      {/* Annual Reports Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <p className="text-gray-600 mb-6">{report.description}</p>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <a 
                      href={report.file}
                      download
                      className={`bg-gradient-to-r ${report.color} text-white px-6 py-3 rounded-lg text-center font-semibold hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download PDF
                    </a>
                    <button 
                      onClick={() => handleShare(report)}
                      className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2"
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
    </div>
  );
};

export default AnnualReports;
