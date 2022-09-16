import MyTineraries from "./pages/MyTineraries"
import WelcomePage from "./pages/WelcomePage"
import Cities from "./pages/Cities"
import NewCity from "./pages/NewCity"
import City from "./pages/City"
import NotFound from "./pages/NotFound"
import EditCity from "./pages/EditCity"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import React from "react";
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import SignIn from "./pages/SignIn"
import NewItinerary from "./pages/NewItinerary"

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
    
        <Route path='/' element={<WelcomePage/>}></Route>
        <Route path='/auth/signup' element={<SignUp/>}></Route>
        <Route path='/auth/signin' element={<SignIn/>}></Route>
        <Route path='/Cities' element={<Cities/>}></Route>
        <Route path='/NewCity' element={<NewCity/>}></Route>
        <Route path='/City/:id' element={<City/>}></Route>
        <Route path='/EditCity' element={<EditCity/>}></Route>
        <Route path='/MyTineraries' element={<MyTineraries/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/NewItinerary' element={<NewItinerary/>}></Route>


         </Routes>
    </BrowserRouter>
  )
}
export default App;