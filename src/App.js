import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Error from './pages/Error/Error';
import AboutUs from './pages/AboutUs/AboutUs';

import NavBar from './components/NavBar/NavBar';
//import Button from 'react-bootstrap/Button';


function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='*' element={<Error />} />
          <Route path='/' element={<ItemListContainer />} />
          <Route path='products' element={<ItemDetailContainer />} />
          <Route path='aboutUs' element={<AboutUs />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
