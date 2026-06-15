import { useMemo, useState } from 'react'
import ProductFilters from '../components/ProductFilters'
import ProductGrid from '../components/ProductGrid'
import SearchBar from '../components/SearchBar'
import categories from '../data/categories'
import products from '../data/products'

function ProductsPage() {
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState({ category: '', model: '', color: '', magsafe: '' })
  const [sort, setSort] = useState('newest')

  const options = useMemo(() => ({
    models: [...new Set(products.map((product) => product.specs.Model).filter(Boolean))],
    colors: [...new Set(products.map((product) => product.specs.Color).filter(Boolean))],
  }), [])

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase()
    const result = products.filter((product) => {
      const searchable = `${product.title} ${product.sku} ${product.description} ${product.specs.Model || ''}`.toLowerCase()
      return (!filters.category || product.category === filters.category) &&
        (!filters.model || product.specs.Model === filters.model) &&
        (!filters.color || product.specs.Color === filters.color) &&
        (!filters.magsafe || product.specs.MagSafe === filters.magsafe) &&
        (!query || searchable.includes(query))
    })
    return [...result].sort((a, b) => sort === 'price-low' ? a.price - b.price : sort === 'price-high' ? b.price - a.price : sort === 'featured' ? Number(b.isFeatured) - Number(a.isFeatured) : b.id - a.id)
  }, [search, filters, sort])

  const updateFilter = (name, value) => setFilters((current) => ({ ...current, [name]: value }))

  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow">Caseo collection</span><h1>All products</h1><p>Search and filter cases and accessories made for your device.</p></div></section>
      <section className="section catalog-section"><div className="container">
        <div className="catalog-search"><SearchBar value={search} onChange={setSearch} /></div>
        <ProductFilters filters={filters} options={options} onChange={updateFilter} sort={sort} onSort={setSort} categories={categories} />
        <div className="results-label">{filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}</div>
        <ProductGrid products={filteredProducts} />
      </div></section>
    </>
  )
}

export default ProductsPage
