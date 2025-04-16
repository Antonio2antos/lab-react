import React from 'react';
import profiles from '../assets/berlin.json';

function Facebook() {
  return (
    <div>
      {profiles.map((profile, index) => {
        
        const { img, firstName, lastName, country, isStudent } = profile;

        
        return (
          <div key={index} className="profile" style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', width: '300px' }}>
            <img 
              src={img} 
              alt={`${firstName} ${lastName}`} 
              style={{ width: '50px', height: '50px', borderRadius: '50%', marginBottom: '10px' }} 
            />
            <h3>{`Name: ${firstName} ${lastName}`}</h3>
            <h4>{`Country: ${country}`}</h4>
            <h4>{`Type: ${isStudent ? 'Student' : 'Teacher'}`}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Facebook;
