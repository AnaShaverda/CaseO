import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import ProductSection from '../components/ProductSection'
import categories from '../data/categories'
import products from '../data/products'

function HomePage() {
  const featured = products.filter((product) => product.isFeatured).slice(0, 4)
  const bestSellers = products.slice(3, 7)
  const newArrivals = [...products].reverse().slice(0, 4)

  return (
    <div className="homepage container">
        <section className="hero-section">
          <img className="hero-section__background" src="https://i.ibb.co/Q4bxftz/bannernew.png" alt="" />
          <div className="hero-section__overlay" />
          <div className="hero-section__copy">
            <span className="eyebrow">Caseo / ქეისო</span>
            <h1>Premium Cases<br />&amp; Accessories</h1>
            <p>Protect your device with stylish cases, MagSafe accessories, chargers and more.</p>
            <div className="hero-section__actions">
              <Link className="button button--primary" to="/products">Shop Collection</Link>
              <Link className="button button--hero-secondary" to="/products">View Products</Link>
            </div>
          </div>
        </section>
        <section className="store-section category-section" id="categories">
          <div className="section-heading"><div><span className="eyebrow">Find your fit</span><h2>Featured categories</h2></div><Link to="/products">View all →</Link></div>
          <div className="category-showcase">{categories.map((category) => <CategoryCard category={category} key={category.id} />)}</div>
        </section>

        <ProductSection eyebrow="Limited-time prices" title="Featured products" products={featured} />
        <ProductSection eyebrow="Most wanted" title="Best sellers" products={bestSellers} className="store-section--gray" />

        <section className="promo-banner">
          <div><span>CASEO ESSENTIALS</span><h2>Better protection.<br />Cleaner design.</h2><p>Discover cases built for modern phones and everyday life.</p><Link className="button button--dark" to="/products">Shop now →</Link></div>
          <div className="promo-banner__products">{products.slice(5, 8).map((product) => <img src={product.image} alt="" key={product.id} />)}</div>
        </section>

        <ProductSection eyebrow="Just landed" title="New arrivals" products={newArrivals} />

        <section className="editorial-banner">
          <div><span className="eyebrow">The Caseo guide</span><h2>Find the right case for your everyday setup.</h2></div>
          <p>Explore protection, MagSafe compatibility, and colors selected to fit your phone and your style.</p>
          <Link className="button button--white" to="/products">Explore all accessories →</Link>
        </section>
    </div>
  )
}

export default HomePage
