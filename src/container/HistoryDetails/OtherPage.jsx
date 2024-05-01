import React from 'react';
import image from '../../assets/gallefort.png'; // Import the image
import "./OtherPage.css";

const OtherPage = () => {
  return (
    <div className="container">
      <h1 className="heading">Galle Fort: A Historic Landmark</h1>
      <div className="image-container">
        <img src={image.gallefort} alt="Galle Fort" className="gallefort" />
      </div>
      <p className="paragraph">Galle, a historic port city in Sri Lanka, has a rich history dating back to Ptolemy's world map of 125–150 CE, where it was a bustling port trading with Greece, Arab countries, China, and others. Mentioned as a "port of call of the Levant" in Cosmas Indicopleustes' cosmography, Galle's history took a significant turn with the arrival of the Portuguese in 1505. They built the Galle Fort in 1541, which later served as a prison camp for Sinhalese natives who opposed the Portuguese. In 1588, after being attacked by the Sinhalese King Raja Singha I, the Portuguese returned to Galle, where they fortified the fort with a watchtower and bastions.</p>
      
      <p className="paragraph">The Dutch entered the scene in 1640, joining forces with King Rajasinhe II to capture the Galle Fort from the Portuguese. Under Dutch rule, the fort underwent significant development in the Dutch architectural style, with fortifications added up to the early 18th century. The fort complex included public administration buildings, warehouses, business houses, and residential quarters. A Protestant church in baroque style was also built in 1775.</p>
      
      <p className="paragraph">The British took control of the fort in 1796 and made further modifications, including closing the moat, building houses, and a lighthouse. The fort remained the British southern headquarters, and during the Second World War, additional fortifications were added for defense. Despite the changes made over the centuries, the Galle Fort remains a unique monument complex, blending European architecture with South Asian traditions, making it the best example of a fortified city built by Europeans in South and Southeast Asia.</p>
    </div>
  );
};

export default OtherPage;
