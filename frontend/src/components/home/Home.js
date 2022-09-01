import React, { useEffect } from 'react'

const Home = () => {
    const animate = e => {
        let valueDisplays = document.querySelectorAll('.anim-inc-num');
        valueDisplays.forEach(valueDisplay => {
            let startValue = parseInt(valueDisplay.getAttribute('datastart')) || 0;
            let endValue = parseInt(valueDisplay.textContent);
            let duration = parseInt(valueDisplay.getAttribute('dataduration')) || 3000;

            let interval = Math.floor(duration / (endValue - startValue));

            let counter = setInterval(() => {
                if (startValue < endValue) {
                    valueDisplay.textContent = ++startValue;
                } else {
                    clearInterval(counter);
                }
            }, interval);
        });
    }

    useEffect(() => {
        animate();
    }, []);

    return (
        <>
            <div className="home-landing-img">
                <div className="mask"></div>
                <div className="landing-text">
                    <h1>Welcome to</h1>
                    <h1>ACM Women </h1>
                    <h1>Student Chapter</h1>
                    <h5 className='text-center'>🚧 Under Development 👩🏻‍💻🚧</h5>
                </div>
            </div>
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
        </>
    )
}

export default Home