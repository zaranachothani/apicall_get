import './App.css';
import { Card,Button,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import {useEffect, useState} from 'react';
import Header from './Header';
function Photos(){
    let [data,setData]=useState([]);

    useEffect(()=>{
  
      axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(function (response) {
      // handle success
      console.log(response.data);
      setData(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  },[])
    return(
        <>
        <Header/>
            <Container>
                <div className='main_section'>
                {
                    data.map((ele,ind)=>{
                        return(
                            <Card  key={ind} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ele.url} />
                            <Card.Body>
                                <Card.Title>{ele.albumId}</Card.Title>
                                <Card.Title>{ele.id}</Card.Title>
                                <Card.Title>{ele.title}</Card.Title>
                                <Card.Text>
                            {/* {ele.thumbnailUrl} */}
                                </Card.Text>
                                <Button variant="primary"><a href={ele.thumbnailUrl} target='_blank'>read more</a></Button>
                            </Card.Body>
                            </Card>
                        )
                    })
                }
                </div>
            </Container>
        </>

    )
}
export default Photos;