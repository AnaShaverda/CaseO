function CategoryFilter({ categories, value, onChange }) {
  return (
    <div className="filter-row" aria-label="Product categories">
      <button className={!value ? 'active' : ''} type="button" onClick={() => onChange('')}>All</button>
      {categories.map((category) => (
        <button
          className={value === category.slug ? 'active' : ''}
          type="button"
          onClick={() => onChange(category.slug)}
          key={category.id}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
