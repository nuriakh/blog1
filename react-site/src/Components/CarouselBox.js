import React, {Component} from "react"
import Carousel from 'react-bootstrap/Carousel'

import goryImg from '../assets/gory.jpeg';
import ozeroImg from '../assets/ozero.jpeg';

export default class CarouselBox extends Component{
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                     className = 'd-block w-100'
                     src={goryImg} 
                     alt= "Gory"

                     />
                     <Carousel.Caption>
                        <h3>Gory image</h3>
                        <p>This is text about image</p>
                     </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                     className = 'd-block w-100'
                     src={ozeroImg}
                     alt= "ozero"

                     />

                     <Carousel.Caption>
                        <h3>Ozero image</h3>
                        <p>This is text about lake</p>
                     </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        )
    }
}