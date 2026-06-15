import { Link, useParams } from 'react-router-dom'
import ProductGallery from '../components/ProductGallery'
import ProductGrid from '../components/ProductGrid'
import { contact } from '../config'
import categories from '../data/categories'
import products from '../data/products'

function ProductDetailsPage() {
  const { productSlug } = useParams()
  const product = products.find((item) => item.slug === productSlug)

  if (!product) {
    return (
      <section className="container empty-page">
        <span>404</span><h1>Product not found</h1><p>This product may have moved or is no longer available.</p>
        <Link className="button button--primary" to="/products">Browse products</Link>
      </section>
    )
  }

  const category = categories.find((item) => item.slug === product.category)
  const orderMessage = encodeURIComponent(`Hello Caseo! I would like to order: ${product.title} (SKU: ${product.sku})`)
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4)

  return (
    <>
      <section className="section product-detail">
        <div className="container">
          <div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><Link to={`/category/${category.slug}`}>{category.name}</Link><span>/</span><span>{product.title}</span></div>
          <div className="product-detail__grid">
            <ProductGallery product={product} />
            <div className="product-info">
              <span className={`stock ${product.inStock ? 'stock--in' : 'stock--out'}`}>{product.inStock ? 'In stock' : 'Out of stock'}</span>
              <h1>{product.title}</h1>
              <p className="product-info__ka">{product.titleKa}</p>
              <div className="price price--large"><strong>{product.price} ₾</strong>{product.oldPrice && <del>{product.oldPrice} ₾</del>}</div>
              <p className="product-info__description">{product.description}</p>
              <p className="product-info__description-ka">{product.descriptionKa}</p>
              <div className="meta-list"><div><span>SKU</span><strong>{product.sku}</strong></div><div><span>Category</span><Link to={`/category/${category.slug}`}>{category.name}</Link></div></div>
              <div className="order-box">
                <h3>Order this product</h3>
                <p>Contact us directly. We usually respond quickly.</p>
                <a className="button button--whatsapp" href={`https://wa.me/${contact.whatsappNumber}?text=${orderMessage}`} target="_blank" rel="noreferrer">Order on WhatsApp</a>
                <div className="order-box__secondary">
                  <a className="button button--secondary" href={contact.instagramUrl} target="_blank" rel="noreferrer">Message on Instagram</a>
                  <a className="button button--secondary" href={`tel:${contact.phoneLink}`}>Call now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="specs-section"><div><span className="eyebrow">Product details</span><h2>Specifications</h2></div><dl>{Object.entries(product.specs).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div>
        </div>
      </section>
      {related.length > 0 && <section className="section section--tinted"><div className="container"><div className="section-heading"><div><span className="eyebrow">You may also like</span><h2>Related products</h2></div></div><ProductGrid products={related} /></div></section>}
    </>
  )
}

export default ProductDetailsPage
