import React from 'react';
import './Header.css';

function Header(props) {
    console.log('해더입니다.');

    // 각 메뉴 버튼의 색상을 관리할 상태
    const [menuColor, setMenuColor] = React.useState({
        menu1: 'black',
        menu2: 'gray'
    });

    // 메뉴 버튼 클릭 시 content 변경 및 색상 변경
    const handleMenuClick = (menu) => {
        // 모든 메뉴 버튼의 색상을 초기화
        setMenuColor({
            menu1: menu === 'menu1' ? 'black' : 'gray',
            menu2: menu === 'menu2' ? 'black' : 'gray'
        });

        // content 변경
        props.onChangeMenu(menu);
    };

    return (
        <div className="header_layout">
            <div className="logo_layout">
                <img src='logo192.png' alt='Logo' className='logo-image' style={{ width: '25px' }} />
                <span className='logo_text' style={{ fontSize: '21px', marginLeft: '5px' }}>ReactLogo</span>
            </div>
            <div className="menu_layout">
                <div className='menu'>
                    <div className='menu_button' style={{ color: menuColor.menu1 }} onClick={() => handleMenuClick('menu1')}>
                        <p>투데이</p>
                    </div>
                    <div className='menu_button' style={{ color: menuColor.menu2 }} onClick={() => handleMenuClick('menu2')}>
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
    );
}

export default Header;
