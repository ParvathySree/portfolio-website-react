import Home from './components/Home/Home'
import Header from './components/Header/Header'
import { createBrowserRouter, Outlet } from 'react-router-dom';
import './App.css'
import Projects from './components/Projects/Projects';


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
        element:<Home/>
      },
      {
        path:'/projects',
        element:<Projects/>
      }
    ]
  }
])

export default App
