import React, { useState, useEffect } from 'react';
import '../../css/pages/home.css';
import '../../css/reusables/positions.css';

function Home(props) {

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://www.gty.org/media/FeatureSlideImages/ResponsibilityAndReward.jpg',
    'https://www.gty.org/media/FeatureSlideImages/SalvationSurvey_1920x938.jpg',
    'https://images.squarespace-cdn.com/content/v1/5a2329482278e7efd892db43/1628975113144-YPS4GFSHZ3P7PFJQDUVG/Crossroads-2.jpg',
    'https://storage2.snappages.site/9VSNQ6/assets/images/10388256_1080x1080_500.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImage = (currentImage + 1) % images.length;
      setCurrentImage(nextImage);
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentImage, images.length]);

  return (
    <div className='flex-col background fill center'>
      <div className='message-col justify-content-center'>
        <div className='flex-row center xl'>Welcome to our Church Space!</div>
        <div className='flex-row center large'>A site dedicated solely to members of our church!</div>
      </div>
      <div className='body-row fill'>
        <div className='welcome-box'>
          <img className='welcome-box'src={images[currentImage]} alt='Image'/>
        </div>
      </div>
    </div>
  );
}

export default Home;
