import React from 'react';
import { Calendar } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      date: "Dec 25",
      title: "Christmas Food Drive for Local Families",
      description: "Join us in spreading holiday joy by donating food items for families in need.",
      image: "/Pankh Img 1.jpg"
    },
    {
      date: "Jan 15",
      title: "New Year Educational Workshop",
      description: "Interactive learning sessions for children focusing on digital literacy.",
      image: "/Jadui Gulak Img.jpg"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Join Our Latest Upcoming Events
            </h2>
            
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="h-4 w-4 text-orange-500" />
                      <span className="text-sm font-medium text-orange-500">{event.date}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-teal-800 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Register For Our Social Event!</h3>
            <p className="text-gray-200 mb-6">
              Be part of meaningful community events that create lasting impact. 
              Register now to secure your spot at our upcoming gatherings.
            </p>
            <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;