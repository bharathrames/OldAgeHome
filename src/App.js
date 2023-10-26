import './App.css';
import Banner from './components/Banner';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequirementsPage from './components/RequirementsPage';

function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <div >
           <Routes>
           <Route path="/" element={<Banner/>}/>   
           <Route path="/requirements" element={<RequirementsPage/>}/>
           </Routes>
           </div>
    </BrowserRouter>
     
     </div>
  );
}

export default App;
