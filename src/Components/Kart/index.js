const Kart =({currentSale, removeKart})=>{
    
    return (
        <>
            {currentSale.map((product,index)=>(
                
                <div key={index} className="produtos">
                    {console.log(product.id)}
                    <p className="produt">{product.name}</p>
                    <p className="categoria">Categoria: {product.category}</p>
                    <p className="preco">Preço: R${product.price}</p>
                    <button onClick={()=>removeKart(product.id)}>Remover</button>
                </div>
            ))}
        </>
    )
}
export default Kart