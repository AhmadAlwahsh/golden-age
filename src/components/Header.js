import React from 'react';

function Header() {

    function burger(){
        document.getElementById('nav').style.display = 'flex';
    }

    return(
        <header>
            <div className='container'>
                <a href="index.html" className='logo'>
                    <h3>نهاية العصر الذهبي للإسلام</h3>
                    <img src='Images/logo.png' width='50px'></img>
                </a>
                <nav id='nav'>
                    <li><a href="#gold">العصر الذهبي</a></li>
                    <li><a href="#msg">رسالتنا</a></li>
                    <li><a href="#works">أعمالنا</a></li>
                    <li><a href="#articals">مقالات</a></li>
                </nav>
                <i onClick={() => {
                    if (document.getElementById('nav').classList.contains('active-list') === true){
                        document.getElementById('nav').classList.remove('active-list');
                    }else{
                        document.getElementById('nav').classList.add('active-list');
                    }
                }} className='bi bi-list' id='list'></i>
            </div>
        </header>
    );
}

export default Header;
