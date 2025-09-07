import React from 'react'
import './ContactForm.css'
import SmallTitle from '../../SmallTitle/SmallTitle'
import TitleSection from '../../TitleSection/TitleSection'
import ContactInfo from '../../ContactInfo/ContactInfo'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const ContactForm = () => {

    //! contact form by using web3form service  without backend:

    const onSubmit_func = async (event) => {

        event.preventDefault();

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
            
            /* Reset the data inputs */
            event.target.reset();
        } else {
            console.log("Error", data.message);
        }
    }
    return (
        <div className='section-container'>
            <div className="section contact-form page">
                <SmallTitle small_title="Get in touch" />
                <TitleSection title="Contact Us For Any Queries!" />
                <div className="All-parts">
                    <div className="part-one">
                        <p>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes.
                            Just copy and paste the files, add a little code and you're done.
                        </p>

                        <form onSubmit={onSubmit_func}>
                            <input type="text" name="name" placeholder='Your Name' required />
                            <input type="text" name="email" placeholder='Enter Your Email' required />
                            <textarea name="message" rows="4" cols="10" placeholder='Your Message' required></textarea>

                            <input type="submit" value="Submit Now" className='button' />
                        </form>
                    </div>
                    <div className="part-two">
                        <ContactInfo
                            icon={<FaMapMarkerAlt />}
                            title="Address"
                            text1="123 Street, New York, USA"
                        />
                        <ContactInfo
                            icon={<FaEnvelope />}
                            title="Mail Us"
                            text1="info@example.com"
                            text2="support@example.com"
                        />
                        <ContactInfo
                            icon={<FaPhoneAlt />}
                            title="Telephone"
                            text1="(+012) 3456 7890 123"
                            text2="(+704) 5555 0127 296"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactForm
