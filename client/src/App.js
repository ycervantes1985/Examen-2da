
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateC from './views/CreateC';
import Details from './views/Details';
import Main from './views/Main';
import Update from './views/Update';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();
    const backToHome = () => {
        navigate(`/`)
    }
  return (
    <div className="App">
      <div className='container-form-top'>
      <h2>Pet Shelter</h2>
      {<Button className="logout-button" variant="link" onClick={backToHome}>back to home</Button>}
      </div>
      
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/crear-pet" element={<CreateC/>}/>
        <Route path='/pet/:id' element={<Details/>}/>
        <Route path='/pet/update/:id' element={<Update/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
