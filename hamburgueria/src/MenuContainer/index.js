import './style.css'
import Product from '../Product'
const MenuContainer = ({list,handleClick }) =>{
    return(
        <>
        <ul className='menu-container' >
        {list.map((elemento,index)=>(
            <Product key={index} item={elemento} id={elemento.id} handleClick={(handleClick)} btnValue= 'Adicionar'></Product>
        ))}
        </ul>   
        </>
    )
}
export default MenuContainer

