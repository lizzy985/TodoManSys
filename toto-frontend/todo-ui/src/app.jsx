import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import ListTodoComponents from './components/ListTodoComponents'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom' 
import TodoComponent from './components/TodoComponent'
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'
import { isUserLoggedIn } from './services/AuthService'

export function App() {
  // const [count, setCount] = useState(0)
  function AuthenticatedRoute({children}){
    const isAuth = isUserLoggedIn();
    if(isAuth) {
      return children
    }

    return <Navigate to="/" />
  }

  return (
    <>
      <BrowserRouter>
      
        <HeaderComponent/>

        {/* Routes is a container or a parent for all the individual roure */}
        <Routes>
          {/* http://localhost:3000 */}
          <Route path='/' element={<LoginComponent/>}></Route>
          {/* http://localhost:3000/todos */}
          <Route path='/todos' element={ 
            <AuthenticatedRoute>
              <ListTodoComponents/>
            </AuthenticatedRoute>}></Route>

          {/* http://localhost:3000/add-todo */}
          <Route path='/add-todo' element={
            <AuthenticatedRoute>
              <TodoComponent/>
            </AuthenticatedRoute>}></Route>

          {/* http://localhost:3000/update-todo/id */}
          <Route path='/update-todo/:id' element={
            <AuthenticatedRoute>
              <TodoComponent/>
            </AuthenticatedRoute>}></Route>

          {/* http://localhost:3000/register */}
          <Route path='/register' element={<RegisterComponent/>}></Route>

          {/* http://localhost:3000/login */}
          <Route path='/login' element={<LoginComponent/>}></Route>


        </Routes>
      
        <FooterComponent/>

      </BrowserRouter>  
    </>
  )
}
