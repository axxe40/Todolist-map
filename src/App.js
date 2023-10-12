import React from "react";
import TodoList from "./Todolist";
import "./App.css"
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ChakraProvider } from '@chakra-ui/react'

function App () {
  return (
    <>
    <ChakraProvider>
    <Navbar/>
    <div className="App">

    <TodoList/>

    </div>
    <Footer/>
    </ChakraProvider>
    </>
  )
}


export default App;