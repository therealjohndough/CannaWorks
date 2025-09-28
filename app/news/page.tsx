import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "New York Expands Cannabis Retail Licensing",
      date: "2024-12-01",
      author: "Buffalo Cannabis Network Staff",
      category: "Policy",
      excerpt: "The state announced new opportunities for retail cannabis licenses, with priority given to social equity applicants in Western New York.",
      image: "/api/placeholder/400/200",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Buffalo's First Cannabis Festival Announced for Spring 2025",
      date: "2024-11-28",
      author: "Sarah Johnson",
      category: "Events",
      excerpt: "Local organizers announce plans for Buffalo's inaugural cannabis festival, featuring education, local vendors, and live music.",
      image: "/api/placeholder/400/200",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "Medical Cannabis Patients Report Positive Outcomes",
      date: "2024-11-25",
      author: "Dr. Michael Chen",
      category: "Medical",
      excerpt: "A recent study of Western New York medical cannabis patients shows significant improvement in pain management and quality of life.",
      image: "/api/placeholder/400/200",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Understanding Cannabis Terpenes: A Guide for Consumers",
      date: "2024-11-20",
      author: "Emily Rodriguez",
      category: "Education",
      excerpt: "Learn about the aromatic compounds that give cannabis its unique scents and may influence its effects.",
      image: "/api/placeholder/400/200",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Local Dispensaries Partner for Community Outreach",
      date: "2024-11-15",
      author: "Buffalo Cannabis Network Staff",
      category: "Community",
      excerpt: "Five Buffalo-area dispensaries join forces to support local education initiatives and community programs.",
      image: "/api/placeholder/400/200",
      readTime: "3 min read"
    },
    {
      id: 6,
      title: "Cannabis Banking Solutions Improve for NY Businesses",
      date: "2024-11-10",
      author: "James Wilson",
      category: "Business",
      excerpt: "New banking partnerships make financial services more accessible for licensed cannabis businesses in New York.",
      image: "/api/placeholder/400/200",
      readTime: "6 min read"
    }
  ]

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Policy': 'bg-blue-100 text-blue-800',
      'Events': 'bg-purple-100 text-purple-800',
      'Medical': 'bg-green-100 text-green-800',
      'Education': 'bg-orange-100 text-orange-800',
      'Community': 'bg-yellow-100 text-yellow-800',
      'Business': 'bg-red-100 text-red-800'
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
              <h1 className="text-4xl font-bold mb-4">Cannabis News & Updates</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Stay informed with the latest cannabis industry news, policy updates, and community stories from Buffalo and Western New York.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {newsArticles.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">Featured Article Image</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(newsArticles[0].category)}`}>
                        {newsArticles[0].category}
                      </span>
                      <span className="ml-3 text-sm text-gray-500">{newsArticles[0].readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{newsArticles[0].title}</h2>
                    <p className="text-gray-600 mb-4">{newsArticles[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <span>By {newsArticles[0].author}</span>
                        <span className="mx-2">•</span>
                        <span>{formatDate(newsArticles[0].date)}</span>
                      </div>
                      <button className="btn-primary">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* News Grid */}
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.slice(1).map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Article Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      <span className="ml-2 text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <div>By {article.author}</div>
                        <div>{formatDate(article.date)}</div>
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 font-medium">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest cannabis news and updates delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary">
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