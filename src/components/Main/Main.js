import React, { useMemo, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Menu1 from '../Contents/Menu1';
import Menu2 from '../Contents/Menu2';
import Footer from '../Footer/Footer';
import './Main.css';

function Main() {
  console.log('메인 핸들러 입니다.');

  const navigate = useNavigate();

  const changeMenu = useCallback((newMenu) => {
    navigate(`/user/${newMenu}`);
  }, [navigate]);

  const memoizedHeader = useMemo(() => <Header onChangeMenu={changeMenu} />, [changeMenu]);
  const memoizedFooter = useMemo(() => <Footer />, []);

  return (
    <div className="layout">
      {memoizedHeader}
      <Routes>
        <Route path="/home" element={<Menu1 />} />
        <Route path="/today/*" element={<Menu2 />} />
      </Routes>
      {memoizedFooter}
    </div>
  );
}

export default Main;
