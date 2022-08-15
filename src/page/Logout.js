import Button from 'react-bootstrap/Button';
import {Form, Container} from 'react-bootstrap';
import React from 'react'
import {useNavigate} from 'react-router-dom'

const Logout = ({setAuthenticate}) => {

	const navigate = useNavigate();
	const loginUser = () => {
		console.log("logout");
		setAuthenticate(false);
		navigate("/");
	}
	window.onload = loginUser();

  return (
	<div></div>
  )
}

export default Logout