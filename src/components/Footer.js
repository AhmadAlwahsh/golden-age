import React from 'react';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <img src="Images/logo.png" width='100px' alt="Logo" />
                <p>تواصل معنا</p>
                <div className="social-icons">
                    <a href='https://web.facebook.com/AhmadAlwahsh07'><i className="bi bi-facebook"></i></a>
                    <a href='https://ahmadalwahsh.netlify.app'><i className="bi bi-person-fill"></i></a>
                    <a href='https://www.instagram.com/ahmadalwahsh007/'><i className="bi bi-instagram"></i></a>
                    <a href='https://www.linkedin.com/in/ahmad-alwahsh-2b6508228/'><i className="bi bi-linkedin"></i></a>
                </div>
                <p className="copyright">&copy; 2022 <a href='https://ahmadalwahsh.netlify.app'>أحمد الوحش</a> جميع الحقوق محفوظة</p>
            </div>
        </div>
    );
}

export default Footer;
