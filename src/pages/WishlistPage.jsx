import { Link } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid'
import { useWishlist } from '../context/WishlistContext'

function WishlistPage() {
  const { items } = useWishlist()

  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow">Saved for later</span><h1>Wishlist</h1><p>Your favorite Caseo products, all in one place.</p></div></section>
      <section className="section"><div className="container">
        {items.length ? <ProductGrid products={items} /> : <div className="commerce-empty"><span>♡</span><h2>Your wishlist is empty</h2><p>Save products you love and find them here later.</p><Link className="button button--primary" to="/products">Browse products</Link></div>}
      </div></section>
    </>
  )
}

export default WishlistPage
