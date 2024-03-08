import React from 'react';
import image from '../../assets/award01.png'; // Import the image

const OtherPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Other Page</h1>
      <img src={image} alt="Other Page" style={{ width: '200px', height: '200px' }} /> {/* Display the image */}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> {/* Add some paragraphs */}
      <p>Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
    </div>
  );
};

export default OtherPage;