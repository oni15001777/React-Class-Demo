import React, {useState, useEffect} from 'react';
import FormContainer from '../Components/FormContainer';
import {Form, Button} from 'react-bootstrap'
import Loader from '../Components/Loader';
import axios from 'axios'


function AddProductScreen() {

    //define values and functions for state
    const [name, SetName] = useState('')
    const [price, SetPrice] = useState('')
    const [description, SetDescription] = useState('')
    const [image, SetImage] = useState('')

    const [posting, SetPosting] =useState(false)

    const submitHandler = async () =>{
        SetPosting(true)
        console.log('button cliked')
        console.log(name)
        console.log(price)
        console.log(description)
        console.log(image)
        const {response} = await axios.post("https://localhost:7214/api/products", 
        {
            name:name,
            price:price,
            description:description,
            image:image
        })
        console.log(response)
    }

  return <div>

    <h1 className="py-3">Add Product</h1>
    <FormContainer>
        <Form>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Product Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Product Name"
                    onChange = {(e)=>SetName(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Product Price</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="Product Price (£)"
                    onChange = {(e)=>SetPrice(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Product Descritpion</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Product Description"
                    onChange = {(e)=>SetDescription(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Product Image</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Must be: img/name.jpg"
                    onChange = {(e)=>SetImage(e.target.value)}
                />
            </Form.Group>

            <Button className="w-100 px-5" variant="primary" onClick={submitHandler}>{!posting ? <Loader/>:(<div>Add Product</div>)}</Button>
        </Form>
    </FormContainer>

  </div>;
}

export default AddProductScreen;
