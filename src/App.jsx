import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// you can import the whole pack.
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Header } from './pages/Header';
import { Table } from './pages/Table';
import { NotFound } from './pages/NotFound';
import { Detail } from './pages/Detail';

function App() {

  return (
    <BrowserRouter>
    <div className="bg-theme py-3">
      <div className="crud-container text-center mx-3 mx-md-auto">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Table />}/>
            <Route path='/details/:id' element={<Detail />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>

  )
}

export default App
