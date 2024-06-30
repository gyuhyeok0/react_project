import React from 'react';
import './AiRecommend.css';

function AiRecommend() {
    return (
        <div className='aiRecommend_layout'>
            <div className='header'>
                <span className='title'>분석1</span>
                <span className='score'>● 83점</span>
            </div>
            <div className='progressBar'></div>
            <div className='description'>
                최근 한달 데이터 분석 내용
            </div>
            <div className='content'>
                {/* 데이터 분석 내용 추가 */}
            </div>
            <div className="bubbles">
                <div className="bubble bubble1"></div>
                <div className="bubble bubble2"></div>
                <div className="bubble bubble3"></div>
            </div>
        </div>
    );
}

export default AiRecommend;
