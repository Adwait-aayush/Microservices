
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Output from './Components/Output'
import Main from './Components/Main'
import { DataProvider } from './Components/Context'
function App() {


  return (
    <>
    <DataProvider>
    <Header/>
    <Navbar/>
    <Output/>
    <Main/>
    </DataProvider>
    </>
  
  )
}

export default App
