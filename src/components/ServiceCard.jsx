// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../Styles/card.css';
import PropTypes from 'prop-types';

function Card({ icon, title, text }) {
    return (
        <div className="main--card">
            <div className="card--icon">
                <img src={icon} alt="This is an icon" />
            </div>
            <p className="card--title">{title}</p>
            <p className="card--text">{text}</p>
        </div>
    );
}

Card.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Card;