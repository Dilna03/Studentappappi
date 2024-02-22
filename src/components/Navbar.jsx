import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div><AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}align='left'>
        Student App
      </Typography>
      <Button>
        <Link to="/AddStudent" style={{color:"white"}}>AddStudent</Link>
        <br /><br />
        </Button>
        <Button>
        <Link to="/ViewStudent" style={{color:"white"}}>ViewStudent</Link>
        </Button>
    </Toolbar>
  </AppBar></div>
  )
}

export default Navbar