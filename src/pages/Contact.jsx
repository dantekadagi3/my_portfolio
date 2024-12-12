import Contactinfo from '../components/Contactinfo';
import '../Styles/contact.css';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';


function Contact() {
  return (
    <section className="contact-section">
      <div>
        <h1>Contact Me</h1>
        <hr />
      </div>
      <div className="bottom">
      <div className="left">
        <Contactinfo
          icon={phone}
          text1="+254757700920"
          text2="+254720403002"
          className="information"
        />
        <Contactinfo
          icon={mail}
          text1="dantekadagi3@gmail.com"
          text2="kadagidante3@gmail.com"
          className="information"
        />
      </div>

      <div className="right">
        <form>
          <div className="top">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
          </div>

          <div className="bottom">
            <textarea placeholder="Your message"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
</div>
      
    </section>
  );
}

export default Contact;
