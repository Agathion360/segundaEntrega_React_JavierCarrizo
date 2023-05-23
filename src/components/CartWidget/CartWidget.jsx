import  './CartWidget.css'

const CartWidget = () => {
  
  return (
    <div className='contenedorCarrito d-flex'>
        <img className='carrito' src="./image/Cart.png"alt="carrito" />
       
          <p className='cantidad'>5</p>
       
       
    </div>
    
  );
}

export default CartWidget
