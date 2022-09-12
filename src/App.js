import WelcomePage from "./pages/WelcomePage"
import Cities from "./pages/Cities"
import NewCity from "./pages/NewCity"
import City from "./pages/City"
import NotFound from "./pages/NotFound"
import EditCity from "./pages/EditCity"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import React from "react";
function App() {
  return (
   
    <BrowserRouter>
      <Routes>
    
        <Route path='/' element={<WelcomePage/>}></Route>
        <Route path='/Cities' element={<Cities/>}></Route>
        <Route path='/NewCity' element={<NewCity/>}></Route>
        <Route path='/City/:id' element={<City/>}></Route>
        <Route path='/EditCity' element={<EditCity/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
         </Routes>
    </BrowserRouter>
  )
}
export default App;