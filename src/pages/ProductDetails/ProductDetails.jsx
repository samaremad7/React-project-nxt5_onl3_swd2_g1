import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const URL = "https://fakestoreapi.com/products";


function ProductDetails() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState({});

    const fetchProductDetails = async () => {
        if (isNaN(id)) {
            setIsLoading(false);
            setIsError(true);
            return;
        }
        try {
            const response = await fetch(`${ URL }/${ id }`);
            if (!response.ok) throw new Error("invalid product id ");
            const data = await response.json();
            setData(data);
        } catch (error) {
            setIsError(true);
            console.error(error);
        } finally {
            setIsLoading(false);
            console.log("finally !!")
        }
    };

useEffect(()=>{
fetchProductDetails();
},[id])


    return (
    <div className="product-details" >
<Container>
{isLoading && <div> Loading product details data...</div> }
{!isLoading && isError && <div> Faild to fetch data...</div>}
{!isLoading && !isError &&(<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <Card.Text>{data.price}</Card.Text>

      </Card.Body>
    </Card>
)}
</Container>

    </div>
    )
}
export default ProductDetails;