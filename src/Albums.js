import Header from "./Header";
import './App.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Albums(){

    const [data,setdata] = useState([]);
  
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/albums')
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
            <center>
                <Table striped bordered hover border={1}>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Id</th>
                            <th>Title</th>
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
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </center>
        </>
    )
}

export default Albums;