import React, { useState } from 'react'

const Products = () => {

	const [product, setProduct] = useState(
		{
			name: "",
			description: "",
			price: 0
		}
	);

	const handleName = () => {

	}

	const addProduct = (e) => {
		e.preventDefault();
	}
	return (
		<>
			<h1>Products</h1>
			<form onSubmit={addProduct}>
				<label htmlFor="name">Name:</label>
				<input onChange={handleName} type="text" name="name" placeholder="Enter name" />
				<label htmlFor="description">Description:</label>
				<input type="text" name="description" placeholder="Enter description" />

				<label htmlFor="price">Price:</label>
				<input type="number" name="price" placeholder="Enter price" step="0.1" />
				<button></button>
			</form>
		</>
	)
}

export default Products