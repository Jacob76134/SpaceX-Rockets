import React from 'react'
import Tilt from 'react-tilt'
import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';


function RocketCard(props) {

    const [opened, setOpened] = useState(false);

  return (
    <>
    <Modal centered size='xl' 
        opened={opened}
        onClose={() => setOpened(false)}
        title={props.name}
      >
        {   <div className='modal-top'>
                <div className='data-display'>
                    <img src={props.img} className='modal-img'></img>
                    <ul>
                        <li className='description-title'>
                            <h2>Stats</h2>
                            <svg width="103" height="1" viewBox="0 0 103 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="0.5" x2="103" y2="0.5" stroke="black"/></svg>
                        </li>
                        <li>First Flight: {props.first_flight}</li>
                        <li>Success Rate: {props.success_rate_pct}%</li>
                        <li>Height: {props.height}ft.</li>
                        <li>Stages: {props.stages}</li>
                        <li>Boosters: {props.boosters}</li>
                        <li><a href={props.wikipedia} target="_blank" rel="noopener noreferrer">More About this Rocket</a></li>
                    </ul>
                </div>
                <div className='left-container'> 
                    <div className='description'>
                            <div className='description-title'>
                                <h2>Description</h2>
                                <svg width="103" height="1" viewBox="0 0 103 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="0.5" x2="103" y2="0.5" stroke="black"/></svg>
                            </div>
                            <div className='description-body'>
                                {props.description}
                            </div>
                    </div>
                </div>  
            </div>
        }
    </Modal>

    <Tilt className="Tilt" options={{ max : 5, perspective: 500, scale: 1, easing: "cubic-bezier(.03,.98,.52,.99)" }} style={{ height: 300, width: 380 }} >
    <div className="Tilt-inner">  
        <div className='rocket-card'>
            <img src={props.img}></img>
            <div className='card-content'>
                <div className='card-title'>
                    <h2>{props.name}</h2>
                </div>
                <div className='info-button'>
                    <a onClick={() => setOpened(true)}>
                        <p>MORE INFO</p>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5406 44.8875C15.9548 44.3015 15.6257 43.5068 15.6257 42.6782C15.6257 41.8495 15.9548 41.0548 16.5406 40.4688L32.0094 25L16.5406 9.53128C15.9714 8.9419 15.6564 8.15251 15.6635 7.33315C15.6706 6.51378 15.9993 5.72999 16.5787 5.15059C17.1581 4.57119 17.9419 4.24254 18.7612 4.23542C19.5806 4.2283 20.37 4.54329 20.9594 5.11253L38.6375 22.7907C39.2234 23.3767 39.5525 24.1714 39.5525 25C39.5525 25.8287 39.2234 26.6234 38.6375 27.2094L20.9594 44.8875C20.3734 45.4734 19.5786 45.8025 18.75 45.8025C17.9214 45.8025 17.1267 45.4734 16.5406 44.8875V44.8875Z" fill="white"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </Tilt>
    </>
  )
}

export default RocketCard