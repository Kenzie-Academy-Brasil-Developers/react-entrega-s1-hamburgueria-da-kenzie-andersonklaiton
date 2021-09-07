import './App.css';
import { useState } from 'react';
import MenuContainer from './Components/MenuContainer';
import Kart from './Components/Kart';


function App() {
  const [products, setPoducts]=useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ]);
  const returnProducts = [
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ]
  console.log(returnProducts)
  const [searchProduct, setSearchProducts]=useState("")
  const [currentSale, setCurrentSale]=useState([])

  const showProducts=(inputText)=>{
    if(inputText!==""){
      const filtered = products.filter((item)=>{
        return item.name.toLowerCase()===inputText.toLowerCase()
        
      })
      setPoducts(filtered)
      console.log(searchProduct)

    }
  }
  const handleClick=(productId)=>{
   
    const selectedProd = products.find((elm)=>elm.id===productId)
    if(!currentSale.includes(selectedProd)){
      setCurrentSale([...currentSale, selectedProd])
    }
    
  }
  const removeKart=(id)=>{
    console.log(id)
    const remove = currentSale.filter((elm)=>elm.id!==id)
    setCurrentSale(remove)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hamburgueria da Kenzie</h1>
        <div>
          <input type="text" value={searchProduct} onChange={(e)=>setSearchProducts(e.target.value)}></input>
          <button onClick={()=>showProducts(searchProduct)}>Procurar</button>
          <button onClick={()=>setPoducts(returnProducts)}>Limpar</button>
        </div>
        <div className="container_produtos">
          <MenuContainer products={products} handleClick={handleClick}/>
        </div>
        <div className="container_kart">
          <p>Seu Carrinho: R${
            currentSale.reduce((act, atu)=>{
            let tot = act + atu.price;
            return Math.round(tot*100)/100
            },0)}</p>
            <div className="container_kart_products">
              <Kart currentSale={currentSale} removeKart={removeKart}/>

            </div>
        </div>
      </header>
      
    </div>
  );
}

export default App;
