/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'
import { useToast } from './ToastContext'

const WishlistContext = createContext(null)
const STORAGE_KEY = 'caseo-wishlist'

function readWishlist() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  } catch {
    return []
  }
}

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(readWishlist)
  const showToast = useToast()

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const isWishlisted = (productId) => items.some((product) => product.id === productId)

  const toggleWishlist = (product) => {
    const active = isWishlisted(product.id)
    setItems((current) => active ? current.filter((item) => item.id !== product.id) : [...current, product])
    showToast(active ? 'Removed from wishlist' : 'Added to wishlist')
  }

  const value = { items, toggleWishlist, isWishlisted, count: items.length }

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export function useWishlist() {
  return useContext(WishlistContext)
}
