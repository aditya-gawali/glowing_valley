

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Product from './Components/Product'
import Beauty from './Components/Beauty'
import Hamper from './Components/Hamper'
import BestSeller from './Components/BestSeller'

function App() {


  return (
    <>
    

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/productDetails/:id' element={<Product />}></Route>
          <Route path='/collections/best-seller' element={<BestSeller />}></Route>
          <Route path='/collections/beauty' element={<Beauty />}></Route>
          <Route path='/collections/hamper' element={<Hamper />}></Route>
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
