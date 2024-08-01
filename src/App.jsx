import React from 'react'
import ThemeChanger from './components/themeChanger'
import RouteComponent from '../routes'
import RandomComponent from './pages/Random'

const App = () => {
  return (
    <div className='relative '>
    
     
      <div className='top-0 right-0 fixed'>

      <ThemeChanger/>
      
      </div>
      <RouteComponent/>
      <RandomComponent/>
    </div>
  )
}

export default App