import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function HomePage() {
  const featuredDispensaries = [
    {
      id: 1,
      name: "Green Leaf Dispensary",
      address: "123 Main St, Buffalo, NY",
      description: "Premium cannabis products with expert consultation",
      rating: 4.8
    },
    {
      id: 2,
      name: "Buffalo Cannabis Co",
      address: "456 Elm Ave, Buffalo, NY", 
      description: "Local favorites with competitive prices",
      rating: 4.6
    },
    {
      id: 3,
      name: "Empire State Cannabis",
      address: "789 Oak St, Buffalo, NY",
      description: "Wide selection of flower, edibles, and concentrates",
      rating: 4.7
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Cannabis Education Workshop",
      date: "Dec 15, 2024",
      time: "7:00 PM",
      location: "Buffalo Community Center"
    },
    {
      id: 2,
      title: "Industry Networking Event",
      date: "Jan 8, 2025",
      time: "6:30 PM", 
      location: "Downtown Buffalo Hotel"
    },
    {
      id: 3,
      title: "Medical Cannabis Seminar",
      date: "Jan 22, 2025",
      time: "2:00 PM",
      location: "Buffalo Medical Plaza"
    }
  ]

  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to Buffalo&apos;s Cannabis Community
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Discover dispensaries, connect with fellow enthusiasts, and stay updated 
                on the latest cannabis news and events in Buffalo, NY.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dispensaries" className="btn-primary inline-block">
                  Find Dispensaries
                </Link>
                <Link href="/events" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 inline-block">
                  View Events
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Dispensaries */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Dispensaries
              </h2>
              <p className="text-xl text-gray-600">
                Discover top-rated dispensaries in the Buffalo area
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDispensaries.map((dispensary) => (
                <div key={dispensary.id} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">{dispensary.name}</h3>
                  <p className="text-gray-600 mb-2">{dispensary.address}</p>
                  <p className="text-gray-700 mb-4">{dispensary.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-gray-700">{dispensary.rating}</span>
                    </div>
                    <Link href={`/dispensaries/${dispensary.id}`} className="text-primary-600 hover:text-primary-700 font-medium">
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/dispensaries" className="btn-primary">
                View All Dispensaries
              </Link>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600">
                Join the cannabis community at these upcoming events
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center">
                      <span className="font-medium">Date:</span>
                      <span className="ml-2">{event.date}</span>
                    </p>
                    <p className="flex items-center">
                      <span className="font-medium">Time:</span>
                      <span className="ml-2">{event.time}</span>
                    </p>
                    <p className="flex items-center">
                      <span className="font-medium">Location:</span>
                      <span className="ml-2">{event.location}</span>
                    </p>
                  </div>
                  <div className="mt-4">
                    <Link href={`/events/${event.id}`} className="text-primary-600 hover:text-primary-700 font-medium">
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/events" className="btn-secondary">
                View All Events
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Connected with Buffalo&apos;s Cannabis Community
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get the latest news, events, and dispensary updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-2 px-6 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}