

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Projects from './Projects/Projects';
import Landing from './components/landing/landing';

function App() {
  return (
    <BrowserRouter>
    {/* <ScrollToTop /> */}
    
    <Routes>
     
    <Route path="/" element={<Landing></Landing>} />
    <Route path="/projects" element={<Projects></Projects>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;