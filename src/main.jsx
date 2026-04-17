import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider } from 'react-router'
import { router } from './routes/Router'
import FriendProvider from './components/shared/context/FriendProvider'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <FriendProvider>
         <RouterProvider router={router}></RouterProvider>
     </FriendProvider>
           <ToastContainer />
    
  </StrictMode>,
)
