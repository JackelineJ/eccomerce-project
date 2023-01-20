import React from 'react';
import Item from '../../components/Item/Item';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';

const Home = () => {
    const greetingComponent = 'Hello!';
    return (
        <div className='listContainer'>
            <ItemList greeting={greetingComponent}/>
            <Item />
        </div>
    )
}

export default Home