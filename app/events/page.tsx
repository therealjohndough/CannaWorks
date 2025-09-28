import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Cannabis Education Workshop",
      date: "2024-12-15",
      time: "7:00 PM - 9:00 PM",
      location: "Buffalo Community Center, 341 Delaware Ave",
      price: "Free",
      category: "Education",
      description: "Learn about different cannabis strains, consumption methods, and responsible use. Perfect for beginners and those looking to expand their knowledge.",
      organizer: "Buffalo Cannabis Network",
      capacity: "50 people",
      registration: "Required"
    },
    {
      id: 2,
      title: "Industry Networking Event",
      date: "2025-01-08",
      time: "6:30 PM - 10:00 PM", 
      location: "Downtown Buffalo Hotel, 601 Main St",
      price: "$25",
      category: "Networking",
      description: "Connect with cannabis industry professionals, entrepreneurs, and enthusiasts. Includes appetizers and non-alcoholic beverages.",
      organizer: "WNY Cannabis Association",
      capacity: "100 people",
      registration: "Required"
    },
    {
      id: 3,
      title: "Medical Cannabis Seminar",
      date: "2025-01-22",
      time: "2:00 PM - 5:00 PM",
      location: "Buffalo Medical Plaza, 100 High St",
      price: "$40",
      category: "Medical",
      description: "Healthcare professionals and patients discuss medical cannabis applications, dosing, and treatment options.",
      organizer: "NY Medical Cannabis Society",
      capacity: "75 people", 
      registration: "Required"
    },
    {
      id: 4,
      title: "Cannabis Cooking Class",
      date: "2025-02-05",
      time: "6:00 PM - 9:00 PM",
      location: "Culinary Institute Buffalo, 295 Main St",
      price: "$60",
      category: "Culinary",
      description: "Learn to create delicious cannabis-infused edibles with professional chefs. All materials and ingredients provided.",
      organizer: "Green Kitchen Collective",
      capacity: "20 people",
      registration: "Required"
    },
    {
      id: 5,
      title: "Cannabis Business Legal Workshop", 
      date: "2025-02-18",
      time: "1:00 PM - 4:00 PM",
      location: "Buffalo Law Center, 465 Washington St",
      price: "$75",
      category: "Legal",
      description: "Navigate the legal landscape of cannabis business in New York. Covers licensing, compliance, and regulatory requirements.",
      organizer: "Cannabis Law Group",
      capacity: "40 people",
      registration: "Required"
    },
    {
      id: 6,
      title: "Community Cleanup & Advocacy",
      date: "2025-03-12",
      time: "10:00 AM - 2:00 PM",
      location: "Delaware Park, Ring Road",
      price: "Free",
      category: "Community",
      description: "Join fellow cannabis advocates for a community cleanup followed by lunch and discussion about cannabis policy reform.",
      organizer: "Buffalo Cannabis Advocates",
      capacity: "Unlimited",
      registration: "Encouraged"
    }
  ]

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Education': 'bg-blue-100 text-blue-800',
      'Networking': 'bg-purple-100 text-purple-800', 
      'Medical': 'bg-green-100 text-green-800',
      'Culinary': 'bg-orange-100 text-orange-800',
      'Legal': 'bg-red-100 text-red-800',
      'Community': 'bg-yellow-100 text-yellow-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-primary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Cannabis Events in Buffalo</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Connect with the cannabis community through education, networking, and advocacy events.
              </p>
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {events.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold text-gray-900 flex-1 pr-4">{event.title}</h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {event.location}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{event.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">Price:</span>
                      <span className="ml-2 text-gray-600">{event.price}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Capacity:</span>
                      <span className="ml-2 text-gray-600">{event.capacity}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Organizer:</span>
                      <span className="ml-2 text-gray-600">{event.organizer}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Registration:</span>
                      <span className="ml-2 text-gray-600">{event.registration}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="btn-primary flex-1">
                      Register Now
                    </button>
                    <button className="btn-secondary flex-1">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Host an Event */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Want to Host an Event?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Share your cannabis-related event with the Buffalo community.
            </p>
            <button className="btn-primary">
              Submit Your Event
            </button>
          </div>
        </section>

        {/* Event Guidelines */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Event Guidelines
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🆔</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Age Restrictions</h3>
                <p className="text-gray-600">All events are 21+ unless otherwise specified</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚫</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">No Consumption</h3>
                <p className="text-gray-600">Cannabis consumption not allowed at public events</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Respectful Environment</h3>
                <p className="text-gray-600">All attendees expected to maintain respectful behavior</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}