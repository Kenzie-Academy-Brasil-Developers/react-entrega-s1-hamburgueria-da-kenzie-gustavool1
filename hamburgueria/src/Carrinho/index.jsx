import Product from "../Product";
import './style.css';

const Carrinho = ({list, totalPrice,setList}) =>{
    const total = parseFloat(totalPrice(list).toFixed(2))
    const apagar = (id) =>{
        const apagado = list.filter((elemento)=> elemento.id !== id)
        setList(apagado)
    }
    return(
        <>
        <h2>Total R${total}</h2>
        <ul className='menu-container'>
           {list.map((elemento, index)=>(
               <Product key={index} item={elemento} id={elemento.id} handleClick={()=>apagar(elemento.id)} btnValue='Apagar'></Product>
           ))}
        </ul>
        </>
    )
}

export default Carrinho