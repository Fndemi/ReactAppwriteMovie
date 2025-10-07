import React from 'react'
import Search from './components/search'
const App = () => {

  const [searchTerm, setSearchTerm] = React.useState('')
  return (
    <div className="pattern">
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1 >Find <span className="text-gradient">Movies</span>  You'll Enjoy without the hassle</h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </div>
  )
}

export default App