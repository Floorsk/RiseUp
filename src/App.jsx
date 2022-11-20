import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { RegisterStudent } from './pages/RegisterStudent';
import { StudentForms } from './pages/StudentForms';
import { StudentSkills } from './pages/StudentSkills';
import { LandingPage } from './pages/LandingPage'; 
import { LoginPorto } from './pages/LoginPorto';
import { Dashboard } from './pages/Dashboard';
import { RegisterCompany } from './pages/RegisterCompany';
import { MainPage } from './components/ControlPage/MainPage';
import { Uni } from './components/ControlPage/Uni';
import { Management } from './components/ControlPage/Management';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route exact path="/" element={<LandingPage/>}/>
          <Route path="/LoginPorto" element={<LoginPorto/>}/>
          <Route path="/RegisterStudent" element={<RegisterStudent/>}/>
          <Route path="/StudentForms" element={<StudentForms/>}/>
          <Route path="/StudentSkills" element={<StudentSkills/>}/>
          <Route path="/LoginPorto" element={<LoginPorto/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/RegisterCompany" element={<RegisterCompany/>}/>
          <Route path="/MainPage" element={<MainPage/>}/>
          <Route path="/Uni" element={<Uni/>}/>
          <Route path="/Management" element={<Management/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;