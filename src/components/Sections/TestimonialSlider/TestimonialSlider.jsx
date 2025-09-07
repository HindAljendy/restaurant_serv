import React, { useState } from 'react'
import './TestimonialSlider.css'
import SmallTitle from '../../SmallTitle/SmallTitle'
import TitleSection from '../../TitleSection/TitleSection'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialPersons from '../../../data/testimonialPersons';
import SliderBox from '../../SliderBox/SliderBox';



const TestimonialSlider = () => {
    const [centerIndex, setCenterIndex] = useState(0);



    var settings = {
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000, 
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        
        centerMode: true,
        centerPadding: '0px', // important
        afterChange: (current) => setCenterIndex(current),   // update center index
    };


    return (
        <div className="section-container">
            <div className='section testimonial-slider page'>
                <div className='heading-section'>
                    <SmallTitle small_title=" Testimonial" />
                    <TitleSection title=" What Our Customers says!" />
                </div>

                <div className="content">
                    <Slider {...settings}>
                        {
                            testimonialPersons.map((person, index) => {
                                return (
                                    <SliderBox
                                        key={person.id}
                                        img={person.image}
                                        client_name={person.name}
                                        profes={person.profession}
                                        long_text={person.text}
                                        isActive={index === centerIndex} // تمرير الحالة
                                    />
                                );
                            })
                        }

                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSlider