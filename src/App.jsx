import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Direction from './pages/direction/Direction';
import Drive from './pages/drive/Drive';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/direction' element={<Direction/>}/>
      <Route path='/drive' element={<Drive/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;