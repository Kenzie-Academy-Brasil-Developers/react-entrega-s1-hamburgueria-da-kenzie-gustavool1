import { useState } from 'react'
import './style.css'
const Filtro = ({ setFilteredProducts, filteringProducts,products }) =>{
    const [input, setInput] = useState('')
    const handleClickFilter = () =>{
        setFilteredProducts(input)
        filteringProducts(input)
    }
    
    return(
        <section className='filter-section'>
            <input 
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Filtrar por categoria'
            />
            <button className='filter-button' onClick={handleClickFilter}>Pesquisar</button>
          
        </section>
    )
}
export default Filtro