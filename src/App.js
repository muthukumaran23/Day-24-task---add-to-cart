import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cartitems';
import { useState } from 'react';


function App() {
  const data=[
    {
    image:"https://htcms-prod-images.s3.ap-south-1.amazonaws.com/htmobile4/P34896/images/Design/138444-v1-samsung-galaxy-m31-8gb-ram-mobile-phone-large-5.jpg",
    brand:"SAMSUNG",
    price: 15000,
    id:1
   },
   {
    image:"https://m.media-amazon.com/images/I/71IIKypQvsL._SL1500_.jpg",
    brand:"JBL",
    price:8000,
    id:2
   },
   {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGi82ywVX39FxH_LD6JOLPGNi7fxaNx-lxQmGPr0Ra62WzJ-YDeLG-jhAi5gYSsHLvTU&usqp=CAU",
    brand:"PHILPHS",
    price:4000,
    id:3
   },
   {
    image:"https://m.media-amazon.com/images/I/61WFNqf8hVL._SL1500_.jpg",
    brand:"SONY",
    price:5000,
    id:4
   },
   {
    image:"https://img01.ztat.net/article/spp-media-p1/4bb03d3347154af2b411982497e9eb78/6779cccd1553471c906b30336f0107cf.jpg?imwidth=1800&filter=packshot",
    brand:"PUMA",
    price:8000,
    id:5
   },
   {
    image:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605155794/Croma%20Assets/Gaming/Gaming%20Consoles/Images/8923255242782.png/mxw_640,f_auto",
    brand:"SONY-PS4",
    price:28000,
    id:6
   }


]
  const [datas,setDatas]=useState([])
  const [total,setTotal]=useState(0)

  //function trigger when onclick in Card.js
    
     let addToCart=(item)=>{
    setDatas([...datas,item])
    setTotal(total+item.price)
  }
  //function trigger when onclick in CartItems
  // The findIndex method is one of the default method of js for to find the index 
  
   let removeFromCart=(item)=>{
   let index= datas.findIndex((obi)=> Object.id == item.id)
   datas.splice(index,1)
   setDatas([...datas])
   setTotal(total-item.price)
  }
  return (
    <div className="container">
     <div className="row">
      <div className="col-lg-8">
         <div className="row">
      
     {data.map((ele)=> <Card details={ele} handleAddToCart={addToCart} CartItems={datas}/>)}
  </div>
  </div>

   {/* conditional rendering */}
   <div className="col-lg-4">
     {datas.length ===0 ? <div>No items in Cart</div> : <ol class="list-group list-group-numbered">{datas.map((item)=> <Cart CartItems={item}  remove={removeFromCart}/>)}</ol>}
     <h1>Total={total}</h1>
    </div>
    </div>
    </div>  
  );
}

export default App;