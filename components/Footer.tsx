import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Navigate',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Dispensaries', href: '/dispensaries' },
        { name: 'Events', href: '/events' },
        { name: 'News', href: '/news' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Legal Information', href: '/legal' },
        { name: 'Cannabis Education', href: '/education' },
        { name: 'Community Guidelines', href: '/guidelines' },
        { name: 'FAQ', href: '/faq' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              Buffalo Cannabis Network
            </h3>
            <p className="text-gray-300 mb-4">
              Your trusted source for cannabis information, dispensary listings, 
              and community events in Buffalo, NY.
            </p>
            <p className="text-sm text-gray-400">
              Always consume responsibly and in accordance with local laws.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Buffalo Cannabis Network. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-xs text-gray-400">
                This website is for informational purposes only. Must be 21+ to consume cannabis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}