import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemList/ItemList';
//import Button from 'react-bootstrap/Button';


function App() {
  const greetingComponent = 'Hello!';
  const pageLogo = 'queenlogo.png';
  return (
    <div>
      <header className="App-header">
      <img className='queenLogo' src={pageLogo} alt='queen logo'/>
        <NavBar />
        <ItemList greeting={greetingComponent}/>
      </header>
    </div>
  );
}

export default App;
