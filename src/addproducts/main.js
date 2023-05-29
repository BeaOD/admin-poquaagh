import React from "react";
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddNewProduct from "./addProducts";
import AllProducts from "./allProducts";
import {addProduct} from '../store/pActions';

class Main extends React.Component {

    addAProduct = (product) =>{
        product.id = Math.random().toString()
        this.props.addProduct(product)
    }

    deleteAProduct= (id) => {
        let undeletedProducts = this.state.products.filter
        (product => product.id !== id);
        this.setState({
            products: undeletedProducts
        })
      }

      editAProduct = (id, updatedProduct) => {
        this.setState({
            products:this.state.products.map(product=> product.id === id ? updatedProduct: product)
        })
    
      }
      
    
    render() { 
        return ( 
            <>
            <div className="container">
            <div className="row">
            <div className="col-md-6">
                <AddNewProduct addProduct= {this.addAProduct}/>

            </div>

            <div className="col-md-6">
            <h1> Product  Details</h1>
            <AllProducts 
            productsData={this.props.products} 
          deleteAProduct={this.deleteAProduct} 
          editAProduct={this.editAProduct}
            />

            </div>
            </div>
            </div>
            
            
            </>
         );
    }
}
const mapStateToProps = (state) => ({
    products: state.products
  });
  
  const mapDispatchToProps ={
    addProduct : addProduct
  
  }
   
  export default connect(mapStateToProps, mapDispatchToProps)  (Main);
 
