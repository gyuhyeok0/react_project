import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './Menu2.css';
import AiPhysicalAbility from './Menu2Content/category1/AiPhysicalAbility';
import AiNutrients from './Menu2Content/category2/AiNutrients';
import CategoryPage1 from './Menu2Content/category1/CategoryPage1';
import CategoryPage2 from './Menu2Content/category2/CategoryPage2';

function Menu2() {
    console.log('Menu2 컴포넌트 렌더링');

    const navigate = useNavigate();
    const location = useLocation();

    const [category, setCategory] = useState({
        category1: { color: 'black' },
        category2: { color: 'gray' }
    });

    useEffect(() => {
        console.log('useEffect 호출됨', location.pathname);
        const currentCategory = location.pathname.split('/').pop();
        const newCategory1Color = currentCategory === 'category1' ? 'black' : 'gray';
        const newCategory2Color = currentCategory === 'category2' ? 'black' : 'gray';

        if (category.category1.color !== newCategory1Color || category.category2.color !== newCategory2Color) {
            setCategory({
                category1: { color: newCategory1Color },
                category2: { color: newCategory2Color }
            });
        }
    }, [location.pathname, category.category1.color, category.category2.color]);

    const handleCategoryClick = (category) => {
        console.log('카테고리 클릭됨:', category);
        navigate(`/user/today/${category}`);
        setCategory({
            category1: category === 'category1' ? { color: 'black' } : { color: 'gray' },
            category2: category === 'category2' ? { color: 'black' } : { color: 'gray' }
        });
    };

    return (
        <>
            <div className="menu2_layout">
                <div className='ai_layout' style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='flex_wrap'>
                        {location.pathname.includes('category1') && <AiPhysicalAbility />}
                        {location.pathname.includes('category2') && <AiNutrients />}
                        <div style={{ fontSize: '20px', fontWeight: 'normal' }}>
                            <div className= "categoryText">Category</div>
                        </div>
                        <div style={{ display: 'flex', gap: '15px', color: 'gray', fontWeight: 'bold', marginBottom: '3px' }}>
                            <button className="buttonCategory" style={category.category1} onClick={() => handleCategoryClick('category1')}>one</button>
                            <button className="buttonCategory" style={category.category2} onClick={() => handleCategoryClick('category2')}>two</button>
                        </div>
                        <Routes>
                            <Route path="category1" element={<CategoryPage1 />} />
                            <Route path="category2" element={<CategoryPage2 />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu2;
