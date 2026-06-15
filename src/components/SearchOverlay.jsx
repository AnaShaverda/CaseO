import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products'

function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState('')
  const results = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return products.slice(0, 5)
    return products.filter((product) => `${product.title} ${product.sku} ${product.description} ${product.specs.Model || ''}`.toLowerCase().includes(term)).slice(0, 8)
  }, [query])

  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Search products" onClick={onClose}>
      <div className="search-panel" onClick={(event) => event.stopPropagation()}>
        <div className="search-panel__top">
          <div><span className="eyebrow">Find your accessory</span><h2>Search products</h2></div>
          <button type="button" onClick={onClose} aria-label="Close search">×</button>
        </div>
        <label className="search-panel__input">
          <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/></svg>
          <input autoFocus type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search title, SKU, description or model..." />
        </label>
        <div className="search-results">
          {results.length ? results.map((product) => (
            <Link to={`/product/${product.slug}`} onClick={onClose} key={product.id}>
              <img src={product.image} alt="" />
              <div><strong>{product.title}</strong><span>{product.sku} · {product.specs.Model}</span></div>
              <b>{product.price} ₾</b>
            </Link>
          )) : <div className="search-no-results"><strong>No products found</strong><span>Try another title, SKU, or phone model.</span></div>}
        </div>
        <Link className="search-panel__all" to="/products" onClick={onClose}>View all products →</Link>
      </div>
    </div>
  )
}

export default SearchOverlay
