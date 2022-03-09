import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Appointment } from './components/Appointment';
import { Step1 } from './components/booking/Step1';
import { Doctor } from './components/Doctor';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appointment' element={<Step1 />} />
        <Route path='doctor' element={<Doctor />} />
      </Routes>
    </div>
  );
}

export default App;
