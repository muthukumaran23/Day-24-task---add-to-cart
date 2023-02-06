import ReactStars from "react-rating-stars-component";

function Card({details,handleAddToCart,CartItems}){
      const ratingChanged = (rating) =>{
       alert(`You have given ${rating} Star rating for us.`)
  }
    return(
   
  
  <>
      <div className="col-lg-4 mb-2">
         <div class="card" style={{ width: "15rem" }}>
          
             <img src={details.image} class="card-img-top" alt="..."/>
             <div class="card-body">
             <h5 class="card-title">Brand Name:{details.brand}</h5>
             <p class="card-text">Price:{details.price}</p>
             <ReactStars size={45} count={5} isHalf={true} onChange={ratingChanged}></ReactStars>
             <button disabled={CartItems.some((obj)=> obj.id == details.id)}  class="btn btn-primary" onClick={()=>{handleAddToCart(details)}}>Add to Cart</button>
       </div>
   </div>
 </div>

  </>      
    )   
}
export default Card;