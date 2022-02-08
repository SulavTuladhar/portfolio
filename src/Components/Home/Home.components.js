import React, { Component } from 'react';
import { Content } from '../Content/Content.components';
import { SidebarHeader } from '../Sidebar&Header/Sidebar&Header.components';

import './Home.components.css'

export class HomeComponent extends Component {
  render() {
    return (
        <>
        <header className='container-fluid' style={{backgroundColor: '#7510f7', height: '30vh'}}>

        </header>
        <section className='pt-3' style={{backgroundColor: 'rgb(24, 24, 24)', color: '#fff'}}>
            <div className='container' style={{marginTop: '30vh'}}>
                <div className='row'>
                    <div className='col-3 mb-4 p-0' style={{position: 'static'}}>
                        <div className='sidebar'>
                        <SidebarHeader />
                        </div>
                    </div>
                    <div className='col-8 content'>
                        <Content />
                    </div>
                </div>
            </div>
           
        </section>
        </>
    )
  }
}
