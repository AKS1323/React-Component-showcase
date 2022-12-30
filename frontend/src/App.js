import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import AddComponent from './components/AddComponent';
import Viewers from './component/Viewers';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Browse from './components/Browse';
import Authorisor from './components/Authorisor';
function App() {
  return (
    <div>
      <Toaster />
      <BrowserRouter>
      <Header />
        <Routes>
          <Route element={<Navigate to="/login" />} path='/' />
          <Route element={<Login />} path='login' />
          <Route element={<Signup />} path='signup' />
          <Route element={<AddComponent />} path='add' />
          <Route element={<Viewers />} path='view' />
          <Route element={<Browse />} path='browse' />
          <Route element={<Authorisor />} path='authoriser' />
        </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
