import '../styles/Payment.css';
import React, { useState } from 'react';
import  Footer  from '../components/Footer.js';

const Payment = () => {
    return(
        <div className='orderPage'>
            <div className='orderContainer'>
                <h2>주문서</h2>
                <div className='orderForm'>
                    <h3 className='textH3'>주문상품</h3>
                </div>
            </div>
        </div>
    )
}

export default Payment;