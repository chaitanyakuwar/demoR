import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {Product} from './Product';

const Button1 = () => {
    const btn=useNavigate();
  return (
    <>
        <button onClick={()=>btn('card1')}>click me</button>
        <Link to={'/product'}>Services</Link>
    </>
  )
}

export default Button1