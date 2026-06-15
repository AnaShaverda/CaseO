import { useState } from 'react'

function ProductGallery({ product }) {
  const gallery = product.images?.length ? product.images : [product.image]
  const [selectedImage, setSelectedImage] = useState(gallery[0])

  return (
    <div className="gallery">
      <div className="gallery__main"><img src={selectedImage} alt={product.title} /></div>
      {gallery.length > 1 && (
        <div className="gallery__thumbs">
          {gallery.map((image, index) => (
            <button
              type="button"
              className={selectedImage === image ? 'active' : ''}
              onClick={() => setSelectedImage(image)}
              key={image}
              aria-label={`View product image ${index + 1}`}
            >
              <img src={image} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductGallery
