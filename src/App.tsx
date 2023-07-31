import { Outlet } from 'react-router-dom'
import { LeftNav } from './components/left-nav'
import { TopNav } from './components/top-nav'

import './App.css'

const App = () => {

  return (
    <>
      <div>
        <TopNav />
        <div className={`app-container`}>
          <LeftNav />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export { App }
