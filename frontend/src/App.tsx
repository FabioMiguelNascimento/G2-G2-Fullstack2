import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button'
import Card from './components/card'
import Header from './components/header'
import { Outlet } from 'react-router-dom'
import { NavigationMenu } from '@radix-ui/react-navigation-menu'

function App() {
  const [count, setCount] = useState(0)

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
