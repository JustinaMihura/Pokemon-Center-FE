
import './App.css';
import {Home} from './Components/Home/Home.jsx';
import React, { useEffect } from "react";
import { getPokemon } from "./Redux/actions.js"
import { useDispatch } from "react-redux"; 
import { Nav } from './Components/Nav/Nav.jsx';


function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getPokemon())
  },[])

  return (
    <>
      <Nav/>
      <Home/> 
    </>
  )
}

export default App
