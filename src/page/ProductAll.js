import React, { useEffect, useState} from 'react'
import ProductCard from '../component/ProductCard';
import {Container, Row, Col} from 'react-bootstrap'
import {useSearchParams } from 'react-router-dom';


const ProductAll = () => {

	const [productList,setProductList] = useState([]);
	const [query, setQuery] = useSearchParams();
	const getProducts = async () => {
		let searchQuery = query.get("q") || "";
		console.log("searchQuery:",searchQuery);
		let response = await fetch(url);
		let url = `https://my-json-server.typicode.com/imchaewon/shoppingmall/products?q=${searchQuery}`;
		let data = await response.json();
		setProductList(data);
		// console.log(data);
	}
	useEffect(() => {
		getProducts();
	},[query])
  return (
	<div>
		<Container>
			<Row>
				{productList.map((nemu) => (
					<Col lg={3}>
						<ProductCard item={nemu}/>
					</Col>
				))}
			</Row>
		</Container>
	</div>
  )
}

export default ProductAll