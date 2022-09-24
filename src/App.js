import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import MyTineraries from "./pages/MyTineraries"
import WelcomePage from "./pages/WelcomePage"
import Cities from "./pages/Cities"
import NewCity from "./pages/NewCity"
import City from "./pages/City"
import NotFound from "./pages/NotFound"
import EditCity from "./pages/EditCity"
import React from "react";
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import NewItinerary from "./pages/NewItinerary"

function App() {
  const isLogged = useSelector(state => state.isLogged)
  const [loggedUserRole, setLoggedUserRole] = useState(localStorage.getItem("userRole"))
  useEffect(() => {
    setLoggedUserRole(localStorage.getItem("userRole"))
  }, [isLogged])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomePage />}></Route>
        <Route path='/Cities' element={<Cities />}></Route>
        <Route path='/City/:id' element={<City />}></Route>
        <Route path='/MyTineraries' element={loggedUserRole ? <MyTineraries /> : <WelcomePage />}></Route>
        <Route path='/NewItinerary/:id' element={loggedUserRole ? <NewItinerary /> : <WelcomePage />}></Route>
        <Route path='/NewCity' element={loggedUserRole === 'admin' ? <NewCity /> : <WelcomePage />}></Route>
        <Route path='/EditCity' element={loggedUserRole === 'admin' ? <EditCity /> : <WelcomePage />}></Route>
        <Route path='/auth/signup' element={!loggedUserRole || loggedUserRole === 'admin' ? <SignUp /> : <WelcomePage />}></Route>
        <Route path='/auth/login' element={!loggedUserRole ? <Login /> : <WelcomePage />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;