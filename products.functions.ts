import { createServerFn } from '@tanstack/react-start'
import { getStore } from '@netlify/blobs'

export interface Product {
  id: number
  name: string
  category: string
  price: string
  image: string
  description: string
}

const STARTER_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Luxury Evening Gown',
    category: 'Gowns',
    price: '₦85,000',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop',
    description: 'Elegant premium gown for classy occasions. Perfect for weddings, parties, and formal events.',
  },
  {
    id: 2,
    name: 'Asoebi Collection',
    category: 'Asoebi',
    price: '₦55,000',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop',
    description: 'Stunning aso-ebi styles for traditional ceremonies and special events.',
  },
  {
    id: 3,
    name: 'Office Wear Set',
    category: 'Office Wear',
    price: '₦42,000',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4b7b?q=80&w=800&auto=format&fit=crop',
    description: 'Professional and stylish office wear for the modern Nigerian woman.',
  },
  {
    id: 4,
    name: 'Designer Handbag',
    category: 'Accessories',
    price: '₦28,000',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop',
    description: 'Premium designer handbag crafted with quality materials, perfect for any occasion.',
  },
  {
    id: 5,
    name: 'High Heel Collection',
    category: 'Footwear',
    price: '₦22,000',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
    description: 'Elegant high heels that complement any outfit — from casual to formal.',
  },
  {
    id: 6,
    name: 'Traditional Attire',
    category: 'Traditional',
    price: '₦65,000',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    description: 'Beautiful traditional Nigerian attire celebrating our rich cultural heritage.',
  },
]

async function getProductsStore() {
  return getStore('products')
}

export const getProducts = createServerFn({ method: 'GET' }).handler(async () => {
  try {
    const store = await getProductsStore()
    const data = await store.get('all', { type: 'json' })
    if (!data) {
      await store.setJSON('all', STARTER_PRODUCTS)
      return STARTER_PRODUCTS
    }
    return data as Product[]
  } catch {
    return STARTER_PRODUCTS
  }
})

export const addProduct = createServerFn({ method: 'POST' })
  .inputValidator((data: Omit<Product, 'id'>) => data)
  .handler(async ({ data }) => {
    const store = await getProductsStore()
    const existing = (await store.get('all', { type: 'json' })) as Product[] | null
    const products = existing ?? STARTER_PRODUCTS
    const newProduct: Product = { ...data, id: Date.now() }
    const updated = [...products, newProduct]
    await store.setJSON('all', updated)
    return updated
  })

export const deleteProduct = createServerFn({ method: 'POST' })
  .inputValidator((data: { id: number }) => data)
  .handler(async ({ data }) => {
    const store = await getProductsStore()
    const existing = (await store.get('all', { type: 'json' })) as Product[] | null
    const products = existing ?? STARTER_PRODUCTS
    const updated = products.filter((p) => p.id !== data.id)
    await store.setJSON('all', updated)
    return updated
  })
