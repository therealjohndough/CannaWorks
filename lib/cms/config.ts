// Content Management System Configuration
export interface CMSConfig {
  collections: Collection[]
}

export interface Collection {
  name: string
  label: string
  description: string
  fields: Field[]
}

export interface Field {
  name: string
  label: string
  type: 'text' | 'textarea' | 'number' | 'boolean' | 'date' | 'image' | 'select' | 'relation'
  required?: boolean
  placeholder?: string
  options?: string[]
  relation?: {
    collection: string
    field: string
  }
}

export const cmsConfig: CMSConfig = {
  collections: [
    {
      name: 'dispensaries',
      label: 'Dispensaries',
      description: 'Manage cannabis dispensary listings',
      fields: [
        {
          name: 'name',
          label: 'Dispensary Name',
          type: 'text',
          required: true,
          placeholder: 'Enter dispensary name'
        },
        {
          name: 'address',
          label: 'Address',
          type: 'text',
          required: true,
          placeholder: '123 Main St, Buffalo, NY 14202'
        },
        {
          name: 'phone',
          label: 'Phone Number',
          type: 'text',
          required: true,
          placeholder: '(716) 555-0123'
        },
        {
          name: 'hours',
          label: 'Operating Hours',
          type: 'text',
          required: true,
          placeholder: 'Mon-Sun: 10AM-9PM'
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          required: true,
          placeholder: 'Brief description of the dispensary'
        },
        {
          name: 'specialties',
          label: 'Specialties',
          type: 'text',
          placeholder: 'Comma-separated list of specialties'
        },
        {
          name: 'rating',
          label: 'Rating',
          type: 'number',
          placeholder: '4.5'
        },
        {
          name: 'reviews',
          label: 'Number of Reviews',
          type: 'number',
          placeholder: '124'
        },
        {
          name: 'image',
          label: 'Featured Image',
          type: 'image'
        },
        {
          name: 'website',
          label: 'Website',
          type: 'text',
          placeholder: 'https://dispensary.com'
        },
        {
          name: 'featured',
          label: 'Featured Listing',
          type: 'boolean'
        }
      ]
    },
    {
      name: 'events',
      label: 'Events',
      description: 'Manage cannabis community events',
      fields: [
        {
          name: 'title',
          label: 'Event Title',
          type: 'text',
          required: true,
          placeholder: 'Cannabis Education Workshop'
        },
        {
          name: 'date',
          label: 'Event Date',
          type: 'date',
          required: true
        },
        {
          name: 'time',
          label: 'Time',
          type: 'text',
          required: true,
          placeholder: '7:00 PM - 9:00 PM'
        },
        {
          name: 'location',
          label: 'Location',
          type: 'text',
          required: true,
          placeholder: 'Buffalo Community Center, 341 Delaware Ave'
        },
        {
          name: 'price',
          label: 'Price',
          type: 'text',
          required: true,
          placeholder: 'Free or $25'
        },
        {
          name: 'category',
          label: 'Category',
          type: 'select',
          required: true,
          options: ['Education', 'Networking', 'Medical', 'Culinary', 'Legal', 'Community']
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          required: true,
          placeholder: 'Detailed event description'
        },
        {
          name: 'organizer',
          label: 'Organizer',
          type: 'text',
          required: true,
          placeholder: 'Buffalo Cannabis Network'
        },
        {
          name: 'capacity',
          label: 'Capacity',
          type: 'text',
          placeholder: '50 people or Unlimited'
        },
        {
          name: 'registration',
          label: 'Registration Required',
          type: 'select',
          options: ['Required', 'Encouraged', 'Not Required']
        },
        {
          name: 'image',
          label: 'Event Image',
          type: 'image'
        },
        {
          name: 'featured',
          label: 'Featured Event',
          type: 'boolean'
        }
      ]
    },
    {
      name: 'news',
      label: 'News Articles',
      description: 'Manage cannabis news and blog posts',
      fields: [
        {
          name: 'title',
          label: 'Article Title',
          type: 'text',
          required: true,
          placeholder: 'Enter article title'
        },
        {
          name: 'excerpt',
          label: 'Excerpt',
          type: 'textarea',
          required: true,
          placeholder: 'Brief summary of the article'
        },
        {
          name: 'content',
          label: 'Article Content',
          type: 'textarea',
          required: true,
          placeholder: 'Full article content'
        },
        {
          name: 'author',
          label: 'Author',
          type: 'text',
          required: true,
          placeholder: 'Author name'
        },
        {
          name: 'category',
          label: 'Category',
          type: 'select',
          required: true,
          options: ['Policy', 'Events', 'Medical', 'Education', 'Community', 'Business']
        },
        {
          name: 'date',
          label: 'Publish Date',
          type: 'date',
          required: true
        },
        {
          name: 'readTime',
          label: 'Read Time',
          type: 'text',
          placeholder: '5 min read'
        },
        {
          name: 'image',
          label: 'Featured Image',
          type: 'image'
        },
        {
          name: 'featured',
          label: 'Featured Article',
          type: 'boolean'
        },
        {
          name: 'published',
          label: 'Published',
          type: 'boolean'
        }
      ]
    }
  ]
}