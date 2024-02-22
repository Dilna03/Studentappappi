import React, {useState} from 'react'
import { Button, TextField, Typography } from '@mui/material'
const AddStudent = () => {
  // ....to get in console...
  var[data,setData]=useState();
  const student=(e)=>{
    setData({...data,[e.target.value]:e.target.value});
    console.log(data);
  }
  // ...textfield onchange...
  return (
    <div>
      <Typography variant="h5">NAME</Typography>
      <TextField variant='outlined' label="Name" onChange={student}></TextField>
      <br /><br />
      <Typography variant="h5">Age</Typography>
    <TextField variant='outlined'label="Age" onChange={student}></TextField>
    <br /><br />
    <Typography variant="h6">Dept</Typography>
    <TextField variant='outlined'label="Dept" onChange={student}></TextField>
    <br /><br />
    <Button variant='contained' color='inherit'>Submit</Button>
    </div>

  )
}

export default AddStudent