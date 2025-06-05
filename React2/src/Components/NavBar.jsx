import React from 'react'

export default function NavBar() {
  return (
        <header>
            <nav className='nav'>
                <div className="logo">
                    <h1>Airpods</h1>
                </div>
                <div>
                    <ul className='list'>
                        <li><a href="#">home</a></li>
                        <li><a href="#">products</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">blog</a></li>
                        <li><a href="#">contact us</a></li>
                        <div className="icon">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </ul>
                </div>
            </nav>
        </header>
        
  )
}