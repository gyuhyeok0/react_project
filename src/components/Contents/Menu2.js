import React, { useState } from 'react';
import './Menu2.css';
import AiPhysicalAbility from './Menu2Content/AiPhysicalAbility';

function Menu2() {
    console.log('Menu2 영역입니다.');

    // 각 카테고리 버튼의 색상을 관리할 상태
    const [category, setCategory] = useState({
        category1: { color: 'black' },
        category2: { color: 'gray' }
    });

    // 카테고리 버튼 클릭 시 카테고리 변경 및 스타일 변경
    const handleCategoryClick = (category) => {
        setCategory({
            category1: category === 'category1' ? { color: 'black' } : { color: 'gray' },
            category2: category === 'category2' ? { color: 'black' } : { color: 'gray' }
        });
        setCategoryPage(category);
    };

    // content 이동 관련 state
    const [categoryPage, setCategoryPage] = useState('category1');

    return (
        <>
            <div className="menu2_layout">
                <div className='ai_layout' style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='flex_wrap'>
                        <AiPhysicalAbility />
                        <div style={{ fontSize: '20px', fontWeight: 'normal' }}>
                            <p style={{ margin: '10px 0 3px 0' }}>Category</p>
                        </div>
                        <div style={{ display: 'flex', gap: '15px', color: 'gray', fontWeight: 'bold', marginBottom: '3px' }}>
                            <p style={category.category1} onClick={() => handleCategoryClick('category1')}>one</p>
                            <p style={category.category2} onClick={() => handleCategoryClick('category2')}>two</p>
                        </div>
                        {categoryPage === 'category1' && <CategoryPage1 />}
                        {categoryPage === 'category2' && <CategoryPage2 />}
                    </div>
                </div>
            </div>
        </>
    );
}

// 카테고리 페이지 1 컴포넌트
function CategoryPage1() {
    console.log('categoryPage 1')
    return (
    
        <div style={{width:'100%', height: '500px', backgroundColor:"skyblue"}}>
            <p>여기에 카테고리 1의 내용이 표시됩니다.</p>
        </div>
    );
}

// 카테고리 페이지 2 컴포넌트
function CategoryPage2() {
    console.log('categoryPage2')
    return (
        <div style={{width:'100%', height: '500px', backgroundColor:"pink"}}>
            <p>여기에 카테고리 2의 내용이 표시됩니다.</p>
        </div>
    );
}

export default Menu2;
