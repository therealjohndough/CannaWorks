import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Director",
      bio: "Cannabis advocate with 10+ years in community organizing and policy reform.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Michael Chen",
      role: "Content Manager",
      bio: "Former journalist specializing in cannabis industry news and education.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Emily Rodriguez",
      role: "Community Outreach",
      bio: "Passionate about connecting people and building inclusive cannabis spaces.",
      image: "/api/placeholder/200/200"
    }
  ]

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen">
        {/* Header */}
        <section className="bg-primary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">About Buffalo Cannabis Network</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Building a trusted, inclusive community for cannabis enthusiasts, patients, and businesses in Western New York.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Buffalo Cannabis Network serves as the premier resource for cannabis information, 
                  community connection, and advocacy in Western New York. We believe in the power 
                  of education, responsible consumption, and building bridges between cannabis 
                  businesses and the communities they serve.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Founded in 2024, we emerged from a need to create a trusted platform where 
                  both newcomers and experienced cannabis consumers could find reliable information, 
                  connect with local businesses, and participate in meaningful community events.
                </p>
                <p className="text-lg text-gray-700">
                  Our commitment extends beyond just connecting people with products – we actively 
                  support social equity initiatives, criminal justice reform, and educational 
                  programs that destigmatize cannabis use.
                </p>
              </div>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Mission Image Placeholder</span>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Education First</h3>
                <p className="text-gray-600">
                  We prioritize accurate, science-based information to help people make informed decisions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Community</h3>
                <p className="text-gray-600">
                  Building connections and fostering relationships within the cannabis community.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Social Equity</h3>
                <p className="text-gray-600">
                  Supporting those disproportionately impacted by cannabis prohibition.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Safety & Responsibility</h3>
                <p className="text-gray-600">
                  Promoting safe consumption practices and responsible use in all settings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-xl text-gray-600">
                Meet the people behind Buffalo Cannabis Network
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-400">Photo</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-xl">
                Making a difference in the Buffalo cannabis community
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-primary-100">Licensed Dispensaries Listed</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="text-primary-100">Community Members</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <p className="text-primary-100">Educational Events Hosted</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100+</div>
                <p className="text-primary-100">Resources Provided</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Involved
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join us in building a better cannabis community in Buffalo and Western New York.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Become a Member
              </button>
              <button className="btn-secondary">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}