import Header from './components/header'
import { Outlet } from 'react-router-dom'

function App() {

   return (
    <>
      <Header />
      <main className="p-6">
        <Outlet /> {}
      </main>
    </>
  )
}

export default App
