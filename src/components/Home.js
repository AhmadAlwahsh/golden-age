import React, { useState } from 'react';
import Wobble from 'react-reveal/Wobble'

function Home() {
    

    return(
        <section className='home' id='home'>
            <div className='container'>
                <Wobble>
                    <div className='text-box'>
                        <h1>سلسلة نهاية العصر الذهبي للإسلام</h1>
                        <p>فيديوهات تروي أحداث الغزو المغولي لدول الإسلام.</p>
                        <a className='more' href="#about">المزيد عنا</a>
                        <a className='down' href="#gold"><i className="bi bi-arrow-down"></i></a>
                    </div>
                </Wobble>
            </div>
        </section>
    );
}

export default Home;
