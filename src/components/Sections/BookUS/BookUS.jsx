import React, { useState } from 'react'
import './BookUS.css'
import bg_book from './../../../assets/background-site-book.jpg'
import SmallTitle from '../../SmallTitle/SmallTitle'
import TitleSection from '../../TitleSection/TitleSection'
import Button from '../../Button/Button'

const BookUS = () => {

    //! contact form by using web3form service  without backend:

    const [result, setResult] = useState("") // string

    const onSubmit_func = async (event) => {

        event.preventDefault();
        setResult("Sending ...");

        const formData = new FormData(event.target);
        formData.append("access_key", "2785a43d-f2b4-413a-8a5e-d8a2a38b0ac8");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        console.log(data);

        if (data.success) {
            console.log("Form Submitted Successfully", data.data);
            setResult("Form Submitted Successfully");

            /* Reset the data inputs */
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }

    return (
        <div className='section-container BookUS'>
            <div className="section book page">
                <div className='image'>
                    <img src={bg_book} alt="bg_book" />
                </div>

                <div className='book-form'>
                    <div className='heading-section'>
                        <SmallTitle small_title="Book Us" />
                        <TitleSection title="Where you want Our Services" />
                    </div>


                    <form onSubmit={onSubmit_func} className='form'>
                        <div className="inputs-form">
                            <div className='field'>

                                <select name="country">
                                    <option selected>Select Country</option>
                                    <option value="1">USA</option>
                                    <option value="2">UK</option>
                                    <option value="3">India</option>
                                </select>
                            </div>
                            <div className='field'>
                                <select name="city" >
                                    <option selected>Select City</option>
                                    <option value="1">Depend On Country</option>
                                    <option value="2">UK</option>
                                    <option value="3">India</option>
                                </select>

                            </div>
                            <div className='field'>
                                <select name="place" >
                                    <option selected>Select Place</option>
                                    <option value="1">Depend On Country</option>
                                    <option value="2">UK</option>
                                    <option value="3">India</option>
                                </select>
                            </div>

                            <div className='field'>
                                <select name="small_event" >
                                    <option selected>Small Event</option>
                                    <option value="1">Event Type</option>
                                    <option value="2">Big Event</option>
                                    <option value="3">Small Event</option>
                                </select>
                            </div>
                            <div className='field'>
                                <select name="No_place" >
                                    <option selected>No. Of Place</option>
                                    <option value="1">100-200</option>
                                    <option value="2">300-400</option>
                                    <option value="3">500-600</option>
                                    <option value="4">700-800</option>
                                    <option value="5">900-1000</option>
                                    <option value="6">1000+</option>
                                </select>

                            </div>
                            <div className='field'>
                                <select name="vegetarian" >
                                    <option selected>Vegetarian</option>
                                    <option value="1">Non Vegetarian</option>
                                </select>

                            </div>

                            <div className='field'>
                                <input type="tel" name="phone" placeholder='Your Contact No.' />
                            </div>
                            <div className='field'>
                                <input type="date" name="date" />

                            </div>
                            <div className='field'>
                                <input type="email" name="email" placeholder='Enter Your Email' />

                            </div>
                        </div>

                        <div className='submit'>
                            <input type="submit" value="Submit Now" className='button' />
                        </div>

                    </form>

                </div>

                <div className='image'>
                    <img src={bg_book} alt="bg_book" />
                </div>
            </div>
        </div>
    )
}

export default BookUS