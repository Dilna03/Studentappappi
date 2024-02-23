import { TableContainer, TableHead, Table, TableRow, TableBody, TableCell, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AddStudent from './AddStudent';

const ViewStudent = () => {
    // ...Data fetch ...
    var [edit, setEdit] = useState(false);
    var [selected, setSelected] = useState({});
    var [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/students").then((response) => {
            console.log(response.data)
            setData(response.data);
        })
            .catch((error) => console.log(error));
    }, [])
    const deleteStudent = (id) => {
        axios
            .delete("http://localhost:8080/student/" + id).then(() => {
                alert("Deleted a row");
                window.location.reload();
            })
            .catch(() => {
                alert("Could not delete the row");
            });
    };
    const editStudent = (id) => {
        axios
            .get("http://localhost:8080/student/" + id)
            .then((response) => {
                setSelected(response.data);
                setEdit(true);
            })
            .catch(() => {
                alert("cannot edit now");
            });
    };
    return (
        <div>
            {edit ? (<AddStudent method="put" data={{ id: selected._id, fname: selected.student_name }} />) : (
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ color: "red", fontFamily: "cursive", fontSize: "20px" }}>
                                    Name
                                </TableCell>
                                <TableCell style={{ color: "red", fontFamily: "cursive", fontSize: "20px" }}>
                                    Age
                                </TableCell>
                                <TableCell style={{ color: "red", fontFamily: "cursive", fontSize: "20px" }}>
                                    Dept
                                </TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((value, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>{value.student_name}</TableCell>
                                        <TableCell>{value.student_age}</TableCell>
                                        <TableCell>{value.student_dept}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" onClick={() => { editStudent(value._id) }}>Edit</Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="contained" onClick={() => { deleteStudent(value._id) }}>Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    )
}

export default ViewStudent