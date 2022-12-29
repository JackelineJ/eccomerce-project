import './App.css';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';


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
