import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute.jsx'
import Home from './pages/Home.jsx'
import SkillDetails from './pages/private/SkillDetails.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Profile from './pages/Profile.jsx'
import UpdateProfile from './pages/UpdateProfile.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import Layout from './layout/Layout.jsx'
import AuthProvider from './provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
      {
        element: <PrivateRoute />,
        children: [
          { path: 'profile', element: <Profile /> },
          { path: 'update-profile', element: <UpdateProfile /> },
          { path: 'skill/:id', element: <SkillDetails /> },
        ],
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={4000} />
    </AuthProvider>
  </StrictMode>,
)
