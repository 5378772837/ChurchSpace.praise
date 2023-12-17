import React from 'react';
import '../../css/reusables/homeimages.css';

class HomeImages extends React.Component {
  render() {
    const homeImages = [
      { description: 'Background 1', url: 'https://example.com/image1.jpg' },
      { description: 'Background 2', url: 'https://example.com/image2.jpg' },
      // Add more images here if needed
    ];

    return (
      <div>
        {homeImages.map((image, index) => (
          <div
            key={index}
            className="home-image"
            style={{ backgroundImage: `url(${image.url})` }}
          >
            {image.description}
          </div>
        ))}
      </div>
    );
  }
}

export default HomeImages;
