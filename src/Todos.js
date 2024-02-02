import Header from "./Header";
import './App.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Todos(){

    const [data,setdata] = useState([]);
  
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/todos')
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
                            <th>Completed</th>
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
                                            <td>{ele.completed ? 'True' : 'False'}</td>
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

export default Todos;