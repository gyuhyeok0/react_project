/*
  로그인 첫화면
  작성일자 : 6월 27일
  업데이트 : --
*/

import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import './Login.css';

// 라우터 함수
function Login() {
  const navigate = useNavigate(); 

  const handleKakaoLogin = () => {
    navigate('/user/home');
  };

  console.log('로그인 페이지')
  
  return (
    <div className='login-layout'>
      <div className='wrap'>
        <div className='wrap2'>
          <div className='login-container'>
            <img src='logo192.png' alt='Login' className='login-image' />
            <div className='login-buttons'>
              <button className='kakao-login' onClick={handleKakaoLogin}>카카오톡으로 로그인</button>
              <button className='apple-login'>Apple로 로그인</button>
              <button className='email-signup'>이메일 가입</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
