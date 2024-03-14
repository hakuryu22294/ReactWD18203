import React from 'react'
import Header from '../components/Header'
import Slide from '../components/Slide'
import Products from '../components/Products'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'




const Home = () => {
  const [links, setLinks] = useState([])
  useEffect(() =>{
    const fetchLinks = async () => {
      const response = await fetch('http://localhost:3000/navlinks')
      const data = await response.json()
      setLinks(data)
    }
    fetchLinks()
  },[])
  return (
    <>
    <Header navLinks={links} />
    <Slide />
    <Products />
    <Footer />
    </>
  )
}

export default Home