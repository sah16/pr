import React from 'react'

import './home.css'

function Home() {
  return (
    <div className='container'>
       
       <div className='navbar'>

        <img src="https://forkify-v2.netlify.app/logo.09084f39.png" alt="" />
        

        <div className='search'>
        <input type="text" placeholder='Search...' />
        <button className='search-button'>
        <i class="fa-solid fa-magnifying-glass"></i>
            <span>SEARCH</span></button>
        </div>

        <ul className='toplist'>
            <li>
            <i class="fa-regular fa-pen-to-square"></i>Add Recipe
            </li>
            <li> <i class="fa-regular fa-bookmark"></i>Bookmarks</li>
        </ul>
       </div>
    </div>
  )
}

export default Home;