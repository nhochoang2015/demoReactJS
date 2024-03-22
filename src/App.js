
import './App.css';
import './Components/Navbar.jsx'
import Footer from './Components/Footer';
import { Routes,BrowserRouter,Route, Navigate } from 'react-router-dom';
import MainPage from './Components/MainPage';
import Login from './Components/view/Login';
import Register from './Components/view/Register';
import NotFound404 from './Components/NotFound404.jsx';
function App() {
  const user = localStorage.getItem('currentEmail');
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={user?<MainPage/>: <Navigate to='/login'/>}>
      <Route path='*' element={<NotFound404/>}/>
      </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
