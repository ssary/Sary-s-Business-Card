import React from "react";
export default function Info(){
    return(
        <div id='main_info'>
            <div id = 'personalPhoto'>
                <img  src="https://lh3.googleusercontent.com/a-/AFdZucohyDNfwM2Xn6Yf7csr9jCbtN9HF5fGjxZSASS9Xg=s315-p-no" alt='giyu'/>
            </div>
            <h2 id='Info-Name'>Sary Nasser</h2>
            <p id='Info-job'>Software Engineer</p>
            <a href='https://sarynasser1@gmail.com' target='_blank'>
                <button id='Info-email'>
                    <img src='https://cdn-icons-png.flaticon.com/512/546/546394.png'/>
                    Email</button>
            </a>
            <a href='https://www.linkedin.com/in/sary-elmansoury-23921017b/' target='_blank'>
                <button id='Info-Linkedin'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3536/3536505.png'/>
                    LinkedIn</button>
            
            </a>
        </div>
    );
}