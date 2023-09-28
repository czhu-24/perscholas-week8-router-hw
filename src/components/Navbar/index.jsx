import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/navbar.css'


const Navbar = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/products">Products</Link>
		</nav>
	)
}

export default Navbar