import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function DispensariesPage() {
  const dispensaries = [
    {
      id: 1,
      name: "Green Leaf Dispensary",
      address: "123 Main St, Buffalo, NY 14202",
      phone: "(716) 555-0123",
      hours: "Mon-Sun: 10AM-9PM",
      description: "Premium cannabis products with expert consultation. We pride ourselves on quality flower, concentrates, and edibles.",
      specialties: ["Flower", "Edibles", "Concentrates", "Vaporizers"],
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Buffalo Cannabis Co",
      address: "456 Elm Ave, Buffalo, NY 14203",
      phone: "(716) 555-0456", 
      hours: "Mon-Sat: 9AM-8PM, Sun: 11AM-6PM",
      description: "Local favorites with competitive prices and a welcoming atmosphere for all experience levels.",
      specialties: ["Budget Options", "New Customer Deals", "Medical Cannabis"],
      rating: 4.6,
      reviews: 89
    },
    {
      id: 3,
      name: "Empire State Cannabis",
      address: "789 Oak St, Buffalo, NY 14204",
      phone: "(716) 555-0789",
      hours: "Daily: 8AM-10PM",
      description: "Wide selection of flower, edibles, and concentrates from top New York cultivators.",
      specialties: ["Craft Cannabis", "Local Growers", "Premium Products"],
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "Niagara Cannabis Company",
      address: "321 Delaware Ave, Buffalo, NY 14202",
      phone: "(716) 555-0321",
      hours: "Mon-Thu: 10AM-8PM, Fri-Sat: 10AM-9PM, Sun: 12PM-7PM",
      description: "Family-owned dispensary focusing on organic and sustainable cannabis products.",
      specialties: ["Organic Products", "Sustainable", "Family Owned"],
      rating: 4.5,
      reviews: 67
    }
  ]

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-primary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Buffalo Area Dispensaries</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Find licensed cannabis dispensaries near you in Buffalo, NY and surrounding areas.
              </p>
            </div>
          </div>
        </section>

        {/* Dispensaries List */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {dispensaries.map((dispensary) => (
                <div key={dispensary.id} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">{dispensary.name}</h2>
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-lg">★</span>
                      <span className="ml-1 text-gray-700 font-medium">{dispensary.rating}</span>
                      <span className="ml-1 text-gray-500 text-sm">({dispensary.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {dispensary.address}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      {dispensary.phone}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {dispensary.hours}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{dispensary.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dispensary.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="btn-primary flex-1">
                      View Details
                    </button>
                    <button className="btn-secondary flex-1">
                      Get Directions
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Important Information
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🆔</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Valid ID Required</h3>
                <p className="text-gray-600">Must be 21+ with valid government-issued ID</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Cash & Card Accepted</h3>
                <p className="text-gray-600">Most dispensaries accept cash and debit cards</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Licensed & Regulated</h3>
                <p className="text-gray-600">All dispensaries are state-licensed and regulated</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}