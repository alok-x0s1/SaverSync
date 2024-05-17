import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer, Header } from './components'

function App() {

  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2021 100% Free</p>
        <Footer />
      </footer>
    </>
  )
}

export default App
