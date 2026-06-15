function SearchBar({ value, onChange }) {
  return (
    <label className="search-bar">
      <span>⌕</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search title, SKU, description or model..."
      />
    </label>
  )
}

export default SearchBar
