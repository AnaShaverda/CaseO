import { Link } from 'react-router-dom'
import ProductGrid from './ProductGrid'

function ProductSection({ eyebrow, title, products, className = '' }) {
  return (
    <section className={`store-section ${className}`}>
      <div className="section-heading">
        <div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2></div>
        <Link to="/products">View all →</Link>
      </div>
      <ProductGrid products={products} />
    </section>
  )
}

export default ProductSection
