import React from 'react';
import ReactDOM from 'react-dom';
import "./Home.css"

const Home = () => {
    return (
        <section id="home" >

            <div className="row">

                <div className="three columns">

                </div>
                <div className="About Me">

                    <h2>About Me</h2>
                    <p>123</p>

                    <div className="row">


                        <img className="profile-pic" src="https://mattfarley.ca/img/mf-avatar.svg" alt="" />

                        <img className="bottom-pic" src="https://mattfarley.ca/img/hero-devices.svg" />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;

