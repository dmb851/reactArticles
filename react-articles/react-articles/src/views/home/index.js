import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import 'holderjs';
import React, { useEffect, useState } from 'react';

const axios = require('axios').default;

function HomePage(){
   
  const initialValue = [
    { id: 0, name:"test", summary:"", details:""}];
  const[articles, getArticles] = useState(initialValue);
  
  useEffect(()=>{
    getAllArticles();
  },[]);

  // HERE IS THE PROBLEM.... i think axios is being called and not executed in time for console.log to get the data
  // console.log works when data is fetched 
  async function getAllArticles(){
    await axios.get('/articles').then((response)=>{
       const allArticles = response.data;
       getArticles(allArticles);
    })
    .catch(error=>console.error(`Error: $(error)`));
    console.log("hi");
    
  }
  const myArticles = JSON.parse(JSON.stringify(articles));
    
  try{
    console.log(myArticles[0].name);
    for(var i=0; i< myArticles.length; i++){
      console.log(myArticles[i].name);
  }
  }catch(error){
    console.log(error);
  }
 

    // var myArticles = JSON.parse(articles);  

    

    
    return(
     
        <>

        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      
    <ArticleList list={myArticles}></ArticleList>


    
    <Container>
      <div className="text-center pt-5 pb-2">Articles</div>
      <Row className="text-center p-5">
        <Col className="border p-5">
          <div className="border">
            Article 1
          </div>
        </Col >
        <Col className="border p-5">
          <div className="border">
            Article 1
          </div>
        </Col>
        <Col className="border p-5">
          <div className="border">
            Article 1
          </div>
        </Col>
      </Row>

    </Container>
    </>
    );   
}

const ArticleList = ({list}) =>
  list.map(item=>
    (<h1>{item.name}</h1>));





export default HomePage;