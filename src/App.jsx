import React from 'react'
import ThemeChanger from './components/themeChanger'
import RouteComponent from './routes'

const App = () => {
  return (
    <div className='relative overflow-x-hidden'>
    
     
      <div className='fixed  top-0 right-5 '>

      <ThemeChanger/>
      
      </div>
      <RouteComponent/>
    </div>
  )
}

export default App