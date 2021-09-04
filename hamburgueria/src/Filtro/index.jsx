import { useState } from 'react'
import './style.css'
const Filtro = ({ setFilteredProducts, filteringProducts,products }) =>{
    const [input, setInput] = useState('')
    const handleClickFilter = () =>{
        setFilteredProducts(input)
        filteringProducts(input)
    }
    const handleClickCleaning = () =>{
        products([
            { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
            { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
            { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
            { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
            { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
            { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
            { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
            { id: 8, name: 'Dolly', category: 'Bebidas', price: 3.00 },
          ])
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
            <button className='filter-button' onClick={handleClickCleaning}>Limpar filtro</button>
        </section>
    )
}
export default Filtro