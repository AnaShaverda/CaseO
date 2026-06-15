import { contact } from '../config'
import { useToast } from '../context/ToastContext'

function ContactPage() {
  const showToast = useToast()
  const submitForm = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
    showToast('Message form submitted')
  }

  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow">We are here to help</span><h1>Contact Caseo / ქეისო</h1><p>Ask about phone compatibility, product availability, delivery, or ordering.</p></div></section>
      <section className="section"><div className="container contact-layout">
        <div className="contact-details">
          <span className="eyebrow">Contact details</span><h2>Let’s find the right accessory.</h2><p>Send us your phone model or the product SKU and our team will help you choose.</p>
          <div className="contact-list">
            <a href={`tel:${contact.phoneLink}`}><span>Phone</span><strong>{contact.phoneDisplay}</strong></a>
            <a href={`mailto:${contact.email}`}><span>Email</span><strong>{contact.email}</strong></a>
            <a href={contact.instagramUrl} target="_blank" rel="noreferrer"><span>Instagram</span><strong>@caseo.ge</strong></a>
            <a href={contact.facebookUrl} target="_blank" rel="noreferrer"><span>Facebook</span><strong>Caseo / ქეისო</strong></a>
            <a href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>{contact.phoneDisplay}</strong></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={submitForm}>
          <div><label>Name<input required name="name" placeholder="Your name" /></label><label>Phone or email<input required name="contact" placeholder="How can we reach you?" /></label></div>
          <label>Subject<input name="subject" placeholder="Product or order question" /></label>
          <label>Message<textarea required name="message" rows="6" placeholder="Tell us your phone model or product SKU..." /></label>
          <button className="button button--primary" type="submit">Send message</button>
          <small>Frontend-only form. Connect it to your preferred form service later.</small>
        </form>
      </div></section>
    </>
  )
}

export default ContactPage
