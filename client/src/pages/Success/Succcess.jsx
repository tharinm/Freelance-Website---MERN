import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router';
import newRequest from '../../utils/newRequest';

export default function Succcess() {

  const { search } = useLocation();

  const navigate = useNavigate();

  //to catch params in url
  const params = new URLSearchParams(search)

  //catch payment_inten in URL
  const payment_intent=params.get("payment_intent")

  useEffect(() => {
    const makeRequest = async () => {
      try { 
        await newRequest.put('/orders', { payment_intent })
         setTimeout(() => {
           navigate("/orders");
         }, 5000);
       
      }
      catch(err){
        console.log(err)
      }
    }
    makeRequest()
  },[])

  return (
    <div>
      Payment successful. You are being redirected to the orders page. Please do
      not close the page
    </div>
  );
}
