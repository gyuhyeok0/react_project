import React, { useState, useMemo } from 'react';
import Header from '../Header/Header';
import Menu1 from '../Contents/Menu1';
import Menu2 from '../Contents/Menu2';
import Footer from '../Footer/Footer';
import './Main.css';

function Main() {
  console.log('메인페이지 입니다.');

  //  content 이동 관련 state
  const [menu, setMenu] = useState('menu1');  // 초기값은 content1

  // Content 이동: Header Menu 에서 prop 로 받아온 값을 위한 함수
  const changeMenu = (newMenu) => {
    setMenu(newMenu);
  };

  // Header 컴포넌트를 useMemo를 사용하여 메모이제이션
  const memoizedHeader = useMemo(() => <Header onChangeMenu={changeMenu} />, []);

  // Footer 컴포넌트를 useMemo를 사용하여 메모이제이션
  const memoizedFooter = useMemo(() => <Footer />, []);

  return (
    <div className="layout">
      {memoizedHeader}

      {menu === 'menu1' && <Menu1 />}
      {menu === 'menu2' && <Menu2 />}  

      {memoizedFooter}
    </div>
  );
}

export default Main;
