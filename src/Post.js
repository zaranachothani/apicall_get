import Header from "./Header";
import './App.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Post(){

    const [data,setdata] = useState([]);
  
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
      console.log(response.data);
      setdata(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
    },[])

    return(
        <>
            <Header/>
            <Table striped bordered hover border={1}>
                <thead>
                    <tr>     
                        <th>User Id</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ele,ind)=>{
                            return(
                                <>
                                    <tr>
                                        <td>{ele.userId}</td>
                                        <td>{ele.id}</td>
                                        <td>{ele.title}</td>
                                        <td>{ele.body}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Post;