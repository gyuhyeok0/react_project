import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import './Login.css';

function Login() {
  const navigate = useNavigate(); // navigate 함수 선언

  const handleKakaoLogin = () => {
    // 카카오톡 로그인 버튼 클릭 시 /main 으로 이동
    navigate('/main');
  };

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
