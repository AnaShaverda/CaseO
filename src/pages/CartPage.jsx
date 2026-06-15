import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CartPage() {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart()

  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow">Your selection</span><h1>Shopping cart</h1><p>Review your products before contacting Caseo to order.</p></div></section>
      <section className="section"><div className="container">
        {!items.length ? (
          <div className="commerce-empty"><span>⌑</span><h2>Your cart is empty</h2><p>Add a case or accessory to get started.</p><Link className="button button--primary" to="/products">Shop products</Link></div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {items.map(({ product, quantity }) => (
                <article className="cart-item" key={product.id}>
                  <Link to={`/product/${product.slug}`}><img src={product.image} alt={product.title} /></Link>
                  <div className="cart-item__info"><span>{product.sku}</span><Link to={`/product/${product.slug}`}>{product.title}</Link><strong>{product.price} ₾</strong></div>
                  <div className="quantity-control"><button type="button" onClick={() => updateQuantity(product.id, quantity - 1)}>−</button><span>{quantity}</span><button type="button" onClick={() => updateQuantity(product.id, quantity + 1)}>+</button></div>
                  <strong className="cart-item__total">{product.price * quantity} ₾</strong>
                  <button className="remove-button" type="button" onClick={() => removeFromCart(product.id)}>Remove</button>
                </article>
              ))}
            </div>
            <aside className="cart-summary"><h2>Order summary</h2><div><span>Subtotal</span><strong>{subtotal} ₾</strong></div><div><span>Delivery</span><span>Confirmed when ordering</span></div><div className="cart-summary__total"><span>Total</span><strong>{subtotal} ₾</strong></div><a className="button button--primary" href="#contact">Contact to order</a><Link to="/products">Continue shopping</Link></aside>
          </div>
        )}
      </div></section>
    </>
  )
}

export default CartPage
