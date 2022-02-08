import React, { Component } from 'react';

import './Sidebar.components.css'

export  class SidebarHeader extends Component {
  render() {
    return(
        <>
            <div style={{background: 'rgb(29, 29, 29)'}}>
                    <div className='pt-5 pb-5 text-center bg-dark'>
                        <img src='./images/portflio.jpg' className='profile-picture' alt='profile-img'/>
                        <h4 className='mt-4'> Sulav Tuladhar </h4>
                        <a style={{fontSize: 'normal', color: 'rgb(187, 184, 184)'}}> Full Stack Web Developer </a>
                        <div className='icon-container mt-3'>
                          <div className='icon'> 
                            <a href='https://www.linkedin.com/in/sulav-tuladhar-508089190/' target='_blank'> <i class="fab fa-linkedin-in"></i> </a>
                            <a href='https://github.com/SulavTuladhar' target='_blank'> <i class="fab fa-github-alt"></i> </a>
                            <a href='https://www.instagram.com/sulavtuladhar/' target='_blank'> <i class="fab fa-instagram"></i> </a>
                          </div>
                        </div>
                        
                    </div>

                    <div className='px-5 pt-4 pb-4 bg-dark mt-2'>
                        <a href='#about-me' className='sidebar-nav'> <h5> &#9205; About Me </h5> </a>
                        <a href='#project' className='sidebar-nav'> <h5> &#9205; Project </h5> </a>
                        <a href='#get-in-touch' className='sidebar-nav'> <h5> &#9205; Get In Touch </h5> </a>
                    </div>
            </div>
        </>
    )
  }
}
