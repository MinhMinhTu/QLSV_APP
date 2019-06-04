import React, { Component } from "react";
import Slider from "react-slick";

import '../../../node_modules/slick-carousel/slick/slick.css'
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Scroll from '../scrollArrow/index'

import './index.scss'

export default class SimpleSlider extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : ''
        }
    }
    onScroll=(value)=>{
        this.setState({
            value: value
        })
    }
    handleScroll=()=>{
            let scrollHieght = window.scrollY;
            console.log(scrollHieght)
            if (scrollHieght > 70) {
                this.onScroll(true);
            }
            else{
                this.onScroll(false)
            }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    onScrollToTop=()=>{
        var scrollStep = -10    
        var scrollInterval = setInterval(function () {
                if (window.scrollY != 0) {
                    window.scrollBy(0, scrollStep);
                }
                else clearInterval(scrollInterval);
            }, 15);
    }
    render() {
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
        return (
            <div>
                <Scroll onScroll={this.state.value} onScrollToTop={this.onScrollToTop}/>
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
}
