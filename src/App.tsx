import { LeftNav } from './components/left-nav'
import { TopNav } from './components/top-nav'

import './App.css'
import { Dashboard } from './components/dashboard'

const App = () => {

  return (
    <>
      <div>
        <TopNav />
        <div className={`app-container`}>
          <LeftNav />
          <Dashboard />
        </div>
      </div>
    </>
  )
}

export { App }
