import './App.css';
import {useState} from 'react'
import MenuContainer from './MenuContainer';
import Carrinho from './Carrinho';
import Filtro from './Filtro';
function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
    { id: 8, name: 'Dolly', category: 'Bebidas', price: 3.00 },
  ]); 
  const [, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  // const [cartTotal, setCartTotal] = useState(0)
  
  const handleClick = (productId) =>{
    
    const filterProduct = products.filter((elemento)=>elemento.id === productId)
    const[product] = filterProduct
    if(!currentSale.includes(product)){
      setCurrentSale([...currentSale, product])
    }
  }
  const filteringProducts = (lookingFor) =>{
    if(lookingFor !== ''){
      const item = products.filter((element)=> element.category.toLocaleLowerCase() === lookingFor.toLocaleLowerCase())
      setProducts(item)
    }
    
  }
 
  const totalPrice = (list) =>{
    const total = list.reduce((prevElement,element)=>prevElement+element.price,0) 
    return total   
  }
  
  return (
    <div className="App">
      <header className="App-header">
          <Filtro  setFilteredProducts={setFilteredProducts} filteringProducts={filteringProducts} products={setProducts} ></Filtro>
          <MenuContainer list={products} handleClick={handleClick}></MenuContainer>
          <Carrinho list={currentSale} totalPrice={totalPrice} setList={setCurrentSale}></Carrinho>
      </header>
    </div>
  );
}

export default App;
