import React, {useState,useEffect, useContext} from 'react';
import CartContext from '../Store/cart-contex';

const Shop = (props) => {

  const cartCtx = useContext(CartContext);

  const {items} = cartCtx;

    const[id,setId] =useState();
    const[name,setName] = useState();
    const[desc,setDesc] = useState();
    const[price,setPrice] = useState();
    const[qty,setQty] = useState();
    const[formvalue,setformvalue] = useState([]);


    const idvalue = (event) => {
        setId(event.target.value);
        
      };
      console.log(id);
    
      const namevalue= (event) => {
        setName(event.target.value);
      };
    
      const descvalue=(event)=>{
        setDesc(event.target.value);
      };
    
      const pricevalue=(event)=>{
        setPrice(event.target.value);
      }

      const qtyvalue = (event) =>{
        setQty(event.target.value);

      }

      const submithandler = (event) =>{
        event.preventDefault();
          const PId=id;
          const PName=name;
          const PDesc=desc;
          const PPrice=price;
          const PQty=qty;
         
          
          let obj={
            PId,
            PName,
            PDesc,
            PPrice,
            PQty,
            
            
          };
          setformvalue([...formvalue, obj]);
      
          props.onSaveData(PId,PName,PDesc,PPrice,PQty);
      
         setId("");
         setName("");
         setDesc("");
         setPrice("");
         setQty("");
               
        };
      
        useEffect(() => {
          localStorage.setItem(id, JSON.stringify());
        },[id],formvalue);
        return (
          <div>
            <form onSubmit={submithandler} value={formvalue}>
              <div>
              <label htmlFor="productid">Product ID</label>
              <input
                type="number"
                id="productid"
                required
                onChange={idvalue}
                value={id}
              />
               <label htmlFor="productname"> Name</label>
              <input
                type="text"
                id="productname"
                onChange={namevalue}
                value={name}
              />
              <label htmlFor="Desc">Description</label>
              <input type="text"
              id="Desc"
              required
              onChange={descvalue}
              value={desc}
              />
              <label htmlFor="sellingprice"> Price</label>
              <input
                type="number"
                id="sellingprice"
                min="0" 
                requied
                onChange={pricevalue}
                value={price}
              />
             
              <label htmlFor="productqty">Quantity</label>
              <input 
              type="number"
              id="productqty"
              onChange={qtyvalue}
              value={qty}
              />
      
      
                
              </div>
              
                <button type="submit" >
                  Add product
                 
                </button>
                <button>
               
                  <span>your Cart</span>
                  <span></span>
                </button>
              
            </form>
      
          </div>
        );

  
}

export default Shop;


