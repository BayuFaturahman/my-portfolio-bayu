import React, { useRef, useCallback, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
// styles
import '/src/styles/contacts.css';

// ----------------------------------------------------------------------

const HomeContact: React.FC = () => {
  const form = useRef<null | HTMLFormElement>(null);

  const sendEmail = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (form.current) emailjs.sendForm('service_kpzxgqz', 'template_kk9ipl8', form.current, 'uKELRhBOpArKOozDJ');

      e.currentTarget.reset();
    },
    [form]
  );

  return (
    <section id="contacts">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="contact__container container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>bayu.faturahman8@gmail.com</h5>
            <a href="mailto:bayu.faturahman8@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required /> {/* client side validation */}
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows={7} placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default HomeContact;
