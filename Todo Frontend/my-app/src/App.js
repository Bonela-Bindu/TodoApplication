
import './App.css';

import LoginForm from './Components/LoginForm';
import RegistrationForm from './Components/RegistrationForm';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import TodoList from './Components/TodoList';


function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<RegistrationForm/>}/>
  <Route path='/login' element={<LoginForm/>}/>
  <Route path="todolist" element={<TodoList/>}/>
</Routes>
</BrowserRouter>
    
    </div>

  );
}

export default App;
