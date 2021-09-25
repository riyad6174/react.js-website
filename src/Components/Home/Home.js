import React from 'react'
import style from './home.module.css'
export default function Home() {
    return (
        <div className={style.home}>
            <div className="homepage">
                <div className="homediv">
                    <div className="reactsign">
                        <h1>React</h1>
                    </div>

                    <p>A JavaScript library for building user interfaces</p>
                    <div className="btn">
                        <button>Get started</button>
                        <a href="#">Take The Tuitorial</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


