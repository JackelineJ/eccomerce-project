import React from 'react'
import ItemList from '../../components/ItemList/ItemList'

const Home = () => {
    const greetingComponent = 'Hello!';
    const pageLogo = 'queenlogo.png';
    return (
        <div>
        <header className="App-header">
            <img className='queenLogo' src={pageLogo} alt='queen logo'/>
            <ItemList greeting={greetingComponent}/>
        </header>
        </div>
    )
}

export default Home