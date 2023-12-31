import './App.css';
import { Route, Routes } from 'react-router-dom';
import InvoicePreview from './pages/InvoicePreview';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

// Theme
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/invoice/:id" element={<InvoicePreview/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
