/*
    해더 입니다.
    작성일자 : 6월 28일
*/

import React from 'react';
import './Header.css';

function Header(props) {
    console.log('해더입니다.');

     // 각 메뉴 버튼의 색상과 보더를 관리할 상태
     const [menuStyle, setMenuStyle] = React.useState({
        menu1: { color: 'black', borderBottom: '3px solid skyblue', paddingBottom: '10px' },
        menu2: { color: 'gray', borderBottom: 'none', paddingBottom: '10px' }
    });

    // 메뉴 버튼 클릭 시 menu 변경 및 스타일 변경
    const handleMenuClick = (menu) => {
        setMenuStyle({
            menu1: menu === 'menu1' ? { color: 'black', borderBottom: '3px solid skyblue', paddingBottom: '10px' } : { color: 'gray', borderBottom: 'none', paddingBottom: '10px' },
            menu2: menu === 'menu2' ? { color: 'black', borderBottom: '3px solid skyblue', paddingBottom: '10px' } : { color: 'gray', borderBottom: 'none', paddingBottom: '10px' }
        });

        // prop menu 
        props.onChangeMenu(menu);
    };

    return (
        <div className="header_layout">
            <div className='flex_wrap'>
                <div className="logo_layout">
                    <img src='logo192.png' alt='Logo' className='logo-image' style={{ width: '25px' }} />
                    <span className='logo_text' style={{ fontSize: '21px', marginLeft: '5px' }}>ReactLogo</span>
                </div>
                <div className="menu_layout">
                    <div className='menu'>
                        <div 
                            className='menu_button' 
                            style={menuStyle.menu1} 
                            onClick={() => handleMenuClick('menu1')}
                        >
                            <p>투데이</p>
                        </div>
                        <div 
                            className='menu_button' 
                            style={menuStyle.menu2} 
                            onClick={() => handleMenuClick('menu2')}
                        >
                            <p>클래스</p>
                        </div>
                    </div>
                    <div className='icon'>
                        <div className='icon_button'>
                            <p>검색</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
