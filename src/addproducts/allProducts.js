import React from 'react'
import { Container, Row } from 'react-bootstrap'
//import 'bootstrap/dist/css/bootstrap.min.css';
import Modalproduct from './modal'


const AllProducts = (props) => {
  return (
    <>
    <Container>
        <Row>
            { 
            props.productsData.map((product)=>{
                return (
                < Modalproduct
                 productInfo={product}
                 key={product.id}
                 deleteProduct={props.deleteProduct}
                 editProduct={props.editProduct}
                 />
                );
            })
            };
        </Row>
    </Container>
    </>
  )
}

export default AllProducts