import "./produtos.css"
const Product=({product, index, handleClick})=>{
    
    return(
        <div key={index} className="produtos">
                <p className="produt">{product.name}</p>
                <p className="categoria">Categoria: {product.category}</p>
                <p className="preco">Preço: R${product.price}</p>
                <button onClick={()=> handleClick(product.id)}>Adicionar</button>
        </div>
    )
}
export default Product