import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div>There is web application, where you can just learn or </div>
      <div className='divider'> </div>
      <div className='reserved'>
        <div className='main-text'>© Erlan Artykbaev. All rights reserved.</div>
        <div className='links'>
          <div className='link'>
            <a target="_blank" href={'https://github.com/ErlanArtykbaev'}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 29C11.2956 29 12.0587 28.6839 12.6213 28.1213C13.1839 27.5587 13.5 26.7956 13.5 26V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.5 29C20.7044 29 19.9413 28.6839 19.3787 28.1213C18.8161 27.5587 18.5 26.7956 18.5 26V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 20H21C21.7956 20 22.5587 20.3161 23.1213 20.8787C23.6839 21.4413 24 22.2044 24 23V24C24 24.7956 24.3161 25.5587 24.8787 26.1213C25.4413 26.6839 26.2044 27 27 27" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 20H11C10.2044 20 9.44129 20.3161 8.87868 20.8787C8.31607 21.4413 8 22.2044 8 23V24C8 24.7956 7.68393 25.5587 7.12132 26.1213C6.55871 26.6839 5.79565 27 5 27" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.06396 9.58797C7.71428 8.6832 7.57192 7.71153 7.64739 6.74447C7.72285 5.77741 8.0142 4.83958 8.50001 4C9.59164 3.99938 10.6658 4.27391 11.6233 4.79823C12.5808 5.32256 13.3907 6.07975 13.9781 6.99985V7H18.0219V6.99985C18.6094 6.07975 19.4192 5.32256 20.3767 4.79823C21.3342 4.27391 22.4084 3.99938 23.5 4C23.9858 4.83958 24.2772 5.77741 24.3526 6.74447C24.4281 7.71153 24.2857 8.6832 23.9361 9.58797V9.58797C24.6307 10.59 25.002 11.7807 25 13V14C25 15.5913 24.3679 17.1174 23.2426 18.2426C22.1174 19.3679 20.5913 20 19 20H13C11.4087 20 9.88259 19.3679 8.75737 18.2426C7.63215 17.1174 7.00001 15.5913 7.00001 14V13C6.99805 11.7807 7.36933 10.59 8.06396 9.58797L8.06396 9.58797Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div className='link'>
            <a target="_blank" href={'https://www.linkedin.com/in/erlan-artykbaev-91492917b/'}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 14.0001V22.0001" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 14.0001V22.0001" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 17.5001C15 16.5719 15.3687 15.6816 16.0251 15.0252C16.6815 14.3689 17.5717 14.0001 18.5 14.0001C19.4283 14.0001 20.3185 14.3689 20.9749 15.0252C21.6313 15.6816 22 16.5719 22 17.5001V22.0001" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 11.5C11.8284 11.5 12.5 10.8284 12.5 10C12.5 9.17157 11.8284 8.5 11 8.5C10.1716 8.5 9.5 9.17157 9.5 10C9.5 10.8284 10.1716 11.5 11 11.5Z" fill="white"/>
              </svg>
            </a>
          </div>
          <div className='link'>
            <a target="_blank" href={'https://t.me/erik_2405'}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 16.859L22.2397 26.7499C22.3697 26.8644 22.5272 26.9431 22.6969 26.9783C22.8665 27.0136 23.0423 27.0041 23.2072 26.951C23.3721 26.8978 23.5203 26.8027 23.6374 26.675C23.7544 26.5474 23.8363 26.3915 23.875 26.2226L28.5767 5.70604C28.6174 5.52865 28.6089 5.34354 28.5521 5.17064C28.4953 4.99774 28.3924 4.84361 28.2545 4.72487C28.1166 4.60613 27.9489 4.52727 27.7695 4.49679C27.5901 4.46631 27.4057 4.48537 27.2363 4.55191L4.16674 13.615C3.96568 13.694 3.79561 13.8359 3.68197 14.0196C3.56832 14.2033 3.51722 14.4189 3.53631 14.6341C3.55539 14.8492 3.64364 15.0525 3.78784 15.2133C3.93205 15.3741 4.12446 15.4839 4.33628 15.5263L11 16.859Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 16.8591L28.014 4.57117" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.6134 21.7988L12.7071 25.7051C12.5673 25.8449 12.3891 25.9402 12.1951 25.9787C12.0011 26.0173 11.8 25.9975 11.6173 25.9218C11.4346 25.8461 11.2784 25.718 11.1685 25.5535C11.0587 25.3891 11 25.1957 11 24.998V16.859" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 