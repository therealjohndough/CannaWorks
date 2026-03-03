# CannaWorks - Buffalo Cannabis Network CMS

A scalable Content Management System (CMS) for the Buffalo Cannabis Network website, built with modern web technologies to connect the Western New York cannabis community.

## 🌟 Project Overview

CannaWorks is a comprehensive CMS platform designed to serve as the digital hub for Buffalo's cannabis community. The platform provides:

- **Dispensary Directory**: Comprehensive listings of licensed cannabis retailers
- **Event Management**: Community events, workshops, and networking opportunities  
- **News & Education**: Cannabis industry news, policy updates, and educational content
- **Community Hub**: Resources and information for cannabis consumers and businesses

## 🚀 Technology Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **React** - Component-based UI library

### Styling & Design
- **Tailwind CSS** - Responsive, utility-first design system
- **Custom Color Palette** - Cannabis-themed green color scheme
- **Mobile-First Design** - Optimized for all screen sizes

### Content Management
- **Custom CMS** - Built-in content management system
- **TypeScript Interfaces** - Structured content models
- **Mock Data Layer** - Ready for database integration

## 📁 Project Structure

```
CannaWorks/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── dispensaries/      # Dispensary listings
│   ├── events/            # Event listings
│   ├── news/              # News and blog posts
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Main navigation
│   ├── Footer.tsx         # Site footer
│   └── admin/            # CMS admin components
├── lib/                  # Utility libraries
│   └── cms/              # CMS configuration and data
│       ├── config.ts     # CMS structure definitions
│       └── storage.ts    # Data management utilities
├── styles/               # Global styles
│   └── globals.css       # Tailwind and custom CSS
└── public/              # Static assets
```

## 🎯 Key Features

### ✅ Completed
- **Responsive Homepage** with hero section, featured dispensaries, and events
- **Dispensary Directory** with detailed listings, ratings, and contact information
- **Event Listings** with categorization, scheduling, and registration info
- **News Section** with article management and categorization
- **About Page** showcasing mission, values, and team information
- **Contact Page** with forms and business information
- **Navigation System** with mobile-responsive menu
- **SEO-Optimized** structure with proper meta tags and semantic HTML

### 🏗️ CMS Infrastructure
- **Content Models** for dispensaries, events, and news articles
- **Type-Safe Interfaces** for all content types
- **Data Storage Layer** ready for database integration
- **Search and Filtering** capabilities
- **Content Categories** and tagging system

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/therealjohndough/CannaWorks.git
cd CannaWorks

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality
- `npm run generate:locked-url-map` - Regenerate `migration-data/locked-url-map.csv` from `bcn-top-pages-3mo.csv`

## 🎨 Design System

### Color Palette
- **Primary Green**: #16a34a (cannabis-themed)
- **Success States**: Various green shades (50-900)
- **Neutral Colors**: Gray scale for text and backgrounds
- **Accent Colors**: Category-specific colors for events and news

### Typography
- **Font Family**: Inter (web font)
- **Responsive Sizing**: Tailwind's responsive text utilities
- **Hierarchy**: Clear heading structure (h1-h4)

### Components
- **Buttons**: Primary and secondary variants
- **Cards**: Consistent styling for content presentation
- **Forms**: Accessible form controls with validation states
- **Navigation**: Mobile-responsive with hamburger menu

## 📋 Content Management

### Dispensary Management
- Name, address, and contact information
- Operating hours and specialties
- Ratings and review counts
- Featured listings capability

### Event Management
- Event details with date/time scheduling
- Location and capacity information
- Category-based organization
- Registration requirements

### News Management
- Article creation with rich content
- Author attribution and publish dates
- Category tagging system
- Featured article capabilities

## 🚀 Deployment

### SiteGround (shared/cloud) static deployment
This project is configured for **Next.js static export** so it can run without a Node.js server:

1. Build the site: `npm run build`
2. Upload the generated `/out` folder contents to `public_html`
3. Ensure `.htaccess` is present (template: `public/.htaccess`)
4. Apply additional redirects from `migration-data/locked-url-map.csv` as needed

### Supporting migration assets
- Route lock list from Search Console: `migration-data/locked-url-map.csv`
  - Regenerate after CSV updates: `npm run generate:locked-url-map`
- Static + PHP architecture plan: `migration-data/siteground-static-php-plan.md`
- CMS seed content (JSON): `migration-data/content/cms-data.json`

### Environment Variables
Create a `.env.local` file for environment-specific settings:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📈 Future Enhancements

### Database Integration
- PostgreSQL or MongoDB for production data storage
- User authentication and role-based access
- Real-time content updates

### Advanced Features
- **User Accounts**: Community member profiles and preferences
- **Reviews System**: User-generated dispensary and event reviews
- **Interactive Maps**: Geolocation-based dispensary finding
- **E-commerce Integration**: Product listings and ordering
- **Analytics Dashboard**: Content performance and user engagement

### Admin Panel
- Visual content editor
- Media management system
- User management and permissions
- Content scheduling and publishing workflow

## 🤝 Contributing

This is a community-focused project. Contributions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For questions, support, or collaboration opportunities:
- **Email**: info@buffalocannabisnetwork.com
- **Website**: [Buffalo Cannabis Network](http://localhost:3000)

---

**Note**: This website is for informational purposes only. Cannabis consumption is restricted to adults 21+ and must comply with local and state laws.
