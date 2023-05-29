import React from "react";


class AddNewProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            productname:'',
            price:'',
            stock:'',
            description:'',
            image:'',
            id:'',
         };
    }

    handleChange = (e) => {
        //the set state is because we want to update the state
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value,
        });
       
    };

    
    handleSubmit = (e) => {
        e.preventDefault();
        // passing the new user from app.js to adduserform 
        this.props.addProduct(this.state)
        this.setState({
            productname:'',
            price:'',
            stock:'',
            description:'',
            image:'',
            id:'',
       })
       
    };
    
    render() { 
        return ( 
            <>
             
            <h1>New Product</h1>

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
                       
            </>
         );
    }
}
 
export default AddNewProduct;