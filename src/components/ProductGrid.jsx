import ProductCard from './ProductCard'

function ProductGrid({ products, emptyMessage = 'No products found.' }) {
  if (!products.length) {
    return (
      <div className="empty-state">
        <span>⌕</span>
        <h2>{emptyMessage}</h2>
        <p>Try another search or browse a different category.</p>
      </div>
    )
  }

  return <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
}

export default ProductGrid
