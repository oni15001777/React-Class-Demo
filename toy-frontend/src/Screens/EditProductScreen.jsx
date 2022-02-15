import React, {useState, useEffect} from 'react';
import FormContainer from '../Components/FormContainer';
import {Form, Button} from 'react-bootstrap'
import Loader from '../Components/Loader';
import axios from 'axios'
import {useParams} from 'react-router-dom';
import Product from '../Components/Product';


function EditProductScreen() {
    //look at url
    const params = useParams();
    //get url id for product
    const productId= params.id;

    //what we are trying to edit
    const [product, SetProduct] = useState({});
    

    //define values and functions for state
    const [name, SetName] = useState('')
    const [price, SetPrice] = useState('')
    const [description, SetDescription] = useState('')
    const [image, SetImage] = useState('')
    const [loading, SetLoading] = useState(true)
    const [posting, SetPosting] = useState(false)

    //run use effect on component/page load
    useEffect(()=>{

        //create function to call api for products
        const fetchProduct = async() =>{
            //api call
            const {data} = await axios.get(`https://localhost:7214/api/products/${productId}`)
            console.log(data)
            SetProduct(data)
            if (data){
                SetLoading(false)
            }
        }

        //Call the function
        fetchProduct()
        
    },[]);

    const submitHandler = async () =>{
        SetPosting(true)
        console.log('button cliked')
        console.log(name)
        console.log(price)
        console.log(description)
        console.log(image)
        const {response} = await axios.put(`https://localhost:7214/api/products/${productId}`, 
        {
            id:product.id,
            name:name,
            price:price,
            description:description,
            image:image
        })
        console.log(response)
        window.location.reload(false)
    }

  return <div>

    <h1 className="py-3 text-center">Add Product</h1>
    {loading? <Loader/> : (
    <FormContainer>
        <Form>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Product Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder={product.name}
                    onChange = {(e)=>SetName(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Product Price</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder={product.price}
                    onChange = {(e)=>SetPrice(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Product Descritpion</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder={product.description}
                    onChange = {(e)=>SetDescription(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Product Image</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder={product.image}
                    onChange = {(e)=>SetImage(e.target.value)}
                />
            </Form.Group>

            <Button className="w-100 px-5" variant="primary" onClick={submitHandler}>{!posting ? <Loader/>:(<div>Save Product</div>)}</Button>
        </Form>
    </FormContainer>
    )}

  </div>;
}

export default EditProductScreen;
