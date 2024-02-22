
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
        <Route path="AddStudent" element={<AddStudent/>}/>
        <Route path="ViewStudent" element={<ViewStudent/>}/>
        </Routes>

          </div>
  );
}

export default App;
