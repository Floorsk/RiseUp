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
import { LandingPage } from './pages/LandingPage'; 
import { LoginPorto } from './pages/LoginPorto';
import { Dashboard } from './pages/Dashboard';
import { RegisterCompany } from './pages/RegisterCompany';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/LoginPorto" element={<LoginPorto/>}/>
          <Route path="/RegisterStudent" element={<RegisterStudent/>}/>
          <Route path="/StudentForms" element={<StudentForms/>}/>
          <Route path="/StudentSkills" element={<StudentSkills/>}/>
          <Route path="/LoginPorto" element={<LoginPorto/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/RegisterCompany" element={<RegisterCompany/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;