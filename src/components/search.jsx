import React from 'react'
//props are readonly in child components
const search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <img src="search.svg" alt="search" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
    </div>
  )
}

export default search