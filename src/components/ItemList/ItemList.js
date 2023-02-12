import './ItemList.css';

const ItemList = (props) => {
    return (
        <div className='Container'>
            <h1>{props.greeting} Pick what you like best</h1>
        </div>
    )
}

export default ItemList