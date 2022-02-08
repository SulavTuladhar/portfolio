import React, { Component } from 'react';

import './Content.components.css';

export class Content extends Component {
  render() {
    return (
        <>
            <div>
                <div className='container pt-4 pb-4 bg-dark' id='about-me'>
                    <h2> About Me </h2>
                    <p> Hello There 🖐! </p>
                    <p> 
                        I'm a full Stack Web Developer. An energetic & imaginative young web developer,
                        able to build a web prsence from the ground up, from concept, navigation layout programming to UX and UI.
                    </p>
                    <p>
                        Here are a few technologies I've been working with recently: <br />
                        <div className='row mt-3'>
                            <div className='col-6'>
                                &#9205; JavaScript (ES6+) <br />
                                &#9205; React JS <br />
                                &#9205; Node.JS <br />
                            </div>
                            <div className='col-6'>
                                &#9205; Express JS <br />
                                &#9205; MongoDB <br />
                                &#9205; Mongoose <br />
                            </div>
                        </div>
                        
                        
                    </p>
                </div>

                <div className='container pt-4 pb-4 mt-3 bg-dark' id='project'>
                    <h2> My Projects </h2>
                        <div className='row d-flex align-items-center mt-5'>
                            <img className='col-8' src='./images/eventPlanner.jpg' alt='project-img' />
                            <div className='col-4 project-description-right'> 
                                <h5> Event Planner  </h5>    
                                <p className='tech-used'> React JS </p>
                                <button className='project-btn'> See more </button>
                            </div>
                        </div>

                        {/* <div className='row d-flex align-items-center mt-5'>
                        <div className='col-4 project-description-left'> 
                                <h5> Event Planner  </h5>    
                                <button className='project-btn'> See more </button>
                            </div>
                            <img className='col-8' src='./images/eventPlanner.jpg' alt='project-img' />
                        </div> */}
                </div>
            </div>

            <div className='container  pt-4 mt-3 bg-dark' id='get-in-touch'>
                <div className='text-center'>
                    <h2> Get In Touch </h2>
                    <p style={{fontSize: 'small'}}> 
                        Got a question or proposal, or just want <br />
                        to say hello ? Go ahead. 
                    </p>
                    <form className='mt-5'>

                        <div className='row text-start'>
                            <div className='col-6  d-flex flex-column'>
                                <label htmlFor='name'> Your Name </label>
                                <input type='text' id='name' className='bg-dark' />
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor='email'> Email Address </label>
                                <input type='email' id='email' className='bg-dark'/>
                            </div>
                            <div className='col-12 d-flex flex-column mt-4'>
                                <label htmlFor='message'> Your Message </label>
                                <textarea id='message' rows={4} className='bg-dark'> </textarea>
                            </div>
                        </div>
                        <button className='submit-btn mt-4 mb-5'> Send Message </button>
                    </form>
                </div>

            </div>
        </>
    )
  }
}
