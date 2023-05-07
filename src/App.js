import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerDetails from './Components/CustomerDetails';
import CustomerList from './Components/CustomerList';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CustomerList />}></Route>
          <Route path='/details' element={<CustomerDetails />}></Route>
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
