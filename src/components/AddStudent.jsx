import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
const AddStudent = (props) => {
  // ....to get in console...
  var [data, setData] = useState({
    id: props.data.id,
    fname: props.data.fname,
    age: props.data.age,
    dept: props.data.dept

  });
  const student = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }
  const submit = () => {
    axios.post("http://localhost:8080/students", {
      student_name: data.fname,
      student_age: data.age,
      student_dept: data.dept
    })
      .then(() => {
        alert('New entry created successfully');
      })
      .catch(() => {
        alert('Error saving data');
      });

  }
  // ...textfield onchange...
  return (
    <div>
      <Typography variant="h5">NAME</Typography>
      <TextField variant='outlined' value={data.fname} label="Name" name='fname' onChange={student}></TextField>
      <br /><br />
      <Typography variant="h5">Age</Typography>
      <TextField variant='outlined' label="Age" name='age' value={data.age} onChange={student}></TextField>
      <br /><br />
      <Typography variant="h6">Dept</Typography>
      <TextField variant='outlined' label="Dept" name='dept'value={data.dept} onChange={student}></TextField>
      <br /><br />
      <Button variant='contained' color='inherit' onClick={submit}>Submit</Button>
    </div>

  )
}

export default AddStudent