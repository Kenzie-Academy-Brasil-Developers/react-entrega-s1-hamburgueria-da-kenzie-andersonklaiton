import Product from "../Product"

const MenuContainer=({products,handleClick})=>{
    return(
        <>
          {products.map((product,index)=>(
                <Product product={product} index={index} handleClick={handleClick}></Product>
            ))}
        </>
    )
}
export default MenuContainer