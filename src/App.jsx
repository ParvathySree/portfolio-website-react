import Home from './components/Home/Home'
import Header from './components/Header/Header'
import { createBrowserRouter, Outlet } from 'react-router-dom';
import './App.css'
import Projects from './components/Projects/Projects';
import About from './components/About/About';


function App() {

  return (
    <>
    <div className='app'>
      <Header/>
      <Outlet/>

    </div>
      
    </>
  )
}

export const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children : [
      {
        path:'/',
        element:<About/>
      },
      {
        path:'/projects',
        element:<Projects/>
      }
    ]
  }
])

export default App
