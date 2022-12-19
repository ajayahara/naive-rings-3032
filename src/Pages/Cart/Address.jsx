import React, { useEffect, useState } from 'react'
import { AddressItem } from '../../Component/Cart/AddressItem'
import { DeliveryAddress } from '../../Component/Cart/DeliveryAddress'
import {AddAddress} from "../../Component/Cart/AddAddress"
import { NoAddress } from '../../Component/Cart/NoAddress'
import { PaymentDetils } from '../../Component/Cart/PaymentDetils'
import "../Cart/Address.css"
import { useNavigate } from 'react-router'
import axios from 'axios'
export const Address = () => {
  let [active,setActive]=useState(false)
  let navigate=useNavigate()
  let [cart,setCart]=useState([])
  let [ad,setAdd]=useState(null);
  let [ad1,setAd1]=useState({
    a:"",
    b:"",
    c:"",
    d:"",
    e:"",
    f:"",
    g:"",
    h:"",
    i:"",
    j:""
  })
  let [cartPrice,setCartPrice]=useState(0);
  let onchange=(e)=>{
      let {name,value}=e.target;
      setAd1({...ad1,[name]:value})
  }
  let onsubmit=()=>{
    setAdd(ad1)
    setActive(false)
  }
  useEffect(()=>{
    axios.get("https://kiwi-discovered-pyjama.glitch.me/cart").then((r)=>{
        setCart(r.data);
    })
},[])
useEffect(()=>{
  let x=cart.reduce((total,el)=>{
      return total+el.price;
  },0)
   setCartPrice(x)
  },[cart])
  return (
    <div className='Address'>
      <br />
      <div>
        <div>Order Summary</div>
        <div></div>
      </div>
      <div>
        <div>
        
          {(ad==null)?  <NoAddress setActive={setActive} active={active}/>:<DeliveryAddress setActive={setActive} ad={ad}/>}
          <div className='basket'>
            <div>
              <div>Groceries Basket <span>{`(${cart.length} items)`}</span></div>
              <div></div>
            </div>
            <div>
            {cart.length&&cart.map((el)=>{
                                return  <AddressItem  key={el.id} {...el}/>
                            })}
            
            </div>
          </div>
        </div>
        <div>
          <PaymentDetils cartPrice={cartPrice}/>
          <div className='PaymentButton'><button onClick={()=>{
            localStorage.setItem("price",cartPrice)
              navigate('/payment')
          } }>Make Payment</button></div>
        </div>
      </div>
      <AddAddress active={active} setActive={setActive} onsubmit={onsubmit} onchange={onchange} />
    </div>
  )
}
