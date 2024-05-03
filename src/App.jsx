import Home from './components/Home/Home'
import Header from './components/Header/Header'
import { createBrowserRouter, Outlet } from 'react-router-dom';
import './App.css'


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
        element:<Home/>
      }
    ]
  }
])

export default App
