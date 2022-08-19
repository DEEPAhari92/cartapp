import App from "./App";
import CartItem from "./CartItem";

function Card({item,cartItems,handleAddToCart}){
    return (
    <div className="col-lg-4 mb-2">
    <div class="card" style={{width: "17rem;"}}>
      <img src="https://picsum.photos/id/237/200/150" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text">{item.price}</p>
          <button disabled = {(cartItems.some((obj)=>obj.id===item.id))}  onClick={()=>{handleAddToCart(item)}} class="btn btn-primary">Add to Cart</button>
        </div>
    </div>
    </div>
    )
    }
    
    export default Card;