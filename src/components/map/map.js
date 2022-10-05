import React from 'react';
import './map.css'

const Map = () => {
    return (
        <div className='div-map'>
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1596.3912620426715!2d10.17019077435551!3d36.84768416354779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd359f19cff1a1%3A0x71a7d4d04a5b1ef2!2sGOMYCODE%20Menzah%205!5e0!3m2!1sen!2stn!4v1663634867562!5m2!1sen!2stn" 
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default Map;