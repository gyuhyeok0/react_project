/*
    Menu1 페이지 입니다.
    작성일자 6월 28일
*/

import './Menu1.css';
import AiRecommend from './Menu1Content/AiRecommend';
import ExerciseCard from './Menu1Content/ExerciseCard';
import ExerciseList from './Menu1Content/ExerciseList';

function Menu1() {
    console.log('Menu1 영역입니다.')

    return (
        <>
            <div className="menu1_layout">
                <div className='ai_layout'>
                    <div className='flex_wrap'>
                        <AiRecommend/>
                    </div>
                </div>
                <ExerciseCard/>
                <div className='ai_layout'>
                    <div className='flex_wrap'>
                        <ExerciseList/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu1;
