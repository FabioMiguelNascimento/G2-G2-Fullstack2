import Header from './components/header'
import { Outlet } from 'react-router-dom'

function App() {

   return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto p-4 h-full w-full">
        <Outlet />
      </main>
    </>
  )
}

export default App
