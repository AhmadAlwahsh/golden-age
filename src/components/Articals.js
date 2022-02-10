import React from 'react';
import Jello from 'react-reveal/Jello'

function Articals() {
    return(
        <section className='articals' id='articals'>
            <div className='container'>
                <Articale name="الجزيرة" href="https://www.aljazeera.net/blogs/2016/9/19/%D9%83%D9%8A%D9%81-%D8%A8%D8%AF%D8%A3-%D8%A7%D9%84%D8%B9%D8%B5%D8%B1-%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A-%D9%84%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85"/>
                <Articale name="جوجل" href="https://artsandculture.google.com/entity/m02_jdh?hl=ar" />
                <Articale name="سطور" href="https://sotor.com/%D8%A7%D9%84%D8%B9%D8%B5%D9%88%D8%B1-%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A%D8%A9-%D9%84%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85/" />
                <Articale name="أُجيب" href="https://ujeeb.com/%D9%85%D8%A7-%D9%87%D9%88-%D8%A7%D9%84%D8%B9%D8%B5%D8%B1-%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A-%D9%81%D9%8A-%D8%A7%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85" />
                <Articale name="ويكيبيديا" href="https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B9%D8%B5%D8%B1_%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A_%D9%84%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85" />
                <Articale name="موسوعتي" href="https://mawsoati.com/plus/%D8%A7/%D9%84/%D8%B9/%D8%A7%D9%84%D8%B9%D8%B5%D8%B1_%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A_%D9%84%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85.html" />
                <Articale name="عربي 21" href="https://arabi21.com/story/1048871/%D9%84%D9%85%D8%A7%D8%B0%D8%A7-%D9%8A%D8%B3%D8%B9%D9%89-%D8%A7%D9%84%D8%BA%D8%B1%D8%A8-%D9%84%D8%A5%D8%AE%D9%81%D8%A7%D8%A1-%D8%AD%D9%82%D8%A7%D8%A6%D9%82-%D8%A7%D9%84%D8%B9%D8%B5%D8%B1-%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A-%D9%84%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85" />
            </div>
        </section>
    );
}

function Articale(props){

    return(
        <Jello>
            <a className="artical" href={props.href} target="_blank"><h3>مقال <span>{props.name}</span></h3><i className="bi bi-box-arrow-left"></i></a>
        </Jello>
    )
}

export default Articals;
