import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import '../../../node_modules/slick-carousel/slick/slick.css'
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Scroll from '../scrollArrow/index'
import './index.scss'

export const Home = () => {
    const [value, setValue] = useState('');

    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: "linear",
        pauseOnHover: false,
        width: 100
    };
    const height = {
        width: `${100}%`
    }

    const onScroll = (value) => {
        setValue(value)
    }
    const handleScroll = () => {
        let scrollHieght = window.scrollY;
        if (scrollHieght > 70) {
            onScroll(true);
        }
        else {
            onScroll(false)
        }
    }
    useEffect(function () {
        window.addEventListener('scroll', handleScroll);
    })

    const onScrollToTop = () => {
        var scrollStep = -10
        var scrollInterval = setInterval(function () {
            if (window.scrollY != 0) {
                window.scrollBy(0, scrollStep);
            }
            else clearInterval(scrollInterval);
        }, 15);
    }
    
    return (
        <div>
            <Scroll onScroll={value} onScrollToTop={onScrollToTop} />
            <Slider {...settings}>
                <div>
                    <img src={"../../../src/asset/image/folder-01.jpg"} style={height} />
                </div>
                <div>
                    <img src={"../../../src/asset/image/folder-02.jpg"} style={height} />
                </div>
                <div>
                    <img src={"../../../src/asset/image/ads-min (2).png"} style={height} />
                </div>
                <div>
                    <img src={"../../../src/asset/image//folder-01.jpg"} style={height} />
                </div>
                <div>
                    <img src={"../../../src/asset/image/ads-min (1).png"} style={height} />
                </div>
                <div>
                    <img src={"../../../src/asset/image/ads-min (2).png"} style={height} />
                </div>
            </Slider>
        </div>
    );
}
