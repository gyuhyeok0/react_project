import React from 'react';
import './Header.css';

function Header(props) {
  console.log('헤더입니다.');

  // 각 메뉴 버튼의 색상과 보더를 관리할 상태
  const [menuStyle, setMenuStyle] = React.useState({
    menu1: { color: 'black', borderBottom: '3px solid skyblue', paddingBottom: '10px' },
    menu2: { color: 'gray', borderBottom: 'none', paddingBottom: '10px' }
  });

  // 메뉴 버튼 클릭 시 menu 변경 및 스타일 변경
  const handleMenuClick = (menu) => {
    setMenuStyle({
      menu1: menu === 'home' ? { color: 'black', borderBottom: '3px solid skyblue', paddingBottom: '10px' } : { color: 'gray', borderBottom: 'none', paddingBottom: '10px' },
      menu2: menu === 'today' ? { color: 'black', borderBottom: '3px solid skyblue', paddingBottom: '10px' } : { color: 'gray', borderBottom: 'none', paddingBottom: '10px' }
    });

    // content 변경
    if (menu === 'today') {
      props.onChangeMenu('today/category1');
    } else {
      props.onChangeMenu('home');
    }
  };

  return (
    <div className="header_layout">
      <div className='flex_wrap'>
        <div className="logo_layout">
          <img src='/logo192.png' alt='Logo' className='logo-image' />
          <span className='logo_text' style={{ marginLeft: '6px' }}>ReactLogo</span>
        </div>
        <div className="menu_layout">
          <div className='menu'>
            <div 
              className='menu_button' 
              style={menuStyle.menu1} 
              onClick={() => handleMenuClick('home')}
            >
              <button className='buttonMenu'>Home</button>
            </div>
            <div 
              className='menu_button' 
              style={menuStyle.menu2} 
              onClick={() => handleMenuClick('today')}
            >
              <button className='buttonMenu'>Today</button>
            </div>
          </div>
          <div className='icon'>
            <p className='icon_button'>
                검색
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
