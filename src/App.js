import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Logout from './page/Logout';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';



function App() {
	const[authenticate,setAuthenticate] = useState(false) // true일때 로그인

	useEffect(() => {
		console.log("authenticate: ",authenticate);
	},[authenticate])

	const logout = () => {
		setAuthenticate(false)
	}

  return (
    <div>
		<Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll/>} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
		<Route path="/logout" element={<Logout setAuthenticate={setAuthenticate}/>} />
		<Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes> 
    </div>
  );
}

export default App;
