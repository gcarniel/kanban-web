import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from './components/Login';
import { Task } from './components/Task';
import { Comments } from './components/Comments';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/comments/:category/:id" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
