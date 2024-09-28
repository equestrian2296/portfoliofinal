import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Recipient Name', // Change this to the recipient's name
      from_name: form.current.name.value,
      email_id: form.current.email.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
    };

    emailjs
      .send('Portfolio', 'template_o153ns9', templateParams, 'jYcRnmYuXBHi42svS') // Replace 'YOUR_USER_ID' with your actual user ID
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('Failed to send the message, please try again.');
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>Feel free to reach out for any inquiries or collaborations!</p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input placeholder="Email" type="email" name="email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
