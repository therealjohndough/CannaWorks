// Data storage utilities for the CMS
// Static-export safe: load seed data from versioned JSON in the repository.

import cmsData from '../../migration-data/content/cms-data.json'

export interface CMSData {
  [collection: string]: any[]
}

const baseData: CMSData = cmsData as CMSData
let dataStore: CMSData = JSON.parse(JSON.stringify(baseData))

export class CMSStorage {
  // Get all items from a collection
  static async getCollection(collection: string): Promise<any[]> {
    return dataStore[collection] || []
  }

  // Get a single item by ID
  static async getItem(collection: string, id: number): Promise<any | null> {
    const items = dataStore[collection] || []
    return items.find(item => item.id === id) || null
  }

  // Add a new item to collection
  static async addItem(collection: string, data: any): Promise<any> {
    if (!dataStore[collection]) {
      dataStore[collection] = []
    }

    const newItem = {
      id: Math.max(0, ...dataStore[collection].map(item => item.id || 0)) + 1,
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    dataStore[collection].push(newItem)
    return newItem
  }

  // Update an existing item
  static async updateItem(collection: string, id: number, data: any): Promise<any | null> {
    if (!dataStore[collection]) {
      return null
    }

    const index = dataStore[collection].findIndex(item => item.id === id)
    if (index === -1) {
      return null
    }

    dataStore[collection][index] = {
      ...dataStore[collection][index],
      ...data,
      updatedAt: new Date().toISOString()
    }

    return dataStore[collection][index]
  }

  // Delete an item
  static async deleteItem(collection: string, id: number): Promise<boolean> {
    if (!dataStore[collection]) {
      return false
    }

    const index = dataStore[collection].findIndex(item => item.id === id)
    if (index === -1) {
      return false
    }

    dataStore[collection].splice(index, 1)
    return true
  }

  // Get featured items
  static async getFeaturedItems(collection: string): Promise<any[]> {
    const items = dataStore[collection] || []
    return items.filter(item => item.featured === true)
  }

  // Search items
  static async searchItems(collection: string, query: string): Promise<any[]> {
    const items = dataStore[collection] || []
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
    const items = dataStore[collection] || []
    return items.filter(item => item.category === category)
  }

  // Get published items (for news)
  static async getPublishedItems(collection: string): Promise<any[]> {
    const items = dataStore[collection] || []
    return items.filter(item => item.published !== false)
  }

  // Backup data (for development/testing)
  static exportData(): CMSData {
    return JSON.parse(JSON.stringify(dataStore))
  }

  // Restore data (for development/testing)
  static importData(data: CMSData): void {
    dataStore = data
  }

  // Reset in-memory state to the versioned JSON baseline
  static resetToSeed(): void {
    dataStore = JSON.parse(JSON.stringify(baseData))
  }
}
