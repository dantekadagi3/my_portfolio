import PropTypes from 'prop-types';
import '../Styles/contact.css';

function Contactinfo({ icon, text1, text2 }) {
  return (
    <div className="icon--text">
      <div className="icon--img">
        <img src={icon} alt="iconimage"  />
      </div>
      <div className="texts">
        <p className='text'>{text1}</p>
        <p className='text'>{text2}</p>
      </div>
    </div>
  );
}


Contactinfo.propTypes = {
  icon: PropTypes.string.isRequired, 
  text1: PropTypes.string.isRequired, 
  text2: PropTypes.string, 
};


Contactinfo.defaultProps = {
  text2: '', 
};

export default Contactinfo;
