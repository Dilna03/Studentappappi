import { TableContainer, TableHead ,Table,TableRow,TableBody,TableCell} from '@mui/material'
import React,{useEffect,useState} from 'react'
import axios from 'axios';

const ViewStudent = () =>{
    // ...Data fetch ...
    var[data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/students").then((response)=>{
            console.log(response.data)
            setData(response.data);
        })
        .catch((error)=>console.log(error));
    },[])
  return (
    <div>
        {/* ...table creation..  */}
        <TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell style={{color:"red",fontFamily:"cursive",fontSize:"20px"}}>
                    Name
                    </TableCell>
                    <TableCell style={{color:"red",fontFamily:"cursive",fontSize:"20px"}}>
                    Age
                    </TableCell>
                    <TableCell style={{color:"red",fontFamily:"cursive",fontSize:"20px"}}>
                    Dept
                    </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {data.map((value,index)=>{
                return(
                    <TableRow key={index}>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.age}</TableCell>
                        <TableCell>{value.dept}</TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
    </Table>
</TableContainer></div>
  )
}

export default ViewStudent