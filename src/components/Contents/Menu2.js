/*
    두번째 메뉴 페이지 입니다.
    작성일자 6월 28일
*/
import './Menu1.css';
import AiRecommend from './Menu1Content/AiRecommend';

function Menu1(){

    console.log('Mene2 영역입니다.')

    return(
        <>
            <div className="menu2_layout">
                <div className='ai_layout' style={{display: 'flex', justifyContent: 'center'}}>
                    <div className='flex_wrap' style={{width: '90%'}}>
                        <AiRecommend/>
                        <button>1</button>
                        <button>2</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu1;