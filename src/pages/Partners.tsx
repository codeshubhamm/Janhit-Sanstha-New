import React from 'react';

type Partner = {
  name: string;
  logoSrc?: string;
};

const partners: Partner[] = [
  { name: "Swaroopwardhinee" },
  { name: "Grand Maratha Foundation" },
  { name: "NEED" },
  { name: "SewaSayong" }
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            🤝 Our Partners
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Strategic Partnerships</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">We proudly collaborate with mission-aligned organizations to create lasting impact.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {partners.map((p, idx) => (
              <div key={idx} className="bg-white border border-orange-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                {p.logoSrc ? (
                  <img src={p.logoSrc} alt={`${p.name} logo`} className="w-24 h-24 object-contain mx-auto mb-3" />
                ) : (
                  <div className="w-24 h-24 mx-auto mb-3 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 text-3xl font-bold">
                    {p.name.charAt(0)}
                  </div>
                )}
                <div className="text-sm sm:text-base font-semibold text-gray-800">{p.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;



