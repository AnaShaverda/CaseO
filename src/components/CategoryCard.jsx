import { Link } from 'react-router-dom'

function CategoryCard({ category }) {
  return (
    <Link className="category-card" to={`/category/${category.slug}`}>
      <span className="category-card__icon" aria-hidden="true">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
        />
      </span>

      <strong>{category.name}</strong>
      <small>{category.nameKa}</small>
    </Link>
  )
}

export default CategoryCard