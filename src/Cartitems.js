

function Cart({CartItems,remove}){

    return(
        
      <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
                <div class="fw-bold">{CartItems.brand}</div>
                  {CartItems.price}
         </div>
            <button onClick={()=>remove(CartItems)}class="badge bg-primary rounded-pill">X</button>
         </li>
  
        
        
    )
}
export default Cart;