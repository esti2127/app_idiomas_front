import './App.css'

import { Navbar } from './components/Navbar'
import { AppRoutes } from './routes/AppRoutes'
import { UserProvider } from './contexts/UserProvider'

function App() {

  return (
    <>

      <header>
        Título o eslogan
      </header>



      <main>

        <UserProvider>

          <Navbar />

          <AppRoutes />

        </UserProvider>

      </main>

      <footer>
        leyes
      </footer>
    </>
  )
}

export default App
