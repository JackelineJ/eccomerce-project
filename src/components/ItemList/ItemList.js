import ItemCount from '../ItemCount/ItemCount';
import './ItemList.css';

const ItemList = (props) => {
    return (
        <div className='Container'>
            <h1>{props.greeting} Pick what you like best</h1>
            <ItemCount />
        </div>
    )
}

export default ItemList