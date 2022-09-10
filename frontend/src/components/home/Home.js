import React, { useEffect } from 'react';

import { animate } from '../../utils/animate';

import ImageCard from './ImageCard';


const Home = () => {
    useEffect(() => {
        animate('.anim-inc-num');
    }, []);

    return (
        <>
            {/* Landing Section */}
            <div className="home-landing-img">
                <div className="mask"></div>
                <div className="landing-text">
                    <h1>Welcome to</h1>
                    <h1>ACM Women </h1>
                    <h1>Student Chapter</h1>
                    <h5 className='text-center'>🚧 Under Development 👩🏻‍💻🚧</h5>
                </div>
            </div>

            {/* Statistics */}
            <div className="home-statistics px-4 px-md-0">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                        <div className="col-md-3">
                            <div className="container">
                                <div className="row justify-content-center align-items-center home-statistics-row ">
                                    <div className="col-11 home-statistics-item one">
                                        <h1 className='text-center mt-2 anim-inc-num'>678</h1>
                                        <h5 className='text-center'>Events</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="container">
                                <div className="row justify-content-center align-items-center home-statistics-row">
                                    <div className="col-10 home-statistics-item two">
                                        <h1 className='text-center mt-2 anim-inc-num'>678</h1>
                                        <h5 className='text-center'>Members</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="container">
                                <div className="row justify-content-center align-items-center home-statistics-row">
                                    <div className="col-10 home-statistics-item three">
                                        <h1 className='text-center mt-2 anim-inc-num' datastart="1000">2020</h1>
                                        <h5 className='text-center'>Since</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="container">
                                <div className="row justify-content-center align-items-center home-statistics-row">
                                    <div className="col-10 home-statistics-item four">
                                        <h1 className='text-center mt-2 anim-inc-num'>678</h1>
                                        <h5 className='text-center'>Events</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div id="services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header">
                                <span>What We Do</span>
                                <h2>What We Do</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <ImageCard
                                img="/img/home/team_workshop.svg"
                                title="Workshops"
                                body="GMRIT-ACM and ACM-W hosts interactive technical workshops and events that helps foster innovation and sharpen skills. We at GMRIT ACM and ACM-W, think of ways to make the world a better place by being the change we want to see."
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <ImageCard
                                img="/img/home/team_sig.svg"
                                title="SIG's"
                                body="Special Interest Groups are constituted for sustainable career which help the students to succeed in attaining career goals.The members of a SIG help their successors in learning contemporary technologies that strengthen competency."
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <ImageCard
                                img="/img/home/team_code.svg"
                                title="Codeathons"
                                body="Code Anytime, an initiative augmented by GMRIT ACM and ACM-W in an effort to develop a coding culture within campus. An environment where everyone is provided with the opportunity to code, learn and grow."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home