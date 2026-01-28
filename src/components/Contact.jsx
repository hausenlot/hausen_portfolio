
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import githubSvg from '/assets/github.svg';
import linkedinSvg from '/assets/linkedin.svg';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xmj8xqg', 'template_cg9u5nm', form.current, 'rAagqMof4QBT_39DR')
            .then((result) => {
                alert('Message sent successfully!');
                window.location.reload();
            }, (error) => {
                alert('Failed to send message.');
            });
    };

    return (
        <div className="contact-container">
            <div className="box box-14 "> {/* Personal Contact */}
                <div className="box-container flex flex-col justify-center items-center">
                    <span className="text-xs">petrehausen@gmail.com</span>
                    <span className="highlight text-base">+63 976 342 6870</span>
                </div>
            </div>
            <div className="box box-15 flex flex-col gap-2 justify-center items-center"> {/* github profile */}
                <a href="https://github.com/hausenlot" target="_blank" rel="noopener noreferrer">
                    <img src={githubSvg} className="w-16 h-auto" alt="github icon" />
                </a>
                <span className="text-base">Github Profile</span>
            </div>
            <div className="box box-16 flex flex-col justify-center items-center"> {/* A big linkedin button */}
                <a href="https://www.linkedin.com/in/hauzn" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinSvg} className="w-8 h-auto" alt="linkedin icon" />
                </a>
            </div>
            <div className="relative rounded-lg box-17 flex flex-col justify-center items-center"> {/* Label  */}
                <span className="font-semibold text-sm">Hire me please~</span>
            </div>
            <div className="box-18"> {/* Contact Box  */}
                <form ref={form} onSubmit={sendEmail} className="grid h-full grid-cols-1 grid-rows-5 gap-1">
                    <input type="text" name="from_name" placeholder="Your name or nickname" required className="col-start-1 row-start-1 row-span-1 rounded-lg bg-surface px-2" />
                    <input type="email" name="email_id" placeholder="Your email address" required className="col-start-1 row-start-2 row-span-1 rounded-lg bg-surface px-2" />
                    <textarea name="message" placeholder="Please write your message" required className="col-start-1 row-start-3 row-span-2 rounded-lg bg-surface px-2"></textarea>
                    <button type="submit" className="text-white rounded-lg col-start-1 row-start-5 row-span-1 bg-accent">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
