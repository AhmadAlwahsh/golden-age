import React from 'react';
import Zoom from 'react-reveal/Zoom'

function Msg() {
    return (
        <section className='msg' id='msg'>
            <div className='container'>
                <Zoom >
                    <div className='box'>
                        <i className="bi bi-book-half"></i>
                        <h3>تعلم</h3>
                        <p>التعلم بالطبع أحد أسمى غايات هذا المشروع,فالحاضر مبني على الماضي,التاريخ الإسلامي له دور كبير في ميدان حشد الطاقات الأمة الإسلامية.</p>
                    </div>
                </Zoom>
                <Zoom >
                    <div className='box'>
                        <i className="bi bi-lightbulb-fill"></i>
                        <h3>عبرة</h3>
                        <p>الخراب الذي حصل في القرن السادس للهجرة هو درس لكل الشعوب والأمم ,سيناريو الانهيار هذا تكرر ويتكرر وسيتكرر.</p>
                    </div>
                </Zoom>
                <Zoom >
                    <div className='box'>
                        <i className="bi bi-tree-fill"></i>
                        <h3>إثراء</h3>
                        <p>رغم صغر مشروعنا وضعف إمكانياتنا , إلا أننا على يقين من أن بصمتنا قادرة على إضافة الكثير إلى محتوانا العربي والإسلامي.</p>
                    </div>
                </Zoom>
                <Zoom >
                    <div className='box'>
                        <i className="bi bi-heart-fill"></i>
                        <h3>إنتماء</h3>
                        <p>الحكايات هذه تحرك شيئا خاملا في القلب ,سعادة عند سماع قصة نصر وحزن عند سماع نبأ هزيمة ,هذي العوامل قادرة على صنع روح انتماء لا مثيل لها.</p>
                    </div>
                </Zoom>
            </div>
        </section>
    );
}

export default Msg;
