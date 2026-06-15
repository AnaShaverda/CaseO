import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { isWishlisted, toggleWishlist } = useWishlist()
  const active = isWishlisted(product.id)

  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        {product.oldPrice && <span className="sale-badge">Sale</span>}
        <button className={`favorite-button ${active ? 'active' : ''}`} type="button" onClick={() => toggleWishlist(product)} aria-label={active ? 'Remove from wishlist' : 'Add to wishlist'}>{active ? '♥' : '♡'}</button>
        <Link className="product-card__image-link" to={`/product/${product.slug}`}>
          <img className="product-card__image" src={product.image} alt={product.title} loading="lazy" />
          <span className="quick-view">Quick view</span>
        </Link>
      </div>
      <div className="product-card__body">
        <span className={`stock ${product.inStock ? 'stock--in' : 'stock--out'}`}>
          {product.inStock ? 'In stock' : 'Out of stock'}
        </span>
        <Link to={`/product/${product.slug}`} className="product-card__title">{product.title}</Link>
        <p className="product-card__title-ka">{product.titleKa}</p>
        <div className="price">
          <strong>{product.price} ₾</strong>
          {product.oldPrice && <del>{product.oldPrice} ₾</del>}
        </div>
        <button className="add-cart-button" type="button" onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </article>
  )
}

export default ProductCard
