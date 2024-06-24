import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Hom'
import Contact from './pages/Contact'
import About from './pages/About'
import PostDetials from './pages/PostDetials'
import Posts from './pages/Posts'


function App() {
  return (
    <div>
      <Header/>
      {/* Routes*/}
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/posts'element={<Posts/>}/>
        <Route path='/posts/:slug'element={<PostDetials/>}/>
        <Route path='/contact'element={<Contact/>}/>
      </Routes>
    </div>
 

  )
}

export default App