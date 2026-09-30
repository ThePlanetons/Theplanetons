

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Projects from './Projects/Projects';
import Landing from './components/landing/landing';
<meta name="google-site-verification" content="gkDOi5ORHlPzE_TOkMhA6DgDBeXoC8T9cNvhf6IMa5A" />

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