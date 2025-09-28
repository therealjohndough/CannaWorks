// Data storage utilities for the CMS
// In production, this would connect to a database like PostgreSQL, MongoDB, etc.

export interface CMSData {
  [collection: string]: any[]
}

// Mock data store - in production this would be replaced with database operations
let mockDataStore: CMSData = {
  dispensaries: [
    {
      id: 1,
      name: "Green Leaf Dispensary",
      address: "123 Main St, Buffalo, NY 14202",
      phone: "(716) 555-0123",
      hours: "Mon-Sun: 10AM-9PM",
      description: "Premium cannabis products with expert consultation. We pride ourselves on quality flower, concentrates, and edibles.",
      specialties: "Flower,Edibles,Concentrates,Vaporizers",
      rating: 4.8,
      reviews: 124,
      featured: true,
      website: "https://greenleaf-buffalo.com",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      name: "Buffalo Cannabis Co",
      address: "456 Elm Ave, Buffalo, NY 14203",
      phone: "(716) 555-0456",
      hours: "Mon-Sat: 9AM-8PM, Sun: 11AM-6PM",
      description: "Local favorites with competitive prices and a welcoming atmosphere for all experience levels.",
      specialties: "Budget Options,New Customer Deals,Medical Cannabis",
      rating: 4.6,
      reviews: 89,
      featured: true,
      website: "https://buffalocannabisco.com",
      image: "/api/placeholder/400/300"
    }
  ],
  events: [
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
      registration: "Required",
      featured: true,
      image: "/api/placeholder/400/300"
    }
  ],
  news: [
    {
      id: 1,
      title: "New York Expands Cannabis Retail Licensing",
      excerpt: "The state announced new opportunities for retail cannabis licenses, with priority given to social equity applicants in Western New York.",
      content: "Full article content would go here...",
      author: "Buffalo Cannabis Network Staff",
      category: "Policy",
      date: "2024-12-01",
      readTime: "3 min read",
      featured: true,
      published: true,
      image: "/api/placeholder/400/200"
    }
  ]
}

export class CMSStorage {
  // Get all items from a collection
  static async getCollection(collection: string): Promise<any[]> {
    return mockDataStore[collection] || []
  }

  // Get a single item by ID
  static async getItem(collection: string, id: number): Promise<any | null> {
    const items = mockDataStore[collection] || []
    return items.find(item => item.id === id) || null
  }

  // Add a new item to collection
  static async addItem(collection: string, data: any): Promise<any> {
    if (!mockDataStore[collection]) {
      mockDataStore[collection] = []
    }
    
    const newItem = {
      id: Math.max(0, ...mockDataStore[collection].map(item => item.id || 0)) + 1,
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    mockDataStore[collection].push(newItem)
    return newItem
  }

  // Update an existing item
  static async updateItem(collection: string, id: number, data: any): Promise<any | null> {
    if (!mockDataStore[collection]) {
      return null
    }
    
    const index = mockDataStore[collection].findIndex(item => item.id === id)
    if (index === -1) {
      return null
    }
    
    mockDataStore[collection][index] = {
      ...mockDataStore[collection][index],
      ...data,
      updatedAt: new Date().toISOString()
    }
    
    return mockDataStore[collection][index]
  }

  // Delete an item
  static async deleteItem(collection: string, id: number): Promise<boolean> {
    if (!mockDataStore[collection]) {
      return false
    }
    
    const index = mockDataStore[collection].findIndex(item => item.id === id)
    if (index === -1) {
      return false
    }
    
    mockDataStore[collection].splice(index, 1)
    return true
  }

  // Get featured items
  static async getFeaturedItems(collection: string): Promise<any[]> {
    const items = mockDataStore[collection] || []
    return items.filter(item => item.featured === true)
  }

  // Search items
  static async searchItems(collection: string, query: string): Promise<any[]> {
    const items = mockDataStore[collection] || []
    const searchTerm = query.toLowerCase()
    
    return items.filter(item => {
      const searchableFields = ['name', 'title', 'description', 'content', 'category', 'author']
      return searchableFields.some(field => {
        const value = item[field]
        return value && value.toString().toLowerCase().includes(searchTerm)
      })
    })
  }

  // Get items by category
  static async getItemsByCategory(collection: string, category: string): Promise<any[]> {
    const items = mockDataStore[collection] || []
    return items.filter(item => item.category === category)
  }

  // Get published items (for news)
  static async getPublishedItems(collection: string): Promise<any[]> {
    const items = mockDataStore[collection] || []
    return items.filter(item => item.published !== false)
  }

  // Backup data (for development/testing)
  static exportData(): CMSData {
    return JSON.parse(JSON.stringify(mockDataStore))
  }

  // Restore data (for development/testing)
  static importData(data: CMSData): void {
    mockDataStore = data
  }
}