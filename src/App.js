import './App.css';
import Banner from './components/Banner';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequirementsPage from './components/RequirementsPage';
import AdminLogin from './AdminLogin';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <div >
           <Routes>
           <Route path="/" element={<Banner/>}/>   
           <Route path="/requirements" element={<RequirementsPage/>}/>
           <Route path="/adminlogin" element={<AdminLogin/>}/>
           <Route path="/admindashboard" element={<AdminDashboard/>} />
           </Routes>
           </div>
    </BrowserRouter>
     
     </div>
  );
}

export default App;
