import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductFilters from '../components/ProductFilters'
import ProductGrid from '../components/ProductGrid'
import categories from '../data/categories'
import products from '../data/products'

function CategoryPage() {
  const { categorySlug } = useParams()
  const category = categories.find((item) => item.slug === categorySlug)
  const [filters, setFilters] = useState({ model: '', color: '', magsafe: '' })
  const [sort, setSort] = useState('newest')

  const categoryProducts = useMemo(() => products.filter((product) => product.category === categorySlug), [categorySlug])
  const options = useMemo(() => ({
    models: [...new Set(categoryProducts.map((product) => product.specs.Model).filter(Boolean))],
    colors: [...new Set(categoryProducts.map((product) => product.specs.Color).filter(Boolean))],
  }), [categoryProducts])
  const filteredProducts = useMemo(() => {
    const result = categoryProducts.filter((product) =>
      (!filters.model || product.specs.Model === filters.model) &&
      (!filters.color || product.specs.Color === filters.color) &&
      (!filters.magsafe || product.specs.MagSafe === filters.magsafe))
    return [...result].sort((a, b) => sort === 'price-low' ? a.price - b.price : sort === 'price-high' ? b.price - a.price : sort === 'featured' ? Number(b.isFeatured) - Number(a.isFeatured) : b.id - a.id)
  }, [categoryProducts, filters, sort])

  if (!category) {
    return <section className="container empty-page"><span>404</span><h1>Category not found</h1><p>The category you are looking for does not exist.</p><Link className="button button--primary" to="/products">Browse all products</Link></section>
  }

  const updateFilter = (name, value) => setFilters((current) => ({ ...current, [name]: value }))

  return (
    <>
      <section className="category-hero"><img src={category.image} alt="" /><div className="category-hero__overlay" /><div className="container category-hero__content"><Link to="/products">Products</Link><span> / {category.name}</span><h1>{category.name}</h1><p>{category.nameKa} · {category.description}</p></div></section>
      <section className="section catalog-section"><div className="container"><ProductFilters filters={filters} options={options} onChange={updateFilter} sort={sort} onSort={setSort} /><div className="results-label">{filteredProducts.length} products</div><ProductGrid products={filteredProducts} emptyMessage="No products match these filters." /></div></section>
    </>
  )
}

export default CategoryPage
