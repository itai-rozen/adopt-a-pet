import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Add from './Pages/Add/Add';
import Homepage from './Pages/Homepage/Homepage';
import EditWrapper from './components/EditWrapper/EditWrapper';


function App() {
  return (
    <div className="App">
                <BrowserRouter>
                <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/add" element={<Add />} />
                <Route exact path="/edit/:id" element={<EditWrapper />} />
                </Routes>
                </BrowserRouter>
    </div>
  );
}

export default App;
