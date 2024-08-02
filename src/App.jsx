import React from 'react'
import ThemeChanger from './components/themeChanger'
import RouteComponent from './routes'

const App = () => {
  return (
    <div className='relative '>
    
     
      <div className='top-0 right-0 fixed'>

      <ThemeChanger/>
      
      </div>
      <RouteComponent/>
    </div>
  )
}

export default App