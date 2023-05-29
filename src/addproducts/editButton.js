import React from "react";
import { connect } from 'react-redux';
import {editProduct} from '../store/pActions';

class EditButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            productname: props.productInfo.productname,
            price: props.productInfo.price,
            stock: props.productInfo.stock,
            description: props.productInfo.description,
            image: props.productInfo.image,
            id: props.productInfo.id,
         };
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value,
        });
       
    };

    handleSubmit = (e) => {
        e.preventDefault(); 
        this.props.editProduct(this.state.id, this.state )
        this.setState({
            productname:'',
            price:'',
            stock:'',
            description:'',
            image:'',         
        })
        this.props.closeModal()   
    };
   
    render() { 
        return ( 
        <>
        
        <form   onSubmit={this.handleSubmit}>
                <label>Product Name</label>
                <br/>
               < input type="text" value={this.state.productname} name="productname" placeholder='name of product'
               onChange={this.handleChange} />
               <br/> <br/>

                <label>Price</label>
                <br/>
               < input type="number" value={this.state.price} name="price" placeholder='price of product*' 
               onChange={this.handleChange}/>
               <br/> <br/>

                <label>Quantity in Stock</label>
                <br/>
               < input type="number" value={this.state.stock} name="stock" placeholder='Stock*'
               onChange={this.handleChange} />
               <br/> <br/>

                <label>Description</label>
                <br/>
               < input type="text" value={this.state.description} name="description" placeholder='type here*'
               onChange={this.handleChange} />
               <br/> <br/>

                <label>Add Image</label>
                <br/>
               < input type="file" value={this.state.image} name="image" placeholder='choose*'
               onChange={this.handleChange} />
               <br/> <br/>

               <button >Submit</button>
            </form>

        </> );
    }
}
const mapDispatchToProps ={
    editProduct: editProduct
  
  }
export default connect(null, mapDispatchToProps)(EditButton) ;