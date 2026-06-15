function ProductFilters({ filters, options, onChange, sort, onSort, categories = [] }) {
  return (
    <div className="advanced-filters">
      <div className="filter-heading"><span>Filter products</span><strong>Find the perfect fit</strong></div>
      <div className="advanced-filters__group">
        {categories.length > 0 && <label>Category<select value={filters.category || ''} onChange={(event) => onChange('category', event.target.value)}><option value="">All categories</option>{categories.map((category) => <option value={category.slug} key={category.id}>{category.name}</option>)}</select></label>}
        <label>Model<select value={filters.model} onChange={(event) => onChange('model', event.target.value)}><option value="">All models</option>{options.models.map((value) => <option value={value} key={value}>{value}</option>)}</select></label>
        <label>Color<select value={filters.color} onChange={(event) => onChange('color', event.target.value)}><option value="">All colors</option>{options.colors.map((value) => <option value={value} key={value}>{value}</option>)}</select></label>
        <label>MagSafe<select value={filters.magsafe} onChange={(event) => onChange('magsafe', event.target.value)}><option value="">All options</option><option value="Yes">Yes</option><option value="No">No</option></select></label>
      </div>
      <label className="sort-control">Sort by<select value={sort} onChange={(event) => onSort(event.target.value)}><option value="newest">Newest</option><option value="price-low">Price: Low to High</option><option value="price-high">Price: High to Low</option><option value="featured">Featured</option></select></label>
    </div>
  )
}

export default ProductFilters
