import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from './pages/Category.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          {/* <App /> */}
        </Route>
        <Route path='/category' element={<Category/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
