import './App.css';
import Header from './component/header';
import ToDoList from './pages/to do list';
import Goal from './pages/goal lst';
import Made from './pages/made';
import { Routes, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Init } from './actions';
import Nav from './component/nav';

function App() {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);

  // 초기 데이터 불러오기
  useEffect(() => {
    fetch("http://localhost:3001/todo")
    .then(res => {
      if (!res.ok) {
        throw Error('could not fetch the data for that resource');
      } 
      return res.json();
    })
    .then(data => dispatch(Init(data)))
  }, [])
  
  return (
    <div className="App">
      {open ? <Nav setOpen={setOpen}/> : null}
      <Header setOpen={setOpen}/>
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/goal" element={<Goal />} />
        <Route path="/made" element={<Made />} />
      </Routes>
    </div>
  );
}

export default App;
