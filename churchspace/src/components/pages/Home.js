import React, { useState, useEffect } from 'react';
import '../../css/pages/home.css';
import '../../css/reusables/positions.css';

function Home(props) {

  const [currentImage, setCurrentImage] = useState(0);
  const [images,setImages] = useState([
    'https://www.gty.org/media/FeatureSlideImages/ResponsibilityAndReward.jpg',
    'https://www.gty.org/media/FeatureSlideImages/SalvationSurvey_1920x938.jpg',
    'https://images.squarespace-cdn.com/content/v1/5a2329482278e7efd892db43/1628975113144-YPS4GFSHZ3P7PFJQDUVG/Crossroads-2.jpg',
    'https://storage2.snappages.site/9VSNQ6/assets/images/10388256_1080x1080_500.jpg'
  ]);

  const [homeVideo, setHomeVideo] = useState({
    src:"https://cdn.subsplash.com/videos/9VSNQ6/_source/fbc67526-f96a-4f08-af9a-34d53cc92eb1/video.mp4",
    type: "video/mp4"
  }
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImage = (currentImage + 1) % images.length;
      setCurrentImage(nextImage);
    }, 4000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentImage, images.length]);

  return (
    <div className='flex-row background fill center'>
    <div className='flex-col background fill center'>
    <div className='flex-row full-width'>
            <video autoPlay loop muted>
            <source src={homeVideo.src}type={homeVideo.type}/>
            Your browser does not support the video tag.
          </video>
        </div>
      <div className='body-row'>
        <div className='flex-row full-width'>
        <div className='welcome-box'>
          <img className = "welcome-images"
          src={images[currentImage]} alt='Image'/>
          </div>
      </div>
      </div>
      <div className='message-row justify-content-center xl'>Welcome to our Church Space!</div>
    </div>
    </div>
  
    )
}

export default Home;
