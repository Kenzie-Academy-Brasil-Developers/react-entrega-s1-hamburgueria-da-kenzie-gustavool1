import './style.css'
const Product = ({item,id,handleClick,btnValue}) =>{
    return(
        <>
        <li key={id}>
            <p>{item.category}</p>
            <p>{item.name}</p>
            <p>R${item.price}</p>
            <button onClick={() => handleClick(item.id)}>{btnValue}</button>
        </li>
        </>
    )
}
export default Product