import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes , Route, Navigate} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'


import Editor from './component/Editor'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate replace to={`/docs/${uuidv4()}`} />} /> 
        <Route path='/docs/:id' element={<Editor />} />
      </Routes>
    </Router>
  );
}

export default App;
