import React, { useEffect, useRef, useState } from 'react'
import HomeStartupImage from './HomeStartupImage.jsx'
import './HomeTab.css'
import CommunionSection from './CommunionSection.jsx';
import JoinConversation from './JoinConversation.jsx';
import EventsSection from './EventsSection.jsx';

const HomeTab = () => {

  const [canCirclesMove, setCanCirclesMove] = useState(false);
  const [canTextsMove, setCanTextsMove] = useState(false);

  const boxTopLeftRef = useRef(null);
  const boxTopRightRef = useRef(null);
  const boxBottomLeftRef = useRef(null);
  const boxBottomRightRef = useRef(null);

  useEffect(()=>{
    console.log(boxTopLeftRef)

    setTimeout(() => {
      setCanCirclesMove(true);
    }, 1000);

    setTimeout(() => {
      setCanTextsMove(true);
    }, 1000);

  }, [])

  return (
    <>
      <div className='set-image-background-body'>
        <div className='grid-container-parent'>
         <div className='grid-box-container'>
         

          <div className={`box corner-boxes box-top-left ${canCirclesMove ? 'active' : 'inactive'}`} ref={boxTopLeftRef}>
           
            <HomeStartupImage 
              imageSrc="th.jpg" 
              imageTitle="Unite"
            />
          </div>

          <div className='box'>
           
          </div>

          <div className={`box corner-boxes box-top-right ${canCirclesMove ? 'active' : 'inactive'}`} ref={boxTopRightRef}>
            <HomeStartupImage
              imageSrc="Innovate.jpg" 
              imageTitle="Innovate"
            />
          </div>

          <div className={`box box-texts box-texts-connect ${canTextsMove ? 'active' : 'inactive'}`}>
            <div className='connect-child-text connect-communities-both'>
              <p>
                <div className={`${canTextsMove ? 'active' : 'inactive'}`}>Connect'With</div>
              </p>
            </div>     
          </div>

          <div className={`box box-center ${canCirclesMove ? 'active' : 'inactive'}`} style={{
            
          }}>
            <HomeStartupImage 
              imageSrc="th3.jpg" 
              imageTitle="Connect"
            />
          </div>

          <div className={`box box-texts box-texts-communities ${canTextsMove ? 'active' : 'inactive'}`}>
            <div className='communities-child-text connect-communities-both'>
              <p>
                <div className={`${canTextsMove ? 'active' : 'inactive'}`}>Communities</div>
              </p>
            </div>
          </div>

          <div className={`box corner-boxes box-bottom-left ${canCirclesMove ? 'active' : 'inactive'}`}
            ref={boxBottomLeftRef} >
            <HomeStartupImage 
              imageSrc="th2.jpg" 
              imageTitle="Inspires Together"
            />
          </div>

          <div className='box'></div>

          <div className={`box corner-boxes box-bottom-right ${canCirclesMove ? 'active' : 'inactive'}`}
           ref={boxBottomRightRef} 
           style={{
             width: '120px',
             height: '120px',
             
          }}>
            <HomeStartupImage 
              imageSrc="Inspires.jpg" 
              imageTitle="+8 Peoples"
            />
          </div>

         </div> 
         
        </div>
        <center> 
        <div className='unlimited-advantage-image'> <img src="unlimitedAdvantages.png"/> </div>
       
         <h4 className='bridging-gap-text'>  Bridging gaps between faiths with tech and a dash of fun!</h4>
        </center>
      </div>
      <EventsSection />
      <CommunionSection />
      <JoinConversation />
     
    </>
  )
}

export default HomeTab