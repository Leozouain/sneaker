import React, { useState } from 'react';

const ContactUs = () => {
  

  return (
    <>
         <img
          className="container-fluid"
          src="https://source.unsplash.com/random/1800x800/?sneakerhead/"
          alt=""
        />
        <h1 className="h1 fw-bolder pt-3">Contact Us</h1>
        <hr className="pb-5" />
        <p className="h3 text-wrap text-start lh-base">

We'd love to hear from you! Whether you have a question about an order, a suggestion for our website, or just want to say hi, please don't hesitate to get in touch.
<br/>
Email: info@sneakers.com<br/>
Phone: (555) 555-5555<br/>
<br/>
Follow us on social media for the latest updates and sneak peeks:
<br/>Facebook: @sneakers
<br/>Instagram: @sneakers
<br/>witter: @sneakers

<br/>For inquiries about returns or exchanges, please check out our Return Policy.

<br/>Thank you for choosing Logo Sneakers!
        </p>
        

        
    </>
  );
};

export default ContactUs;