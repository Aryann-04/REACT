import React from 'react'

import {BrowserRouter ,Route ,Routes} from 'react'
// import LocalStorage from './Components/LocalStorage'
// import NavBar from './Component/NavBar'
// import Card from './Component/Card'
// import '  '

export default function App() {
  return (
//     <div>
//       {/* <NavBar/>
//       <Card/> */}
//       <LocalStorage/>
      
// </div>

<>
<BrowserRouter>
<Routes>
<Route path='/'elements ={ <HOME/>}></Route>
<Route path='/about'elements={ <About/>}></Route>
<Route path='/contact'elements={ <Contact/>}></Route>
</Routes>
</BrowserRouter>
</>
)
}