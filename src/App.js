import './App.css';
import Header from './component/header';
import ToDoList from './pages/to do list';
import Goal from './pages/goal lst';
import Made from './pages/made';
import InputModal from './component/input';
import { Routes, Route, Link } from 'react-router-dom'


function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/goal" element={<Goal />} />
        <Route path="/made" element={<Made />} />
      </Routes>
      <InputModal />
    </div>
  );
}

export default App;
