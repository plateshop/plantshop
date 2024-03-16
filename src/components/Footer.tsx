import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return(
        <div className='footer'>
            <div className='footerInner'>
                <div className='innerLayout'>
                    <div className='innerMain'>
                        <span style={{ fontSize: 'x-large' }}>
                            02-336-5288
                        </span>
                        <br />
                        <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
                            CS 고객센터 운영시간 평일 13:00 - 18:00
                        </span>
                        <br />
                        <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
                            신한은행 100-035-137650 예금주 : 스코프컴퍼니(주)
                        </span>
                        <br />
                        <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
                            기업구매 및 홀세일 문의 : sipark@scopeseoul.kr
                        </span>
                        <br />
                        <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
                            협업 및 마케팅 문의 : jykim@scopeseoul.kr
                        </span>
                        <br />
                        <p className='address'>
                            <span>스코프컴퍼니 주식회사</span>
                            "|"
                            <span>설혜윤</span>
                            "|"
                            <span>10945 경기도 파주시 월롱면 황소바위길 309-1 에이동</span>
                            "|"
                            <span>C.P.O: 전설아<a href='mailto:info@scopeseoul.kr'>(info@scopeseoul.kr)</a></span>
                            "|"
                            <span>License: [347-81-01800]</span>
                            "|"
                            <span>Online License: [2023-경기파주-0779]</span>
                            <span>[사업자정보확인]</span>
                            "|"
                            <span>Hosting by 카페24(주)</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
