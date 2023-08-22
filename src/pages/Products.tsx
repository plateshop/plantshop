import React, { useState } from 'react';
import  Footer  from '../components/Footer.js';
import '../styles/Products.css';

const Products: React.FC  = () => {
    return(
        <div className='ProductOuter'>
            <div className='productDetail'>
                <div className='productDetail-container'>
                    <div className='productDetail-imgarea'>
                        <img src='https://crowcanyon.co.kr/web/upload/NNEditor/20230105/D11_EBAFBCED8AB8_1.jpg' alt="Product 1"/>
                        <img src='https://crowcanyon.co.kr/web/upload/NNEditor/20230105/copy-1672909324-1111.jpg' alt="Product 2"/>
                        <img src='https://crowcanyon.co.kr/web/upload/NNEditor/20230105/copy-1672909346-D02_EC97B0ECB69CECBBB7.jpg' 
                        alt="Product 3"/>
                        <img src='	https://crowcanyon.co.kr/web/upload/NNEditor/20230…D9994EBA9B420ECBAA1ECB298202023-01-0520173229.jpg' alt="Product 4"/>
                        <img src='https://crowcanyon.co.kr/web/upload/NNEditor/20230105/copy-1672909368-EBB3B4ECA095EBB3B8_10.jpg' alt="Product 5"/>
                        <img src='https://crowcanyon.co.kr/web/upload/NNEditor/20230…D9994EBA9B420ECBAA1ECB298202023-01-0520173423.jpg' alt="Product 6"/>
                        <img src='	https://crowcanyon.co.kr/web/upload/NNEditor/20230105/copy-1672909394-190812_92267_1.jpg' alt="Product 7"/>
                        <img src='' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products