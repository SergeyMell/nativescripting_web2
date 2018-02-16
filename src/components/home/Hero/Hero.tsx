import * as React from "react";
import ActionButton from "../../ActionButton/ActionButton";

import './Hero.css';


function Hero() {


    return (
        <div className="hero">
            <div className="hero-content">
                <div className="wrapper">
                    <h2 className="hero-main-title">Turn up your NativeScript training</h2>
                    <p>
                        Upgrade your skills with online courses so you can master the NativeScript framework and build real world native mobile apps using your existing web development skills.
                    </p>

                    <p className="bundle-notice">
                        Get ultra-discounted <a href="#specials">course bundles</a> for a limited time.
                    </p>
                </div>
            </div>
            <div className="hero-overlay"></div>

        </div>
    );
}

export default Hero;