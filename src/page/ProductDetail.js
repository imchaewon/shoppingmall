import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

	const {id} = useParams();
	console.log(id);

	const[product, setProduct] = useState(null);

	const getProductDetail = async()=>{
		let url = `https://my-json-server.typicode.com/imchaewon/shoppingmall/products/${id}`
		let response = await fetch(url);
		setProduct(await response.json());
		// console.log(data);
	}

	useEffect(()=>{
		getProductDetail();
	},[])

  return (
	<Container>
		<Row>
			<Col className='productImg'>
				<img src={product?.img}/>
			</Col>
			<Col>
				<div>{product?.title}</div>
				<div>₩{product?.price}</div>
				<div>{product?.choice ? "conscious choice" : ""}</div>
				<div>{product?.new ? "new" : ""}</div>
				<Dropdown className='selectMenu'>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						옵션 선택
					</Dropdown.Toggle>

					<Dropdown.Menu>
					{product?.size.map(user => (
						<Dropdown.Item href="#">{user}</Dropdown.Item>
					))}
					</Dropdown.Menu>
				</Dropdown>
				<Button className="btnAdd" variant="primary" size="lg" disabled>추가</Button>
			</Col>
		</Row>
	</Container>
  )
}

export default ProductDetail