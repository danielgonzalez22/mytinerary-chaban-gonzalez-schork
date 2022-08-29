import WelcomePage from "./pages/WelcomePage";
import Cities from "./pages/Cities";
import NewCity from "./pages/NewCity";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from "react";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<WelcomePage/>}></Route>
        <Route path='/Cities' element={<Cities/>}></Route>
        <Route path='/NewCity' element={<NewCity/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;