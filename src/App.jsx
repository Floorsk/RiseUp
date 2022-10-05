import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  link
} from 'react-router-dom';
import { RegisterStudent } from './pages/RegisterStudent';
import { StudentForms } from './pages/StudentForms';
import { StudentSkills } from './pages/StudentSkills';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<RegisterStudent/>}/>
          <Route path="/StudentForms" element={<StudentForms/>}/>
          <Route path="/StudentSkills" element={<StudentSkills/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
