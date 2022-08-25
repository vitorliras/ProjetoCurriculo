import './App.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Templates from './pages/Templates';

function App() {
 
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/perfil' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path='/templates/:id' element={<ProtectedRoute><Templates /></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Register />} />


      </Routes>

    </BrowserRouter>
  );
}

export default App;

export function ProtectedRoute(props) {
  if (localStorage.getItem("curriculo-user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />
  }
}