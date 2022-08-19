import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "./Card"
import CartItem from './CartItem';
import { useState } from 'react';

function App() {
  
  const [cart,setCart] = useState([]);
  const [total,setTotal] = useState(0);
  const [products,setProduct]=useState([
    {
      id: 1,
      title: "iphone",
      price: 40000
    },
    {
      id: 2,
      title: "imac",
      price: 50000
    },
    {
      id: 3,
      title: "iwatch",
      price: 30000
    },
    {
      id: 4,
      title: "ipen",
      price: 50000
    },
    {
      id: 5,
      title: "ipad",
      price: 10000
    },
    {
      id: 6,
      title: "icloth",
      price: 20000
    }
  ]);
  let addToCart = (item) =>{
    setCart([...cart,item]);
    setTotal(total+item.price);
  }
  let removeFromCart = (item)=>{
let index = cart.findIndex((obj)=>obj.id === item.id);
cart.splice(index,1);
setCart([...cart]);
setTotal(total-item.price)
  }
  return (

    <div className="container">
      <div className="row">
        <div className="col-lg-8 ">
          <div className="row">
            {
              products.map((item) => {
                return <Card item={item} cartItems={cart} handleAddToCart={addToCart}></Card>
              })
            }
          </div>
        </div>
        <div className="col-lg-4">
          {
          cart.length ===0 ? <div><h1>"No item in cart"</h1></div> : <div className="row">
            <ol class="list-group list-group-numbered">
              {
                cart.map((cartItem)=>{
                  return <CartItem cartItem={cartItem} removeFromCart = {removeFromCart}></CartItem>
                })
              }
          

            </ol>
            <h1>Total-{total}</h1>
          </div>
}
        </div>
      </div>
    </div>
  );
}

export default App;
