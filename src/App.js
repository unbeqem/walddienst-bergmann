import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Impressum from './components/Impressum';

function App() {
  return (
    <div className="App w-full">
      <Router>
   
   <Routes>
   
   <Route index element={<Home />}/>
   <Route path='über' element={<About />} />
   <Route path='leistungen' element={<Services />} />
   <Route path='kontakt' element={<Contact />} />
   <Route path='impressum' element={<Impressum />} />
   
   </Routes>
   
 </Router>
    </div>
  );
}

export default App;
