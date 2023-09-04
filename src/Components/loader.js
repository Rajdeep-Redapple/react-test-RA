import React from 'react';
import '../App.css';
import Lottie from "lottie-react";
import animationData from './loader.json';

const Loader = ({visible}) => {
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //         preserveAspectRatio: 'xMidYMid slice',
    //     },
    // };
    const classes = (visible) ? 'loader d-block' : 'loader d-none';
    return (
        <Lottie animationData={animationData} loop={true} className={classes}/>
    )
}

export default Loader;