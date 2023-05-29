import React, {useState} from 'react'
import { Modal, Card, Col, Button, } from 'react-bootstrap'
import EditButton from './editButton'
import {deleteProduct} from '../store/pActions'
import { connect } from 'react-redux';

const Modalproduct = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    const handleDelete = (e) => {
        e.preventDefault();
        props.deleteProduct(props.productInfo.id);
        
    };

  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Item
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditButton 
            productInfo={props.productInfo} 
            editProduct={props.editProduct}
            closeModal={handleClose} />
    </Modal.Body>
    </Modal>

    <Col md='4' style={{marginBottom:'1rem'}}>

    <Card style={{ width: '18rem' }}>

      <Card.Img variant="top" src="{props.productInfo.image}" />
      <Card.Body>
        <Card.Title>{props.productInfo.productname}</Card.Title>
        <Card.Text>
        <p>{props.productInfo.price}</p>
        <p>{props.productInfo.stock}</p>
        <p>{props.productInfo.description}</p>
        </Card.Text>
        <Card.Link onClick={handleShow}> <Button>Edit </Button></Card.Link>
       <Card.Link ><Button variant='danger' size='sm' onClick={handleDelete}>Delete</Button></Card.Link>
      </Card.Body>
    </Card>



{/* 
        <Card  >
            <Card.Body>
              <Card.Title>Item</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{props.productInfo.productname}</Card.Subtitle>
              <Card.Text>
                <p>{props.productInfo.price}</p>
                <p>{props.productInfo.stock}</p>
                <p>{props.productInfo.description}</p>
                <p>{props.productInfo.image}</p>
              
              </Card.Text>
              <Card.Link onClick={handleShow}> <Button>Edit </Button></Card.Link>
              <Card.Link ><Button variant='danger' size='sm' onClick={handleDelete}>Delete</Button></Card.Link>
            </Card.Body>
          </Card> */}
          
    </Col>


    </>
  )
}
const mapDispatchToProps ={
    deleteProduct: deleteProduct
  
  }
   

export default connect(null,mapDispatchToProps) (Modalproduct) 