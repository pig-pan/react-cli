import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '@/router';
import Navbar from '@/component/Nav';
import '@/assets/css/app'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <div className='content'>
          <Router/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
