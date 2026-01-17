import './TagFilter.css'

interface TagFilterProps {
  tags: string[]
  selectedTags: string[]
  onTagToggle: (tags: string[]) => void
}

function TagFilter({ tags, selectedTags, onTagToggle }: TagFilterProps) {
  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagToggle(selectedTags.filter(t => t !== tag))
    } else {
      onTagToggle([...selectedTags, tag])
    }
  }

  const handleClearAll = () => {
    onTagToggle([])
  }

  if (tags.length === 0) return null

  return (
    <div className="tag-filter">
      <h3 className="tag-filter-title">Filter by Tag</h3>
      <div className="tag-filter-list">
        {tags.map(tag => (
          <button
            key={tag}
            className={`tag-filter-item ${selectedTags.includes(tag) ? 'active' : ''}`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
        {selectedTags.length > 0 && (
          <button
            className="tag-filter-clear"
            onClick={handleClearAll}
          >
            Clear all
          </button>
        )}
      </div>
    </div>
  )
}

export default TagFilter
