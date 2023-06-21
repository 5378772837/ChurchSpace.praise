import React, { useState } from 'react';

const Give = (props) => {

const[name, setName]=useState()
const[CVV2, setCVV2]=useState()
const[cardNumber, setCardNumber]=useState()
const[amount, setAmount]=useState()
const[expDate, setExpDate]=useState()

const give = (e) => {
  e.preventDefault();
  const newDonation = {
    senderName: props.user.name,
    cardName:name,
    giftAmount:amount,
    card:cardNumber,
    code:CVV2,
    expiration:expDate
  };
//send card information to card service through their API or through their link
};

  return (
    <div className='flex-col fill'>
      <div className='flex-row center xl'>
        Please give to our Church.
      </div>
      <div className='flex-row center large'>
        It helps us deliver the Gospel of Christ to our hurting community.
      </div>
      <div className='flex-row center'>
        <div className='give-box'>
        <div className='flex-row-card center medium white'>
          Enter Your Credit Card Data to Give
        </div>
        <div className='flex-row-card center medium white'>
          Amout to Give: 
          <input className='amount-input-box' type="text"  onChange={(e) => setAmount(e.target.value)}></input>
        </div>
        <div className='flex-row-card center medium white'>
          Full Name: 
          <input className='name-input-box' value={name} type="text"  onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className='flex-row-card center medium white'>
          Card Number: 
          <input className='card-input-box' type="number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}></input>
        </div>
        <div className='flex-row-card center medium white'>
          CVV2 CODE: 
          <input className='amount-input-box' type="text"  onChange={(e) => setCVV2(e.target.value)}></input>
        </div>
        <div className='flex-row-card center medium white'>
          Expiration Date: 
          <input className='amount-input-box' type="date"  onChange={(e) => setExpDate(e.target.value)}></input>
        </div>
        <div className='flex-row-card center medium white'>
        <button className='button2' onClick={give}>Give</button>
        </div>
        </div>
      </div>
      


    </div>
  );
};

export default Give;