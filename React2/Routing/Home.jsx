import React from 'react'

export default function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <Link to={"/about"}>GO TO ABOUT</Link>
            <Link to={"/contact"}>GO TO CONTACT</Link>

    </div>
  )
}
