import './App.css';
import { Route, Routes } from 'react-router-dom';
import InvoicePreview from './pages/InvoicePreview';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/:id" element={<InvoicePreview/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
