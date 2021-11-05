import React from 'react'

const Booking = () => {
    return (
        <form className="booking" id="booking">
            <h3>Book a table</h3>
            <input type="hidden" name="_subject" value="Email from your website" />
            <input type="text" id="name" name="Sender's name" placeholder="Your name..." required />
            <input type="email" id="email-id" name="Sender's email ID" placeholder="Your email ID..." required />
            <textarea name="Sender's message" id="message" cols="30" rows="10" placeholder="Your message..." required></textarea>
            <a href="#">
                <button type="submit" id="send-message">Send request</button>
            </a>
            <a className="modal-close" href="#">x</a>
        </form>
    )
}

export default Booking
