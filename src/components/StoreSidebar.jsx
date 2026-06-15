import { Link } from 'react-router-dom'
import categories from '../data/categories'
import products from '../data/products'

const shortcuts = [
  ['Cases', 'iphone-cases', '▯'],
  ['Samsung', 'samsung-cases', '◫'],
  ['Chargers', 'chargers-cables', 'ϟ'],
  ['Cables', 'chargers-cables', '⌁'],
  ['Accessories', 'accessories', '◉'],
]

function StoreSidebar() {
  return (
    <aside className="store-sidebar">
      <section className="sidebar-block">
        <div className="sidebar-title"><h3>Shop by category</h3><Link to="/products">All</Link></div>
        <div className="category-shortcuts">
          {shortcuts.map(([name, slug, icon]) => <Link to={`/category/${slug}`} key={name}><span>{icon}</span><small>{name}</small></Link>)}
        </div>
      </section>
      <section className="sidebar-promos">
        {categories.slice(0, 2).map((category) => (
          <Link to={`/category/${category.slug}`} key={category.id}>
            <img src={category.image} alt="" />
            <div><strong>{category.name}</strong><small>{category.description}</small><span>Shop now →</span></div>
          </Link>
        ))}
      </section>
      <section className="sidebar-block">
        <div className="sidebar-title"><h3>Best sellers</h3><Link to="/products">View all</Link></div>
        <div className="sidebar-products">
          {products.slice(0, 3).map((product) => (
            <Link to={`/product/${product.slug}`} key={product.id}>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span>{product.price} ₾</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="sidebar-story">
        <span>CASEO GUIDE</span>
        <h3>Find the right case for your everyday setup.</h3>
        <p>Protection, MagSafe support, and colors selected to fit your phone and style.</p>
        <Link to="/products">Explore the collection →</Link>
      </section>
    </aside>
  )
}

export default StoreSidebar
