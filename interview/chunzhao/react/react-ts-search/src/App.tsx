import { Button } from "@/components/ui/button"
import  Home from "@/pages/Home"
import Search from "@/pages/Search"

import { Routes, Route} from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
  )
}

export default App

