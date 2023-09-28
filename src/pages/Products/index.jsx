import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
// to generate unique ids for each product

const Products = () => {
	const [products, setProducts] = useState([]);
	const [productName, setProductName] = useState("");
	const [productDescription, setProductDescription] = useState("");
	const [productPrice, setProductPrice] = useState(0);

	useEffect(() => {
		if (products.length > 0){
			// only log if products is NOT an empty array
			console.log("A new product has been added!");
			console.log("The new products is ", products);
		}
	}, [products]);

	const addProduct = (e) => {
		e.preventDefault();
		const newProduct = {
			id: uuidv4(), 
			name: productName, 
			description: productDescription, 
			price: productPrice
		};
		setProducts([...products, newProduct]);
		setProductName("");
		setProductDescription("");
		setProductPrice(0);
	}
	return (
		<>
			<h1>Products</h1>
			<form onSubmit={addProduct}>
				<label htmlFor="name">Name:</label>
				<input value={productName} 
				onChange={(e) => setProductName(e.target.value)} type="text" name="name" placeholder="Enter product name" />
				<label htmlFor="description">Description:</label>
				<input value={productDescription} 
				onChange={(e) => setProductDescription(e.target.value)} type="text" name="description" placeholder="Enter description" />
				<label htmlFor="price">Price:</label>
				<input value={productPrice} 
				onChange={(e) => setProductPrice(e.target.value)} type="number" name="price" placeholder="Enter price" step="0.1" />
				<button>Submit</button>
			</form>
		</>
	)
}

export default Products