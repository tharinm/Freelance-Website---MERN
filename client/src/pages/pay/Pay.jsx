import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";
import newRequest from "../../utils/newRequest";
import CheckoutForm from "../../components/checkout/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51N3txCGOdEkVtgFTXdsyedUoPdBIjbdvjvU3VVnZ2yMGmrSxyDgtegXokTs0xWvEmlOqQYDwKtwSIWgAfaJp7ihK00QNJ7yRmd"
);

export default function Pay() {
  const { id } = useParams()

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const makeRequest = async () => {
      try {
          const res = await newRequest.post(`orders/create-payment-intent/${id}`);
          setClientSecret(res.data.clientSecret)
      } catch (err) {
        console.log(err);
      }
      };
      
      makeRequest()
  }, []);
    
    const appearance = {
      theme: "stripe",
    };
    const options = {
      clientSecret,
      appearance,
    };

    return (
      <div className="pay">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
          <CheckoutForm/>
          </Elements>
        )}
      </div>
    );
}
