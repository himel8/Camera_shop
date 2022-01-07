import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const Stripe = ({ data }) => {
  console.log(data);
  const { productName, _id, price, email } = data.row;
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(productName, _id, price, email);
  const desc = `Your are purchasing ${productName}`;

  useEffect(() => {
    fetch("https://lit-falls-18743.herokuapp.com/payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        tokenId: stripeToken?.id,
        amount: { price },
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [stripeToken]);
  console.log(stripeToken);
  if (stripeToken) {
    fetch(`https://lit-falls-18743.herokuapp.com/orders/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("paid successfull");
        }
      });
  }
  return (
    <div>
      {stripeToken ? (
        <span className="text-green-600 text-lg uppercase font-bold">PAID</span>
      ) : (
        <StripeCheckout
          name="Camera Shop"
          email={email}
          image="https://i.pinimg.com/originals/41/1a/60/411a605985ffea28ccf550d6a1442073.png"
          description={desc}
          amount={price * 100}
          token={onToken}
          stripeKey={process.env.REACT_APP_STRIPE_SECRET_KEY}
        />
      )}
    </div>
  );
};

export default Stripe;
