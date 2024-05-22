import './App.css';
import { Route, Routes } from 'react-router-dom';
import Reg from './pages/reg/Reg';
import Log from './pages/log/Log';
import Table from './pages/Table/Table';

function App() {
  return (
    <div className="App">
    <Routes>
<Route path='/' element={<Reg/>}/>
<Route path='login' element={<Log/>}/>
<Route path='/table' element={<Table/>}/>

    </Routes>
    </div>
  );
}

export default App;
