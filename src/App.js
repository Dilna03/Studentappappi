
import './App.css';
import Navbar from './components/Navbar';
import AddStudent from './components/AddStudent';
import { Route,Routes } from 'react-router-dom';
import ViewStudent from './components/ViewStudent';

function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <AddStudent/> */}
     <Routes>
        <Route path="AddStudent" element={<AddStudent method="post" data={{id:"0",student_name:"",student_age:"",student_dept:""}}/>}></Route>
        <Route path="ViewStudent" element={<ViewStudent/>}></Route>
        </Routes>

          </div>
  );
}

export default App;
